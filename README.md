# JEVal & InnerJev project page

Static research project page for [General Decision Models: Benchmarking and Insights Beyond Jev](https://arxiv.org/abs/2610.03935). The page uses the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) layout and styles, with project-specific content and figures.

## Preview locally

Run `python3 -m http.server 8000` in this directory, then open `http://localhost:8000`.

## Publish

The GitHub Actions workflow in `.github/workflows/pages.yml` deploys the repository root on every push to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source. The expected project URL is `https://sii-research.github.io/jeval_and_inner_jev/`.

The repository is currently private. GitHub rejected Pages setup because the organization's current plan does not support Pages for this private repository. Publishing requires making the repository public or changing to a plan that supports private-repository Pages; until then the workflow cannot deploy.

The page is plain HTML, CSS, and a small citation-copy script. It has no package installation or build step. Paper figures in `assets/` come from the corresponding Overleaf manuscript. `static/css/index.css` is from Academic Project Page Template (commit `d38af1c`, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)); `static/css/bulma.min.css` bundles [Bulma](https://bulma.io/) 0.9.1 under the MIT License. The footer credits the template and Nerfies.
