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
</style>

<div class="grid  fixed">
  <div class="col-tab-3">
    <SiteBrand />
  </div>
  <div class="col-tab-7">
    <Nav {segment} />
  </div>
</div>
<main>
  <slot />
</main>
<SiteFooter/>
