---
title: Xnode Manager App GPUs
date: August 08, 2025
order: 25-08-08
type: engineering
---

- [Xnode Manager](https://github.com/Openmesh-Network/xnode-manager) now allows per container access control to NVIDIA GPUs
- Specify the nvidia_gpus array in set container settings with the ids (/dev/nvidia{id}) of the NVIDIA GPUs you'd like to be accessible inside this container
