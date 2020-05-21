<script>
  import Products from "../components/Products.svelte";
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/layouts/Content.svelte";
</script>

<svelte:head>
  <title>TODH wellcome</title>
</svelte:head>

<PageTitle title="Wellcome"/>

<Content>
  <Products />
</Content>