---
title: nvim
summary: My Neovim config as a Nix flake. Plugins, LSP, and the editor version are all pinned.
order: 2
year: "2025—"
tech: ["Nix", "nvf", "Neovim"]
repo: "https://github.com/ItzEmoji/nvim"
status: "active"
---

A Neovim setup managed with [nvf](https://github.com/NotAShelf/nvf). Instead of
a folder of Lua files and lazy-loading scripts, the editor is Nix options.

## What that gives me

Nix fetches and hashes the plugins, so the editor is identical on every machine.
Language servers, formatters, and linters are Nix options too, so there is no
Mason and no second package manager inside the editor.

The Neovim version and every plugin commit are locked in `flake.lock`. A config
from six months ago still builds.

It builds on x86-64 and aarch64. CI keeps a cache warm so a new machine does not
compile everything.

## Try it

No cloning needed:

```bash
nix run github:ItzEmoji/nvim --accept-flake-config
```

That fetches the prebuilt config and starts it. It does not touch your setup.
