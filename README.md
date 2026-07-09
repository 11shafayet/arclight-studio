# Arclight Studio

Static React + Tailwind frontend inspired by the supplied Arclight references.

## Development

```bash
npm install
npm run dev
```

Local preview:

```text
http://localhost:5173/
```

## Production build

```bash
npm run build
```

Upload the contents of the generated `dist` folder to your cPanel domain's public web directory, usually `public_html`.

## Replacing dummy images

Dummy assets live in `public/images`. Replace any file with your final image while keeping the same filename, or update the paths in `src/data/site.ts` and `src/App.tsx`.
