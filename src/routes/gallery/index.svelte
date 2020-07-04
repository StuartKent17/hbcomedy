<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`gallery.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	img {
		max-width: 480px;
	}

	h2 {
		font-size:48px;
	}

	h2, h1 {
		flex:0 0 100%;
	}

	.container {
		background: var(--bg);
		color:white;
		padding:20px 70px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.image {
		width:480px;
		height:280px;	
		background-size:cover;
		margin:20px;
		display: inline-block;	
	}
</style>

<svelte:head>
	<title>Blog | Hawke's Bay Comedy</title>
</svelte:head> 

<div class="container">

<h1>Photo Gallery</h1>

	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<h2>{post.title}</h2>
		{#each post.children as child}
			<div class="image" style=" background-image: url('{child.path}')"></div>
		{/each}
	{/each}</div>