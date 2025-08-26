---
title: Xnode Manager Auth Decoupling
date: June 23, 2025
order: 25-06-23
---

- Removed built-in auth from [Xnode Manager](https://github.com/Openmesh-Network/xnode-manager)
- Default auth used by XnodeOS is the new [Xnode Auth](https://github.com/Openmesh-Network/xnode-auth)
- Xnode Auth allows for unified access control to all apps running on XnodeOS
- Xnode Manager can now also be used through different authentication layers, including custom implementations
