//var sampleArray = [0,0,7];
//
//var incrementLastArrayElement = function(_array) {
//	var newArray = [];
	// Your code should make newArray equal to an array that has the same
	// values as _array, but the last number has increased by one.

	// For example:
	// _array = [1, 2, 3];
	// turns into:
	// newArray = [1, 2, 4];

	// Your code goes in here!
	//newArray.push( _array );
//	for ( var i = 0; i < _array.length; i++ ) {
//		var endArray = _array.length - 1;
//		if (i === endArray ) {
//			newArray.push( _array[i] + 1);
//		} else {
//			newArray.push(_array[i]);
//		}
//
//	}
//
//	console.log( newArray );
//	// Don't delete this line!
//	return newArray;
//};
//
//incrementLastArrayElement( sampleArray );

//var name = "AlbERt EINstEiN";
//
//function nameChanger(oldName) {
//	var finalName = oldName.split( " " );
//	return finalName[0 ].charAt(0 ).toUpperCase() + finalName[0].slice(1 ).toLowerCase() + " " + finalName[ 1 ].toUpperCase();
//}
//
//// Did your code work? The line below will tell you!
//console.log(nameChanger(name));


//var work = {
//	"jobs": [
//		{
//			"employer": "Udacity",
//			"title": "Course Developer",
//			"location": "Mountain View, CA",
//			"dates": "Feb 2014 - Current",
//			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//		},
//		{
//			"employer": "LearnBIG",
//			"title": "Software Engineer",
//			"location": "Seattle, WA",
//			"dates": "May 2013 - Jan 2014",
//			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//		},
//		{
//			"employer": "LEAD Academy Charter High School",
//			"title": "Science Teacher",
//			"location": "Nashville, TN",
//			"dates": "Jul 2012 - May 2013",
//			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//		},
//		{
//			"employer": "Stratford High School",
//			"title": "Science Teacher",
//			"location": "Nashville, TN",
//			"dates": "Jun 2009 - Jun 2012",
//			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//		}
//	]
//};
//
//// Your code goes here! Let me help you get started
//
//function locationizer(obj) {
//	var locationArray = [];
//
//	//for ( var job in obj ) {
//	//	for ( var i = 0; i < obj[job].length; i++ ) {
//	//		locationArray.push( obj[job][i].location );
//	//	}
//	//}
//
//	for ( var items in obj.jobs ) {
//		locationArray.push( obj.jobs[items].location );
//	}
//
//	return locationArray;
//}
//
//// Did locationizer() work? This line will tell you!
//console.log(locationizer(work));


