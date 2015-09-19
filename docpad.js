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
			{"name":"Harman","logo_url":"/images/sponsors/harman.jpg","link":"http://www.symphonyteleca.com/careers/jobs-in-poland/"},
			{"name":"HP","logo_url":"/images/sponsors/hp.png","link":"http://www.linkedin.com/company/hp-enterprise-services"},
      	],
      	gold: [
			{"name":"Ericpol","logo_url":"/images/sponsors/ericpol.png","link":"http://www.ericpol.pl/"},
			{"name":"eConsulting","logo_url":"/images/sponsors/econsulting.gif","link":"http://econsulting.pl/"},
			{"name":"GFT","logo_url":"/images/sponsors/gft.jpg","link":"http://gft.com/"},
			{"name":"Pracuj.pl","logo_url":"/images/sponsors/pracuj-pl.jpg","link":"http://www.pracuj.pl/"},
			{"name":"Accenture","logo_url":"/images/sponsors/accenture.png","link":"http://www.accenture.com/pl-pl/Pages/index.aspx"},
      	],
      	silver: [
			{"name":"Zeto","logo_url":"/images/sponsors/zeto.png","link":"http://www.ckzeto.pl/"},
			{"name":"ABB","logo_url":"/images/sponsors/abb.png","link":"http://new.abb.com/pl/o-nas/technologie/centrum-systemow-informatycznych-abb"},
            {"name":"Touk","logo_url":"/images/sponsors/touk-logo.png","link":"http://www.touk.pl/"},
            {"name":"Cybercom","logo_url":"/images/sponsors/cybercom.png","link":"http://www.cybercom.com/pl/Poland/"},

      	],
		bronze: [
			{"name":"Appcelerator","logo_url":"/images/sponsors/appc-logo-mark-light.png","link":"http://www.appcelerator.com/"}
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
			{"name": "NextApps", "logo_url":"/images/partners/nxas_circle_green_512_png.png", "link":"http://nextapps.pl/"},
      	],
      	community: [
			{"name":"Łódź WiOSłuje","logo_url":"/images/partners/lodz-wiosluje.png","description_html":"The best place for iOS developers based in Łódź. A group with monthly meetings with tech talks, fantastic speakers and unbeatable atmosphere! Join us on facebook: www.facebook.com/lodzwiosluje"},
			 {"name":"Toruń JUG","logo_url":"/images/partners/jugtorun5d_3_square.png","description_html":"Toruń JUG is a group of JVM technologies developers and enthusiasts. The main goal of the group is to gather people interested in JVM languages both professionally and personally. Our group contains programmers from many companies, scientists working on Toruń university, students and other technology passionates. We are encouraging knowledge sharing and collaboration in open source projects. Although we are the youngest JUG in Poland we are growing fast already having several big partners supporting us. More about Toruń JUG you can find at: torun.jug.pl"},
			 {"name":"Android Developer Group Poznań","logo_url":"/images/partners/adgp.jpeg","link":"http://www.meetup.com/Poznan-Android-Developer-Group/"},
			 {"name":"Polish Java User Group","logo_url":"/images/partners/polish-jug.png","description_html":"Polish Java User Group is a group of Java technology developers and enthusiasts. The main goal of the group is to popularize Java and modern software development methodologies. Since the beginning in 1999, the group had great impact on the Polish Java community growth. They main activity are meetings with students, programmers and project managers as well as conferences with famous professionals."},
			 {"name":"Mobile Central Europe 2015","logo_url":"/images/partners/mce2015.png","description_html":"We put our best effort into creating a stimulating experience for everyone involved. Help us make it one of the best mobile events in Europe! MCE is about bringing together the greatest minds in tech to exchange groundbreaking ideas. For Mobilization attendees promo-code will be offered giving 20% discount. Code will be visible during Mobilization event so you have to be on Mobilization! With this discount and early bird the ticket for MCE is really good price."},
			{"name":"GDG Kraków","logo_url":"/images/partners/gdgkrakow.png","link":"http://www.meetup.com/GDG-Krakow/"},
			// {"name":"MIT Łódź","logo_url":"/images/partners/mit.png","link":"http://mitlodz.pl"},
			{"name":"Dev Day 2015","logo_url":"/images/partners/abb-dev-day.png","link":"http://devday.pl"},
			{"name":"Codepot.pl","logo_url":"/images/partners/codepot-logo.png","link":"http://codepot.pl"},
			{"name":"Zwinna Łódź","logo_url":"/images/partners/zwinna_lodz.jpg","link":"http://zwinnalodz.eu/"},
			{"name":"Mobile Warsaw","logo_url":"/images/partners/mw-logo.png","link":"http://mobile-warsaw.pl"},
			{"name":"Ionic Poland", "logo_url":"/images/partners/ionicpoland-logo.png", "link":"http://www.meetup.com/ionicpoland/"},
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
			  "bio_html":"Tomasz Grynfelder, Senior Software Engineer at Neofonie Mobile GmbH, mobile technologies freak highly focused on iOS development and security. Great fan of cycling and sailing.",
			  "www":"",
			  "twitter":"",
			  "photo_url":"/images/speakers/tomasz-grynfelder.png"
		  },
		  "speaker-pawel-dudek":{
			  "firstname":"Paweł",
			  "lastname":"Dudek",
			  "bio_html":"I'm an iOS developer that has been building iOS apps for over 6 years now. I've shipped a variety of apps during my initial stage of career. Right now I'm focusing on building rich, content heavy and beautiful apps for Fortune 500 companies at a US-based startup Taptera. I've been publicly speaking and sharing my knowledge for over a year now. You can find full list of my talks, including videos and slides <a href=\"http://paweldudek.github.io/speaking/\">here</a>",
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
			"bio_html": "Mobile developer since early days of iPhone/Android platforms, product engineer. Co-founder of Appvetica lab. Almost-a-pilot :). Spoke at Mobilization in 2012 and a bunch of other conferences",
			"www":"www.appvetica.com",
			"twitter":"dusker",
			"photo_url":"/images/speakers/peter-tuszynski.png"
		  },
		  "speaker-fokke-zandbergen":{
			"firstname": "Fokke",
			"lastname":"Zandbergen",
			"bio_html": "Fokke is a Developer Evangelist for Appcelerator, the company behind Titanium. Before that, he was already active in the Titanium community for a long time with initiatives like gitt.io, ticons.fokkezb.nl, tidev.io, contributions to Alloy and Alloy widgets and by leading the Dutch user group. He has a passion for understanding new technologies by using and hacking them and sharing from that experience.",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/fokke-zandbergen.png"
		  },
		 "speaker-krzysztof-siejkowski":{
			"firstname": "Krzysztof",
			"lastname":"Siejkowski",
			"bio_html":"Po trzech latach zawodowego programowania wie tylko tyle, że nic nie wie. Pisał w Javie, Scali i Swifcie, ale Objective-C, pierwsza miłość, zajmuje w jego sercu specjalne miejsce. Wierzy, że wszyscy deweloperzy to jedna rodzina, i chce tę świadomość krzewić organizując spotkania MobileWarsaw oraz konferencję Codepot. Robi co może dla rozwoju aplikacji mobilnych w firmie TouK. ",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/krzysztof-siejkowski.png"
		  },
		  "speaker-zbigniew-szymanski":{
			"firstname": "Zbigniew",
			"lastname":"Szymański",
			"bio_html":"Senior Developer / Architect at <a href=\"wire.com\">wire.com</a>, responsible for keeping Android Wire app in sync. Focusing on Android development in Scala, obsessed with idea of creating apps with simpler and more powerful abstractions",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/zbigniew-szymanski.png"
		  },
		  "speaker-lukasz-olejarczuk":{
			"firstname": "Łukasz",
			"lastname":"Olejarczuk",
			"bio_html":"Łukasz is a technology evangelist and software developer at Bank Zachodni WBK where he is creating a wide variety of state-of-the-art applications. Now he is strongly focused on mobile hybrid applications in the enterprise world.",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/lukasz-olejarczuk.png"
		  },
		  "speaker-krzysztof-scira":{
			"firstname": "Krzysztof",
			"lastname":"Ścira",
			"bio_html":"Prezes i front-end developer firmy desi9n.pl sp. z o. o. - tworzącej hybrydowe aplikacje mobilne (iOS, Android, WindowsPhone), aplikacje i strony internetowe RWD. Wielokrotny prelegent na wydarzeniach związanych z programowaniem urządzeń mobilnych i programowaniem front-end. Na co dzień pracuje w HTML5, CSS3, SASS / SCSS, AngularJS i oczywiście Cordova / Phonegap - czy to jako developer w desi9n.pl czy to trener programowania w firmie SAGES. W wolnych chwilach pasjonat boksu olimpijskiego.",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/krzysztof-scira.png"
		  },
		 "speaker-michal-tuszynski":{
			"firstname": "Michał",
			"lastname":"Tuszyński",
			"bio_html":"Programista iOS w aplikacji Tidal związany z polską sceną startupową oraz miłośnik wszelkich nowych technologii",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/michal-tuszynski.png"
		  },
		  "speaker-marin-todorov":{
			"firstname": "Marin",
			"lastname":"Todorov",
			"bio_html":"Marin Todorov is an independent iOS consultant and publisher. He started developing on an Apple ][ more than 20 years ago and keeps rocking till today. Meanwhile he has worked in great companies like Monster Technologies and Native Instruments, has lived in 4 different countries, and (more recently) is one the founding members of the raywenderlich.com tutorial team. Besides crafting code, Marin also enjoys bloging on www.touch-code-magazine.com, writing books www.ios-animations-by-tutorials.com, and speaking at mobile conferences. He sometimes open sources his code. He walked the way to Santiago. More info & prev. speaking experience <a href=\"http://www.underplot.com/#speaking\">here</a>",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/marin-todorov.png"
		  },
		  "speaker-edwin-adriaansen":{
			"firstname": "Edwin",
			"lastname":"Adriaansen",
			"bio_html":"Edwin Adriaansen has been programming since the early nineties. He worked for several IT companies and joined TomTom 7 years ago. Currently he is managing the teams responsible for the software running on the TomTom navigation devices. Furthermore he has a personal interest in new technical developments (geeky products), mechanical watches and good food.",
			"www":"",
			"twitter":"",
			"photo_url":"/images/speakers/edwin-adriaansen.png"
          },
   	  },
   	  talks: {
   	  	"talk-clean-architecture": {
            "title": "Przejrzysty i testowalny kod na Androidzie? Spróbujmy z Clean Architecture",
            "description_html": "Pisanie dobrego oprogramowania na platformę Android jest trudnym zadaniem. Jednym z dużych problemów, zwłaszcza w przypadku sporych aplikacji, może być podział logiki aplikacji tak, aby nasze Activity czy Fragmenty nie były nią przeładowane oraz aplikacja była podatna na testowanie jednostkowe. Szukając pomysłu na architekturę aplikacji, która będzie dobrze się skalowała wraz z rozwojem projektu, natknąłem się na Clean Architecture zaproponowaną przez Boba C. Martina. Podczas prezentacji zobaczymy czy i jak CA sprawdza się w przypadku aplikacji mobilnych na Androida i na co pozwala jej zastosowanie. Oczywiście nie pominiemy takich kluczowych kwestii jak pogodzenie tego wszystkiego z wszechobecną na Androidzie asynchronicznością.",
            "speakers_keys": [
              "speaker-michal-charmas"
            ],
            "language": "PL"
          },
          "talk-swift-and-objective-c-interoperability": {
            "title": "Swift and Objective-C interoperability",
            "description_html": "Have a look at how to make Swift and Objective-C interoperability seamless. Basics of including Swift code in your new or existing Objective-C based projects and helping yourself when you want to deliver some parts of Swift-based application using Objective-C code.",
            "speakers_keys": [
              "speaker-tomasz-grynfelder"
            ],
            "language": "EN"
          },
          "talk-espressive-functional-testing-with-espresso": {
            "title": "Espressive functional testing with Espresso",
            "description_html": "Testing mobile apps is not easy. If you wanted to test \"Hello World\" app with a button and text label, that wouldn't be really hard. But our apps do a lot more. They are calling RESTful services, checking on user's GPS location or using Facebook or Google+ login buttons, which connect to network themselves. How do you test that? I want to show you my approach to functional testing with Espresso and a bit of dependency inversion magic. Do you have a feeling testing network error conditions is hard or cumbersome when done manually. Turns out it's even easier to automatically test it than \"the happy path\". You will see real code from production app, so remember to drink a shot of espresso before joining this session.",
            "speakers_keys": [
              "speaker-maciej-gorski"
            ],
            "language": "EN"
          },
          "talk-kotlin-for-android": {
            "title": "Kotlin for Android",
            "description_html": "Wprowadzenie do Kotlina na Androida. Omówienie składni języka oraz jego kluczowych aspektów umożliwiających znacznie szybsze pisanie aplikacji na platformę Android. Porównanie Kotlina z alternatywnymi językami JVM. Zakończone sesją Q&A.",
            "speakers_keys": [
              "speaker-pawel-gajda"
            ],
            "language": "PL"
          },
          "talk-reaktywne-programowanie-z-rxjava": {
            "title": "Reaktywne programowanie z RxJava",
            "description_html": "Programowanie reaktywne jako lekarstwo na ból głowy związany z kodem asynchronicznym. W czasie mojej prezentacji przedstawię fundamentalne idee stojące za tym paradygmatem oraz zademonstruję od podstaw jak tworzyć reaktywne rozwiązania. Wszystko to na przykładzie biblioteki RxJava na platformie Android.",
            "speakers_keys": [
              "speaker-piotr-krystyniak"
            ],
            "language": "PL"
          },
			"talk-hipster-oriented-programming": {
            "title": "Hipster Oriented Programming",
            "description_html": "Not sure if you should order a burrito or a monad for lunch? Get a quick overview of Object Oriented, Functional and Protocol Oriented programming in Swift 2 and learn what all that fuss is about and why you should care.",
            "speakers_keys": [
              "speaker-jens-ravens"
            ],
            "language": "EN"
          },
          	"talk-behavior-driven-development": {
            "title": "Behavior Driven Development",
            "description_html": "Building apps is hard. But making sure that apps don't break in the process of adding new functionality is even harder. Your code is constantly changing. If you're lucky your requirements aren't changing that much, but you probably live in the world of constant change. And that change poses a certain risk. Things sometimes might go missing. Pieces of code, pieces of behavior that should be there. But are not. In this talk you'll learn how you can avoid falling into this trap by leveraging behavior driven development. You'll find out how to write tests for iOS and what technologies you can use to keep your code safe and sound. ",
             "speakers_keys": [
              "speaker-pawel-dudek"
            ],
            "language": "EN"
          },
          "talk-dagger-2-dependency-injection-w-kodzie-produkcyjnym": {
            "title": "Dagger 2 - Dependency Injection w kodzie produkcyjnym",
            "description_html": "Dagger 2 to pierwszy framework do Dependency Injection, który można uznać za Android friendly. Nie korzysta z refleksji, jest tak szybki jak ręcznie pisany kod, nie wymaga dodatkowej konfiguracji Proguarda. W związku z tym, że wartość Dependency Injection wzrasta wraz ze złożonością projektu, na prezentacji pokazane zostaną przykłady użycia Daggera w kodzie produkcyjnym. Zobaczymy co dają nam Scope'y, jak Dagger 2 pomaga w różnych typach testów, jak unikać wycieków pamięci oraz jak Dagger 2 pomaga w pracy zespołowej.",
            "speakers_keys": [
              "speaker-miroslaw-stanek"
            ],
            "language": "PL"
          },
          "talk-watch-out-for-the-watch": {
            "title": "Watch out for the watch",
            "description_html": "Apple Watch might be the most polarising, controversial and innovative product added to Apple's portfolio in the last few years. Let's take a brief look to see if it's worth it, and first and foremost how to bring our apps to people's wrists.",
            "speakers_keys": [
              "speaker-peter-tuszynski"
            ],
            "language": "EN"
          },
          "talk-app-indexing-i-deep-linking-w-aplikacjach-androidowych": {
            "title": "App Indexing i Deep linking w aplikacjach Androidowych",
            "description_html": "Podczas prelekcji dowiesz się w jaki sposób wzbogacić aplikację o wsparcie dla App Indexingu, pozwoli to zwiększyć zaangażowanie obecnych użytkowników oraz przyciągnąć nowych. Zobaczysz na jakie problemy można natknąć się podczas implementacji, jak można sobie z nimi poradzić, a także poznasz kilka sztuczek ułatwiających wdrożenie App Indexingu.",
            "speakers_keys": [
              "speaker-krzysztof-kocel"
            ],

            "language": "PL"
          },
          "talk-qtquick-spotyka-html": {
            "title": "QtQuick spotyka HTML",
            "description_html": "Celem prezentacji jest pokazanie w jaki sposób połączyć ze sobą dwa światy -- oferowany przez Qt wydajny i prosty w użyciu mechanizm QtQuick/QML oraz niezwykle popularny HTML. Zademonstrowane zostanie, jak osadzić w scenie QtQuickowej treść HTML i jak komunikować ze sobą skrypt QML i JavaScript na stronie.",
            "speakers_keys": [
              "speaker-witold-wysota"
            ],
            "language": "PL"
          },
          "talk-dobry-zwyczaj-nie-odziedziczaj": {
            "title": "Dobry zwyczaj: nie odziedziczaj",
            "description_html": "Swift zainspirował środowisko programistów OSX/iOS do poszukiwań w miejscach, w które się dotąd nie zapuszczali. Na przykład w rejony programowania funkcyjnego. My też się tam wybierzemy, żeby przejrzeć kilka prostych koncepcji i technik gotowych do natychmiastowego wykorzystania w aplikacjach mobilnych. W podróż zabierze nas rollercoster emocji: radość na widok znajomych problemów, przed którymi programowanie funkcyjne nas chroni, oraz smutek na widok nowych, które wprowadza.",
            "speakers_keys": [
              "speaker-krzysztof-siejkowski"
            ],
            "language": "PL"
          },
          "talk-reactive-ui-on-adroid-with-scala":{
			  "title": "Reactive UI on Android with Scala",
			  "description_html": "Reactive programming can bring many benefits to mobile application development, especially when implementing UI. User interfaces developed this way are naturally responsive and code tends to be much more concise, which leads to easier development and less bugs. Reactive Extensions is became quite popular among Android developers recently, unfortunately creating UI with this library tends to be very unnatural, partially due to Java language limitations. Using Scala and techniques borrowed from Functional Reactive Programming we can achieve much better results. This talk is not going to be about Scala itself, nor about using Scala on Android. This talk is going to show how we can use Scala to implement UI in reactive fashion, achieving better results, with less code. There will be quite a lot of Scala code, but it should be accessible for Java developers.",
			  "speakers_keys": [
				"speaker-zbigniew-szymanski"
			  ],
			  "language": "EN"
          },
          "talk-ionic-io-services-for-hybrid-mobile-applications": {
			  "title": "ionic.io - services for hybrid mobile applications",
			  "description_html": "ionic.io - usługi dla hybrydowych aplikacji mobilnych W prezentacji przedstawię możliwości platformy ionic.io oraz ich wykorzystanie w hybrydowej aplikacji mobilnej. Podzielę się także nowościami ze świata Ionic i powiem parę słów o inicjatywie Ionic Poland. ionic.io - services for hybrid mobile applications In the presentation I will introduce service of the ionic.io platform and show how to use it in hybrid mobile applications. I'm going to share news from the ionic world and introduce Ionic Poland.",
			  "speakers_keys": [
				"speaker-lukasz-olejarczuk"
			  ],
			  "language": "PL"
          },
          "talk-angular-js-i-cordova-tworzenie-hybrydowych-aplikacji-mobilnych": {
			  "title":"AngularJS i Cordova - tworzenie hybrydowych aplikacji mobilnych",
			  "description_html": "Prelekcja dotycząca programowania urządzeń mobilnych z wykorzystaniem AngularJS na systemy iOS, Android i Windows Phone z wykorzystaniem Cordova / Phonegap. Poruszone będą następujące tematy: wstęp do tworzenia hybrydowych aplikacji mobilnych, wykorzystanie AngularJS w budowie aplikacji webowych, zwiększanie wydajności aplikacji hybrydowych, zalecane narzędzia i biblioteki, typowe i nietypowe pułapki i sposoby ich rozwiązywania. Na koniec wystąpienia przewidziana dyskusja z uczestnikami.",
			  "speakers_keys": [
				"speaker-krzysztof-scira"
			  ],
			  "language": "PL"
          },
          "talk-titanium-develop-native-mobile-apps-with-javascript": {
			  "title": "Titanium: Develop Native Mobile Apps with JavaScript",
			  "description_html": "Forget about the whole Mobile Web versus Native Apps debate; if you already (truly) know JavaScript then you can use those Web skills to create Native Apps! Titanium is a cross-platform proxy between JavaScript and the iOS, Android and Windows Native API's. Unlike some other solutions this allows you not only to access potentially any system API like that for Geolocation, but also use Native UI Components to build truly Native Interfaces. You wil be introduced to Titanium and see how easy it is to get started via actual code samples and live cross-platform demos. Bring your JavaScript skills and you will leave this presentation as a Native Mobile App Developer!",
			  "speakers_keys": [
				"speaker-fokke-zandbergen"
			  ],
			  "language": "EN"
          },
          "talk-modern-ios-app-architecture": {
			  "title": "Modern iOS App Architecture",
			  "description_html": "Programowanie aplikacji na iOS zmieniają się z roku na roku wraz z rozwojem języka Objective-C, wprowadzenia nowego języka Swift jak i niezliczonych ulepszeń bibliotek wchodzących w skład iOS SDK. Prezentacja pokaże najlepsze praktyki jakie współczesne aplikacje powinny wykorzystywać.",
			  "speakers_keys": [
				"speaker-michal-tuszynski"
			  ],
			  "language": "PL"
          },
          "talk-what-s-in-it-for-us-after-the-indiepocalipse": {
			  "title": "What’s in it for us after the Indiepocalipse?",
			  "description_html": "We’re an indie iOS studi of two. We released our first iPhone app for iOS 3.1 and we kept putting out small fun apps for the next five years. Times were good and we thought it’s always gonna be like this in the App Store. Apple isn’t into indies anymore and the App Store is a slaughterhouse. Tons of developers are in a kind of limbo - why is this happening and what to do after the Indiepocalipse is over? What is the next logical step - try harder on the App Store, pivot, change platforms? But now that the Indiepocalipse is upon us. Or is it?",
			  "speakers_keys": [
				"speaker-marin-todorov"
			  ],
			  "language": "EN"
          },
          "talk-developing-software-for-dedicated-devices-using-agile": {
			  "title": "Developing Software for Dedicated Devices using Agile",
			  "description_html": "Agile methodologies like SCRUM, DaD and SAFe help us to effectively develop software products. But when developing software for dedicated devices for the consumer market such as navigation devices, watches and multimedia systems you need some adaptation to make it work. I’ll guide you through the world of software engineering using the principles of the SAFe framework (with some adaptations), starting from running Android on your device till having a final product in she shops. And of course some do’s – don’ts, tools that you could use and much more.",
			  "speakers_keys": [
				"speaker-edwin-adriaansen"
			  ],
			  "language": "EN"
          },

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
   	  		description_html: 'VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.'
   	  	},
   	  	'break-finally': {
   	  		title: 'Finally',
   	  		description_html: 'Time to give thanks to all the sponsors and the organizer\'s team'
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
		  },
		  "venue-5": {
			  "title":"HP"
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
