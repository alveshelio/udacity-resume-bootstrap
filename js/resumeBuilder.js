var bio = {
	"name" : "Helio Alves",
	"role" : "Ninja Front-End",
	"contacts" : {
		"mobile" : "514 . 531 . 4834",
		"email" : "helios25@gmail.com",
		"github" : "helioalves",
		"blog" : "http://www.helioalves.com/blog",
		"twitter" : "@helioalves",
		"location" : "Montreal, Canada"
	},
	"welcomeMessage" : "Soyez les bien venus sur mon Portfolio",
	"skills" : [ "HTML/CSS", "JavaScript", "Responsive" ],
	"biopic" : "images/photo.jpg",
	"display" : function() {

	}
};

var work = {
	"jobs" : [
		{
		"employer" : "Employer 1",
		"title" : "Junior Front-End Developer",
		"location" : "Montreal, QC",
		"dates" : "June 2008 - March 2010",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aspernatur beatae commodi corporis ea enim ex explicabo facere fugiat fugit incidunt, iure molestiae obcaecati officia pariatur provident quod, vero!"
		},
		{
			"employer" : "Employer 2",
			"title" : "Mid-level Front-End Developer",
			"location" : "Montreal, QC",
			"dates" : "June 2010 - March 2012",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum expedita explicabo incidunt, numquam pariatur perspiciatis praesentium ut velit voluptate. Ad aliquid blanditiis deleniti exercitationem, libero saepe. Autem eveniet excepturi libero odit optio temporibus voluptatum."
		},
		{
			"employer" : "Employer 3",
			"title" : "Senior Front-End Developer",
			"location" : "Montreal, QC",
			"dates" : "June 2012 - March 2014",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At earum est et facilis nihil perspiciatis, recusandae saepe sequi. Eligendi hic molestias porro rem, repellendus vel."
		}
	],
	"display" : function() {

	}
};

var project = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "2010",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores assumenda commodi consequatur culpa debitis dicta error et iure maxime minima molestiae, obcaecati praesentium quia quidem soluta vel voluptate voluptatem!",
			"images" : [ "images/project1/project1.png", "images/project1/project2.png", "images/project1/project3.png" ]
		},
		{
			"title" : "Project 2",
			"dates" : "2011",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores assumenda commodi consequatur culpa debitis dicta error et iure maxime minima molestiae, obcaecati praesentium quia quidem soluta vel voluptate voluptatem!",
			"images" : [ "images/project2/project1.png", "images/project2/project2.png", "images/project2/project3.png" ]
		},
		{
			"title" : "Project 3",
			"dates" : "2013",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores assumenda commodi consequatur culpa debitis dicta error et iure maxime minima molestiae, obcaecati praesentium quia quidem soluta vel voluptate voluptatem!",
			"images" : [ "images/project3/project1.png", "images/project3/project2.png", "images/project3/project3.png" ]
		}
	],
	"display" : function() {

	}
};

var education = {
	"schools" : [
		{
			"name" : "CPLN 1",
			"location" : "Neuchatel, Switzerland",
			"degree" : "College",
			"major" : "Computer Science",
			"dates" : "2000",
			"url" : "http://www.cpln.com"
		},
		{
			"name" : "CPLN 2",
			"location" : "Neuchatel, Switzerland",
			"degree" : "College",
			"major" : "Computer Science",
			"dates" : "2000",
			"url" : "http://www.cpln.com"
		}
	],
	"onlineClasses" : [
		{
			"title" : "Complete Web Developer Course",
			"school" : "Udemy",
			"date" : 2014,
			"url" : "https://www.udemy.com/complete-web-developer-course/"
		},
		{
			"title" : "Projects In JavaScript & JQuery",
			"school" : "Udemy",
			"date" : 2014,
			"url" : "https://www.udemy.com/projects-in-javascript-jquery/"
		},
		{
			"title" : "Front-End Web development",
			"school" : "Team Tree House",
			"date" : 2014,
			"url" : "https://teamtreehouse.com/tracks/front-end-web-development"
		}
	],
	"display" : function() {

	}
};

function createBio( obj) {
	var name = obj.name;
	var role = obj.role;
	var mobile = obj.contacts.mobile;
	var email = obj.contacts.email;
	var github = obj.contacts.github;
	var blog = obj.contacts.blog;
	var twitter = obj.contacts.twitter;
	var location = obj.contacts.location;
	var welcomeMessage = obj.welcomeMessage;
	var skills = obj.skills;
	var biopic = obj.biopic;

	var formattedName = HTMLheaderName.replace( "%data%", name );
	var formattedRole = HTMLheaderRole.replace( "%data%", role );
	var formattedMobile = HTMLmobile.replace( "%data%", mobile );
	var formattedEmail = HTMLemail.replace( "%data%", email );
	var formattedGithub = HTMLgithub.replace( "%data%", github );
	var formattedBlog = HTMLblog.replace( "%data%", blog );
	var formattedTwitter = HTMLtwitter.replace( "%data%", twitter );
	var formattedLocation = HTMLlocation.replace( "%data%", location );
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace( "%data%", welcomeMessage );
	var formattedBiopic = HTMLbioPic.replace( "%data%", biopic );

	$( "#header" ).prepend( formattedRole );
	$( "#header" ).prepend( formattedName );

	//$( "#header" ).prepend( HTMLcontactGeneric );
	$( "#topContacts" ).prepend( formattedLocation );
	$( "#topContacts" ).prepend( formattedTwitter );
	$( "#topContacts" ).prepend( formattedBlog );
	$( "#topContacts" ).prepend( formattedGithub );
	$( "#topContacts" ).prepend( formattedEmail );
	$( "#topContacts" ).prepend( formattedMobile );

	$( "#header" ).append( formattedWelcomeMessage );
	$( "#header" ).append( formattedBiopic );
	$( "#header" ).append( HTMLskillsStart );

	for ( var i = 0; i < skills.length; i++ ) {
		var formattedSkills = HTMLskills.replace( "%data%", skills[i] );
		$( "#skills" ).append( formattedSkills );
	}

}

function createWork( obj ) {

	for ( var job in obj.jobs ) {
		$( "#workExperience" ).append( HTMLworkStart );
		var formattedWorkEmployer = HTMLworkEmployer.replace( "%data%", obj.jobs[ job ][ "employer" ]);
		var formattedWorkTitle = HTMLworkTitle.replace( "%data%", obj.jobs[ job ][ "title" ]);
		var formattedWorkDates = HTMLworkDates.replace( "%data%", obj.jobs[ job ][ "dates" ]);
		var formattedWorkLocation = HTMLworkLocation.replace( "%data%", obj.jobs[ job ][ "location" ]);
		var formattedWorkDescription = HTMLworkDescription.replace( "%data%", obj.jobs[ job ][ "description" ]);

		$( ".work-entry" ).last().append( formattedWorkEmployer + formattedWorkTitle );
		$( ".work-entry" ).last().append( formattedWorkDates );
		$( ".work-entry" ).last().append( formattedWorkLocation );
		$( ".work-entry" ).last().append( formattedWorkDescription );
	}

}

function createProject( obj ) {


	var project = obj.projects;
	for ( var i = 0; i < project.length; i++ ) {
		$( "#projects" ).append( HTMLprojectStart );

		var formattedProjectTitle = HTMLprojectTitle.replace( "%data%", project[i ].title );
		var formattedProjectDates = HTMLprojectDates.replace( "%data%", project[i ].dates );
		var formattedProjectDescription = HTMLprojectDescription.replace( "%data%", project[ i ].description );

		$( ".project-entry" ).last().append( formattedProjectTitle );
		$( ".project-entry" ).last().append( formattedProjectDates );
		$( ".project-entry" ).last().append( formattedProjectDescription );

		// display all images of the project
		var imgArray = project[ i ].images;
		for ( var index = 0; index < imgArray.length; index++ ) {
			var formattedProjectImage = HTMLprojectImage.replace( "%data%", imgArray[ index ] );
			$( ".project-entry" ).last().append( formattedProjectImage );
		}

	}

}

function createEducation( obj ) {
	var formattedSchools = obj.schools;
	var formattedOnlineClasses = obj.onlineClasses;

	for ( var i = 0; i < formattedSchools.length; i++ ) {
		$( "#education" ).append( HTMLschoolStart );
		var formattedSchoolName = HTMLschoolName.replace( "%data%", formattedSchools[i].name );
		var formattedSchoolURL = HTMLschoolURL.replace( "%data%", formattedSchools[i].url );
		var formattedSchoolLocation = HTMLschoolLocation.replace( "%data%", formattedSchools[i].location );
		var formattedSchoolDegree = HTMLschoolDegree.replace( "%data%", formattedSchools[i].degree );
		var formattedSchoolDates = HTMLschoolDates.replace( "%data%", formattedSchools[i].dates );
		var formattedSchoolMajor = HTMLschoolMajor.replace( "%data%", formattedSchools[i].major );

		$( ".education-entry" ).last().append( formattedSchoolURL + formattedSchoolName + formattedSchoolDegree);
		$( ".education-entry" ).last().append(formattedSchoolLocation);
		$( ".education-entry" ).last().append(formattedSchoolDates);
		$( ".education-entry" ).last().append(formattedSchoolMajor);
	}

	$( "#education" ).append( HTMLonlineClasses );

	for ( var i = 0; i < formattedOnlineClasses.length; i++ ) {
		$( "#education" ).append( HTMLschoolStart );

		var formattedOnlineTitle = HTMLonlineTitle.replace( "%data%", formattedOnlineClasses[i ].title );
		var formattedOnlineSchool = HTMLonlineSchool.replace( "%data%", formattedOnlineClasses[i ].school );
		var formattedOnlineDates = HTMLonlineDates.replace( "%data%", formattedOnlineClasses[i ].date );
		var formattedOnlineURL = HTMLonlineURL.replace( "%data%", formattedOnlineClasses[i ].url) ;

		$( ".education-entry" ).last().append( formattedOnlineURL +formattedOnlineTitle + formattedOnlineSchool);
		$( ".education-entry" ).last().append( formattedOnlineDates);
	}
}

createBio( bio );
createWork( work );
createProject( project );
createEducation( education );
