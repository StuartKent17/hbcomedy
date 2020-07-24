!function(){"use strict";const o=["client/[slug].9059e8f1.js","client/index.31897df5.js","client/index.b6da9129.js","client/[slug].8fa0a0aa.js","client/index.23c80996.js","client/index.6f32c5fa.js","client/about.7f5a704d.js","client/[slug].34bc2605.js","client/client.cc4889b0.js","client/moment.91c2810d.js"].concat(["service-worker-index.html","big_open_mic.png","bricksbg.jpg","comedyclub.jpg","common.png","common_room.mp4","commonroom_1.jpg","commonroom_2.jpg","commonroom_3.jpg","cover.jpg","f_logo_RGB-White_58.png","favicon.png","gallery/Common Room/14681754_348991355453375_4729202179858955024_n.jpg","gallery/Common Room/15138502_364145867271257_2383235499588692001_o.jpg","gallery/Common Room/15665909_382289735456870_6900594218641390434_n.jpg","gallery/Common Room/18589029_455836414768868_1329119246452353492_o.jpg","gallery/Common Room/37547946_678491172503390_3544851429552291840_o.jpg","gallery/Group/102915324_1192299721122530_8091822132311938278_o.jpg","gallery/Group/104594008_1198519883833847_2237709806692292647_o.jpg","gallery/Group/14482011_338345379851306_1246255665596091227_o.jpg","gallery/Group/22520105_528518714167304_7947719924839250302_o.jpg","gallery/Group/23551276_541389532880222_2314664855815249348_o.jpg","gallery/Group/27021132_571882746497567_7331002303047776776_o.jpg","gallery/Group/27797542_581513405534501_835741288298711980_o.jpg","gallery/Group/28516157_593556107663564_3156823969212653848_o.jpg","gallery/Group/29026006_596930283992813_6860068150541549568_o.jpg","gallery/Group/31487801_620810421604799_6036646512430153728_o.jpg","gallery/Group/32293387_626579351027906_7850674457256394752_o.jpg","gallery/Group/34642276_638814383137736_8500840928578109440_o.jpg","gallery/Group/35532614_646860595666448_196175959844454400_o.jpg","gallery/Group/35628966_646860475666460_3864968965759434752_o.jpg","gallery/Group/35885846_648815222137652_1255410616974180352_o.jpg","gallery/Group/37368528_678490972503410_1229872896050987008_o.jpg","gallery/Group/37412550_678490995836741_4250891985126162432_o.jpg","gallery/Group/37414036_678490982503409_8130936853030240256_o.jpg","gallery/Group/37969206_689502664735574_7557416748870270976_o.jpg","gallery/Group/38028720_689502678068906_7622198754208120832_o.jpg","gallery/Group/39148020_705729919779515_118525876005502976_o.jpg","gallery/Group/39151737_705729999779507_35419208015675392_o.jpg","gallery/Group/39174715_705730089779498_8626695955820838912_o.jpg","gallery/Group/39186522_705729933112847_2787799040597688320_o.jpg","gallery/Group/39210975_705730173112823_2722111188002406400_o.jpg","gallery/Group/41861168_730364567316050_4558321736969355264_o.jpg","gallery/Group/42044380_730364557316051_8795822499397894144_o.jpg","gallery/Group/42059343_730364600649380_7029514845275815936_o.jpg","gallery/Group/42664067_736670833352090_489105605743607808_n.jpg","gallery/Group/43121723_739667323052441_8021786675883540480_o.jpg","gallery/Group/44222108_747367108949129_9038374098765348864_o.jpg","gallery/Group/46486010_766012720417901_3616876106960863232_o.jpg","gallery/Group/47381921_774834362869070_3462048553189244928_o.jpg","gallery/Group/47396761_774834392869067_6331680365886832640_o.jpg","gallery/Group/48323907_781584528860720_3765502294892740608_o.jpg","gallery/Group/48384795_781584575527382_7588379601898831872_o.jpg","gallery/Group/49002971_792495391102967_2562476165667225600_o.jpg","gallery/Group/49050780_792495367769636_4959752405773189120_o.jpg","gallery/Group/52071447_824162587936247_4830351200127811584_o.jpg","gallery/Group/52387557_824162717936234_6983921662894800896_o.jpg","gallery/Group/52692452_825943044424868_6881914948369252352_o.jpg","gallery/Group/53790501_835745493444623_8613049062310019072_o.jpg","gallery/Group/56208317_850774378608401_6693634422610067456_o.jpg","gallery/Group/60190030_875492736136565_3238255777537851392_o.jpg","gallery/Group/66112423_910682102617628_8441213416571404288_o.jpg","gallery/Group/68976975_943267829359055_6338008673779974144_o.jpg","gallery/Misc/14591799_353940494958461_8123227699269980313_n.jpg","gallery/Paisely/14670763_348991365453374_6851838961831097608_n.jpg","gallery/Paisely/15036403_364146293937881_6375974218246216899_n.jpg","gallery/Paisely/26196092_565576463794862_2773620494704952121_n.jpg","gallery/Paisely/26685419_569074330111742_5952101182793224083_o.png","gallery/Paisely/44855438_751915945160912_5433313876332511232_o.jpg","gallery/Paisely/84526812_1098435600508943_3169082507442257920_n.jpg","gallery/Paisely/86872699_1098435430508960_677832206806155264_n.jpg","gary_sansome.jpg","global.css","gold_leaf.jpg","group.jpg","group2.jpg","july_poster.jpg","logo-192.png","logo-512.png","logo.png","manifest.json","openmic.png","paisley.jpg","paisley.mp4","paisley.png","sansome_poster.jpg","teeth.png","the_man_poster.jpg","tongue.png"]),_=new Set(o);self.addEventListener("install",_=>{_.waitUntil(caches.open("cache1595624145766").then(_=>_.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",o=>{o.waitUntil(caches.keys().then(async o=>{for(const _ of o)"cache1595624145766"!==_&&await caches.delete(_);self.clients.claim()}))}),self.addEventListener("fetch",o=>{if("GET"!==o.request.method||o.request.headers.has("range"))return;const e=new URL(o.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&_.has(e.pathname)?o.respondWith(caches.match(o.request)):"only-if-cached"!==o.request.cache&&o.respondWith(caches.open("offline1595624145766").then(async _=>{try{const e=await fetch(o.request);return _.put(o.request,e.clone()),e}catch(e){const l=await _.match(o.request);if(l)return l;throw e}}))))})}();
