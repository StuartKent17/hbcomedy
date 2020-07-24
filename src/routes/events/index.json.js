import * as eventsList from './events/*.js';
import moment from 'moment';



let events = [];
for (const [key, value] of Object.entries(eventsList)) {
	events = events.concat(value);
}

const contents = JSON.stringify(events.map(event => {

	var only_future = event.dates.filter(function(date, index, array){
		if(moment(date.datetime).isAfter(moment())){
			return true;
		}
	});

	
	var nextDate = only_future.sort(function(a,b) {
		return moment(a.datetime).diff(b.datetime);
	});


	return {
		title: event.title,
		slug: event.slug,
		nextDate: nextDate[0] ? nextDate[0] : null,
		venue: event.venue,
		lastDate: nextDate[0] ? null : event.dates.pop(),
		isFeature: nextDate[0] ? nextDate[0].isFeature : null,
		dateUnconfirmed: nextDate[0] ? nextDate[0].dateUnconfirmed : null,
		image: event.event_image
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}