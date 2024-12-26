<script lang="ts">
  import { i18n } from "$lib/i18n";
  import "../app.css";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  <main class="h-screen w-screen">
    {@render children()}
  </main>
</ParaglideJS>
