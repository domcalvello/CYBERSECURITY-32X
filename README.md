# CYBERSECURITY — The Lost 32X Archive

A static, interactive lost-media narrative built from the supplied fictional Sega 32X game artwork.

## Preview locally

Run any static server from this directory. For example:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Add the contents of this directory to the repository root.
3. Push the default branch.
4. In **Settings → Pages**, choose **Deploy from a branch**.
5. Select the default branch and the repository root, then save.

The project uses relative URLs, includes `.nojekyll`, and requires no build command.

## Controls

- **A:** Inspect the current artifact.
- **B / Left arrow:** Previous chapter.
- **C / Right arrow:** Continue.
- **Start / Enter:** Open chapter select.
- Native scrolling remains available.

Audio is optional and starts muted. Reduced-motion preferences are honored.

## Project structure

- `index.html` — semantic page shell
- `styles.css` — layout, materials, responsive design and motion
- `app.js` — narrative data, navigation, audio and WebGL signal effects
- `assets/images` — supplied story artwork
- `assets/video` — supplied recovered footage
- `PRODUCT.md`, `DIRECTION.md`, `DESIGN.md` — product and design records

## Rights notice

This is an unofficial fictional fan-made project. Sega, Genesis, 32X, and referenced 1990s cultural marks belong to their respective owners. The supplied narrative artwork remains the property of its creator. Review rights and fair-use requirements before public or commercial distribution.
