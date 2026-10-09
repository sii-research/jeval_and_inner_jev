# JEVal & InnerJev project page

Static research project page for [General Decision Models: Benchmarking and Insights Beyond Jev](https://arxiv.org/abs/2610.03935).

## Preview locally

Run `python3 -m http.server 8000` in this directory, then open `http://localhost:8000`.

## Publish

The GitHub Actions workflow in `.github/workflows/pages.yml` deploys the repository root on every push to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source. The expected project URL is `https://sii-research.github.io/jeval_and_inner_jev/`.

The page is plain HTML, CSS, and a small citation-copy script. It has no package installation or build step. Paper figures in `assets/` are copied from the corresponding Overleaf manuscript.
