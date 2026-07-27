---
title: Aeroflare
summary: A stateless Nix binary cache that stores packages as OCI images, so any container registry becomes a substituter.
order: 1
year: "2026"
tech: ["Go", "Nix", "OCI"]
repo: "https://github.com/ItzEmoji/aeroflare"
status: "active"
---

Running a Nix binary cache normally means running infrastructure: a server, a store,
somewhere to keep the metadata, and a bill at the end of the month. Aeroflare removes
that. It bridges the Nix ecosystem and ordinary container registries — GitHub Container
Registry, Docker Hub — and turns them into a binary substituter.

## How it works

Each package becomes one OCI image. The NAR blobs are the image layers, and the
`narinfo` metadata rides along as manifest annotations, which means there is no separate
metadata store to keep in sync with the artifacts.

Images are tagged directly with the 32-character Nix store path hash. A cache lookup is
therefore a single tag fetch rather than an index scan — O(1), and no index to build or
invalidate.

Nothing is kept locally. Aeroflare streams `.nar` blobs straight from the registry to the
client and retains zero binary state of its own.

## Using it

An interactive wizard handles the initial provisioning for GitHub, GitLab, and Cloudflare
Worker deployments:

```bash
nix run github:ItzEmoji/aeroflare -- init
```

Publishing accepts whatever you already have — a flake reference, a `./result` symlink, or
a bare store path. It builds the target first if it hasn't been built yet:

```bash
nix run github:ItzEmoji/aeroflare -- push ./result
nix run github:ItzEmoji/aeroflare -- push nixpkgs#hello
```

There is also a `run` wrapper that takes a build end to end, building and uploading in one
step.

## Why I built it

Everything else I work on is Nix, and all of it wants a cache. Paying for object storage
to hold build artifacts felt absurd when every registry I already had access to was
sitting there storing content-addressed blobs for a living. Writing it in Go kept the
binary small and the deployment story dull, which is what you want from infrastructure.
