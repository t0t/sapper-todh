<script>
  import Nav from "../components/Nav.svelte";
  import SiteBrand from "../components/SiteBrand.svelte";
  import SiteFooter from "../components/SiteFooter.svelte";
  export let segment;
  let active = "active";
  let y = 0;
</script>

<style lang="scss" global>
  @import "./styles/main.scss";
  .fixed {
    position: fixed;
    top: 0;
  }
  .active {
    background-color: $light_grey;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: $h2;
    padding-bottom: $h2;
  }
  main {
    @include margin-top(3);
  }
</style>

<svelte:window bind:scrollY={y} />
<header class:active={y > 100}>

  <SiteBrand sitetitle="TODH" />

  <Nav {segment} />

</header>

<main>
  <slot />
</main>

<SiteFooter />
