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
		url: '',
		event_image: 'gary_sansome.jpg',
		venue: 'tba',
		dates: [
			{
				name:"Gary Sansome Live",
				datetime:'2020-08-20 20:00',
				isFeature: true,
				eventurl: '#'
			},
			{
				name:"Gary Sansome Workshop",
				datetime:'2020-08-20 20:00',
				dateUnconfirmed:true,
				eventurl: '#'
			}								
		],
		slug: 'gary-sansome',
		html: `
			<p>Standup comedy is a great way to practice your stuff, enjoy breakout comedy acts, meet new people and support local businesses.</p>

			<p>If you want to perform, call or text Karen on 027 7596481 to reserve a slot, or ask for Karen on the night.</p>
		`
	}
];

events.forEach(event => {
	event.html = event.html.replace(/^\t{3}/gm, '');
});

export default events;
