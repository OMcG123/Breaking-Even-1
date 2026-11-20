# Breaking Even — November Edition

A static website for a podcast and a 20-question multiple-choice quiz.

## Files

- `index.html` — page structure
- `style.css` — visual design
- `script.js` — quiz questions, answer selection, marking and results
- `audio/` — place the November podcast audio here

## 1. Add your podcast

1. Save/export your podcast as an MP3 if possible.
2. Put it in the `audio` folder.
3. Name the file exactly `november-edition.mp3`.
4. Upload/commit it to GitHub along with the website files.

The audio player is already set to `audio/november-edition.mp3`.

The file picker on the page is only a local preview feature. It does not upload the file to GitHub or make it available to other visitors. For the shared site, the audio must be committed to the repository (or hosted elsewhere and the audio source URL updated).

## 2. Add your 20 MCQs

Open `script.js` and find the `QUESTIONS` array near the top.

Each question has this format:

```js
{
  question: "Your question goes here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctIndex: 0
}
```

Set `correctIndex` to:
- `0` for option A
- `1` for option B
- `2` for option C
- `3` for option D

Replace all 20 placeholders. Keep exactly four options for each question and make sure every correctIndex is set. The quiz will not accept submissions while placeholder questions remain.

## 3. Test locally

Open `index.html` in a modern browser. Test the page, audio, all questions, unanswered-question warning, score, answer review and retry button.

For the audio to work, the MP3 needs to be in the `audio` folder with the exact filename above.

## 4. Publish with GitHub Pages

GitHub Pages is web hosting, so the website must be enabled for the link to work.

1. Create a GitHub repository. For the simplest setup, use a public repository named `breaking-even`.
2. Upload `index.html`, `style.css`, `script.js`, and the `audio` folder.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to finish publishing. The link will usually look like:
   `https://YOUR-USERNAME.github.io/breaking-even/`
7. Open the link in a private/incognito window or another device to check that it works.

The exact link depends on your GitHub username and repository name.

## Privacy and sharing

A public GitHub Pages site can be opened by anyone who has the link, and the repository contents are publicly accessible. Do not upload private or confidential material. The podcast file will be available for visitors to play and may be downloadable.

## Important

This is a static site. Quiz answers are marked in the visitor's browser; the site does not save names, scores or submissions to a teacher dashboard. If the project requires collecting results, a separate approved data-storage service would be needed.
