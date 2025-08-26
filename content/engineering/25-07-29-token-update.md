---
title: OPENX Token Update
date: July 29, 2025
order: 25-07-29
---

The following contracts have been updated:

## OpenxAI (OPENX)

- Added ERC20 Votes (on-chain governance)

## OpenxAI Claimer

- Keeps track of total amount of tokens claimed instead of per-proof id
  - Reduces the possibility of double spending attacks
  - Reduces the complexity for the off-chain indexer
  - Improves the user experience of not having to deal with past un-redeemed claims

## OpenxAI Genesis

- Contributions are sent directly to the project treasury

You can check out the updated contracts yourself on [the GitHub](https://github.com/OpenxAI-Network/openxai-token/tree/main/src)
