---
title: nixos-dotfiles
summary: My whole NixOS system in one flake. Desktop, services, packages, rebuilt with one command.
order: 3
year: "2025—"
tech: ["Nix", "Flakes", "NixOS"]
repo: "https://github.com/ItzEmoji/nixos-dotfiles"
status: "maintained"
---

My NixOS configuration, managed with [flakes](https://nixos.wiki/wiki/Flakes).
Every machine I run is described here: packages, services, desktop, user
environment.

## The point

The machine is disposable. Nothing lives in a state I would have to rebuild by
hand, because the config is the machine. Reinstalling is a clone and one command:

```bash
sudo nixos-rebuild switch --flake .#cyril-nixos
```

If a change breaks something, the last generation is still in the boot menu. That
is why I stopped being careful with my own system. There is no configuration
mistake I cannot undo.

This is also where most of what I learn ends up. Anything I want to try, I add
here first.
