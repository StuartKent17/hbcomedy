import posts from './_posts.js';

import moment from 'moment';
const contents = JSON.stringify(posts.map(post => {
	console.log(moment());
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}