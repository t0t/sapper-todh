<script>
  export let title = "titulo";
  let y = 0;
</script>

<style lang="scss">
  @import "../styles/main.scss";
  .PageTitleContainer {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    background-color: $light_grey;
    @include padding-top(2);
    @include padding-bottom(2);
  }
  .PageTitle {
    @include media(s1) {
    }
  }
</style>

<svelte:window bind:scrollY={y} />

<header
  class="PageTitleContainer"
  style=" opacity: {1 - Math.max(0, y / 40)}; ">
  <h1 class="PageTitle">{title}</h1>
</header>
