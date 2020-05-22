<script>
  //   export function preload({ params, query }) {
  //     return this.fetch("blog.json")
  //       .then(r => r.json())
  //       .then(posts => {
  //         return { posts };
  //       });
  //   }
  import { onMount } from "svelte";

  let data = [];
  let posts = [];

  onMount(async () => {
    const res = await fetch("db.json");
    data = await res.json();
    posts = data.posts;
    console.log(posts);
  });
</script>

<style lang="scss">
@import "../../styles/main.scss";
  .Sidebar {
    position: fixed;
    top: $h8;
    right: $h3;
    background-color: $alpha_white;
    z-index: 10;
    padding: 20px;
    @include type-setting(0);
    &Item {
        padding-top: $h-2;
        padding-bottom: $h-2;
        border-top: 1px solid $alpha_grey;
        &:last-child {
        border-bottom: 1px solid $alpha_grey;

        }
    }
  }
</style>

  <ul class="Sidebar">
    {#each posts as post}
      <li class="SidebarItem">
        <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      </li>
    {:else}
      <!-- this block renders when photos.length === 0 -->
      <p>loading...</p>
    {/each}
  </ul>
  <slot />
