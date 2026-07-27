---
title: nixos-images
summary: A custom NixOS installer ISO with my keys and tools already in it, built in CI on every release.
order: 4
year: "2026"
tech: ["Nix", "CI", "NixOS"]
repo: "https://github.com/ItzEmoji/nixos-images"
status: "maintained"
---

A custom NixOS installer image. Setting up a new machine takes minutes instead of
an evening. My public key, the tools I always need, and my defaults are declared
in the image.

## Using it

CI builds the image and attaches it to the latest release. Fetch it and flash it:

```bash
wget https://github.com/ItzEmoji/nixos-images/releases/latest/download/nixos-installer.iso
dd if=nixos-installer.iso of=/dev/sdX
```

That is the whole thing. The live environment already trusts my SSH key, so I can
drive the rest of the install from another machine.

It is made to be forked. Change the username and repo references and CI builds an
image with your keys instead of mine.
