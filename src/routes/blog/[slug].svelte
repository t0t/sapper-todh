<script context="module">
  import Content from "../../components/layouts/Content.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">{post.title}</h1>
</PageTitle>

<Content>
  <div class="col-desk-8 col-tab-10">
    {@html post.html}
  </div>
</Content>


