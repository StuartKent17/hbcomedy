<script>
	import Hero from '../components/Hero.svelte';
	import UpcomingEvents from '../components/UpcomingEvents.svelte';
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
 

	.purple-block {
		background:#57002C;
		color:white;
		padding-left:15vw;
		padding-right:15vw;
		justify-content: space-between;
		position:relative
	}

	.teeth,
	.tongue {
		display: block;
		margin:auto;
	}
	.events {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
    justify-content: center;
	}
	.event {
		text-transform: uppercase;
		display:flex; 
		text-align:right;
		padding-bottom: 40px;
		padding-top:20px;
		max-width:50%;
		min-width:480px;
	}

	.details {
		flex:1;
		padding:20px;
	}

	.events a {
		display: block;
		font-size: inherit;
		text-decoration: none;
	}

	.event img {
		max-width:190px;
		align-self:center;
	}

	.event h4 {
		font-size:1.8em;
	}

	.event .pretitle {
		color:#FFD839;
		font-size:1.3em;
	}
 
	.pretitle {
		white-space: nowrap;
	}

	.pretitle span {
		text-decoration: underline;
	}

	.event.right {
		flex-direction: row-reverse;
		text-align:left;
	}
	.event:hover * {
		text-decoration: underline; 
	}

	.event .posttitle {
		background:#FFD839;
		padding: 4px 7px;
		font-size:1.1em;
		color: #57002c;
	}

	</style>

<svelte:head>
	<title>Hawke's Bay Comedy</title>
</svelte:head>

<Hero></Hero>
<UpcomingEvents></UpcomingEvents>

<figure class="purple-block">
		<img src="teeth.png" alt="" class="teeth">
		<img src="openmic.png" alt="" class="openmic">
		
	<div class="events">
		<a href="/events/napier-standup-comedy">
		<div class="event left">
			<img src="paisley.png" alt="">
			<div class="details">
				<strong class="pretitle">Every <span>First Wednesday</span></strong>
				<h4>Paisley Stage<br/>Napier</h4>
				<strong class="posttitle">Koha Entry</strong>
			</div>
		</div>
		</a>
		<a href="/events/hastings-standup-comedy">
		<div class="event right">
			<img src="common.png" alt="">
			<div class="details">
				<strong class="pretitle">Every <span>Third Tuesday</span></strong>
				<h4>Common Room<br/>Hastings</h4>
				<strong class="posttitle">Free Entry</strong>
			</div>
		</div>
		</a>
	</div>
	<img src="tongue.png" alt="" class="tongue">
</figure>
 