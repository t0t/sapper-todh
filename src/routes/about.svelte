<script>
  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  function detectaScroll(event) {
    console.log(event);
  }

  let y;
</script>

<style lang="scss">

</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<h1 style=" 
	color: rgb({m.y},{m.x}, 255); 
	opacity: {1 - Math.max(0, y / 40)};"
>
  About this site
</h1>

<p>This is the 'about' page. There's not much here.</p>
<div on:mousemove={handleMousemove}>
  Pasa por encima de este texto para cambiar el color {m.x} x {m.y}
</div>
<div class="fixed">{y}</div>
<h1 style="
transform: translate({y}px,0)
rotate({y}deg)
">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum soluta facilis,
  dolore dignissimos praesentium cumque repudiandae mollitia consequatur odit,
  dolorem iure molestiae deserunt? Fuga, repellat! Obcaecati ipsa temporibus
  necessitatibus aspernatur?
</h1>
