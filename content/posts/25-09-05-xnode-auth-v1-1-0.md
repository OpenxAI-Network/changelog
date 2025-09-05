---
title: Xnode Auth v1.1.0
date: September 05, 2025
order: 25-09-05
type: engineering
---

- [Xnode Auth](https://github.com/Openmesh-Network/xnode-auth) v1.1.0 released to main branch
  - Access control can now be defined in external sources
    - OS set permission not needed anymore to update auth
    - Easier for custom applications to control (partial) auth
  - Filesystem and http(s) external source fetching support added
  - External sources should be restricted to mitigate external source breach from propagating
    - External source can be restricted to only control auth on select domains
    - Per source per domain rules on allowed users and paths
  - External sources can be updated through restarting the associated xnode-auth-source-update systemd unit
    - Allows for sub-second authentication updates, instead of up to a minute system rebuilds
