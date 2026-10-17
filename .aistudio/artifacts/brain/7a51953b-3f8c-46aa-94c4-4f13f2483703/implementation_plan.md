# Aura Studio — The Kensington Mews Residence Monograph

A high-fidelity architectural monograph web application for Aura Studio, documenting the transformation of a 19th-century carriage house into a monolithic sanctuary of Roman travertine, smoked oak, and natural daylighting.

### User Review & Critical Decisions

> [!IMPORTANT]
> The architectural dossier has been scoped based on your confirmed preferences:
> - **Focus Scope**: Dedicated, exhaustive monograph of **The Kensington Mews Residence** (Residential No. 048) with comprehensive architectural documentation.
> - **Core Interactivity**: Interactive multi-level floorplan explorer (Basement, Ground, Suites), before-and-after demolition split slider, and tactile material inspector modal with detailed technical quarry/mill specifications and PDF finish schedule preview.
> - **Aesthetics**: Retro-futuristic dark mode ("Neon Tokyo / Electric Nightscape" tone) paired with warm stone architectural photography, unlacquered brass accents, and Sora/Space Grotesk typography.

---

### 1. Overview & Core Concept

- **What It Does**: Presents a museum-grade digital monograph of a landmark residential conversion in Kensington, London W8. Visitors explore spatial narratives, tactile materiality matrices, architectural vector blueprints across three vertical levels, plate-by-plate room monograph photographs with demolition toggles, and an interactive strip-out comparator.
- **Target Audience**: Architectural patrons, design connoisseurs, RIBA jury members, luxury real estate collectors, and interior architects.
- **Key Value**: Delivers an immersive editorial experience combining tactile material craft with precision CAD architectural elevations and smooth interactive exploration.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Hero & Spec Strip**: Instant visual immersion with east-facing daylight salon photography, architectural metadata bar (4,800 sq ft, Clara Vane RIBA, completed Autumn 2024), and dossier share drawer.
  2. **Spatial Narrative & Joinery Inspection**: Editorial analysis of Victorian brickwork conservation, zero-tolerance shadow-gap joinery details, and the 14-meter central lightwell axis.
  3. **Tactile Material Matrix**: Interactive 5-card swatch board (Roman Travertine, Smoked European Oak, Belgian Washed Linen, Patinated Raw Brass, Calacatta Vagli). Clicking any material opens a deep inspection modal with quarry origins, chemical patina details, maintenance regimens, and finish specifications.
  4. **Circulation & Floorplan Explorer**: Interactive blueprint elevation with tabbed levels:
     - **Level 00 (Basement)**: Sunken spa, private sculpture courtyard, subterranean lightwell basin.
     - **Level 01 (Ground)**: 24.5-meter continuous vista, travertine living salon, Stûv hearth, Gaggenau kitchen monolith.
     - **Level 02 (Suites)**: Cantilevered oak staircase, master ensuite with 1.8-tonne carved travertine tub.
     - Hovering/clicking blueprint zones highlights real-time room annotations, daylight factor percentages, and acoustic ratings.
  5. **Spatial Execution & Room Monograph**: Switch between "Finished State" and "Before Demolition" views for the 4 primary plates.
  6. **Structural Evolution Split**: Interactive draggable before/after comparator slider revealing the raw 1882 carriage framework (Jan 2022 strip-out) transformed into the 2024 finished salon.
  7. **Press Accolades & Commission Inquiry**: Critical reviews from Architectural Digest UK and World of Interiors, plus a bespoke inquiry drawer.

- **Visual Identity & Theme**:
  - **Aesthetic Direction**: High-contrast architectural editorial meets "Electric Nightscape" / Neon Tokyo retro-futurism.
  - **Color Palette**:
    - Dominant Canvas: Near-black deep space (`#0a0a12`, `bg-background`) with dark surface containers (`#141422`, `#1e1e30`).
    - Hot Pink Neon Accent (`#ff2d78`): Focus states, primary CTAs, active badges, slider demarcation.
    - Cyan Neon (`#00ffcc`): Secondary links, architectural vector highlights, coordinate data, active spec lines.
    - Warm Amber / Terracotta (`#94492c`, `#ffe04a`): Natural travertine hearth and timber accents.
  - **Typography**:
    - Headlines: `Sora` & `Playfair Display` (for classical architectural elegance).
    - Body: `Inter` & `Plus Jakarta Sans` for effortless readability on dark surfaces.
    - Technical Specs & Blueprint: `Space Grotesk` and tabular numerals.
  - **Component Styling**: Subdued hairline borders with soft inner glows, zero-pill text metadata with clean separators (`·` and `/`), and fluid responsive layouts.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Full-Fidelity Interactive SVG Blueprint vs. Static Floorplan Graphic**
  - *Chosen Approach*: Dynamic SVG blueprint component that renders clean vector lines, room callouts, and dimension annotations with responsive state updates when switching between Level 00, Level 01, and Level 02.
  - *Why*: Allows true architectural inspection with hovering hotspot tooltips, live daylight/acoustic metrics recalculation, and sharp rendering on all screen densities.
- **Decision 2: High-Performance Canvas/Touch-Aware Before-After Slider**
  - *Chosen Approach*: Pointer-event driven split slider with touch support, keyboard arrow accessibility, and smooth percentage clipping.
  - *Why*: Delivers an immediate tactile comparison between the 1882 raw brick carriage framework and the completed monolithic salon.
- **Decision 3: Dedicated Material Inspector Modal**
  - *Chosen Approach*: Rich detail modal with material specifications, quarry geolocation, finish testing notes, and a downloadable PDF finish schedule mockup.
  - *Why*: Fulfills the user's explicit request for interactive material inspection while preserving the editorial cleanliness of the main grid.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          Aura Studio App                               │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ Top Bar (Brand Wordmark, Nav Links, Share, Inquiry CTA)          │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────▼─────────────────────────────────────┐  │
│  │ Hero Monograph & Spec Strip (Plate I, Coordinates, 6-col Meta)     │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────▼─────────────────────────────────────┐  │
│  │ Spatial Narrative (Historic Predicament, Light as Mass, Fig 2.1)  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────▼─────────────────────────────────────┐  │
│  │ Tactile Material Matrix ──► [Material Inspector Modal]            │  │
│  │ (Travertine, Oak, Linen, Brass, Calacatta Vagli)                  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────▼─────────────────────────────────────┐  │
│  │ Floorplan Level Explorer (Level 00 / Level 01 / Level 02)         │  │
│  │ Dynamic SVG Schematics + Acoustic / Daylight Telemetry            │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────▼─────────────────────────────────────┐  │
│  │ Room-by-Room Monograph (Finished State vs Before Demolition)      │  │
│  │ Plates 01–04: Hearth, Culinary Gallery, Bath, Sunken Courtyard    │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────▼─────────────────────────────────────┐  │
│  │ Structural Evolution Split (Jan 2022 Strip-Out vs Oct 2024 Done)  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                │                                       │
│  ┌─────────────────────────────▼─────────────────────────────────────┐  │
│  │ Accolades, Inquiry Drawer, Journal Dispatch, Global Ateliers      │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

- **Data Models**:
  - `MaterialSpec`: ID, name, classification, quarry/mill origin, description, technical specs, finishes, maintenance, and high-res imagery.
  - `FloorLevel`: Level ID, label, elevation, area, daylight factor, acoustic rating, schematic zones, and SVG paths.
  - `RoomPlate`: Plate number, title, space name, description, finished image URL, demolition image URL, specs, and architectural fittings.
  - `Accolade`: Publication, quote, issue/date, category.
- **State Management**:
  - `activeLevel`: Selected floor plan level (`00`, `01`, `02`).
  - `selectedMaterial`: Material currently opened in the inspector modal (or `null`).
  - `roomDisplayMode`: `'finished' | 'demolition'` for room monograph plates.
  - `comparatorPosition`: Floating percentage (0–100%) for before/after comparison slider.
  - `inquiryOpen`: Boolean toggle for private commission inquiry drawer.
  - `shareToast`: Brief feedback notification when copying dossier link.
