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
		var formattedName = HTMLheaderName.replace( "%data%", this.name );
		var formattedRole = HTMLheaderRole.replace( "%data%", this.role );
		var formattedMobile = HTMLmobile.replace( "%data%", this.mobile );
		var formattedEmail = HTMLemail.replace( "%data%", this.email );
		var formattedGithub = HTMLgithub.replace( "%data%", this.github );
		var formattedBlog = HTMLblog.replace( "%data%", this.blog );
		var formattedTwitter = HTMLtwitter.replace( "%data%", this.twitter );
		var formattedLocation = HTMLlocation.replace( "%data%", this.location );
		var formattedWelcomeMessage = HTMLWelcomeMsg.replace( "%data%", this.welcomeMessage );
		var formattedBiopic = HTMLbioPic.replace( "%data%", this.biopic );

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

		for ( var skill in this.skills ) {
			var formattedSkills = HTMLskills.replace( "%data%", this.skills[ skill ] );
			$( "#skills" ).append( formattedSkills );
		}
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
		for ( var job in this.jobs ) {
			$( "#workExperience" ).append( HTMLworkStart );
			var formattedWorkEmployer = HTMLworkEmployer.replace( "%data%", this.jobs[ job ][ "employer" ]);
			var formattedWorkTitle = HTMLworkTitle.replace( "%data%", this.jobs[ job ][ "title" ]);
			var formattedWorkDates = HTMLworkDates.replace( "%data%", this.jobs[ job ][ "dates" ]);
			var formattedWorkLocation = HTMLworkLocation.replace( "%data%", this.jobs[ job ][ "location" ]);
			var formattedWorkDescription = HTMLworkDescription.replace( "%data%", this.jobs[ job ][ "description" ]);

			$( ".work-entry" ).last().append( formattedWorkEmployer + formattedWorkTitle );
			$( ".work-entry" ).last().append( formattedWorkDates );
			$( ".work-entry" ).last().append( formattedWorkLocation );
			$( ".work-entry" ).last().append( formattedWorkDescription );
		}
	}
};

var project = {
	"projects" : [
		{
			"title" : "Project 1",
			"url" : "/project1.html",
			"dates" : "2010",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores assumenda commodi consequatur culpa debitis dicta error et iure maxime minima molestiae, obcaecati praesentium quia quidem soluta vel voluptate voluptatem!",
			"images" : [ "images/project1/project1.png", "images/project1/project2.png", "images/project1/project3.png" ]
		},
		{
			"title" : "Project 2",
			"url" : "/project2.html",
			"dates" : "2011",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores assumenda commodi consequatur culpa debitis dicta error et iure maxime minima molestiae, obcaecati praesentium quia quidem soluta vel voluptate voluptatem!",
			"images" : [ "images/project2/project1.png", "images/project2/project2.png", "images/project2/project3.png" ]
		},
		{
			"title" : "Project 3",
			"url" : "/project2.html",
			"dates" : "2013",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores assumenda commodi consequatur culpa debitis dicta error et iure maxime minima molestiae, obcaecati praesentium quia quidem soluta vel voluptate voluptatem!",
			"images" : [ "images/project3/project1.png", "images/project3/project2.png", "images/project3/project3.png" ]
		}
	],
	"display" : function() {
		for ( var project in this.projects ) {
			$( "#projects" ).append( HTMLprojectStart );

			var formattedProjectTitle = HTMLprojectTitle.replace( "%data%", this.projects[ project ].title );
			var formattedProjectURL = formattedProjectTitle.replace( "#", this.projects[ project ].url );
			var formattedProjectDates = HTMLprojectDates.replace( "%data%", this.projects[ project ].dates );
			var formattedProjectDescription = HTMLprojectDescription.replace( "%data%", this.projects[ project ].description );

			$( ".project-entry" ).last().append( formattedProjectURL );
			$( ".project-entry" ).last().append( formattedProjectDates );
			$( ".project-entry" ).last().append( formattedProjectDescription );

			// If there are images in the project, display all images
			if ( this.projects[ project ].images.length > 0 ) {
				var imgArray = this.projects[ project ].images;
				for ( var index = 0; index < imgArray.length; index++ ) {
					var formattedProjectImage = HTMLprojectImage.replace( "%data%", imgArray[ index ] );
					$( ".project-entry" ).last().append( formattedProjectImage );
				}
			}
		}
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
		for ( var school in this.schools ) {
			$( "#education" ).append( HTMLschoolStart );
			var formattedSchoolName = HTMLschoolName.replace( "%data%", this.schools[ school ].name );
			var formattedSchoolURL = HTMLschoolURL.replace( "%data%",  this.schools[ school ].url );
			var formattedSchoolLocation = HTMLschoolLocation.replace( "%data%",  this.schools[ school ].location );
			var formattedSchoolDegree = HTMLschoolDegree.replace( "%data%",  this.schools[ school ].degree );
			var formattedSchoolDates = HTMLschoolDates.replace( "%data%",  this.schools[ school ].dates );
			var formattedSchoolMajor = HTMLschoolMajor.replace( "%data%",  this.schools[ school ].major );

			$( ".education-entry" ).last().append( formattedSchoolURL + formattedSchoolName + formattedSchoolDegree);
			$( ".education-entry" ).last().append(formattedSchoolLocation);
			$( ".education-entry" ).last().append(formattedSchoolDates);
			$( ".education-entry" ).last().append(formattedSchoolMajor);
		}

		$( "#education" ).append( HTMLonlineClasses );

		for ( var onlineClass in this.onlineClasses ) {
			$( "#education" ).append( HTMLschoolStart );

			var formattedOnlineTitle = HTMLonlineTitle.replace( "%data%", this.onlineClasses[ onlineClass ].title );
			var formattedOnlineSchool = HTMLonlineSchool.replace( "%data%", this.onlineClasses[ onlineClass ].school );
			var formattedOnlineDates = HTMLonlineDates.replace( "%data%", this.onlineClasses[ onlineClass ].date );
			var formattedOnlineURL = HTMLonlineURL.replace( "%data%", this.onlineClasses[ onlineClass ].url) ;

			$( ".education-entry" ).last().append( formattedOnlineURL +formattedOnlineTitle + formattedOnlineSchool);
			$( ".education-entry" ).last().append( formattedOnlineDates);
		}
	}
};

// Appending the map to the page
$( "#mapDiv" ).append( googleMap );

bio.display();
work.display();
project.display();
education.display();
