# Different Abilities, Equal Opportunities
Interactive digital story on reducing stigma and discrimination in inclusive education (HTML, CSS, JavaScript only, no installs).

## Folder structure
- `index.html` the page
- `css/style.css` look, high-contrast and readable-font modes
- `js/data.js` the script, scenes, clickable facts (edit text here)
- `js/characters.js` illustrated characters and Bhutanese classroom scenery (SVG)
- `js/audio.js` background music that changes mood per scene
- `js/app.js` story engine, captions, accessibility controls
- `assets/audio/vo/` voice-over recordings and RECORDING-LIST.txt
- `tools/` optional script that rebuilds the recording list

## Deploy on GitHub Pages
1. Create a repo, upload the contents of this folder (so `index.html` is at the top level).
2. Settings > Pages > Source: Deploy from a branch > `main` / root > Save.
3. Share the link `https://<username>.github.io/<repo>/`.

## Voice-over
All recorded lines are already included in `assets/audio/vo/` (converted to mp3, silence trimmed, volume evened out) and switched on in `js/data.js`. To make the story shorter, set `VO_SPEED` to 1.1 there.

## Sound effects
`assets/audio/sfx/` holds `laugh.mp3`, `gasp.mp3`, `applause.mp3` and `discussion.mp3` (cut short, volume balanced). They play on lines marked with an effect in `js/data.js`: laugh (scenes 1, 2, 5), discussion (scene 2 group work, scene 5), gasp (scene 3), applause (end screen). To add an effect to another line, put its name as the 6th item of that line, e.g. `'laugh,discussion'` plays both. If a file is missing, laugh, gasp and applause fall back to generated sounds. Set `SFX_FILES=false` to use only generated sounds.

## Replacing or adding voice-over
1. Open `assets/audio/vo/RECORDING-LIST.txt`. It lists every line with the exact file name to use (for example `s1-l01.mp3`).
2. Each team member records their own character's lines (phone voice recorder is fine), then exports as mp3 and saves the files in `assets/audio/vo/` with those names.
3. In `js/data.js`, change `VOICE_OVER=false` to `VOICE_OVER=true`.
4. Upload to GitHub. A "Voice-over" on/off button appears. Music lowers automatically while someone speaks, and auto-play waits for each recording to finish.
If you change the script, run `node tools/make-recording-list.js` to refresh the list.

## Team credits (add names and roles for the teamwork criterion)
| Member | Role |
|---|---|
| | Lekzin |
| | Kuenga |
| | Namling |
| | Teacher |
| | Rinchen (Narrator) |
