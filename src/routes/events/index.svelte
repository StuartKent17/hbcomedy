<script context="module">
	import moment from 'moment';

	export function preload({ params, query }) {
		return this.fetch(`events.json`).then(r => r.json()).then(events => {
			return { events };
		});
	}
</script>

<script>
	export let events;

	events = events.sort(function(a,b) {
		if(b.isFeature) {
			return true;
		}
		return moment(a.datetime).diff(b.datetime);
	});

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
	.events a.feature {
		width:100%;
		min-width:100%;		
		font-size:2.4em;
		margin:0px;
	}
	a.feature .eventchit {
		position: relative;
		display: flex;
		align-items:center;
		justify-items: center;
		align-content: space-between;
		box-sizing: border-box;
		min-height:400px;
		padding:0px;
		border:0px;
	}
	.feature .image {
		position:absolute;
		width:100%;
		height:100%;
		background-size:cover;
	}
	.feature .row {
		color:White;
		flex: 1 0 60%;
		box-sizing: border-box;
		position: relative;
		padding:50px;
		text-align:right;
	}
	.feature .row .fromnow {
		display: none;
	}
</style>

<svelte:head>
	<title>Events | Hawke's Bay Comedy</title>
</svelte:head>
<div class="content">
<h1>Upcoming Events</h1>

<div class="events">
	{#each events as event}

	{#if event.nextDate}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event --> 
		<a rel='prefetch' href='events/{event.slug}' class="{event.isFeature? 'feature' :''}">
			<div class="eventchit">
				
				<div class="image" 
					style="background-image: url('./{event.image}')">
				</div>
				<div class="row">
					<br/>
				<h3>
					{event.title}
				</h3>
					{moment(event.nextDate.datetime).format("ddd, MMMM Do YYYY, h:mm a")}
					<br/>
					<div class="fromnow">
					  {moment(event.nextDate.datetime).fromNow()}
					</div>
				</div>
			</div>
		</a>
		{/if}
	{/each}
</div>
<br/>
<h1>Past Events</h1>
<div class="events">
	{#each events as event}

	{#if event.lastDate}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<a rel='prefetch' href='events/{event.slug}'>
			<div class="eventchit">
				
				<div class="image" 
					style="background-image: url('./{event.image}')">
				</div>
				<div class="row">
					<br/>
				<h3>
					{event.title}
				</h3>
				<div class="row">
					{moment(event.lastDate.datetime).format("ddd, MMMM Do YYYY, h:mm a")}
					<br/>
					<div class="fromnow">
					  {moment(event.lastDate.datetime).fromNow()}
					</div>
				</div>
			</div>
			</div>
		</a>
		{/if}
	{/each}
</div>

 
</div>