<script context="module">
	import moment from 'moment';

	console.log(moment('2020-07-14'));

	export function preload({ params, query }) {
		return this.fetch(`events.json`).then(r => r.json()).then(events => {
			return { events };
		});
	}
</script>

<script>
	export let events;
</script>

<style> 
	.events {
		display: flex;
			margin: 5px;
			text-decoration: none;
			min-width: 329px;
			flex-wrap: wrap;
			align-content: space-between;
		}
		.events a {
		flex: 1 0 33%;
		margin: 5px;
		text-decoration: none;
		min-width: 329px;
	}
	.eventchit {
		border: 1px solid rgb(225,225,225);
		border-radius:4px;
		padding:20px;
	}
	.image {
		height:210px;
		background-size:cover;
	}
	.fromnow {
		font-size:.8em;
	}
</style>

<svelte:head>
	<title>Events | Hawke's Bay Comedy</title>
</svelte:head>
<div class="content">
<h1>Upcoming Events</h1>

<div class="events">
	{#each events as event}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<a rel='prefetch' href='events/{event.slug}'>
			<div class="eventchit">
				
				<div class="image" 
					style="background-image: url('/{event.image}')">
				</div>
				<div class="row">
					<br/>
				<h3>
					{event.title}
				</h3>
				<div class="row">
					{moment(event.date.datetime).format("ddd, MMMM Do YYYY, h:mm a")}
					<br/>
					<div class="fromnow">
					  {moment(event.date.datetime).fromNow()}
					</div>
				</div>
			</div>
			</div>
		</a>
	{/each}
</div>
 
</div>