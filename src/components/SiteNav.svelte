<script>
 
  export let segment;
  let showMenu = true;
  const toggleMenu = () => (showMenu = !showMenu);
  let x = 0;
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  .SiteNav ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: $h2;
  }
  .SideNav {
    a {
      color: $primary;
    }
  }
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    background-color: $grey;
    height: 2px;
    display: block;
    bottom: -1px;
  }
  .toggle-button {
    padding: $h-1;
    margin-right: $h2;
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
</style>

<svelte:window bind:innerWidth={x} />

{#if showMenu}
  <a class="toggle-button" on:click={toggleMenu} alt="Menu button">🍔</a>
{:else}
  <nav class="SiteNav">
    <ul>
      <li>
        <a
          on:click={toggleMenu}
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">
          Home
        </a>
      </li>
      <li>
        <a
          on:click={toggleMenu}
          aria-current={segment === 'todh' ? 'page' : undefined}
          href="todh">
          TODH
        </a>
      </li>
      <li>
        <a
          on:click={toggleMenu}
          aria-current={segment === 'artwork' ? 'page' : undefined}
          href="artwork">
          Artwork
        </a>
      </li>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
          the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          on:click={toggleMenu}
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          Blog
        </a>
      </li>
    </ul>
  </nav>
{/if}
