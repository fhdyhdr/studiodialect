# Editing this clone

Everything below is plain files - no build step needed to change copy, colours or
images.

## Where to edit

- **Text** - `index.html`. Keep the surrounding tags; a small inline script
  re-applies the text you wrote after the site's own scripts finish, so it sticks.
- **Styles** - `css/` (global, header, hero, sections, footer - loaded in order).
- **Images / video / fonts** - `assets/images`, `assets/videos`, `assets/fonts`,
  `assets/icons`. Either overwrite a file (keep its name) or edit the `src` in
  `index.html`.

- **Runtime-only UI strings** (e.g. a video player's "Sound" / "Close" labels)
  are not in the HTML - they live in the archived site code under `js/`. Search the
  exact wording there and edit it in place.
- **Text baked into a picture** (a headline that is part of a .jpg/.png) can only be
  changed by replacing that image file.

## Changing an image

Every image is served **from this folder**, not from the internet - overwrite the
file (keep its name and format) and reload, and the new picture shows up. If a
picture is drawn into a `<canvas>` by the site's own runtime, the file name is
still in the archive: the runtime resolves it through this folder, so replacing
that file is what changes the picture.

## Finding the text you want to change

Search for a **short fragment** instead of a whole sentence: headings are often split
across several elements (`We craft delicious fats` + `Without depleting Earth's
resources.` are two separate nodes), so the full sentence never matches.

Watch out for typographic characters - the site may use `’` (curly) where you type
`'` (straight), or `&` where the source has `&amp;`. If a search finds nothing,
try a distinctive single word.

> **Edit the file named next to each string, not every file.** Some copy appears in
> more than one place - a section component *and* the archived runtime under `js/`.
> Only the files listed below are yours to edit; the runtime copies must stay as they
> are, otherwise the site can no longer render itself.

## Text on this page (search index)

Every editable string found in this export, with the file to edit:

- `index.html`, `assets/App-Ca6lG7SI.js` - [ LOADING ...
- `index.html`, `assets/App-Ca6lG7SI.js` - % ]
- `index.html`, `assets/App-Ca6lG7SI.js` - © Studio Dialect 2025 all rights reserved
- `index.html` - 10:03
- `index.html` - 3D Visualisation
- `index.html`, `assets/App-Ca6lG7SI.js` - 73 Tib St,
- `index.html`, `assets/App-Ca6lG7SI.js` - about us
- `index.html`, `serve.mjs`, `assets/r3f-BJIQ5yep.js` - accept
- `index.html` - ALL PROJECTS
- `index.html` - art, technology, experience.
- _(runtime copy only - `js/main.js`)_ - Award-winning motion, design and interactive experiences that connect culture, technology, and contemporary aesthetics.
- `index.html`, `assets/App-Ca6lG7SI.js`, `assets/queries-x5Bz04MV.js` - CAPABILITIES
- `index.html`, `assets/App-Ca6lG7SI.js`, `assets/queries-x5Bz04MV.js` - contact
- `index.html`, `assets/App-Ca6lG7SI.js`, `assets/queries-x5Bz04MV.js` - Contact
- `index.html` - CULTURE &
- `index.html`, `assets/App-Ca6lG7SI.js`, `css/global.css` - decline
- `index.html`, `assets/App-Ca6lG7SI.js` - dialect hq
- `index.html` - eadadawdwada
- `index.html`, `assets/App-Ca6lG7SI.js` - easter egg
- `index.html` - erere kocag gaming
- `index.html` - erere kocag lah
- `index.html` - ererer erer
- _(runtime copy only - `js/main.js`)_ - Everything we create is built in close collaboration with our clients and agency partners, working together to bring ideas to life with clarity and intention.
- _(runtime copy only - `js/main.js`)_ - Experience Strategy & Design
- `index.html`, `assets/App-Ca6lG7SI.js` - EXTERNAL
- `index.html`, `assets/App-Ca6lG7SI.js` - FIND US
- `index.html`, `assets/App-Ca6lG7SI.js`, `assets/queries-x5Bz04MV.js` - home
- `index.html`, `assets/r3f-BJIQ5yep.js`, `assets/App-Ca6lG7SI.js` - Home
- `index.html`, `assets/App-Ca6lG7SI.js` - Instagram
- `index.html`, `assets/r3f-BJIQ5yep.js`, `assets/App-Ca6lG7SI.js` - INTERNAL
- `index.html`, `serve.mjs`, `assets/App-Ca6lG7SI.js` - labs
- `index.html`, `assets/App-Ca6lG7SI.js` - Labs
- `assets/App-Ca6lG7SI.js` - let's create the new & next
- _(runtime copy only - `js/main.js`)_ - Let's Play
- `index.html`, `assets/App-Ca6lG7SI.js` - linkedin
- `index.html`, `assets/App-Ca6lG7SI.js` - M4 1LS
- `index.html`, `assets/App-Ca6lG7SI.js` - Manchester,
- `index.html`, `assets/App-Ca6lG7SI.js` - MENU
- _(runtime copy only - `js/main.js`)_ - Motion & Production
- `index.html`, `assets/browser-CVBVhu-6.js`, `assets/App-Ca6lG7SI.js` - OPEN
- _(runtime copy only - `js/main.js`)_ - Our approach sits where creativity and technical imagination meet. We explore emerging technologies with a practical, artistic eye, shaping them into experiences that feel human and memorable.
- _(runtime copy only - `js/main.js`)_ - Our work is grounded in research and experimentation. We help brands make sense of emerging technologies and turn them into clear, purposeful experiences that stay with people.
- `index.html`, `assets/App-Ca6lG7SI.js` - privacy policy
- `index.html`, `assets/App-Ca6lG7SI.js`, `assets/sanity-D6v_koRL.js` - projects
- `index.html`, `assets/App-Ca6lG7SI.js`, `assets/queries-x5Bz04MV.js` - Projects
- `index.html` - Rapid Concept Prototyping
- `index.html` - START A PROJECT
- `index.html`, `assets/App-Ca6lG7SI.js` - Studio
- `index.html` - Studio Dialect explores how technology can shape the way people move, feel and interact.
- `index.html` - TECHNOLOGY
- `index.html` - The Studio
- `index.html`, `assets/App-Ca6lG7SI.js` - THE STUDIO
- `index.html` - We use cookies to enhance your experience and analyze site traffic.
- _(runtime copy only - `js/main.js`)_ - Website & App Experience
- `index.html`, `assets/r3f-BJIQ5yep.js`, `assets/App-Ca6lG7SI.js` - X :
- `index.html`, `assets/r3f-BJIQ5yep.js`, `assets/App-Ca6lG7SI.js` - Y :

## Reusing parts of this clone elsewhere

See `README.md` - it has a step-by-step section for lifting a single section into a
hand-written project.

Source: studiodialect.com
