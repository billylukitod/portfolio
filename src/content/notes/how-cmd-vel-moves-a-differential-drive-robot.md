---
title: "How cmd_vel Moves a Differential-Drive Robot"
summary: "Understanding the ROS velocity command interface and how twist messages translate into wheel speeds for a differential-drive mobile robot."
publishedAt: 2025-03-15
tags:
  - ROS
  - Robotics
  - Kinematics
draft: false
---
> **Note:** This is a placeholder technical note. Replace with your own content.

If you have ever used a standard ROS teleoperation package or ran the navigation stack, you have undoubtedly encountered the `/cmd_vel` topic. The messages published on this topic dictate the motion of a robot base, but how exactly does a generalized geometry-agnostic Twist message get translated into the physical wheel speeds of a differential-drive mobile robot?

### The Twist Message

In ROS, the geometry_msgs/Twist message contains two vectors:
- **Linear**: (x, y, z) components representing the translational velocity in meters per second (m/s).
- **Angular**: (x, y, z) components representing the rotational velocity in radians per second (rad/s).

For a typical non-holonomic ground robot (like a Roomba or a basic differential-drive chassis), we primarily care about two values:
- `linear.x`: The forward/backward velocity.
- `angular.z`: The rotational velocity around the vertical axis (yaw).

### Kinematics of a Differential Drive

A differential-drive robot has two independently driven wheels on a common axis. By varying the speeds of these two wheels, the robot can move in a straight line, turn, or spin in place. 

The relationship between the robot's overall velocity (v, $\omega$) and the wheel speeds ($v_L$, $v_R$) is governed by the track width ($L$), which is the distance between the two wheels.

To calculate the target velocities for the left and right wheels:
1. When moving straight, both wheels move at the same speed ($v_L = v_R = v$).
2. When turning, the outer wheel must spin faster than the inner wheel.

The formulas for the wheel velocities are:
$$ v_L = v - \frac{\omega \cdot L}{2} $$
$$ v_R = v + \frac{\omega \cdot L}{2} $$

Where:
- $v$ is `cmd_vel.linear.x`
- $\omega$ is `cmd_vel.angular.z`
- $L$ is the track width of the robot

### From Wheel Velocity to Motor Commands

Once you have the desired wheel velocities in meters per second, you need to translate this into something your motor controllers understand, typically RPM or a PWM signal. This involves knowing the wheel radius ($r$) and the gear ratio of your motors.

$$ \text{RPM} = \frac{v_{wheel} \cdot 60}{2 \cdot \pi \cdot r} $$

### Python Subscriber Example

Here is a simplified Python node that subscribes to `/cmd_vel` and calculates the left and right wheel velocities for a hypothetical motor driver:

```python
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist

class CmdVelToWheels(Node):
    def __init__(self):
        super().__init__('cmd_vel_to_wheels')
        self.subscription = self.create_subscription(
            Twist,
            '/cmd_vel',
            self.listener_callback,
            10)
        self.track_width = 0.5 # meters

    def listener_callback(self, msg):
        v = msg.linear.x
        w = msg.angular.z
        
        # Calculate left and right wheel velocities (m/s)
        v_left = v - (w * self.track_width / 2.0)
        v_right = v + (w * self.track_width / 2.0)
        
        self.get_logger().info(f"Target Wheel Speeds -> L: {v_left:.2f} m/s, R: {v_right:.2f} m/s")
        # In a real application, you would convert this to motor commands and send it to your hardware via serial/I2C

def main(args=None):
    rclpy.init(args=args)
    node = CmdVelToWheels()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

By understanding this fundamental layer of robot kinematics, you can adapt any generalized ROS velocity command interface to custom hardware, closing the loop between high-level navigation behaviors and low-level actuator control.
