<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`events/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { event: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let event;
	import venues from './_venues.js';
	import moment from 'moment';	
	import Button from '../../components/Button.svelte'; 
	
	const venue = venues[event.venue]; 
	
	var newEvents = event.dates.filter(function(date, index, array){
		if(moment(date.datetime).isAfter(moment())){
			return true;
		}
	});

	var oldEvents = event.dates.filter(function(date, index, array){
		if(moment(date.datetime).isBefore(moment())){
			return true;
		}
	});
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{event.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	video {
		max-width: 100%;
	}

	.datechit {
		display:inline-block;
		border: 1px solid rgb(225,225,225);
		border-radius:4px;
		padding:20px;
		margin:5px;
	}

	.date_long {
		font-weight: bold;
	}
	.date_long,
	.fromNow {
		font-size:.8em;
	}
    .row {
		margin:5px auto;
	}
    .tall-row {
		margin:35px auto;
	}
	.datechits {
		display: flex;
	}

	.header_image {
		height:320px;
		background-size:cover;
		background-position:30%
	}
	.content {
		margin-top:80px;
	}
	.venue_vid {
		text-align: center;
		overflow: hidden;
		height:380px;
	}
	.venue_vid video {
		width:100%;
	}
</style>

<svelte:head>
	<title>{event.title}</title>
</svelte:head>
<div class="header_image" style="background-image: url('./{event.event_image}')">

</div>

<div class='content'>
	<h1>{event.title}</h1>
	{@html event.html}
	<h4>Upcoming Dates</h4>
	<div class="row datechits">
	{#each newEvents as date}
	<div class="datechit">
		<h4>
			{date.name}
		</h4>
		<div class="row">
			{#if date.dateUnconfirmed}
				<span> Date Not Confirmed </span>
				<div class="date_long">
					{moment(date.datetime).format('MMMM YYYY')}
				</div>
			{:else}
			<div class="date_long">
				{moment(date.datetime).format('dddd, MMMM Do YYYY')}
			</div>
			<div class="date_long">
				{moment(date.datetime).format('h:mm a')}
			</div>
			<div class="fromNow">
				{moment(date.datetime).fromNow()}
			</div>
			{/if}
		</div>
		{#if date.eventurl}
		<div class="row">

		</div>
		{/if}
	</div>
	{/each}

	<div class="prior-events">

	</div>
</div>
<div class="tall-row">
	<div class="tall-row">
	<h2>About the Venue</h2>
	<h3>{venue.name}</h3>	
	{@html venue.about_html}	
	<Button
	title="{venue.name} Website"
	url="{venue.venue_url}"
	></Button>
	<Button clazz="facebook"
	title="facebook"
	url="{venue.facebook}"
	></Button>
</div>
<div class="venue_vid">
	<video id="venue_vid" src="{venue.video}" loop muted type="video/mp4" alt="" autoplay>
	</div>
		</div>
		{#if oldEvents.length > 0}
		<h4>Past Dates</h4>{/if}
		<div class="row datechits">
		{#each oldEvents as date}
		<div class="datechit">
			<h4>
				{date.name}
			</h4>
			<div class="row">
				<div class="date_long">
					{moment(date.datetime).format('dddd, MMMM Do YYYY')}
				</div>
				<div class="date_long">
					{moment(date.datetime).format('h:mm a')}
				</div>
				<div class="fromNow">
					{moment(date.datetime).fromNow()}
				</div>
			</div>
			{#if date.eventurl}
			<div class="row">
				<a href="#">
					<div class="button">
						Event Info
					</div>
				</a>
			</div>
			{/if}
		</div>
		{/each}
	
	</div>

</div>
