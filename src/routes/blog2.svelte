<script>
  import { onMount } from "svelte";

  let data = [];
  let posts = [];

  onMount(async () => {
    const res = await fetch("db.json");
    data = await res.json();
    posts = data.blog;
    console.log(posts);
  });
</script>

<style>
  .posts {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
</style>

<h2 class="col-tab-10">Posts</h2>

<div class="blog">
  {#each posts as post}
    <figure>
      <img src={post.imagen} alt={post.description} />
      <figcaption>{post.name}</figcaption>
    </figure>
  {:else}
    <!-- this block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>
