---
title: Xnode Manager Unix Socket
date: July 28, 2025
order: 25-07-28
type: engineering
---

- [Xnode Manager](https://github.com/Openmesh-Network/xnode-manager) now listens on a unix socket (/var/lib/xnode-manager/socket) instead of a TCP port
- Unix socket allows for stricter access control restrictions to reduce the chance of accidental exposure
