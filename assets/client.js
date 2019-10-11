$(document).ready(function(){
	
        // CORS issue - will have to come back to this.. 
	// And after looking into this more closely, I understand now why the assignment instructions call for a local server environment to be set up.

	//$.getJSON('release.json', function(json) {
	//	var data = template(json);
	//	$('.news').html(data);
	//});


	var data = {
	    "releases": [
	    {
		"headline": "Q4 launches next generation investor targeting driven by AI",
		"body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem asperiores dolorum, at error excepturi facere cum deleniti vel incidunt optio, necessitatibus perspiciatis mollitia illum? Quisquam qui facere, dolor voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, laboriosam dolore, non error maxime blanditiis itaque odit, ipsam pariatur deserunt nobis minima quos magni impedit neque ducimus suscipit asperiores aliquid.",
		"date": "2018-07-30T13:54:00.0000000Z",
		"thumb": "images/logo.png"
	    },
	    {
		"headline": "Q4 launches “Pipeline” to automate investor relations deal flow.",
		"body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem asperiores dolorum, at error excepturi facere cum deleniti vel incidunt optio, necessitatibus perspiciatis mollitia illum? Quisquam qui facere, dolor voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dignissimos tempore blanditiis reiciendis, magnam pariatur in quia cum dolorum provident. Velit hic earum temporibus ipsam, rerum error modi dolores culpa.",
		"date": "2018-07-29T13:54:00.0000000Z",
		"thumb": "images/logo.png"
	    },
	    {
		"headline": "How technology will transform investor relations over the next year",
		"body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem asperiores dolorum, at error excepturi facere cum deleniti vel incidunt optio, necessitatibus perspiciatis mollitia illum? Quisquam qui facere, dolor voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nisi, quidem vitae perferendis dolorum necessitatibus omnis aspernatur expedita nam illum debitis amet incidunt. Cumque veniam architecto sed harum earum nulla.",
		"date": "2018-07-28T13:54:00.0000000Z",
		"thumb": "images/logo.png"
	    },
	    {
		"headline": "Q4 releases iris™, a new artificial intelligence engine for investor relations",
		"body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem asperiores dolorum, at error excepturi facere cum deleniti vel incidunt optio, necessitatibus perspiciatis mollitia illum? Quisquam qui facere, dolor voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum amet voluptas dicta suscipit minus eaque dolorum itaque laudantium aperiam, nesciunt modi sequi sint. Doloribus nulla voluptatem a fugit illo!",
		"date": "2018-07-27T13:54:00.0000000Z",
		"thumb": "images/logo.png"
	    },
	    {
		"headline": "Q4 Inc. Releases Algorithm to Track and Predict Shareholder Activism",
		"body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem asperiores dolorum, at error excepturi facere cum deleniti vel incidunt optio, necessitatibus perspiciatis mollitia illum? Quisquam qui facere, dolor voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum vel animi quidem nihil atque illum dicta explicabo odit quia magni beatae placeat amet a, expedita aut ab repellat fugiat nam.",
		"date": "2018-07-26T13:54:00.0000000Z",
		"thumb": "images/logo.png"
	    }]
	};

	// Get only the latest 3 news releases
	data.releases = data.releases.slice(0,3);

	Handlebars.registerHelper('formatDate', function(date, format) {
		return moment(date).format("DD/MM/YY h:MM:ss a");
	});

	Handlebars.registerHelper('truncate', function(text, num) {
		return text.substr(0,num) + '...';
	});

	// Retrieve the template data from the HTML .
	var newsSource = document.getElementById("release-template").innerHTML;


	// Compile the template data into a function
	var template = Handlebars.compile(newsSource);

	var newsReleaseHTML = template(data);

	$('.news').html(newsReleaseHTML);

});
