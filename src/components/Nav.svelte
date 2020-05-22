<script>
  export let segment;
  let showMenu = true;
  const toggleMenu = () => (showMenu = !showMenu);
  let x = 0;
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }
  .toggle-button {
    padding: $h-1;
    width: $h3;
    margin-right: $h2;
  }
  .active {
    background-color: red;
  }
</style>


<svelte:window bind:innerWidth={x} />

{#if x < 500}
  <button class="toggle-button" on:click={toggleMenu}>|||</button>
{/if}


{#if showMenu}
  <nav class="SiteNav">
    <ul>
      <li>
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">
          Home
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'todh' ? 'page' : undefined}
          href="todh">
          TODH
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'artwork' ? 'page' : undefined}
          href="artwork">
          Artwork
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
          the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          Blog
        </a>
      </li>
    </ul>
  </nav>
{/if}