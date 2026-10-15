<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Host externally sourced event videos and supplied image media through Lovable Assets so the site has no embedded third-party player dependencies.
- Store speaker names and roles as structured content and render them as page text, keeping portrait assets free of baked-in labels for consistent quality and accessibility.
- Use SiteChrome for shared navigation and footer across event pages; major content destinations use distinct TanStack routes so active navigation and page metadata stay meaningful.
- Keep event countdown arithmetic in the browser-safe thrive-countdown utility with explicit UTC boundaries and tests; render clock values only after hydration to avoid mismatches.
- Preserve the existing interactive venue embed on the dedicated travel page; defer hosted montage loading until near the viewport and use native accessible media controls.
