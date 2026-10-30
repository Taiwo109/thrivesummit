# How to get this into GitHub correctly

The last upload failed because the GitHub website drag-and-drop uploader
cannot handle this project. It has 208 files across 26 folders, and the
web uploader caps out at 100 files per commit. Files were silently
dropped, including src/router.tsx, which is why the build said
"Could not resolve entry for router entry: router".

Do NOT use the GitHub website upload box again. Use one of the two
methods below.

## Method A - GitHub Desktop (easiest, no terminal)

1. Install GitHub Desktop from desktop.github.com and sign in.
2. File > Clone repository > KhennyJacobs/Thrivesummitlovable.
3. Open the cloned folder on your computer.
4. Delete everything inside it except the hidden .git folder.
5. Copy ALL contents of this project folder into it (contents, not the
   folder itself). Include netlify.toml and .gitignore.
6. Back in GitHub Desktop, type a summary like "Full project upload",
   click Commit to main, then Push origin.

## Method B - Terminal

Run these from inside this project folder:

    git init
    git add -A
    git commit -m "Full Thrive Summit project"
    git branch -M main
    git remote add origin https://github.com/KhennyJacobs/Thrivesummitlovable.git
    git push -u origin main --force

## After pushing, verify before deploying

Open the repo on GitHub and confirm all of these exist:

  - src/router.tsx
  - src/routeTree.gen.ts
  - src/start.ts
  - src/server.ts
  - netlify.toml
  - src/routes/        (12 files)
  - src/components/ui/ (46 files)

If any are missing the upload is still incomplete. Do not deploy yet.

## Netlify settings

  Branch to deploy:    main
  Base directory:      (leave blank)
  Build command:       bun run build
  Publish directory:   dist
  Functions directory: (leave blank)

The publish directory is "dist". Not dist/client, not dist/public,
not .netlify/static. This build was run and verified.
