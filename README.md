# Julian-A-Vazquez.github.io

Personal portfolio site, served by GitHub Pages at
<https://julian-a-vazquez.github.io/>.

Plain static HTML, CSS and a few lines of vanilla JavaScript. No framework, no build
step, no trackers or analytics. `.nojekyll` tells Pages to serve the files as-is.

```
index.html          one-page portfolio (anchored sections)
aes.html            detail page for the AES-128 project
404.html            not-found page
css/style.css       all styles; light/dark via prefers-color-scheme
js/main.js          copy-email button and current-section nav highlight (optional)
assets/             favicon, resume PDF (assets/Vazquez_Julian_Resume.pdf)
```

Preview locally:

```
python3 -m http.server 8000
# open http://localhost:8000
```
