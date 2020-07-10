<script>
	import Person from '../components/Person.svelte';
	import PersonSmall from '../components/PersonSmall.svelte';
</script>

<svelte:head>
	<title>About | Hawke's Bay Comedy</title>
</svelte:head>

<style>
	.content {
		margin-top:20px;
		padding:20px;
	}
	.headerImage {
		width:100%;
		height:480px;
		background:var(--bg) url(../group2.jpg);
		background-position: center 25%;
	}

	.people	{
		display:flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.person {
		flex: 1 0 auto;
	}

</style>
<div class="headerImage"></div>

<div class="content">
	<h2>People</h2>
	<h3>Organisers</h3>
	<div class="people">
		<Person
			emoji="😅"
			image="https://api.adorable.io/avatars/285/karen@adorable.png"
			pretitle="The amazings"
			name="Karen Leslie"
			posttitle="Group and Napier Event Organiser"
			paragraph="Oraganiser and person of doing the things at the Paisley Stage"
			attributes="{['Leader','Organiser','MC','Performer', 'Emeritus']}"
		></Person>
		<Person
			emoji="😅"	
			image="https://api.adorable.io/avatars/285/sarah@adorable.png"
			pretitle=""
			name="Sarah"
			posttitle="Hastings Event Organiser"
			paragraph="Oraganiser and person of doing the things at the Common Room"
			attributes="{['Organiser','MC','Performer', 'Emeritus']}"
		></Person>
	</div>
	<h3>Comedians</h3>
	<div class="people small">
		<PersonSmall
			emoji="😅"	
			image="https://api.adorable.io/avatars/285/frank@adorable.png"
			pretitle=""
			name="Sarah"
			paragraph="Oraganiser and person of doing the things at the Common Room"
			attributes="{['Organiser','MC','Performer', 'Emeritus']}"
		></PersonSmall>
		<PersonSmall
		emoji="😅"	
		image="https://api.adorable.io/avatars/285/john@adorable.png"
		pretitle=""
		name="Sarah"
		paragraph="Oraganiser and person of doing the things at the Common Room"
		attributes="{['Organiser','MC','Performer', 'Emeritus']}"
	></PersonSmall>
	<PersonSmall
	emoji="😅"	
	image="https://api.adorable.io/avatars/285/pip@adorable.png"
	pretitle=""
	name="Sarah"
	paragraph="Oraganiser and person of doing the things at the Common Room"
	attributes="{['Organiser','MC','Performer', 'Emeritus']}"
></PersonSmall>
	</div>	
</div>