import posts from './_images.json';

// const contents = JSON.stringify(posts.map(post => {
// 	return {
// 		title: post.title,
// 		slug: post.slug
// 	};
// }));

const contents = JSON.stringify(posts.children.map(post =>{
		return {
		title: post.name,
		children:  post.children.map(child => {
			return {
				path: child.path.replace('static','/hbcomedy')
			}
		}),
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}