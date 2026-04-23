# ciudades-comunes

Node version used:

```sh
$ node -v # v16.20.1
$ npm -v # 8.19.4
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Deployment

This repository deploys to GitHub Pages with GitHub Actions.

- Workflow: `.github/workflows/deploy-pages.yml`
- Trigger: every push to `master` (and manual run with `workflow_dispatch`)
- Build command: `npm run build`
- Publish artifact: `dist/` (includes `public/CNAME` for `ciudadescomunes.org`)

### GitHub repository setting required

In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.

### What happens with `gh-pages`

The `gh-pages` branch is no longer used for live publishing once the Pages source is set to GitHub Actions.
It can be kept temporarily as rollback/history while the new workflow is validated.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
