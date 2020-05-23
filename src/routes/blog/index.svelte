<script>
    import data from './db.json';
    const posts = data.posts;
</script>

<section>
    {#each posts as post}
        <article>
            <header><h5>{post.title}</h5></header>
            <main>{@html post.content}</main>
            <footer>{post.excerpt}</footer>
        </article>
    {/each}
</section>