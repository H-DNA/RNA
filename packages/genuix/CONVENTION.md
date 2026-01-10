# Genuix conventions

## Folder structure

```
genuix/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/
│   │   ├── ComponentName/
│   │   │   ├── ComponentName.vue
│   │   │   ├── ComponentName.stories.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── index.css
│   └── index.ts
├── eslint.config.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Component structure

Each component lives in its own folder under `src/components/`:

```
ComponentName/
├── ComponentName.vue        # Component implementation
├── ComponentName.stories.ts # Storybook stories
└── index.ts                 # Barrel export
```

## Storybook

Configuration lives in `.storybook/`:

| File | Purpose |
|------|---------|
| `main.ts` | Defines where stories live, which framework to use. |
| `preview.ts` | Global styles, decorators, and parameters for all stories. |

## Styling

- Use Tailwind CSS utility classes.
- Global styles go in `src/index.css`.
- Component-specific styles use scoped `<style>` or Tailwind classes.

## TypeScript

- Export prop interfaces from component files.
- Use `satisfies` for type-safe meta objects in stories.
- Strict mode enabled in `tsconfig.json`.
