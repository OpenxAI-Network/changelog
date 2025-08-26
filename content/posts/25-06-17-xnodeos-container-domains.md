---
title: XnodeOS Container Domains
date: June 17, 2025
order: 25-06-17
type: engineering
---

- XnodeOS will automatically issue {containerid}.container domains on the host DNS through DHCP leases
- These domains can be used for setting up reverse proxies to expose services running in a container
- Inter-container communication still uses multicast with .local domains
