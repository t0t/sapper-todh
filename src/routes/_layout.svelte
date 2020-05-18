<script>
  import Nav from "../components/Nav.svelte";
  import SiteBrand from "../components/SiteBrand.svelte";
  import SiteFooter from "../components/SiteFooter.svelte";
  export let segment;
</script>

<style lang="scss" global>
  @import "./styles/main.scss";
  .fixed {
    position: fixed;
    top: 0;
  }
  header {
    background-color: rgba($white, 0.8);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: $h2;
    @include padding-top(-2);
    @include padding-bottom(-2);

    nav {
      align-self: center;
    }
  }
  main {
    @include margin-top(3);
  }
</style>

<header class="fixed">

  <SiteBrand sitetitle="TODH" />

  <Nav {segment} />

</header>

<main class="grid">
  <slot />
</main>

<SiteFooter />
