---
title: nixos-dotfiles
summary: My entire NixOS system — desktop, services, and packages — described in one flake and rebuilt with a single command.
order: 3
year: "2025—"
tech: ["Nix", "Flakes", "NixOS"]
repo: "https://github.com/ItzEmoji/nixos-dotfiles"
status: "maintained"
---

My personal NixOS configuration, managed entirely with
[Nix Flakes](https://nixos.wiki/wiki/Flakes). Every machine I run is described here: the
packages, the services, the desktop, the user environment.

## The point of it

The machine is disposable. Nothing about my setup lives in a state I'd have to reconstruct
by hand, because the configuration *is* the machine. Reinstalling means cloning a
repository and running one command:

```bash
sudo nixos-rebuild switch --flake .#cyril-nixos
```

If a change breaks something, the previous generation is still on the boot menu. That
safety net is the reason I stopped being precious about experimenting with my own system —
there's no such thing as an unrecoverable configuration mistake anymore.

This is also the repository where most of what I learn ends up. Every service I get curious
about, I add here first.
