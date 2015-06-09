var docpadConfig, 
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

var imgBaseUrl = '/images/';
var sponsorsImgBaseUrl = imgBaseUrl + 'sponsors/';
var speakersImgBaseUrl = imgBaseUrl + 'speakers/';
var partnersImgBaseUrl = imgBaseUrl + 'partners/';

docpadConfig = {
  outPath: '../2015.mobilization.pl-gh-pages/',
  templateData: {
    site: {
      url: "http://mobilization.pl",
      oldUrls: ['www.mobilization.pl'],
      title: "Mobilization 2015",
      description: "Mobilization is a conference dedicated to mobile technologies. The main scope is development of mobile solutions aimed at smartphones and tablets, with particular interest in Android, iOS and Windows Phone platforms.",
      keywords: "mobilization, conference, mobile conference, Łódź",
      styles: [],
      scripts: [],
    
      event: {
      	title: 'Mobilization 2015',
      	location: {
      		lat: 51.7505458,
      		lng: 19.4501351,
      		place: 'Expo-Łódź Sp. z o.o.',
      		street: 'al. Politechniki 4',
      		city: 'Łódź',
      		zip: '93-590',
      		country: 'Polska'
      	},
      	data: '17th Oct 2015',
      	time: '07:30-17:30'
      },
      sponsors: {
      	diamond: [ 

      	],
      	platinum: [

      	],
      	gold: [

      	],
      	silver: [

      	],	
      	copper: [

      	]
      },
      partners: {
      	organizers: [
      		{ 
      			name: 'Java User Group Łódź',
      			logo_url: partnersImgBaseUrl + 'juglodz.png', 
      			description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódźarea. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
      		}
      	],
      	supporters: [

      	],
      	community: [

      	],
      	media: [

      	]
      },
      slots: {
      	'slot-registration': {
      		from: '7:30',
      		to:   '9:00'
      	}, 
      	'slot-hello-world': {
      		from: '9:00',
      		to:   '9:10'
      	},
      	'slot-1': {
      		from: '9:10',
      		to:   '9:55'
      	}, 
      	'slot-coffee-1': {
      	   	from: '9:55',
      		to:   '10:15'
      	},
      	'slot-2': {
      		from: '10:15',
      		to:   '11:00'
      	}, 
      	'slot-coffee-2': {
      	   	from: '11:00',
      		to:   '11:20'
      	},
      	'slot-3': {
      		from: '11:20',
      		to:   '12:05'
      	}, 
      	'slot-coffee-3': {
      	   	from: '12:05',
      		to:   '12:25'
      	},
       	'slot-4': {
      		from: '12:25',
      		to:   '13:10'
      	}, 
      	'slot-lunch': {
      	   	from: '13:10',
      		to:   '14:30'
      	},
        'slot-5': {
      		from: '14:30',
      		to:   '15:15'
      	},
        'slot-coffee-4': {
      	   	from: '15:15',
      		to:   '15:30'
      	},
        'slot-6': {
      		from: '15:30',
      		to:   '16:15'
      	},
        'slot-coffee-5': {
      	   	from: '16:15',
      		to:   '16:30'
      	},
        'slot-7': {
      		from: '16:30',
      		to:   '17:15'
      	},
      	'slot-finally': {
      		from: '17:15',
      		to:   '18:00'
      	},
      },
      speakers: {

   	  },
   	  talks: {
   	  	
   	  },
   	  breaks: {
   	  	'break-registration': {
   	  		title: 'Registration',
   	  		description_html: 'If you do not want to miss any presentation please register between 7:30-9:10. However, registration will be opened all day!'
   	  	},
   	  	'break-hello-world': {
   	  		title: 'Hello World',
   	  		description_html: 'This is couple of words about Mobilization. For community by community.'
   	  	},
   	  	'break-coffee': {
   	  	 	title: 'Coffee Break',
   	  		description_html: ''
   	  	},
   	  	'break-lunch': {
   	  		title: 'Lunch Break',
   	  		description_html: 'There is Solider soup - "Grochówka" for everyone! VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.'
   	  	},
   	  	'break-finally': {
   	  		title: 'Finally',
   	  		description_html: ''
   	  	}
   	  },
   	  venues: {

   	  },
   	  schedule: {

   	  }
    },
    getPreparedTitle: function() {
      if (this.document.title) {
        return this.document.title + " | " + this.site.title;
      } else {
        return this.site.title;
      }
    },
    getPreparedDescription: function() {
      return this.document.description || this.site.description;
    },
    getPreparedKeywords: function() {
      return this.site.keywords.concat(this.document.keywords || []).join(', ');
    }
  },
  collections: {
    posts: function() {
      return this.getCollection('documents').findAllLive({
        relativeOutDirPath: 'posts'
      });
    }
  },
  environments: {
    development: {
      templateData: {
        site: {
          url: false
        }
      }
    }
  },
  events: {
    serverExtend: function(opts) {
      var docpad, latestConfig, newUrl, oldUrls, server;
      server = opts.server;
      docpad = this.docpad;
      latestConfig = docpad.getConfig();
      oldUrls = latestConfig.templateData.site.oldUrls || [];
      newUrl = latestConfig.templateData.site.url;
      return server.use(function(req, res, next) {
        var ref;
        if (ref = req.headers.host, indexOf.call(oldUrls, ref) >= 0) {
          return res.redirect(newUrl + req.url, 301);
        } else {
          return next();
        }
      });
    }
  }
};

module.exports = docpadConfig;

// ---
// generated by coffee-script 1.9.2
