<script>
  export let title = "titulo";
  let y;
  
</script>

<svelte:window bind:scrollY={y} />

<h1 class="col-tab-10" style="opacity: {1 - Math.max(0, y / 40)};">
  {title}
</h1>
