
$("#main").append(internationalizeButton);

function inName(name) {
    var names = name.trim().split(" ");

    return  names[0].capitalize() + " " + names[names.length - 1].toUpperCase();
}

String.prototype.capitalize = function() {

    var string = this.toLowerCase();
    string = string.slice(0, 1).toUpperCase() + string.slice(1);

    return string;
};

var work = {
	"jobs": [
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery boy",
			"location": "New York",
			"dates": "1996 - 1999",
			"description": "Donec sed odio dui. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
		},
        {
            "employer": "Planet Express",
            "title": "Delivery boy",
            "location": "New New York",
            "dates": "3000",
            "description": "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
        },
	]
};

var projects = {
	"projects": [
		{
			"title": "Planet Express website",
			"dates": "3000",
			"description": "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
			"images": ["http://lorempixel.com/400/299/", "http://lorempixel.com/401/299/"]
		},
        {
            "title": "Planet Express website",
            "dates": "3000",
            "description": "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            "images": ["http://lorempixel.com/400/300/", "http://lorempixel.com/401/300/"]
        }
	]
};

var bio = {
	"name": "Enrico Boccadifuoco",
	"role": "Front-end developer",
	"welcomeMessage": "Hello World!",
    "biopic": "images/fry.jpg",
	"contacts": {
		"mobile": "650-000-555",
		"email": "boccadifuoco@gmail.comm",
		"github": "enricoboccadifuoco",
		"twitter": "@EBoccadifuoco",
		"location": "Palermo"
	},
	"skills": ["skill1", "skill2", "skill3", "skill4"]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    $("#header").append(HTMLWelcomeMsg.replace("%data%", this.welcomeMessage));

    if (bio.skills) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = "";
        for (var i = bio.skills.length - 1; i >= 0; i--) {
            formattedSkill += HTMLskills.replace("%data%", bio.skills[i]);
        };

        $("#skills").append(formattedSkill);
    }
};


work.display = function () {
    for (job in this.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer       = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
        var formattedTitle          = HTMLworkTitle.replace("%data%", this.jobs[job].title);
        var formattedDates          = HTMLworkDates.replace("%data%", this.jobs[job].dates);
        var formattedLocation       = HTMLworkLocation.replace("%data%", this.jobs[job].location);
        var formattedDescription    = HTMLworkDescription.replace("%data%", this.jobs[job].description);

        var formattedWorkExperience = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedWorkExperience);
    }
}

projects.display = function() {
    for (project in this.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle          = HTMLprojectTitle.replace("%data%", this.projects[project].title);
        var formattedDates          = HTMLprojectDates.replace("%data%", this.projects[project].dates);
        var formattedDescription    = HTMLprojectDescription.replace("%data%", this.projects[project].description);

        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        var formattedImages = "";
        for (image in this.projects[project].images) {
            formattedImages = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);

            $(".project-entry:last").append(formattedImages);
        }

    }
};

var education = {
    "schools": [
        {
            "name": "Univerity of Pisa",
            "location": "Pisa, IT",
            "degree": "Electronic Engineering",
            "majors": ["CS"],
            "dates": "2011-2013",
            "url": "unipi.it"
        }
    ],
    "onlineCourses": [
        {
            "title": "CS50",
            "school": "HarvardX",
            "dates": "2014",
            "url": "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
        }
    ]
};

education.display = function() {

    for (school in this.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = "";
        for (major in this.schools[school].majors) {
            formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);

            $(".education-entry:last").append(formattedSchoolMajor);
        }

    }

    if (this.onlineCourses.length) {
        $("#education").append(HTMLonlineClasses);

        for (course in this.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLschoolDates.replace("%data%", this.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }

};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

// altro

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!

    var localizedRuleNames = [];

    for(var ruleResult in results.formattedResults.ruleResults) {
        localizedRuleNames.push(results.formattedResults.ruleResults[ruleResult].localizedRuleName);
    }

    return localizedRuleNames;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!

    var bytesNumber = 0;
    bytesNumber = parseInt(results.pageStats.javascriptResponseBytes, 10) + parseInt(results.pageStats.imageResponseBytes, 10) + parseInt(results.pageStats.htmlResponseBytes, 10) + parseInt(results.pageStats.cssResponseBytes, 10) + parseInt(results.pageStats.otherResponseBytes, 10) + parseInt(results.pageStats.totalRequestBytes, 10);

    return bytesNumber;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

 console.log(psinsights);

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
