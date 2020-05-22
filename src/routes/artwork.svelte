<script>
  import Button from "../components/atoms/Button.svelte";
  import Content from "../components/layouts/Content.svelte";
  import Products from "../components/Products.svelte";
  import PageTitle from "../components/PageTitle.svelte";
  import Blockquote from "../components/molecules/Blockquote.svelte";
  import Figure from "../components/molecules/Figure.svelte";
  import List from "../components/molecules/List.svelte";
</script>

<PageTitle title="Artwork" />

<Content>
  <div class="col-desk-6 col-tab-5 col-mob-4">
    <Figure src="img/detalle1.jpg" alt="Alt de imagen" caption="Descripción" />
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <p>
      En este espacio voy mostrando mi obra plástica.
    </p>
    <Button text="Call to action" />
    <Button text="Call to action 2" />
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <Blockquote
      quote="Lo más importante en la vida es que lo más importante sea lo más
      importante"
      author="STEPHEN COVEY" />
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <Blockquote
      quote="Todo según el número, el peso y la medida."
      author="Pitágoras" />
  </div>

  <div class="col-desk-6 col-tab-5 col-mob-4">
    <List>item</List>
  </div>
  <Products />
</Content>
