# Social logo sources

Downloaded 2026-10-08. Website profile URLs are unchanged.

- Facebook, TikTok, Discord, Telegram, X: SVG geometry from [Simple Icons](https://github.com/simple-icons/simple-icons/tree/develop/icons), distributed under [CC0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md). Original files: facebook.svg, tiktok.svg, discord.svg, telegram.svg, x.svg. Their viewBoxes and paths are unchanged.
- BARQ!: official [marketing resources](https://barq.app/marketing-resources), [small black SVG](https://barq.app/logos/small-black.svg). Original vector paths retained in a luminance mask; black backdrop becomes transparent. ViewBox trims empty backdrop around the small mark; geometry is unchanged.
- Bump (amo, Android co.amo.android.location): verified against [amo's homepage](https://amo.co/) and [Bump landing page](https://get.amo.co/en/bump). Official [PNG app icon](https://static.amo.co/shared/images/app-icons/location/20250123-167x167.png) is embedded unchanged inside bump.svg and used as a luminance mask. No verified official vector/monochrome version was found. This preserves the source geometry and tonal detail without tracing or inventing a replacement. The SVG is a raster-backed mask, not a vector redraw.

All seven are local CSS masks with background: currentColor. The website applies its own monochrome palette, including the tonal Bump mask. No remote icon requests or runtime icon library. Logos remain trademarks of their respective owners; no affiliation or endorsement is implied.
