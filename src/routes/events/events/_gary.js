// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const events = [
	{
		title: 'Gary Sansome',
		url: 'https://www.facebook.com/events/591124124938983/',
		event_image: 'gary_sansome.jpg',
		poster: 'sansome_poster.jpg',
		venue: 'paisley',
		dates: [
			{
				name:"Gary Sansome - Bald Man Sings Rhianna",
				datetime:'2020-08-20 20:00',
				isFeature: true,
				poster: 'sansome_poster.jpg',
				eventurl: 'https://www.facebook.com/events/591124124938983/'
			},
			{
				name:"Gary Sansome Workshop",
				datetime:'2020-08-20 20:00',
				dateUnconfirmed:true,
				eventurl: ''
			}								
		],
		slug: 'gary-sansome',
		html: `
			<p>Gary Sansome returns for a solo show after the great reception he had through Laughs Outta Lockdown in June. Don't miss out on this awesome Scotsman.</p>
			<p>MC CJ Alexander &Support Act Karen Leslie</p>
			<strong>$20 on the door or through eventfinda.</strong>
			<br/>

		`
	}
];

events.forEach(event => {
	event.html = event.html.replace(/^\t{3}/gm, '');
});

export default events;
