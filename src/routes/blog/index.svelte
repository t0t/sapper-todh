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

<PageTitle title="Blog" />
<Content>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ullam incidunt beatae odit molestias pariatur non earum molestiae fuga, laborum accusantium facere libero, doloremque veniam, quod officiis eos impedit sint.</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ullam incidunt beatae odit molestias pariatur non earum molestiae fuga, laborum accusantium facere libero, doloremque veniam, quod officiis eos impedit sint.</p>
</Content>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>