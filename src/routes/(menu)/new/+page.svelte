<script>
  import { goto } from "$app/navigation";

  function goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      goto("/");
    }
  }
</script>

<div class="flex h-full flex-col gap-y-2">
  <header class="bg-[#acc] px-4 py-2 text-2xl font-semibold uppercase">
    Decks
  </header>
  <h2 class="text-lg">
    Don't fret, these settings can be adjusted later&hellip;
  </h2>
  <section class="flex-grow">
    <div>Lorem ipsum</div>
  </section>
  <nav class="flex justify-between font-semibold uppercase">
    <button on:click={goBack} class="nav-button">&larr;&nbsp;Back</button>
    <a href="/game" class="nav-button">Next&nbsp;&rarr;</a>
  </nav>
</div>
