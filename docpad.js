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
			{"name":"Seamless","logo_url":"/images/sponsors/seamless.png","link":"http://seamless.se/"},
			{"name":"TomTom","logo_url":"/images/sponsors/tomtom.png","link":"http://www.tomtom.com/pl_pl/"},
			{"name":"Mobica","logo_url":"/images/sponsors/mobica.png","description_html":"<p>Mobica provides high-end software development and integration services for consumer electronics manufacturers, operators, application vendors and platform providers. We work on all mainstream mobile platforms and operating systems and can work on virtually any component of a device: from embedded systems and device drivers, core multimedia components and middleware, through to innovative applications/UI design and connectivity solutions.</p><p>We have grown a world-class team of architects, project managers and software engineers based in our UK and Poland development centres, enabling us to provide consultancy services across the software and product lifecycle from initial concept definition and design, through to implementation and testing.</p><p>Mobica adds value to our customers through a combination of flexible consultancy services, the highest levels of technical expertise, and the creation of innovative, technically optimised software component design.</p><p>Mobica are listed in The Sunday Times Tech Track 100 as the 4th fastest growing private technology company in the UK in 2009. See: <a href='http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf'>http://www.fasttrack.co.uk/fasttrack2002/bin/techreport.pdf</a></p><p>Mobica is hiring and looking for talented engineers! Check our current job offers at <a href='http://www.mobica.com/careers'>http://www.mobica.com/careers</a></p><p>&nbsp;</p>"},
			{"name":"Harman","logo_url":"/images/sponsors/harman.jpg","link":"http://www.symphonyteleca.com/careers/jobs-in-poland/"}
      	],
      	gold: [
			{"name":"Ericpol","logo_url":"/images/sponsors/ericpol.png","link":"http://www.ericpol.pl/"},
			{"name":"eConsulting","logo_url":"/images/sponsors/econsulting.gif","link":"http://econsulting.pl/"},
			{"name":"GFT","logo_url":"/images/sponsors/gft.jpg","link":"http://gft.com/"},
			{"name":"Pracuj.pl","logo_url":"/images/sponsors/pracuj-pl.jpg","link":"http://www.pracuj.pl/"}
      	],
      	silver: [
			{"name":"Zeto","logo_url":"/images/sponsors/zeto.png","link":"http://www.ckzeto.pl/"},
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
			{"name":"Łódź WiOSłuje","logo_url":"/images/partners/lodz-wiosluje.png","description_html":"The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere! Join us on facebook: www.facebook.com/lodzwiosluje"},
			 {"name":"Toruń JUG","logo_url":"/images/partners/jugtorun5d_3_square.png","description_html":"Toruń JUG is a group of JVM technologies developers and enthusiasts. The main goal of the group is to gather people interested in JVM languages both professionally and personally. Our group contains programmers from many companies, scientists working on Toruń university, students and other technology passionates. We are encouraging knowledge sharing and collaboration in open source projects. Although we are the youngest JUG in Poland we are growing fast already having several big partners supporting us. More about Toruń JUG you can find at: torun.jug.pl"},
			 {"name":"Android Developer Group Poznań","logo_url":"/images/partners/adgp.jpeg","link":"http://www.meetup.com/Poznan-Android-Developer-Group/"},
			 {"name":"Polish Java User Group","logo_url":"/images/partners/polish-jug.png","description_html":"Polish Java User Group is a group of Java technology developers and enthusiasts. The main goal of the group is to popularize Java and modern software development methodologies. Since the beginning in 1999, the group had great impact on the Polish Java community growth. They main activity are meetings with students, programmers and project managers as well as conferences with famous professionals."},
			 {"name":"Mobile Central Europe 2015","logo_url":"/images/partners/mce2015.png","description_html":"We put our best effort into creating a stimulating experience for everyone involved. Help us make it one of the best mobile events in Europe! MCE is about bringing together the greatest minds in tech to exchange groundbreaking ideas. For Mobilization attendees promo-code will be offered giving 20% discount. Code will be visible during Mobilization event so you have to be on Mobilization! With this discount and early bird the ticket for MCE is really good price."},
			{"name":"GDG Kraków","logo_url":"/images/partners/gdgkrakow.png","link":"http://www.meetup.com/GDG-Krakow/"},
			// {"name":"MIT Łódź","logo_url":"/images/partners/mit.png","link":"http://mitlodz.pl"},
			{"name":"Dev Day 2015","logo_url":"/images/partners/abb-dev-day.svg","link":"http://devday.pl"},
			{"name":"Codepot.pl","logo_url":"/images/partners/codepot-logo.svg","link":"http://codepot.pl"},
			{"name":"Zwinna Łódź","logo_url":"/images/partners/zwinna_lodz.jpg","link":"http://zwinnalodz.eu/"},
			{"name":"Mobile Warsaw","logo_url":"/images/partners/mw-logo.png","link":"http://mobile-warsaw.pl"},
      	],
      	media: [

			// {"name":"AK74","logo_url":"/images/partners/ak74.png","description_html":"Cześć! Nazywam się Artur Kurasiński i jestem autorem tego bloga. Na co dzień zajmuję się Fokusem. Jestem współtwórcą cyklu spotkań dla przedsiębiorców Aula Polska oraz konkursu Aulery. Jako vloger prowadzę program „Seria z AK74″. Czasami udzielam się jako mentor na imprezach z cyklu Seedcamp, Labstar, DemoCamp, Intel Challenge, i StartupFest. Więcej znajdziesz tutaj: LinkedIn.com czy Facebooku lub Twitterze Chcesz się ze mną skontaktować?: Wyślij maila na adres: artur@revolver.pl"},
			// {"name":"Marketing Mobilny","logo_url":"/images/partners/marketing-mobilny.jpg","link":"http://marketingmobilny.pl"},
			// {"name":"Dworzynska","logo_url":"/images/partners/dworzynska.png","link":"http://dworzynska.com"},
			// {"name":"Praca IT","logo_url":"/images/partners/pracait.png","link":"http://pracait.com"},
			// {"name":"Software Developer's Journal","logo_url":"/images/partners/sdj.png","link":"http://sdjournal.pl"},
			{"name":"GoMobi","logo_url":"/images/partners/gomobi.jpg","link":"http://gomobi.pl"},
			{"name":"Programista Magazine","logo_url":"/images/partners/programistamag.png","link":"http://programistamag.pl"},
			 {"name":"MyApple","logo_url":"/images/partners/myapple.jpg","link":"http://myapple.pl"},
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
        		to:   '14:00'
        	},
          'slot-5': {
        		from: '14:00',
        		to:   '14:45'
        	},
          'slot-coffee-4': {
        	   	from: '14:45',
        		to:   '15:05'
        	},
          'slot-6': {
        		from: '15:05',
        		to:   '15:50'
        	},
          'slot-coffee-5': {
        	   	from: '15:50',
        		to:   '16:10'
        	},
          'slot-7': {
        		from: '16:10',
        		to:   '16:55'
        	},
        	'slot-finally': {
        		from: '16:55',
        		to:   '17:40'
        	},
      },
      speakers: {
		  "speaker-jens-ravens":{
			  "firstname":"Jens",
			  "lastname":"Ravens",
			  "bio_html":"Jens is an iOS and OS X Developer, writing ObjC since 2006. Currently working at nerdgeschoss helping clients to create awesome apps. Organiser of the monthly swift.berlin meetup. Scaring people with functional concepts since 2014.",
			  "www":"",
			  "twitter":"jensravens",
			  "photo_url":"/images/speakers/jens-ravens.jpg"
		  },
		  "speaker-tomasz-grynfelder":{
			  "firstname":"Tomasz",
			  "lastname":"Grynfelder",
			  "bio_html":"Tomasz Grynfelder, Senior Software Engineer currently at Polidea, mobile technologies freak highly focused on iOS development and security. Great fan of cycling and sailing.",
			  "www":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/tomasz-grynfelder.png"
		  },
		  "speaker-pawel-dudek":{
			  "firstname":"Paweł",
			  "lastname":"Dudek",
			  "bio_html":"I'm an iOS developer that has been building iOS apps for over 6 years now. I've shipped a variety of apps during my initial stage of career. Right now I'm focusing on building rich, content heavy and beautiful apps for Fortune 500 companies at a US-based startup Taptera. <br><br>I've been publicly speaking and sharing my knowledge for over a year now. You can find full list of my talks, including videos and slides here: <br><br> <a href=\"http://paweldudek.github.io/speaking/\">http://paweldudek.github.io/speaking/</a>",
			  "wwww":"http://paweldudek.github.io/speaking/",
			  "twitter":"",
			  "photo_url":"/images/speakers/pawel-dudek.jpeg"
		  },
		  "speaker-pawel-gajda":{
			  "firstname":"Paweł",
			  "lastname":"Gajda",
			  "bio_html":"Android Developer, laureate of the national finals of Microsoft Imagine Cup 2013. Associated with Android since 2010, when platform was taking its first steps. Enthusiast of JetBrains products (mainly IntelliJ IDEA). Student at Military University of Technology. Speaker at Mobile Warsaw. After-hours blogger, indie game developer and amateur runner.",
			  "wwww":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/pawel-gajda.png"
		  },
		  "speaker-miroslaw-stanek":{
			  "firstname":"Mirosław",
			  "lastname":"Stanek",
			  "bio_html":"Wielki pasjonat technologii mobilnych, na zmianę programuje Androida i iOSa, na co dzień Head of Mobile w firmie Azimo Money Transfer. Po godzinach prowadzi bloga <a href=\"http://frogermcs.github.io/\">http://frogermcs.github.io/</a>, tweetuje o mobile, udziela się na lokalnych meetupach i dokłada swoje cegiełki w open source. Fan hackathonów, szczególnie tych bardziej hardware'owych.",
			  "www":"http://frogermcs.github.io/",
			  "twitter":"",
			  "photo_url":"/images/speakers/miroslaw-stanek.jpeg"
		  },
		  "speaker-krzysztof-kocel":{
			  "firstname":"Krzysztof",
			  "lastname":"Kocel",
			  "bio_html":"Developer Androida w Allegro od 2012.<br>Pasjonat technologii mobilnych.<br>Prelegent na konferencji mobilization 2013.<br>Prywatnie piwowar domowy.",
			  "www":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/krzysztof-kocel.jpg"
		  },
		  "speaker-witold-wysota":{
			  "firstname":"Witold",
			  "lastname":"Wysota",
			  "bio_html":"Inżynier oprogramowania z wieloletnim doświadczeniem, wielki miłośnik Qt, którym zajmuje się od kilkunastu lat, uczestnik wcześniejszych konferencji Mobilization.",
			  "www":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/witold-wysota.jpg"
		  },
		  "speaker-michal-charmas":{
			  "firstname":"Michał",
			  "lastname":"Charmas",
			  "bio_html":"Aktualnie freelancer zajmujący się aplikacjami mobilnymi na platformę Android, co-founder startupu eWejściówki.pl i trener w firmie Bottega IT Solutions. Pasjonat Androida praktycznie od momentu jego powstania. W pracy szczególny nacisk kładzie na jakość zarówno pod względem architektury i czystości kodu jak i wydajności. Po pracy gitarzysta porwany przez muzykę.",
			  "www":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/michal-charmas.jpg"
		  },
		  "speaker-maciej-gorski":{
			  "firstname":"Maciej",
			  "lastname":"Górski",
			  "bio_html":"Maciej is a passionate Android developer. He cares about writing cleaner code and less of it. He is spending time to automate things to save even more time. He also bikes a lot and would love to be able to code while doing it… using only mind controlled wearables or bikeables.",
			  "www":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/maciej-gorski.jpg"
		  },
		  "speaker-piotr-krystyniak":{
			  "firstname":"Piotr",
			  "lastname":"Krystyniak",
			  "bio_html":"Moje zainteresowania zawodowe koncentrują się wokół platformy Android, której jestem szczerym entuzjastą. Na co dzień pracuję w Appunite budując aplikacje mobilne. Poza pracą również czynnie uczestniczę w różnorodnych eventach programistycznych - jestem m.in.  współorganizatorem spotkań z cyklu Poznań Android Developer Group, na których wielokrotnie miałem okazję przeprowadzać prelekcje.",
			  "www":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/piotr-krystyniak.png"
		  },
		  "speaker-peter-tuszynski":{
			"firstname": "Peter",
			"lastname": "Tuszyński",
			"bio_hmtl": "Mobile developer since early days of iPhone/Android platforms, product engineer. Co-founder of Appvetica lab. Almost-a-pilot :). Spoke at Mobilization in 2012 and a bunch of other conferences",
			"www":"www.appvetica.com",
			"twitter":"dusker",
			"photo_url":"/images/speakers/peter-tuszynski.png"
		  },
		  "speaker-fokke-zandbergen":{
			"firstname": "Fokke",
			"lastname":"Zandbergen",
			"bio_html": "Fokke is a Developer Evangelist for Appcelerator, the company behind Titanium. Before that, he was already active in the Titanium community for a long time with initiatives like gitt.io, ticons.fokkezb.nl, tidev.io, contributions to Alloy and Alloy widgets and by leading the Dutch user group. He has a passion for understanding new technologies by using and hacking them and sharing from that experience.",
			"wwww":"",
			"twitter":"",
			"photo_url":"/images/speakers/fokke-zandbergen.png"
		  },
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
		  "venue-1":{
			  "title":"Seamless"
		  },
		  "venue-2":{
			  "title":"TomTom"
		  },
		  "venue-3":{
			  "title":"Mobica"
		  },
		  "venue-4":{
			  "title":"Harman"
		  }
   	  },
   	  schedule: {
		  "slot-registration":{"break_key":"break-registration"},
		  "slot-hello-world":{"break_key":"break-hello-world"},
		  "slot-coffee-1":{"break_key":"break-coffee"},
		  "slot-coffee-2":{"break_key":"break-coffee"},
		  "slot-coffee-3":{"break_key":"break-coffee"},
		  "slot-lunch":{"break_key":"break-lunch"},
		  "slot-coffee-4":{"break_key":"break-coffee"},
		  "slot-coffee-5":{"break_key":"break-coffee"},
		  "slot-finally":{"break_key":"break-finally"}
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
