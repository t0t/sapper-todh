<script context="module">
  let current;
</script>

<script>
  export let src;
  export let title;
  export let composer;
  export let performer;

  let audio;
  let paused = true;

  function stopOthers() {
    if (current && current !== audio) current.pause();
    current = audio;
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";
  .playing {
    color: $secondary;
  }
</style>

<article class:playing={!paused}>
  <h5>{title}</h5>
  <p>
    <strong>{composer}</strong>
    / performed by {performer}
  </p>

  <audio bind:this={audio} bind:paused on:play={stopOthers} controls {src} />
</article>