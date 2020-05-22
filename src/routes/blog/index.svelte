<script context="module">
  export function preload({ params, query }) {
    return this.fetch("blog.json")
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import PageTitle from "../../components/PageTitle.svelte";
  import Content from "../../components/layouts/Content.svelte";
  export let posts;
</script>

<svelte:head>
  <title>TODH | Blog</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Blog</h1>
  <h2 slot="subtitle">Arte, desarrollo web y filosofía</h2>
  <!-- <h4 slot="extratitle"></h4> -->
</PageTitle>

<div class="grid">
  {#each posts as post}
    <article class="col-desk-6">
      <a rel="prefetch" href="blog/{post.slug}">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </a>
    </article>
  {/each}
</div>
