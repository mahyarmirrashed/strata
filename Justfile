# Add ShadCN components.
add *args:
  @pnpm dlx shadcn-svelte@latest add {{args}}

# Spin up the development server.
serve *args:
  @pnpm dev {{args}}
