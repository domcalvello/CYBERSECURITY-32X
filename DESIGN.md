---
name: "CYBERSECURITY — The Lost 32X Archive"
description: "A lost 32X release preserved as a tactile 1990s gaming binder and signal-driven playable archive."
colors:
  archive-black: "#070809"
  console-shell: "#101214"
  control-surface: "#282b2f"
  binder-paper: "#c7b991"
  story-ink: "#171512"
  chrome-white: "#e9edf0"
  32x-yellow: "#ffd51c"
  console-red: "#ff3029"
  phosphor-green: "#7bff30"
typography:
  interface:
    fontFamily: "'Avenir Next Condensed', 'Helvetica Neue Condensed', sans-serif"
    fontWeight: 650
  display:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "clamp(2.8rem, 6.3vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "clamp(1.4rem, 2.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: "'Roboto Mono', 'Courier New', monospace"
    fontSize: "clamp(0.98rem, 1.25vw, 1.16rem)"
    fontWeight: 500
    lineHeight: 1.72
  label:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "0.7rem"
    fontWeight: 900
    lineHeight: 1.45
    letterSpacing: "0.08em"
  archiveLabel:
    fontFamily: "'Courier New', 'Nimbus Mono PS', monospace"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.24
    letterSpacing: "0.035em"
  note:
    fontFamily: "'Comic Sans MS', 'Marker Felt', cursive"
    fontSize: "clamp(1.05rem, 1.8vw, 1.6rem)"
    fontWeight: 800
    lineHeight: 1.1
rounded:
  none: "0"
  frame: "4px"
  tactile: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  control-gap: "0.8rem"
  control-padding: "0.45rem 0.85rem 0.45rem 0.4rem"
  label-padding: "0.52rem 0.7rem"
  frame-padding: "clamp(0.55rem, 1.2vw, 1rem)"
  chapter-media: "clamp(6.5rem, 9vw, 9rem) clamp(1.5rem, 4vw, 5rem)"
  chapter-copy: "clamp(4rem, 8vw, 9rem) clamp(1.6rem, 5vw, 6rem)"
components:
  controller-button:
    textColor: "{colors.chrome-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.control-padding}"
  start-key:
    textColor: "{colors.archive-black}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.1rem 1.6rem 0.95rem"
  chapter-label:
    backgroundColor: "{colors.32x-yellow}"
    textColor: "{colors.story-ink}"
    typography: "{typography.archiveLabel}"
    rounded: "{rounded.none}"
    padding: "{spacing.label-padding}"
  media-frame:
    backgroundColor: "{colors.archive-black}"
    rounded: "{rounded.frame}"
    padding: "{spacing.frame-padding}"
  sticker-puffy:
    typography: "{typography.label}"
    rounded: "{rounded.tactile}"
    padding: "0.65rem 0.75rem"
  archive-header:
    backgroundColor: "{colors.console-shell}"
    textColor: "{colors.chrome-white}"
    rounded: "{rounded.none}"
    padding: "1rem clamp(1rem, 4vw, 4rem)"
    height: "90px"
  stage-item:
    backgroundColor: "{colors.console-shell}"
    textColor: "{colors.chrome-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1rem"
    height: "92px"
  stage-item-active:
    backgroundColor: "{colors.phosphor-green}"
    textColor: "{colors.archive-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1rem"
    height: "92px"
  replay-button:
    backgroundColor: "{colors.phosphor-green}"
    textColor: "{colors.archive-black}"
    rounded: "{rounded.none}"
    padding: "1rem 1.2rem"
---

# Design System: CYBERSECURITY — The Lost 32X Archive

## Overview

**Creative North Star: "The Impossible 32X School Binder"**

The archive should feel like a supposedly lost Sega 32X release preserved by an obsessive 1990s teenager, then activated with impossible future-built web craft. Matte console plastic, retail-grid geometry, cardboard, magazine ink, foil, marker notes, stickers, and illuminated hardware are structural materials rather than nostalgic decoration.

The visual density is exuberant but governed. A repeated Genesis-style grid, short narrative blocks, alternating artifact-and-commentary layouts, and the same A/B/C/Start control grammar keep every chapter immediately legible. Discovery begins dusty and analog; gameplay becomes saturated and electrically precise; the signal destabilizes during the hijack and resolves in phosphor green.

**Key Characteristics:**

- Physical Sega/32X packaging geometry paired with a customized teenager's binder collage.
- Supplied artwork presented as evidence on an unobstructed stage, with all labels, notes, stickers, and controls kept adjacent.
- Alternating media and story panels tied together by a visible traveling signal.
- Tactile, pressable controls with molded-plastic depth and explicit active states.
- Phase-specific motion: paper exposure, CRT lock, threat breakup, and restored signal.

## Colors

The core palette combines near-black console plastics, 32X yellow and console red with phosphor green; weathered paper and chrome-white keep the physical archive readable while chapter skins introduce tightly bounded, story-specific color.

### Primary

- **32X Spine Yellow:** The persistent retail identifier for taglines, chapter labels, selection, and structural dividers.

### Secondary

- **Console Power Red:** Power, recording, hardware state, and hostile signal energy; it intensifies during compromised chapters.

### Tertiary

- **Phosphor Success Green:** Live status, chapter selection, recovered footage, and the final restored state.

### Neutral

- **Archive Black:** The deepest backdrop and grounding edge around hardware and media.
- **Console Shell:** The primary dark structural surface for headers, controls, and modal navigation.
- **Control Surface:** The raised middle tone used on hardware-like controls.
- **Binder Paper:** The default analog chapter substrate before individual material skins take over.
- **Story Ink:** The readable dark ink on pale physical materials.
- **Chrome White:** Bright type and reflective hardware highlights.

### Named Rules

**The Phase Color Rule.** Yellow identifies the archive, red carries danger and power, and green confirms a live or restored system; do not swap these meanings for variety.

**The Bounded Remix Rule.** Chapter palettes may be vivid and culturally specific, but they remain inside their material surface and never replace the core archive colors in navigation.

## Typography

**Display Font:** Press Start 2P (with monospace fallback)  
**Body Font:** Roboto Mono (self-hosted, with Courier New and monospace fallbacks)  
**Label/Mono Font:** Press Start 2P for authored hardware labels; system monospace for diagnostics  
**Handwritten Font:** Comic Sans MS (with Marker Felt and cursive fallbacks)

**Character:** Pixel type supplies unmistakable console authority, Roboto Mono carries readable service-manual narration, Courier New gives archive tags an old office-printer voice, and diagnostic monospace keeps evidence technical. Each family has one job.

### Hierarchy

- **Display** (regular, fluid oversized scale, compressed line-height): The split-line title and rare terminal-scale statements.
- **Headline** (regular, fluid chapter scale, tight tracking): Chapter and recovered-footage headings, held to short measures.
- **Body** (medium, fluid reading scale, generous line-height): Primary narrative copy, kept to approximately 68 characters per line.
- **Label** (heavy, compact scale, wide tracking, uppercase): Controller legends, archive labels, status, and chapter navigation.
- **Note** (extra-bold, fluid annotation scale): Short rotated reactions only; never long explanations or navigation.

### Named Rules

**The Four Voices Rule.** Pixel, condensed, diagnostic, and handwritten type may coexist, but each keeps its assigned narrative role.

**The Short Pixel Rule.** Pixel text stays short and high-contrast; body copy never inherits it.

## Layout

The opening viewport is a two-column console deck: recovered title evidence on the left and an oversized physical power assembly on the right. Story chapters use a full-viewport two-column grid with a slightly dominant media side; odd and even chapters reverse the media and story panels to create a deliberate page-turn rhythm. Media and copy are siblings, never layers.

At 980px and below, the console and every chapter become a single-column sequence with media before copy, the recovered-video section stacks, and chapter navigation reduces from four columns to two. At 680px and below, controls and typography tighten, navigation becomes one column, controller buttons form a two-up grid, and artwork is allowed to use its natural height.

Spacing is fluid and generous around evidence: media uses the chapter-media token, copy uses chapter-copy, and controls use a compact repeated gap. The 22px chapter grid and 24px console/modal grid preserve a shared retail-display rhythm across otherwise different materials.

### Named Rules

**The Alternating Evidence Rule.** Desktop chapters alternate media and commentary; stacked layouts always restore media-first reading order.

**The Unobscured Artifact Rule.** Narrative copy, labels, controller controls, glare, and stickers may frame an image but must never enter its bounds.

## Elevation & Depth

Depth is structural and tactile, not ambient decoration. Hardware uses inset highlights, deep lower shadows, convex gradients, and active-state travel; paper, stickers, and media frames use smaller cast shadows to feel handled. Digital chapters retain the same physical depth vocabulary while grid light and signal glows supply electronic energy.

### Shadow Vocabulary

- **Media Lift:** A two-stage cast shadow gives each artifact a heavy framed presence without covering its content.
- **Molded Control:** Inset highlights plus a short dark cast shadow make controller buttons feel pressable.
- **Console Well:** Deep inset lower shadow and restrained top highlight describe large molded plastic.
- **Signal Glow:** Tight colored bloom is reserved for LEDs, power, recording, danger, and restoration states.
- **Sticker Drop:** A compact drop shadow separates collage pieces from their paper or plastic substrate.

### Named Rules

**The Mechanical Depth Rule.** Every shadow must explain material, assembly, or state; never add generic floating-card elevation.

## Shapes

The system contrasts rigid retail geometry with hardware ergonomics. Chapter panels, labels, navigation cells, and archive dividers are square and grid-bound. Media frames receive only a slight 4px softening. Controller actions use full pills and circular key wells, the power lamp and completion seal are circular, and the main console housing uses an asymmetrical convex silhouette. Stickers may be circles, bursts, dashed tape, foil, or puffy rounded forms because their variation is deliberately contained to the collage layer.

## Components

### Power Start Key

- **Shape:** A wide physical pill with a perspective tilt and thick lower edge.
- **Color:** Chrome-white molded face over an archive-black legend.
- **Hover / Focus:** Lifts slightly on hover; the shared white focus outline remains clearly outside the object.
- **Active:** Travels downward and collapses its lower shadow to simulate a press.

### Controller Buttons

- **Shape:** Full-pill housing containing a circular A/B/C key or elongated Start key.
- **Color:** Dark molded plastic, bright chrome-white labels, and a console-red letter accent.
- **Hover / Focus:** Lifts 3px on hover and uses the shared white focus outline.
- **Active:** Drops 3px and replaces the cast shadow with an inset well.

### Chapter Label

- **Style:** A compact pixel label on the chapter accent color, rotated slightly like an applied archive tag.
- **Placement:** Lives above the media frame in surrounding panel space and mirrors with the alternating layout.

### Media Frame

- **Corner Style:** Near-square with a 4px radius.
- **Background:** Dark framing plastic around a contained image.
- **Shadow Strategy:** Uses Media Lift and a subtle perspective plane; inspect straightens and enlarges the whole frame.
- **Internal Padding:** Fluid but narrow, using the frame-padding token.

### Stickers

- **Style:** Pixel-lettered cultural marks rendered as tape, circles, bursts, foil, or puffy plastic.
- **Placement:** Exactly two distinct stickers appear on each gameplay chapter, confined to free panel space outside the artwork.
- **State:** The active chapter sweeps a reflective highlight across foil; hover may straighten and lift the sticker.

### Archive Header

- **Style:** A compact black hardware strip with 32X identity, chapter status LED, and a bordered sound toggle.
- **Behavior:** Sound begins off. The status line tracks the active chapter, and mobile hides secondary status before hiding core navigation.

### Chapter Select

- **Style:** A full-screen phosphor grid containing square, dense chapter cells.
- **State:** Hover and current selection invert from dark-on-light to phosphor-green-on-archive-black semantics.

## Do's and Don'ts

### Do:

- **Do** treat every supplied image as primary evidence and give it an unobstructed, contain-fit stage.
- **Do** alternate media and story panels on desktop and restore media-first stacking on smaller screens.
- **Do** keep controls physical, legible, keyboard-focusable, and visibly responsive to hover and press.
- **Do** carry the signal-cable narrative from red power-up through hostile hijack behavior to green restoration.
- **Do** preserve distinct paper, CRT, threat, and restore motion modes, with an immediate reduced-motion path.
- **Do** let each gameplay chapter have its own material, palette, and two distinct period-culture stickers inside the shared Genesis grid.

### Don't:

- **Don't** place interface controls, narrative text, stickers, glare, or decorative overlays inside artwork bounds.
- **Don't** flatten the experience into a generic gallery, carousel, centered hero, or uniform card grid.
- **Don't** replace molded controls and material surfaces with generic rounded rectangles or glass panels.
- **Don't** let collage density compromise navigation, reading order, or chapter recognition.
- **Don't** make audio automatic or motion essential to understanding state.
