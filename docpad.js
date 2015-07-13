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
      	platinum: [
			{"name":"Seamless","logo_url":"/images/sponsors/seamless.png","link":"http://seamless.se/"},{"name":"TomTom","logo_url":"/images/sponsors/tomtom.png","link":"http://www.tomtom.com/pl_pl/"}
      	],
      	gold: [
			{"name":"Ericpol","logo_url":"/images/sponsors/ericpol.jpg","link":"http://www.ericpol.pl/"}
      	],
      	silver: [

      	],
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
			{"name":"Upmenu","logo_url":"/images/partners/upmenu.png","description_html":"Upmenu had created new layout for Mobilization 2014! which is used for Mobilization 2015. Besides creating mobile and responsive layouts they work in Horeca business and help restaurants with online orders. Check out more on their webpage"},
      	],
      	community: [
			// {"name":"Łódź WiOSłuje","logo_url":"/images/partners/lodz-wiosluje.png","description_html":"The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere! Join us on facebook: www.facebook.com/lodzwiosluje"},
			// {"name":"Toruń JUG","logo_url":"/images/partners/jugtorun.png","description_html":"Toruń JUG is a group of JVM technologies developers and enthusiasts. The main goal of the group is to gather people interested in JVM languages both professionally and personally. Our group contains programmers from many companies, scientists working on Toruń university, students and other technology passionates. We are encouraging knowledge sharing and collaboration in open source projects. Although we are the youngest JUG in Poland we are growing fast already having several big partners supporting us. More about Toruń JUG you can find at: torun.jug.pl"},
			// {"name":"Polish Java User Group","logo_url":"/images/partners/polish-jug.png","description_html":"Polish Java User Group is a group of Java technology developers and enthusiasts. The main goal of the group is to popularize Java and modern software development methodologies. Since the beginning in 1999, the group had great impact on the Polish Java community growth. They main activity are meetings with students, programmers and project managers as well as conferences with famous professionals."},
			// {"name":"Mobile Central Europe 2015","logo_url":"/images/partners/mce2015.png","description_html":"We put our best effort into creating a stimulating experience for everyone involved. Help us make it one of the best mobile events in Europe! MCE is about bringing together the greatest minds in tech to exchange groundbreaking ideas. For Mobilization attendees promo-code will be offered giving 20% discount. Code will be visible during Mobilization event so you have to be on Mobilization! With this discount and early bird the ticket for MCE is really good price."},
			{"name":"GDG Kraków","logo_url":"/images/partners/gdgkrakow.png","link":"http://www.meetup.com/GDG-Krakow/"},
			// {"name":"MIT Łódź","logo_url":"/images/partners/mit.png","link":"http://mitlodz.pl"},
			{"name":"Dev Day 2015","logo_url":"/images/partners/abb-dev-day.svg","link":"http://devday.pl"},
			{"name":"Codepot.pl","logo_url":"/images/partners/codepot-logo.svg","link":"http://codepot.pl"},
      	],
      	media: [
			// {"name":"AK74","logo_url":"/images/partners/ak74.png","description_html":"Cześć! Nazywam się Artur Kurasiński i jestem autorem tego bloga. Na co dzień zajmuję się Fokusem. Jestem współtwórcą cyklu spotkań dla przedsiębiorców Aula Polska oraz konkursu Aulery. Jako vloger prowadzę program „Seria z AK74″. Czasami udzielam się jako mentor na imprezach z cyklu Seedcamp, Labstar, DemoCamp, Intel Challenge, i StartupFest. Więcej znajdziesz tutaj: LinkedIn.com czy Facebooku lub Twitterze Chcesz się ze mną skontaktować?: Wyślij maila na adres: artur@revolver.pl"},
			// {"name":"Marketing Mobilny","logo_url":"/images/partners/marketing-mobilny.jpg","link":"http://marketingmobilny.pl"},
			// {"name":"Dworzynska","logo_url":"/images/partners/dworzynska.png","link":"http://dworzynska.com"},
			// {"name":"Praca IT","logo_url":"/images/partners/pracait.png","link":"http://pracait.com"},
			// {"name":"Software Developer's Journal","logo_url":"/images/partners/sdj.png","link":"http://sdjournal.pl"},
			{"name":"GoMobi","logo_url":"/images/partners/gomobi.jpg","link":"http://gomobi.pl"},
			// {"name":"Programista Magazine","logo_url":"/images/partners/programistamag.png","link":"http://programistamag.pl"},
			// {"name":"MyApple","logo_url":"/images/partners/myapple.jpg","link":"http://myapple.pl"},
			// {"name":"4tech.tv","logo_url":"/images/partners/4techmobile.png","link":"http://testytelefonow.pl"},
			// {"name":"StartUpTV","logo_url":"/images/partners/startuptv.png","link":"http://startuptv.pl"},
//			{"name":"Linux Magazine","logo_url":"/images/partners/linuxmag.png","link":"http://www.linux-magazine.pl"},
			// {"name":"Kariera Plus","logo_url":"/images/partners/karieraplus.png","link":"http://karieraplus.pl"},
			// {"name":"Młodzi w Łodzi","logo_url":"/images/partners/mlodzi-w-lodzi.jpg","link":"http://mlodziwlodzi.pl"},
			{"name":"Helion","logo_url":"/images/partners/helionpl.png","link":"http://helion.pl"},
			// {"name":"Manning Publications","logo_url":"/images/partners/manning.png","link":"http://www.manning.com"}
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
