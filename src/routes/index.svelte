<svelte:head>
	<title>XXXXX</title>
</svelte:head>

<h1>{name}</h1>

<Products/>

<img src="{src}" alt="">

<button on:click={addNumber}>
{count}
</button>

<script>
	import Products from "../components/Products.svelte";
	let src = "img/detalle1.jpg";

	let name = "T-O-D-H";
	let count = 0;
	function addNumber() {
		count += 1;
	}
</script>