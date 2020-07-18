// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const events = [
	
	{
		title: 'Hastings Standup Comedy',
		url: '',
		event_image: 'comedyclub.jpg',
		cost: 'Free Entry',
		venue: 'common_room',
		dates: [
			{
				name:"Hastings Standup - July",
				datetime:'2020-07-21 20:00',
				eventurl: '#'
			},
			{
				name:"Hastings Standup - August",
				datetime:'2020-08-11 20:00',
				eventurl: ''
			},
			{
				name:"Hastings Standup - September",
				datetime:'2020-09-08 20:00',
				eventurl: ''
			},						
		],
		slug: 'hastings-standup-comedy',
		html: `
			<p>Standup comedy is a great way to practice your stuff, enjoy breakout comedy acts, meet new people and support local businesses.</p>

			<p>If you want to perform, call or text Karen on 027 7596481 to reserve a slot, or ask for Karen on the night.</p>
		`
	},
	{
		title: 'Napier Standup Comedy',
		url: '',
		event_image: 'paisley.jpg',
		venue: 'paisley',		
		cost: 'Koha Entry',
		dates: [
			{
				name:"Napier Standup - July",
				datetime:'2020-07-02 20:00',
				eventurl: '#'
			},
			{
				name:"Napier Standup - August",
				datetime:'2020-08-06 20:00',
				eventurl: ''
			},
			{
				name:"Napier Standup - September",
				datetime:'2020-09-03 20:00',
				eventurl: ''
			},						
		],
		slug: 'napier-standup-comedy',
		html: `
			<p>Standup comedy is a great way to practice your stuff, enjoy breakout comedy acts, meet new people and support local businesses.</p>

			<p>If you want to perform, call or text Karen on 027 7596481 to reserve a slot, or ask for Karen on the night.</p>
		`
	},
];

events.forEach(event => {
	event.html = event.html.replace(/^\t{3}/gm, '');
});

export default events;
