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
		venue: 'The Common Room',		
		venue_url: 'https://commonroom2017.wordpress.com/',
		venue_facebook: 'https://www.facebook.com/commonroomhb/',
		venue_logo: 'common.jpg',
		cost: 'Free Entry',
		venue_image_1: 'commonroom_1.jpg',
		venue_image_2: 'commonroom_2.jpg',
		venue_image_3: 'commonroom_3.jpg',
		venue_video: 'common_room.mp4',
		venue_about: `
		<p>Welcome to the sweetest little bar in Hastings, Great Wine, craft beer and a simple menu done well. Regular Live music and staff that like to have a laugh.</p>
		`,
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
		location: "Hastings",
		region: "Hawke's Bay",
		slug: 'gary-sansome',
		html: `
			<p>Standup comedy is a great way to practice your stuff, enjoy breakout comedy acts, meet new people and support local businesses.</p>

			<p>If you want to perform, call or text Karen on 027 7596481 to reserve a slot, or ask for Karen on the night.</p>
		`
	},
	{
		title: 'Hastings Standup Comedy',
		url: '',
		event_image: 'comedyclub.jpg',
		venue: 'The Common Room',		
		venue_url: 'https://commonroom2017.wordpress.com/',
		venue_facebook: 'https://www.facebook.com/commonroomhb/',
		venue_logo: 'common.jpg',
		cost: 'Free Entry',
		venue_image_1: 'commonroom_1.jpg',
		venue_image_2: 'commonroom_2.jpg',
		venue_image_3: 'commonroom_3.jpg',
		venue_video: 'common_room.mp4',
		venue_about: `
		<p>Welcome to the sweetest little bar in Hastings, Great Wine, craft beer and a simple menu done well. Regular Live music and staff that like to have a laugh.</p>
		`,
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
		location: "Hastings",
		region: "Hawke's Bay",
		slug: 'hastings-standup-comedy',
		html: `
			<p>Standup comedy is a great way to practice your stuff, enjoy breakout comedy acts, meet new people and support local businesses.</p>

			<p>If you want to perform, call or text Karen on 027 7596481 to reserve a slot, or ask for Karen on the night.</p>
		`
	},
	{
		title: 'Napier Standup Comedy',
		url: '',
		event_image: 'paisely.jpg',
		venue: 'Paisely Stage',		
		cost: 'Koha Entry',
		venue_url: 'https://commonroom2017.wordpress.com/',
		venue_facebook: 'https://www.facebook.com/commonroomhb/',
		venue_logo: 'common.jpg',
		venue_image_1: 'commonroom_1.jpg',
		venue_image_2: 'commonroom_2.jpg',
		venue_image_3: 'commonroom_3.jpg',
		venue_video: 'paisely.mp4',
		venue_about: `
		<p>Welcome to the sweetest little bar in Napier, Great Wine, craft beer and a simple menu done well. Regular Live music and staff that like to have a laugh.</p>
		`,
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
		location: "Napier",
		region: "Hawke's Bay",
		slug: 'napier-standup-comedy',
		html: `
			<p>Standup comedy is a great way to practice your stuff, enjoy breakout comedy acts, meet new people and support local businesses.</p>

			<p>If you want to perform, call or text Karen on 027 7596481 to reserve a slot, or ask for Karen on the night.</p>
		`
	},
	{
		title: 'The Man',
		url: '',
		event_image: 'bricksbg.jpg',
		venue: 'Paisely Stage',		
		cost: 'Eventfinda or Paisley Stage $20, Door Sales $25',
		venue_url: 'https://commonroom2017.wordpress.com/',
		venue_facebook: 'https://www.facebook.com/commonroomhb/',
		venue_logo: 'common.jpg',
		venue_image_1: 'commonroom_1.jpg',
		venue_image_2: 'commonroom_2.jpg',
		venue_image_3: 'commonroom_3.jpg',
		venue_video: 'paisely.mp4',
		venue_about: `
		<p>Welcome to the sweetest little bar in Napier, Great Wine, craft beer and a simple menu done well. Regular Live music and staff that like to have a laugh.</p>
		`,
		dates: [
			{
				name:"The Man 2019",
				datetime:'2019-08-09 20:00',
				eventurl: '#'
			}					
		],
		location: "Hastings",
		region: "Hawke's Bay",
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
