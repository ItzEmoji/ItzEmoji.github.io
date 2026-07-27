---
title: Aeroflare
summary: A Nix binary cache that stores packages as OCI images, so any container registry works as a substituter.
order: 1
year: "2026"
tech: ["Go", "Nix", "OCI"]
repo: "https://github.com/ItzEmoji/aeroflare"
status: "active"
---

Running a Nix binary cache normally means running a server, a store, and a
metadata database. Aeroflare does not. It uses container registries instead, so
GitHub Container Registry or Docker Hub becomes your substituter.

## How it works

One package is one OCI image. The NAR blobs are the layers. The `narinfo` goes
in the manifest annotations. There is no separate metadata store to keep in sync.

Images are tagged with the 32-character Nix store hash. A lookup is one tag
fetch. No index to build, and nothing to invalidate.

Nothing is stored locally. Aeroflare streams `.nar` blobs from the registry to
the client and keeps no state.

## Using it

A wizard sets up GitHub, GitLab, or Cloudflare Worker deployments:

```bash
nix run github:ItzEmoji/aeroflare -- init
```

Push takes a flake reference, a `./result` symlink, or a store path. It builds
first if it needs to:

```bash
nix run github:ItzEmoji/aeroflare -- push ./result
nix run github:ItzEmoji/aeroflare -- push nixpkgs#hello
```

There is also a `run` wrapper that builds and uploads in one step.

## Why

Everything I build is Nix and all of it needs a cache. Paying for object storage
made no sense when registries already store content-addressed blobs for free. Go
keeps the binary small and the deployment boring.
