---
title: nixos-images
summary: A custom NixOS installer ISO with my keys and tools baked in, built automatically on every release.
order: 4
year: "2026"
tech: ["Nix", "CI", "NixOS"]
repo: "https://github.com/ItzEmoji/nixos-images"
status: "maintained"
---

A custom NixOS installer image, built so that setting up a new machine takes minutes
instead of an evening. My public key, the tools I always end up needing, and my preferred
defaults are all declared in the image itself.

## Using it

The image is built in CI and attached to the latest release, so installing means fetching
it and flashing it:

```bash
wget https://github.com/ItzEmoji/nixos-images/releases/latest/download/nixos-installer.iso
dd if=nixos-installer.iso of=/dev/sdX
```

That's the whole procedure. Booting the result gives me a live environment that already
trusts my SSH key, which means the rest of the install can be driven from another machine.

It's built to be forked — if you want your own, change the username and repository
references and the CI will produce an image with your keys instead of mine.
