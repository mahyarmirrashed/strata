# Add ShadCN components.
add *args:
  @pnpm dlx shadcn-svelte@latest add {{args}}

# Spin up the development server.
serve *args:
  @pnpm dev {{args}}

# Machine generate Paraglide translations for other languages.
t:
  @pnpm dlx @inlang/cli machine translate --project project.inlang

# Generate bindings for Paraglide messages.
tgen:
  @pnpm dlx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/paraglide
