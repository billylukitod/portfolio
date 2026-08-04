---
title: "My First ROS 2 SLAM Workflow in Gazebo"
summary: "A step-by-step walkthrough of setting up SLAM with Nav2 and slam_toolbox in a Gazebo simulation environment using ROS 2."
publishedAt: 2025-02-20
tags:
  - ROS 2
  - SLAM
  - Gazebo
  - Navigation
draft: false
---
> **Note:** This is a placeholder technical note. Replace with your own content.

Building a map of an unknown environment is often the first "wow" moment when learning ROS. In ROS 2, the standard tools for this are Gazebo for simulation and `slam_toolbox` for the actual Simultaneous Localization and Mapping (SLAM) algorithm. Here is a walkthrough of my first successful SLAM workflow using these tools.

### Prerequisites and Setup

Before starting, ensure you have a ROS 2 distribution (like Humble) installed along with the necessary packages. You will need Gazebo Classic (or Ignition/Gazebo Sim depending on your ROS version), `nav2`, and `slam_toolbox`.

```bash
sudo apt install ros-humble-gazebo-ros-pkgs ros-humble-navigation2 ros-humble-nav2-bringup ros-humble-slam-toolbox
```

I used a basic two-wheeled differential drive robot model with a 2D LiDAR scanner for this simulation. The URDF (Unified Robot Description Format) file needs to include the Gazebo plugins for differential drive control and laser scanning.

### Launching the Simulation Environment

The first step is to spawn the robot into a simulated world. Gazebo provides a few default worlds, or you can create your own with walls and obstacles for the robot to map.

```bash
ros2 launch my_robot_bringup my_robot_gazebo.launch.py world:=my_custom_world.world
```

Once Gazebo is running, you should be able to see the robot model. More importantly, checking `ros2 topic list` should confirm that the `/scan` (LiDAR data) and `/odom` (odometry) topics are active and being published to by the Gazebo plugins.

### Starting SLAM Toolbox

With the sensor data flowing, the next step is to launch `slam_toolbox`. This package takes the odometry and laser scan data to build a 2D occupancy grid map while simultaneously estimating the robot's pose within that map.

```bash
ros2 launch slam_toolbox online_async_launch.py params_file:=./mapper_params_online_async.yaml use_sim_time:=true
```

*Crucial step:* Always remember to set `use_sim_time:=true` when working with Gazebo! This ensures that all nodes synchronize their clocks with the simulation time rather than the system wall clock.

### Mapping the Environment

To map the environment, the robot needs to move around and "see" the walls with its LiDAR. The easiest way to do this manually is with a teleoperation node.

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```

As you drive the robot around using the keyboard, you can open RViz2 to visualize the map being built in real-time. Add the `Map` display type in RViz and subscribe it to the `/map` topic. You will see the black pixels (obstacles), white pixels (free space), and grey pixels (unknown space) filling in as the robot explores.

### Saving the Generated Map

Once you are satisfied with the completeness of the map, you need to save it to disk before shutting down the SLAM node. The `nav2_map_server` provides a utility to serialize the map to a YAML and PGM image file.

```bash
ros2 run nav2_map_server map_saver_cli -f ~/my_robot_map
```

This command generates `my_robot_map.yaml` and `my_robot_map.pgm`. These files can now be loaded by the Nav2 AMCL (Adaptive Monte Carlo Localization) module to perform autonomous navigation in the known environment!
