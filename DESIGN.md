---
name: Kuroba
description: AI adoption and digital transformation, delivered through product design, engineering, data and cloud.
colors:
  primary: "#d83e2c"
  primary-hover: "#ea503b"
  secondary: "#f8a84c"
  background: "#181818"
  surface: "#1d1d1d"
  surface-raised: "#242321"
  ink: "#f5eee7"
  muted: "#c2bfbb"
  rule: "rgb(245 238 231 / 22%)"
  ghost: "#3b3937"
  input: "#20201f"
typography:
  display:
    fontFamily: "Varta, Arial, sans-serif"
    fontSize: "clamp(3.65rem, 5.75vw, 5.45rem)"
    fontWeight: 700
    lineHeight: 0.99
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Varta, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Varta, Arial, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Varta, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "normal"
rounded:
  control: "2px"
  nav-cta: "17px"
  pill: "30px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "72px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "60px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "60px"
  input:
    backgroundColor: "{colors.input}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "48px"
  service-index-red:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary}"
    size: "30px × 48px"
---

# Design System: Kuroba

## Overview

**Creative North Star: "The Black Feather Instrument"**

Kuroba's name means “black feather.” The identity turns that literal meaning into a mark assembled from dark, faceted feather forms, with a few vermilion and amber segments carrying the signal. The surrounding interface feels like a quiet instrument panel: nearly black, lightly textured, precise in its dividers, and warm in its typography.

The page pairs a direct AI and transformation statement with compact indexed service information. Varta keeps the voice human and readable; Geist Mono supplies the measured numeric register. Color is concentrated in calls to action and selected indices, while the feather stays mostly in shadow. The brand presents Kuroba as a partner for moving from AI experiments to useful production workflows and modernizing the systems around them.

**Key Characteristics:**
- Near-black surfaces with warm white type and a faint field texture.
- One vermilion signal, balanced by amber as a secondary signal.
- Feather geometry and segmented numerals as recurring identity devices.
- Editorial scale paired with simple ruled lists and generous breathing room.

## Colors

The palette uses a charcoal foundation, warm paper-like text, and two compact signal colors: vermilion for primary action and amber for supporting emphasis.

### Primary
- **Signal Vermilion**: Primary actions, text selection, and the first indexed service state.

### Secondary
- **Instrument Amber**: Supporting emphasis, including the second service index, process numbering, and team indices.

### Neutral
- **Black Field**: The page background and browser theme; texture sits over this base.
- **Raised Charcoal**: Slightly lifted dark surfaces and selected states.
- **Warm Ivory**: Main headings, wordmark, and high-priority text.
- **Soft Ash**: Supporting copy and footer text.
- **Graphite Ghost**: Unlit feather and digit segments, plus quiet indices.
- **Warm Hairline**: Low-contrast dividers that organize long sections without boxing them in.

### Named Rules
**The Signal Rule.** Reserve vermilion and amber for actions, indices, and selected states; let the black feather and surrounding field remain mostly dark.

## Typography

**Display Font:** Varta (with Arial, sans-serif fallback)  
**Body Font:** Varta (with Arial, sans-serif fallback)  
**Label/Mono Font:** Geist Mono (with monospace fallback)

**Character:** Varta gives the large headline and conversational copy a warm, open shape. Geist Mono adds a compact, technical counterpoint for indices and service numbering.

### Hierarchy
- **Display** (700, responsive 58.4–87.2px on wide screens, 0.99 line height): The three-line opening statement; on narrow screens it scales fluidly and holds a tight leading.
- **Headline** (700, responsive 40–64px, 1.05 line height): Section introductions.
- **Title** (600, 26.4px, 1.2 line height): Service names and section-level subheads.
- **Body** (400, 16px base, 1.5 line height): Supporting explanation, service descriptions, and form guidance; keep measure controlled, with hero copy capped near 620px.
- **Label** (600, 12.8px for compact indices, normal tracking): Geist Mono for numbered labels and service counters; sentence case for the adjacent service names.

### Named Rules
**The Two-Registers Rule.** Use Varta for messages and headings; use Geist Mono for counts and compact technical indices.

## Layout

The wide layout sits within a centered 1440px maximum frame with side insets that grow from 24px to 80px. The opening pairs a broad text column with a feather mark column, then anchors the viewport with a three-part service rail and thin top rule. Below, content is organized into clear sections, ruled rows, and unboxed lists rather than a grid of decorative cards.

At widths below 900px, the hero and service list tighten, the stack becomes a single-column introduction over its list, and the service list moves its tags beneath the service copy. Below 680px, the hero becomes a vertical composition with a centered mark; the service rail stacks into three rows, and service/team rows simplify to one column. Main sections retain 72px vertical breathing room on mobile. The spacing rhythm reuses 8px increments, with larger 48px and 72px pauses between content groups.

## Elevation & Depth

The system is predominantly flat. Depth comes from the field-noise texture, small changes between charcoal surfaces, and fine warm dividers. The selected model tab uses a restrained one-pixel shadow, but cards and broad surfaces do not rely on elevation. Focus is made visible with a two-pixel amber outline and four-pixel offset.

### Named Rules
**The Instrument-Panel Rule.** Separate content with tonal shifts, texture, and hairlines; keep large surfaces flat and avoid ambient shadow.

## Shapes

The form language mixes smooth, pill-shaped calls to action with nearly square controls and ruled content. Hero actions use a 30px radius, the header project link uses a softer 17px radius, while form fields and secondary content controls resolve to a crisp 2px corner. The feather mark and segment digits use clipped, angled facets; these are signature geometries, not decoration to spread across every surface.

## Components

### Buttons
- **Character:** Confident, simple actions with clear contrast against the dark field.
- **Shape:** Capsule hero actions (30px radius); header action has a softer corner (17px); form submit uses a compact capsule.
- **Primary:** Vermilion fill, warm ivory text, 60px height and 28px horizontal padding in the hero. The form submit is a tighter 48px control.
- **Hover / Focus:** Primary fill brightens from vermilion to a lighter red. Outline actions gain a faint warm fill. Keyboard focus uses the global amber outline.
- **Secondary / Ghost:** Transparent fill with a fine warm-white border; keep its text warm ivory.

### Cards / Containers
- **Corner Style:** Form container is squared to 2px by the global surface treatment.
- **Background:** Keep broad regions transparent; form controls sit on a subtly raised charcoal.
- **Shadow Strategy:** Flat by default; use only the restrained selected-tab shadow where that pattern is needed.
- **Border:** Use low-contrast warm hairlines to bound the form and separate list rows.
- **Internal Padding:** 24px on compact form containers, expanding to 32px at medium widths.

### Inputs / Fields
- **Style:** Dark charcoal fill, warm hairline border, warm ivory text, and a 2px corner; inputs are 48px high with 16px horizontal inset.
- **Focus:** Amber border and a visible amber outline. Hover raises border contrast slightly.
- **Error / Disabled:** Invalid fields use vermilion border; inline error copy uses a lighter vermilion. Pending submit is visibly subdued and uses a wait cursor.

### Navigation
- **Style:** Sticky, opaque black header with the Kuroba wordmark left, simple text links, and a bordered project action. Desktop navigation is 88px high; it compresses to 76px at tablet widths. On mobile, links open in a compact dark panel, and the project action remains available.
- **Typography and states:** Varta, warm ivory links, subtle color transitions, and a warm outline for keyboard focus.

### Signature Component: Feather and Segment Rail
The feather is a faceted, mostly-black mark with small vermilion and amber highlights. Use the two-color accents sparingly. Service indices are true seven-segment numerals: vermilion for the first service, amber for the second, then graphite for the remaining entries. Pair them with plain-language labels and hairline separators. This geometry is native to the brand system and may recur in service or process indexing.

## Do's and Don'ts

### Do:
- **Do** keep the black feather as the identity's central image and let most of its facets stay in shadow.
- **Do** use vermilion for the primary action and amber for secondary numbering or focus.
- **Do** organize information with generous spacing, clear rows, and subtle rules.
- **Do** use real seven-segment geometry for brand indices rather than plain monospaced digits.
- **Do** retain a visible keyboard focus treatment and respect reduced-motion preferences.

### Don't:
- **Don't** add unverified client work, metrics, or claims as visual proof.
- **Don't** fill large areas with accent color or make every feather segment bright.
- **Don't** turn simple lists into decorative card grids or add broad drop shadows.
- **Don't** replace the segmented brand numerals with a generic icon or arbitrary display glyph.
