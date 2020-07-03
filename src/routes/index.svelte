<script>
	import Hero from '../components/Hero.svelte';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.purple-block {
		background:#57002C;
		color:white;
		display: flex;
		padding-left:15vw;
		padding-right:15vw;
		justify-content: space-between;
	}

	.mouth {
		width:40%;
		display: flex;
		flex-direction:column;
		justify-content: space-between;
  		 align-items: center;
	}
	.mouth img {
		margin:0px;
	}
	.tongue {
		align-self:flex-end
	}
	.events {
		width:60%;		
		padding:150px;
	}

	@media screen and (max-width:960px) {
		.mouth, .events {
			width:100%;
		}
		.purple-block {
			flex-direction: column;
		}
		.tongue {
			align-self:center;
		}
	}

	.event {
		text-transform: uppercase;
		display:flex;
		text-align:right;
		padding-bottom: 40px;
		padding-top:20px;
	}

	.details {
		flex:1;
		padding:20px;
	}

	.event img {
		max-width:190px;
		height:auto;
		width: 280px; 
	}

	.event h4 {
		font-size:1.8em;
	}

	.event .pretitle {
		color:#FFD839;
		font-size:1.3em;
	}

	.events hr {	
		color:#ffd839;
		max-width:80%;
		border:1px solid #ffd839;
		background:#ffd839;
		height: 1px;
		border: none;
		margin:20px auto;
	}

	.pretitle span {
		text-decoration: underline;
	}

	.event.right {
		flex-direction: row-reverse;
		text-align:left;
	}

	.event .posttitle {
		background:#FFD839;
		padding: 4px 7px;
		font-size:1.1em;
		color: #57002c;
	}

	</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Hero></Hero>

<figure class="purple-block">
	<div class="mouth">
		<img src="teeth.png" alt="" class="teeth">
		<img src="openmic.png" alt="" class="openmic">
		<p>Starts at 8pm</p>
		<img src="tongue.png" alt="" class="tongue">
	</div>
	<div class="events">
		<div class="event left">
			<img src="paisley.png" alt="">
			<div class="details">
				<strong class="pretitle">Every <span>First Wednesday</span></strong>
				<h4>Paisley Stage<br/>Napier</h4>
				<strong class="posttitle">Koha Entry</strong>
			</div>
		</div>
		<hr>
		<div class="event right">
			<img src="common.png" alt="">
			<div class="details">
				<strong class="pretitle">Every <span>Third Tuesday</span></strong>
				<h4>Common Room<br/>Hastings</h4>
				<strong class="posttitle">Free Entry</strong>
			</div>
		</div>
	</div>

</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
