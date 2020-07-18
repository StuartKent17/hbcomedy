// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const events = [	
	{
		title: 'The Man',
		url: '',
		venue: 'common_room',
		event_image: 'bricksbg.jpg',
		cost: 'Eventfinda or Paisley Stage $20, Door Sales $25',
		dates: [
			{
				name:"The Man 2019",
				datetime:'2019-08-09 20:00',
				eventurl: '#'
			}					
		],
		slug: 'the-man',
		html: `
			<p>Set at speakers corner in Londons Hyde park The Man is a minimalist solo show that uses a mashup of standup comedy and Brectian style theatrics to explore the idea of a modern jester holding court to his fellow citizens with dark and playful wit.</p>
		`
	},
];

events.forEach(event => {
	event.html = event.html.replace(/^\t{3}/gm, '');
});

export default events;
