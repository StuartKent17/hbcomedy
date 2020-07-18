// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const venues = 

    {
	 'tba' : {
        'name': "To be Announced",
        about_html: `
        <p>We will announce more information soon, for more information about the workshop, contact Karen</p>
        `,
     },
        'common_room' : {
            name: 'The Common Room',		
            url: 'https://commonroom2017.wordpress.com/',
            facebook: 'https://www.facebook.com/commonroomhb/',
            logo: 'common.jpg',
            image_1: 'commonroom_1.jpg',
            image_2: 'commonroom_2.jpg',
            image_3: 'commonroom_3.jpg',
            video: 'common_room.mp4',
            location: "Hastings",
            region: "Hawke's Bay",
            about_html: `
            <p>Welcome to the sweetest little bar in Hastings, Great Wine, craft beer and a simple menu done well. Regular Live music and staff that like to have a laugh.</p>
            `,
        },
        'paisley' : {
            name: 'Paisley Stage',
            url: 'https://commonroom2017.wordpress.com/',
            facebook: 'https://www.facebook.com/commonroomhb/',
            logo: 'paisley.jpg',
            image_1: 'commonroom_1.jpg',
            image_2: 'commonroom_2.jpg',
            image_3: 'commonroom_3.jpg',
            video: 'paisley.mp4',
            location: "Napier",
            region: "Hawke's Bay",
            about_html: `
            <p>Welcome to the sweetest little bar in Napier, Great Wine, craft beer and a simple menu done well. Regular Live music and staff that like to have a laugh.</p>
            `,
        }
    }

for (const [key, value] of Object.entries(venues)) {
    if (value.about_html) {
        value.about_html = value.about_html.replace(/^\t{3}/gm, '');
    }
    }
    
export default venues;
