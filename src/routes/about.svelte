<script>
  import PageTitle from "../components/PageTitle.svelte";
  import AudioPlayer from "../components/AudioPlayer.svelte";
  import Content from "../components/layouts/Content.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<PageTitle title="About" />

<Content>

  <!-- https://musopen.org/music/43683-requiem-in-d-minor-k-626/ -->
  <AudioPlayer
    src="https://sveltejs.github.io/assets/music/mozart.mp3"
    title="Requiem in D minor, K. 626 - III. Sequence - Lacrymosa"
    composer="Wolfgang Amadeus Mozart"
    performer="Markus Staab" />

</Content>
