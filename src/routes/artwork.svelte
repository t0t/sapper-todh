<script>
  import Button from "../components/atoms/Button.svelte";
  import PageTitle from "../components/PageTitle.svelte";

  let innerWidth;
  let innerHeight;
  let outerWidth;
  let outerHeight;
  let scrollX;
  let scrollY;
  let online;

</script>

<PageTitle title="Artwork" />

<Button text="Call to action" />
<Button text="Call to action 2" />

<svelte:window 
  bind:innerWidth 
  bind:innerHeight 
  bind:outerWidth  
  bind:outerHeight 
  bind:online  
  bind:scrollX  
  bind:scrollY  
/>

<ul>
<li>innerWidth: {innerWidth}</li>
<li>innerHeight: {innerHeight}</li>
<li>outerWidth: {outerWidth}</li>
<li>outerHeight: {outerHeight}</li>
<li>scrollX: {scrollX}</li>
<li>scrollY: {scrollY}</li>
<li>online: {online}</li>
</ul>