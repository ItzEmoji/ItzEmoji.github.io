---
title: nvim
summary: My Neovim configuration as a Nix flake — plugins, LSP, and the editor version all locked and reproducible.
order: 2
year: "2025—"
tech: ["Nix", "nvf", "Neovim"]
repo: "https://github.com/ItzEmoji/nvim"
status: "active"
---

A Neovim setup managed declaratively with [nvf](https://github.com/NotAShelf/nvf), the
Neovim flake. Instead of a directory of Lua files and lazy-loading shims, the whole editor
stack is expressed as Nix options.

## What that buys

Plugins are fetched and hashed by Nix, so the editor behaves identically on every machine
I put it on. Language servers, formatters, and linters are configured through the same Nix
options, which removes Mason and any other in-editor package manager from the picture.

Everything — the Neovim version itself, and the exact commit of every plugin — is pinned in
`flake.lock`. A configuration from six months ago still builds today.

It's built and tested on both **x86-64** and **aarch64**, and CI keeps a binary cache warm
so a fresh machine doesn't have to compile the world.

## Try it

You don't have to clone anything to see it:

```bash
nix run github:ItzEmoji/nvim --accept-flake-config
```

That fetches the prebuilt configuration and drops you straight into the editor, changing
nothing about your own setup.
