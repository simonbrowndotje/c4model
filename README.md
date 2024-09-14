# Structurizr documentation

This repo contains the source for the GitHub Pages/Jekyll website published at https://c4model.com

## Local authoring

If you'd like to author/view the docs locally:

1. `git clone https://github.com/simonbrowndotje/c4model.git`
2. `cd c4model`
3. `docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve`
4. Open http://localhost:4000