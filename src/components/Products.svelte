<script>
	import { onMount } from "svelte";

    let photos = [];
    let productos = [];

	onMount(async () => {
		const res = await fetch("db.json");
        photos = await res.json();
        productos = photos.productos;
        console.log(productos);
	});
</script>

<style>
	.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>

<h1>Photo album</h1>

<div class="photos">
	{#each productos as producto}
		<figure>
			<img src={producto.imagen} alt={producto.description}>
			<figcaption>{producto.name}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>