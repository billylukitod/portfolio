---
title: "Building Low-Latency Wearable Drone Controllers with FreeRTOS"
summary: "When translating human gestures into drone flight commands, latency and jitter are your worst enemies. Here is how FreeRTOS and UDP helped achieve 35ms latency."
publishedAt: 2026-08-01
tags:
  - ESP32
  - FreeRTOS
  - UAV
draft: false
---

For the SAFMC 2025 competition, our team developed a wearable device that allowed a user to control a drone using hand gestures. The core challenge in wearable robotics isn't just reading sensor data; it's getting that data to the actuators with absolute minimal latency.

If there is a noticeable delay between a pilot tilting their hand and the drone rolling, the system becomes uncontrollable.

## The RTOS Advantage

We chose the ESP32 paired with **FreeRTOS**. A bare-metal super-loop architecture (like standard Arduino code) processes tasks sequentially. If a Wi-Fi transmission takes 10ms, your IMU reading is delayed by 10ms. 

With FreeRTOS, we divided the workload into concurrent tasks with strict priorities:

1. **IMU Polling Task (Highest Priority):** Wakes up exactly every 5ms to read the I2C bus, ensuring highly deterministic sampling.
2. **Kinematics Task (Medium Priority):** Filters the raw data (using a Madgwick or Mahony filter) and translates quaternions into pitch/roll/yaw setpoints.
3. **Network Task (Lower Priority):** Packages the data and transmits it over Wi-Fi.

Because the ESP32 is dual-core, we pinned the high-priority sensor tasks to Core 1 and left the Wi-Fi stack and network transmission on Core 0. This hardware-level isolation drastically reduced jitter.

## Why UDP over TCP?

In drone control, old data is useless data. If a packet is lost in the air, you do not want the system to pause, request a retransmission, and then apply a 200ms-old control input. 

We used **UDP (User Datagram Protocol)** instead of TCP. UDP fires and forgets. If a packet drops, we simply ignore it and wait 5ms for the next one. This architectural choice brought our average end-to-end latency down from ~120ms to just 35ms.

## Bridging to the Flight Controller

On the receiving end (the drone), we used another ESP32 to catch the UDP packets and translate them into the **CRSF (Crossfire) protocol**. CRSF is a high-speed serial protocol widely used in FPV drones, allowing us to interface directly with standard Betaflight/INAV flight controllers without modifying their core firmware.
