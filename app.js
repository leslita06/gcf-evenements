/* Galerie Cécile Fakhoury · Événements et réservations · démonstration
   Faits réels : cecilefakhoury.com, relevés le 16/11/2026. Événements marqués « exemple » : non annoncés par la galerie.
   Aucune donnée n'est envoyée : les réservations restent dans ce navigateur (localStorage). */
(function(){
'use strict';
var L=(new URLSearchParams(location.search).get('lang')||localStorage.getItem('gcf-ev-lang')||'fr')==='en'?'en':'fr';
var STORE='gcf-ev-v1';
var SITE='https://cecilefakhoury.com';

var T={
fr:{demo:'Démonstration',demoTxt:'Rien n’est envoyé ni enregistré hors de votre navigateur.',
nav:[['#/','Agenda'],['#/rendez-vous','Rendez-vous privé'],['#/espaces','Nos espaces'],['#/galerie','Côté galerie']],
heroK:'Exposition en cours · Abidjan',heroD:'5 novembre 2026 – 9 janvier 2027',heroL:'Troisième exposition personnelle de Roméo Mivekannin en Côte d’Ivoire : un panthéon de rituels et d’images, entre Afrique de l’Ouest, Europe et Brésil.',
bookVisit:'Réserver une visite guidée',privVisit:'Visite privée',agenda:'Agenda',agendaP:'Les rendez-vous de la galerie à Abidjan, Dakar et Paris. Réservez en quelques secondes, recevez votre confirmation et ajoutez-la à votre calendrier.',
all:'Tout',nDates:'%n dates au choix',ex:'Exemple',real:'Annoncé',left:'places restantes',full:'Complet',book:'Réserver',more:'Sur le site de la galerie',free:'Entrée libre',
exNote:'Les rendez-vous marqués « Exemple » illustrent ce que la galerie pourrait proposer : ils ne sont pas annoncés à ce jour. Les autres sont publiés sur cecilefakhoury.com.',
hlm:'Hors les murs',hlmP:'Les artistes de la galerie dans les biennales et les musées.',fairs:'Foires',fairsP:'Aucune foire à venir n’est annoncée à ce jour sur le site de la galerie. Dernière participation : Art Basel Paris, 21 – 25 octobre 2026, Carl-Edouard Keïta.',
s1:'Créneau',s2:'Places',s3:'Coordonnées',s4:'Confirmation',chooseSlot:'Choisissez un créneau',seats:'Nombre de places',maxSeats:'Jusqu’à %n places par réservation.',you:'Vos coordonnées',
name:'Nom et prénom',email:'E-mail',phone:'Téléphone',profile:'Vous êtes',profiles:{collector:'Collectionneur',press:'Presse',institution:'Institution',public:'Public'},msg:'Un mot pour la galerie (facultatif)',
privacy:'Démonstration : vos informations restent dans ce navigateur et ne sont envoyées à personne. Dans la version réelle, elles servent seulement à gérer votre venue.',
confirm:'Confirmer la réservation',errSlot:'Choisissez un créneau.',errName:'Indiquez votre nom.',errMail:'Indiquez une adresse e-mail valide.',errPhone:'Indiquez un numéro de téléphone.',errProf:'Indiquez votre profil.',
thanks:'Votre place est réservée',thanksP:'Un récapitulatif vous attend ci-dessous. Dans la version réelle, il part aussi par e-mail et par WhatsApp.',
ref:'Référence',when:'Date et heure',where:'Lieu',seatsL:'Places',guest:'Au nom de',ics:'Ajouter au calendrier',back:'Retour à l’agenda',another:'Réserver un autre rendez-vous',
privT:'Rendez-vous privé',privP:'Une visite de l’exposition à Abidjan ou du showroom de Paris, avec un membre de l’équipe, au moment qui vous convient.',
place:'Lieu de la visite',pAbj:'Abidjan · exposition « Dieu n’est pas obligé »',pPar:'Paris · showroom, sur rendez-vous',day:'Jour',slotsEx:'Créneaux proposés à titre d’exemple : les horaires réels sont à confirmer par la galerie.',
interest:'Ce qui vous intéresse',ask:'Demander ce rendez-vous',privOk:'Votre demande de rendez-vous est enregistrée',privOkP:'Dans la version réelle, l’équipe confirme le créneau par e-mail ou WhatsApp.',
spacesT:'Nos espaces',route:'Itinéraire',rdvOnly:'Showroom sur rendez-vous uniquement',
admT:'Côté galerie',admP:'La liste des inscrits par rendez-vous, l’accueil le jour J et le taux de présence. Les inscrits sont fictifs, sauf vos propres réservations de démonstration.',
ev:'Rendez-vous',session:'Séance',search:'Rechercher un nom',k1:'Inscrits',k2:'Places réservées',k3:'Présents',k4:'Taux de présence',
hName:'Inscrit',hProf:'Profil',hSeats:'Places',hRef:'Référence',hCi:'Accueil',ci:'Arrivé',nci:'Marquer arrivé',csv:'Exporter la liste (CSV)',yours:'votre réservation',none:'Aucun inscrit ne correspond.',
past:'passé',reset:'Effacer mes réservations de démonstration',resetOk:'Réservations de démonstration effacées.',
footA:'Galerie Cécile Fakhoury · Abidjan, Dakar, Paris',footB:'Démonstration non indexée. Expositions, dates, adresses et images : cecilefakhoury.com, courtesy des artistes et de la galerie.',
months:['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],days:['dim.','lun.','mar.','mer.','jeu.','ven.','sam.'],at:'à'},
en:{demo:'Demonstration',demoTxt:'Nothing is sent or stored outside your browser.',
nav:[['#/','Calendar'],['#/rendez-vous','Private viewing'],['#/espaces','Our spaces'],['#/galerie','Gallery view']],
heroK:'Current exhibition · Abidjan',heroD:'5 November 2026 – 9 January 2027',heroL:'Roméo Mivekannin’s third solo exhibition in Côte d’Ivoire: a pantheon of rituals and images between West Africa, Europe and Brazil.',
bookVisit:'Book a guided tour',privVisit:'Private viewing',agenda:'Calendar',agendaP:'The gallery’s events in Abidjan, Dakar and Paris. Book in a few seconds, get your confirmation and add it to your calendar.',
all:'All',nDates:'%n dates available',ex:'Example',real:'Announced',left:'places left',full:'Full',book:'Book',more:'On the gallery website',free:'Free admission',
exNote:'Events marked “Example” show what the gallery could offer: they are not announced to date. The others are published on cecilefakhoury.com.',
hlm:'Off-site',hlmP:'Gallery artists in biennales and museums.',fairs:'Art fairs',fairsP:'No upcoming fair is announced on the gallery website to date. Latest participation: Art Basel Paris, 21 – 25 October 2026, Carl-Edouard Keïta.',
s1:'Time',s2:'Places',s3:'Details',s4:'Confirmation',chooseSlot:'Choose a time',seats:'Number of places',maxSeats:'Up to %n places per booking.',you:'Your details',
name:'Full name',email:'Email',phone:'Phone',profile:'You are',profiles:{collector:'Collector',press:'Press',institution:'Institution',public:'Public'},msg:'A note for the gallery (optional)',
privacy:'Demonstration: your details stay in this browser and are sent to no one. In the real version, they are only used to manage your visit.',
confirm:'Confirm booking',errSlot:'Choose a time.',errName:'Enter your name.',errMail:'Enter a valid email address.',errPhone:'Enter a phone number.',errProf:'Select your profile.',
thanks:'Your place is booked',thanksP:'Your summary is below. In the real version, it is also sent by email and WhatsApp.',
ref:'Reference',when:'Date and time',where:'Venue',seatsL:'Places',guest:'Name',ics:'Add to calendar',back:'Back to calendar',another:'Book another event',
privT:'Private viewing',privP:'A visit of the exhibition in Abidjan or of the Paris showroom, with a member of the team, at a time that suits you.',
place:'Venue',pAbj:'Abidjan · “Dieu n’est pas obligé” exhibition',pPar:'Paris · showroom, by appointment',day:'Day',slotsEx:'Times shown as examples: actual hours to be confirmed by the gallery.',
interest:'What interests you',ask:'Request this appointment',privOk:'Your appointment request is recorded',privOkP:'In the real version, the team confirms the time by email or WhatsApp.',
spacesT:'Our spaces',route:'Directions',rdvOnly:'Showroom by appointment only',
admT:'Gallery view',admP:'Guest list per event, check-in on the day and attendance rate. Guests are fictitious, except your own demonstration bookings.',
ev:'Event',session:'Session',search:'Search a name',k1:'Bookings',k2:'Places booked',k3:'Checked in',k4:'Attendance rate',
hName:'Guest',hProf:'Profile',hSeats:'Places',hRef:'Reference',hCi:'Check-in',ci:'Arrived',nci:'Check in',csv:'Export list (CSV)',yours:'your booking',none:'No guest matches.',
past:'past',reset:'Clear my demonstration bookings',resetOk:'Demonstration bookings cleared.',
footA:'Galerie Cécile Fakhoury · Abidjan, Dakar, Paris',footB:'Non-indexed demonstration. Exhibitions, dates, addresses and images: cecilefakhoury.com, courtesy of the artists and the gallery.',
months:['January','February','March','April','May','June','July','August','September','October','November','December'],days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],at:'at'}
};
function t(k){return T[L][k]}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

/* Lieux réels (cecilefakhoury.com, page À propos) */
var PLACES={
abj:{city:'Abidjan',name:'Galerie Cécile Fakhoury',addr:'Cocody, boulevard Latrille, entre la SODEMI et l’immeuble Carbone',addr_en:'Cocody, boulevard Latrille, between SODEMI and the Carbone building',post:'06 BP 6499 Abidjan 06, Côte d’Ivoire',tel:'+225 27 22 44 66 77',mail:'abidjan@cecilefakhoury.com',q:'Galerie Cécile Fakhoury, boulevard Latrille, Cocody, Abidjan',tz:0,img:'img/abidjan.jpg'},
dkr:{city:'Dakar',name:'Galerie Cécile Fakhoury',addr:'Dakar, Sénégal',addr_en:'Dakar, Senegal',tel:'+221 33 842 90 91',mail:'dakar@cecilefakhoury.com',q:'Galerie Cécile Fakhoury Dakar',tz:0,img:'img/dakar.jpg'},
par:{city:'Paris',name:'Showroom',addr:'Paris 7e, sur rendez-vous uniquement',addr_en:'Paris 7th, by appointment only',tel:'+33 (0)7 62 06 36 20',mail:'paris@cecilefakhoury.com',q:'',tz:1,img:'img/paris.jpg'},
sok:{city:'Dakar',name:'Sokhamon Hôtel',addr:'Sokhamon Hôtel, Dakar',addr_en:'Sokhamon Hotel, Dakar',tz:0,q:'Sokhamon Hotel Dakar'}
};

/* Rendez-vous réservables. real:true = annoncé sur cecilefakhoury.com ; sinon « exemple ». */
var EV=[
{id:'vernissage-mivekannin',ex:true,place:'abj',img:'img/vue-1.jpg',cap:60,max:2,
 t:{fr:'Vernissage · Dieu n’est pas obligé',en:'Opening · Dieu n’est pas obligé'},who:'Roméo Mivekannin',
 d:{fr:'Ouverture de l’exposition en présence de l’artiste.',en:'Opening of the exhibition with the artist.'},
 s:['2026-11-05T18:30']},
{id:'visite-mivekannin',ex:true,place:'abj',img:'img/o02.jpg',cap:20,max:4,
 t:{fr:'Visite guidée · Dieu n’est pas obligé',en:'Guided tour · Dieu n’est pas obligé'},who:'Roméo Mivekannin',
 d:{fr:'Quarante-cinq minutes dans l’exposition avec l’équipe de la galerie : le velours noir, les sources des images, les gestes rituels.',en:'Forty-five minutes in the exhibition with the gallery team: black velvet, image sources, ritual gestures.'},
 s:['2026-11-21T11:00','2026-11-28T11:00','2026-12-05T11:00','2026-12-12T11:00','2026-12-19T11:00']},
{id:'lu-nebtu',ex:true,place:'sok',img:'img/lu-nebtu.jpg',cap:15,max:4,
 t:{fr:'Lu Nëbtu · visite avec l’équipe',en:'Lu Nëbtu · tour with the team'},who:'Kassou Seydou',
 d:{fr:'Exposition personnelle annoncée, 19 novembre – 19 décembre 2026, Sokhamon Hôtel. Les créneaux de visite sont des exemples.',en:'Announced solo exhibition, 19 November – 19 December 2026, Sokhamon Hotel. Tour times are examples.'},
 slotEx:true,src:SITE+'/exhibitions/131-lu-nebtu-kassou-seydou-sokhamon-hotel-dakar/overview/',
 s:['2026-11-21T16:00','2026-11-28T16:00','2026-12-05T16:00','2026-12-12T16:00']},
{id:'rencontre-mivekannin',ex:true,place:'abj',img:'img/o06.jpg',cap:40,max:2,
 t:{fr:'Rencontre avec Roméo Mivekannin',en:'Conversation with Roméo Mivekannin'},who:'Roméo Mivekannin',
 d:{fr:'Une conversation avec l’artiste autour de l’exposition et de ses sources : Kourouma, Acogny, Verger.',en:'A conversation with the artist about the exhibition and its sources: Kourouma, Acogny, Verger.'},
 s:['2026-12-10T18:30']},
{id:'signature-orientalisme',ex:true,place:'abj',img:'img/o08.jpg',cap:30,max:2,
 t:{fr:'Signature · Orientalisme, Éditions',en:'Book signing · Orientalisme'},who:'Roméo Mivekannin',
 d:{fr:'Signature de l’ouvrage « Orientalisme » (texte de Gil Z. Hochberg), en vente sur le site de la galerie, 35 €.',en:'Signing of “Orientalisme” (text by Gil Z. Hochberg), sold on the gallery website, €35.'},
 s:['2026-12-12T17:00']},
{id:'finissage-mivekannin',ex:true,place:'abj',img:'img/vue-2.jpg',cap:60,max:2,
 t:{fr:'Finissage · Dieu n’est pas obligé',en:'Closing · Dieu n’est pas obligé'},who:'Roméo Mivekannin',
 d:{fr:'Dernier soir de l’exposition, le jour de sa fermeture annoncée.',en:'Last evening of the exhibition, on its announced closing day.'},
 s:['2027-01-09T18:00']}
];
/* Faits réels non réservables */
var REAL=[
{id:'expo',img:'img/vue-1.jpg',city:'Abidjan',k:{fr:'Exposition en cours',en:'Current exhibition'},t:'Dieu n’est pas obligé',who:'Roméo Mivekannin',d1:'2026-11-05',d2:'2027-01-09',src:SITE+'/exhibitions/130-dieu-nest-pas-oblige-romeo-mivekannin-abidjan/overview/',free:true},
{id:'biennale',img:'img/biennale.jpg',city:'Dakar',k:{fr:'Biennale de Dakar · 16e édition',en:'Dakar Biennale · 16th edition'},t:'(Anti)fragilité',who:'Eva Diallo, Serigne Ibrahima Dieye, Cheikh Ndiaye',d1:'2026-11-19',d2:'2026-12-19',src:SITE+'/events/537-16e-edition-de-la-biennale-de-dakar-eva-diallo-serigne-ibrahima-dieye-cheikh-ndiaye/',
 txt:{fr:'Exposition internationale officielle, commissariat Morad Montazami. Hors les murs.',en:'Official international exhibition, curated by Morad Montazami. Off-site.'}},
{id:'lu',img:'img/lu-nebtu.jpg',city:'Dakar',k:{fr:'Exposition à venir',en:'Forthcoming exhibition'},t:'Lu Nëbtu',who:'Kassou Seydou · Sokhamon Hôtel',d1:'2026-11-19',d2:'2026-12-19',src:SITE+'/exhibitions/131-lu-nebtu-kassou-seydou-sokhamon-hotel-dakar/overview/'}
];
var HLM=[
{img:'img/biennale.jpg',t:{fr:'16e Biennale de Dakar',en:'16th Dakar Biennale'},who:'Eva Diallo, Serigne Ibrahima Dieye, Cheikh Ndiaye',d1:'2026-11-19',d2:'2026-12-19',src:SITE+'/events/537-16e-edition-de-la-biennale-de-dakar-eva-diallo-serigne-ibrahima-dieye-cheikh-ndiaye/'},
{img:'img/branly.jpg',t:{fr:'Violence silencieuse · musée du quai Branly – Jacques Chirac, Paris',en:'Violence silencieuse · musée du quai Branly – Jacques Chirac, Paris'},who:'Roméo Mivekannin',d1:'2026-11-10',d2:'2027-04-04',src:SITE+'/events/520-violence-silencieuse.-sous-le-regard-de-romeo-mivekannin-romeo-mivekannin/'},
{img:'',t:{fr:'Architects of Liberation · MoMA, New York',en:'Architects of Liberation · MoMA, New York'},who:'François-Xavier Gbré',d1:'2026-07-05',d2:'2027-01-02',src:SITE+'/events/497-architects-of-liberation-modernism-in-western-africa-francois-xavier-gbre/'}
];

/* ---------- dates ---------- */
function pd(s){var a=s.split(/[-T:]/).map(Number);return new Date(a[0],a[1]-1,a[2],a[3]||0,a[4]||0)}
function fDay(s){var d=pd(s);return d.getDate()+' '+t('months')[d.getMonth()]+' '+d.getFullYear()}
var MS={fr:['janv.','févr.','mars','avr.','mai','juin','juil.','août','sept.','oct.','nov.','déc.'],en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']};
function fShort(s){var d=pd(s);return t('days')[d.getDay()]+' '+d.getDate()+' '+MS[L][d.getMonth()]}
function fTime(s){var d=pd(s);return L==='fr'?(d.getHours()+' h '+(d.getMinutes()?('0'+d.getMinutes()).slice(-2):'')).trim():(((d.getHours()+11)%12+1)+(d.getMinutes()?':'+('0'+d.getMinutes()).slice(-2):'')+(d.getHours()<12?' am':' pm'))}
function fFull(s){var d=pd(s);return t('days')[d.getDay()].replace('.','')+' '+fDay(s)+' '+t('at')+' '+fTime(s)}
function range(a,b){var x=pd(a),y=pd(b);var m=t('months');if(x.getFullYear()===y.getFullYear())return x.getDate()+' '+(x.getMonth()===y.getMonth()?'':m[x.getMonth()]+' ')+'– '+y.getDate()+' '+m[y.getMonth()]+' '+y.getFullYear();return fDay(a)+' – '+fDay(b)}
var NOW=new Date();
function isPast(s){return pd(s)<NOW}

/* ---------- inscrits fictifs (déterministes) ---------- */
var FN=['Aïcha','Kouassi','Mariam','Yao','Fatou','Ibrahim','Clarisse','Moussa','Adjoua','Serge','Nadia','Koffi','Awa','Didier','Ama','Olivier','Salimata','Hervé','Chantal','Mamadou','Inès','Paul','Rokia','Jean-Marc','Sophie','Cheikh','Estelle','Lamine','Hélène','Bakary','Laure','Ousmane'];
var LN=['Koné','Touré','Diallo','Kouamé','Traoré','N’Guessan','Bamba','Ouattara','Konan','Sylla','Yapi','Diop','Coulibaly','Aka','Ndiaye','Brou','Fofana','Kacou','Sarr','Gnamien','Dupont','Martin','Lefèvre','Mensah'];
var PR=['collector','collector','public','public','public','press','institution','collector'];
function rnd(seed){var x=0;for(var i=0;i<seed.length;i++)x=(x*31+seed.charCodeAt(i))>>>0;return function(){x=(x*1664525+1013904223)>>>0;return x/4294967296}}
var SEED={};
function seeded(ev,s){
 var k=ev.id+'|'+s;if(SEED[k])return SEED[k];
 var r=rnd(k),past=isPast(s),fill=past?.86:.35+r()*.4,target=Math.round(ev.cap*fill),out=[],used=0,n=0;
 while(used<target){var q=Math.min(ev.max,1+Math.floor(r()*ev.max*0.7));if(used+q>target)q=target-used;
  var f=FN[Math.floor(r()*FN.length)],l=LN[Math.floor(r()*LN.length)];
  out.push({ref:'GCF-'+(1000+Math.floor(r()*8999)),name:f+' '+l,email:(f+'.'+l).toLowerCase().normalize('NFD').replace(/[^a-z.]/g,'')+'@exemple.com',phone:'',prof:PR[Math.floor(r()*PR.length)],q:q,ci:past&&r()<.79,fake:true});used+=q;n++}
 return SEED[k]=out}
function mine(){try{return JSON.parse(localStorage.getItem(STORE))||{b:[],ci:{}}}catch(e){return {b:[],ci:{}}}}
function save(m){localStorage.setItem(STORE,JSON.stringify(m))}
function guests(ev,s){var m=mine();var g=seeded(ev,s).map(function(x){var c=m.ci[x.ref];return Object.assign({},x,c===undefined?{}:{ci:c})});
 m.b.forEach(function(b){if(b.ev===ev.id&&b.s===s)g.push(Object.assign({},b,{ci:!!m.ci[b.ref]}))});return g}
function taken(ev,s){return guests(ev,s).reduce(function(a,x){return a+x.q},0)}
function leftOf(ev,s){return Math.max(0,ev.cap-taken(ev,s))}
function nextSlots(ev){return ev.s.filter(function(s){return !isPast(s)})}
function evById(id){for(var i=0;i<EV.length;i++)if(EV[i].id===id)return EV[i]}
function placeTxt(p){var P=PLACES[p];return P.name+(P.city&&P.name.indexOf(P.city)<0?', '+P.city:'')}
function newRef(){return 'GCF-'+Math.random().toString(36).slice(2,6).toUpperCase()+(Date.now()%100)}

/* ---------- .ics / CSV ---------- */
function icsDate(s,tz,addMin){var d=pd(s);d=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours()-tz,d.getMinutes()+(addMin||0)));return d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')}
function icsEsc(x){return String(x).replace(/\\/g,'\\\\').replace(/[,;]/g,function(c){return '\\'+c}).replace(/\n/g,'\\n')}
function download(name,type,content){var b=new Blob([content],{type:type});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500)}
function ics(o){var P=PLACES[o.place];var l=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Galerie Cecile Fakhoury//Evenements//FR','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',
 'UID:'+o.ref+'@cecilefakhoury.com','DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,''),'DTSTART:'+icsDate(o.s,P.tz),'DTEND:'+icsDate(o.s,P.tz,o.dur||90),
 'SUMMARY:'+icsEsc(o.title),'LOCATION:'+icsEsc(placeTxt(o.place)+' · '+(L==='en'?P.addr_en:P.addr)),'DESCRIPTION:'+icsEsc(t('ref')+' '+o.ref+' · '+t('seatsL')+' '+o.q+' · '+t('demo')),'END:VEVENT','END:VCALENDAR'];
 download('galerie-cecile-fakhoury-'+o.ref+'.ics','text/calendar;charset=utf-8',l.join('\r\n'))}

/* ---------- rendu ---------- */
var app=document.getElementById('app');
function shell(){
 document.documentElement.lang=L;
 document.getElementById('demo').innerHTML='<b>'+t('demo')+'</b>'+t('demoTxt');
 var nav=t('nav').map(function(n){return '<a href="'+n[0]+'">'+n[1]+'</a>'}).join('');
 document.getElementById('nav').innerHTML=nav;document.getElementById('mnav').innerHTML=nav;
 document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===L)});
 document.getElementById('foot').innerHTML='<div class="wrap"><div><img src="img/logo.png" alt="Galerie Cécile Fakhoury" width="97" height="32"><div>'+t('footA')+'</div></div><div style="max-width:520px">'+t('footB')+' <a href="'+SITE+'" target="_blank" rel="noopener">cecilefakhoury.com</a></div></div>';
}
function markNav(){var h=location.hash||'#/';var base='#/'+(h.split('/')[1]||'');document.querySelectorAll('nav a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')===base||(base==='#/reserver'&&a.getAttribute('href')==='#/'))})}
function tag(ex){return ex?'<span class="tag ex">'+t('ex')+'</span>':'<span class="tag real">'+t('real')+'</span>'}

function viewAgenda(q){
 var city=(q.get('ville')||'all');
 var items=[];
 EV.forEach(function(ev){nextSlots(ev).forEach(function(s){items.push({ev:ev,s:s})})});
 items.sort(function(a,b){return pd(a.s)-pd(b.s)});
 var cities=['all','Abidjan','Dakar'];
 var h='<section class="hero"><div class="ph"><img src="img/vue-1.jpg" alt="Dieu n’est pas obligé, Roméo Mivekannin, vue d’exposition"></div><div class="tx"><div class="kicker">'+t('heroK')+' '+tag(false)+'</div><h1><i>Dieu n’est pas obligé</i></h1><div class="caps">Roméo Mivekannin · '+t('heroD')+'</div><p class="lead">'+t('heroL')+'</p><div class="btns"><a class="btn" href="#/reserver/visite-mivekannin">'+t('bookVisit')+'</a><a class="btn ghost" href="#/rendez-vous">'+t('privVisit')+'</a></div><a class="src" href="'+REAL[0].src+'" target="_blank" rel="noopener">'+t('more')+' ↗</a></div></section>';
 h+='<section class="blk"><div class="wrap"><div class="head"><div><h2>'+t('agenda')+'</h2><p>'+t('agendaP')+'</p></div><div class="filters">'+cities.map(function(c){return '<a class="chip'+(c===city?' on':'')+'" href="#/?ville='+c+'">'+(c==='all'?t('all'):c)+'</a>'}).join('')+'</div></div><div class="agenda">';
 // annoncés (non réservables) en tête
 REAL.slice(1).forEach(function(r){if(city!=='all'&&r.city!==city)return;
  h+='<div class="ev"><div class="dt">'+pd(r.d1).getDate()+'<small>'+t('months')[pd(r.d1).getMonth()]+' – '+fDay(r.d2)+'</small></div><div class="im"><img src="'+r.img+'" alt="" loading="lazy"></div><div><div>'+tag(false)+'<span class="tag">'+r.city+'</span></div><h3>'+esc(r.k[L])+' · <i>'+esc(r.t)+'</i></h3><div class="meta">'+esc(r.who)+(r.txt?' · '+esc(r.txt[L]):'')+'</div></div><div class="act"><a class="src" href="'+r.src+'" target="_blank" rel="noopener">'+t('more')+' ↗</a>'+(r.id==='lu'?'<a class="btn sm ghost" href="#/reserver/lu-nebtu">'+t('book')+'</a>':'')+'</div></div>'});
 var seen={};items.forEach(function(it){var ev=it.ev,P=PLACES[ev.place];if(seen[ev.id]||(city!=='all'&&P.city!==city))return;seen[ev.id]=1;var ns=nextSlots(ev),left=leftOf(ev,it.s),more=ns.length-1;
  h+='<div class="ev"><div class="dt">'+pd(it.s).getDate()+'<small>'+MS[L][pd(it.s).getMonth()]+' '+pd(it.s).getFullYear()+' · '+fTime(it.s)+'</small></div><div class="im"><img src="'+ev.img+'" alt="" loading="lazy"></div><div><div>'+tag(ev.ex)+'<span class="tag">'+P.city+'</span></div><h3>'+esc(ev.t[L])+'</h3><div class="meta">'+esc(ev.d[L])+'</div>'+(more?'<div class="dates">'+ns.map(function(s){return '<a href="#/reserver/'+ev.id+'?s='+encodeURIComponent(s)+'">'+fShort(s)+'</a>'}).join('')+'</div>':'')+'</div><div class="act"><div class="left">'+(left?'<b>'+left+'</b> '+t('left')+' / '+ev.cap:'<b>'+t('full')+'</b>')+(more?'<br>'+t('nDates').replace('%n',ns.length):'')+'</div>'+(left?'<a class="btn sm" href="#/reserver/'+ev.id+'?s='+encodeURIComponent(it.s)+'">'+t('book')+'</a>':'')+'</div></div>'});
 h+='</div><p class="note">'+t('exNote')+'</p></div></section>';
 h+='<section class="blk"><div class="wrap"><div class="head"><div><h2>'+t('hlm')+'</h2><p>'+t('hlmP')+'</p></div></div><div class="hlm">'+HLM.map(function(x){return '<div class="c">'+(x.img?'<div class="im"><img src="'+x.img+'" alt="" loading="lazy"></div>':'<div class="im" style="display:flex;align-items:center;justify-content:center"><span class="kicker">MoMA · New York</span></div>')+tag(false)+'<h3>'+esc(x.t[L])+'</h3><div class="meta" style="color:var(--grey);font-size:13.5px">'+esc(x.who)+' · '+range(x.d1,x.d2)+'</div><p style="margin-top:8px"><a class="src" href="'+x.src+'" target="_blank" rel="noopener">'+t('more')+' ↗</a></p></div>'}).join('')+'</div></div></section>';
 h+='<section class="blk"><div class="wrap"><div class="head"><div><h2>'+t('fairs')+'</h2><p>'+t('fairsP')+'</p></div><a class="src" href="'+SITE+'/art-fairs/" target="_blank" rel="noopener">'+t('more')+' ↗</a></div></div></section>';
 return h}

var B={};
function viewBook(id,q){
 var ev=evById(id);if(!ev)return viewAgenda(q);
 if(B.ev!==id)B={ev:id,s:null,q:1,prof:''};
 var ss=nextSlots(ev);if(q.get('s')&&!B.s&&ss.indexOf(q.get('s'))>=0)B.s=q.get('s');
 var P=PLACES[ev.place];
 var h='<section class="blk"><div class="wrap book"><aside class="side"><div class="im"><img src="'+ev.img+'" alt=""></div><div><div>'+tag(ev.ex)+'<span class="tag">'+P.city+'</span></div><h2>'+esc(ev.t[L])+'</h2><p style="color:#333">'+esc(ev.d[L])+'</p><p class="note">'+esc(placeTxt(ev.place))+' · '+esc(L==='en'?P.addr_en:P.addr)+'</p>'+(ev.src?'<p class="note"><a class="src" href="'+ev.src+'" target="_blank" rel="noopener">'+t('more')+' ↗</a></p>':'')+'</div></aside>';
 h+='<form id="bk" novalidate><div class="steps"><span class="on">1 · '+t('s1')+'</span><span class="'+(B.s?'on':'')+'">2 · '+t('s2')+'</span><span class="'+(B.s?'on':'')+'">3 · '+t('s3')+'</span><span>4 · '+t('s4')+'</span></div>';
 h+='<fieldset><legend>'+t('chooseSlot')+'</legend><div class="slots">'+ss.map(function(s){var l=leftOf(ev,s);return '<button type="button" class="slot'+(B.s===s?' on':'')+(l?'':' full')+'" data-s="'+s+'"'+(l?'':' disabled')+'><b>'+fShort(s)+' · '+fTime(s)+'</b><small>'+(l?l+' '+t('left'):t('full'))+'</small></button>'}).join('')+'</div>'+(ev.ex||ev.slotEx?'<p class="note" style="margin-top:10px">'+t('slotsEx')+'</p>':'')+'</fieldset>';
 var lim=B.s?Math.min(ev.max,leftOf(ev,B.s)):ev.max;if(B.q>lim)B.q=Math.max(1,lim);
 h+='<fieldset><legend>'+t('seats')+'</legend><div class="qty"><button type="button" data-q="-1" aria-label="-">−</button><output id="qv">'+B.q+'</output><button type="button" data-q="1" aria-label="+">+</button></div><p class="note" style="margin-top:8px">'+t('maxSeats').replace('%n',ev.max)+'</p></fieldset>';
 h+='<fieldset><legend>'+t('you')+'</legend><div class="grid2"><label class="f full">'+t('name')+'<input name="name" autocomplete="name" required></label><label class="f">'+t('email')+'<input name="email" type="email" autocomplete="email" required></label><label class="f">'+t('phone')+'<input name="phone" type="tel" autocomplete="tel" placeholder="+225 07 00 00 00 00" required></label><div class="full"><div class="f" style="font-size:12px;color:var(--grey);margin-bottom:6px">'+t('profile')+'</div><div class="radios">'+Object.keys(t('profiles')).map(function(k){return '<label class="'+(B.prof===k?'on':'')+'"><input type="radio" name="prof" value="'+k+'"'+(B.prof===k?' checked':'')+'>'+t('profiles')[k]+'</label>'}).join('')+'</div></div><label class="f full">'+t('msg')+'<textarea name="msg" rows="2"></textarea></label></div></fieldset>';
 h+='<p class="priv">'+t('privacy')+'</p><button class="btn" type="submit" id="go">'+t('confirm')+'</button><div class="err" id="err"></div></form></div></section>';
 return h}
function bindBook(){
 var f=document.getElementById('bk');if(!f)return;var ev=evById(B.ev);
 var keep=function(){var o={};['name','email','phone','msg'].forEach(function(k){o[k]=f.elements[k].value});return o};
 var restore=function(o){Object.keys(o).forEach(function(k){f.elements[k].value=o[k]})};
 f.querySelectorAll('.slot').forEach(function(b){b.onclick=function(){var o=keep();B.s=b.dataset.s;render();restore(o)}});
 f.querySelectorAll('[data-q]').forEach(function(b){b.onclick=function(){var lim=B.s?Math.min(ev.max,leftOf(ev,B.s)):ev.max;B.q=Math.max(1,Math.min(lim,B.q+Number(b.dataset.q)));document.getElementById('qv').textContent=B.q}});
 f.querySelectorAll('.radios input').forEach(function(r){r.onchange=function(){B.prof=r.value;f.querySelectorAll('.radios label').forEach(function(l){l.classList.toggle('on',l.contains(r))})}});
 f.onsubmit=function(e){e.preventDefault();var o=keep(),er=document.getElementById('err');
  if(!B.s)return er.textContent=t('errSlot');if(o.name.trim().length<2)return er.textContent=t('errName');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(o.email.trim()))return er.textContent=t('errMail');
  if(o.phone.replace(/\D/g,'').length<8)return er.textContent=t('errPhone');if(!B.prof)return er.textContent=t('errProf');
  var m=mine(),ref=newRef();m.b.push({ref:ref,ev:ev.id,s:B.s,q:B.q,name:o.name.trim(),email:o.email.trim(),phone:o.phone.trim(),prof:B.prof,msg:o.msg.trim(),at:new Date().toISOString(),kind:'ev'});save(m);
  B={};location.hash='#/confirmation/'+ref}}

function findBooking(ref){var m=mine();for(var i=0;i<m.b.length;i++)if(m.b[i].ref===ref)return m.b[i]}
function viewConf(ref){
 var b=findBooking(ref);if(!b)return viewAgenda(new URLSearchParams());
 var title,place,img;if(b.kind==='priv'){title=t('privT')+' · '+(b.place==='par'?'Paris':'Abidjan');place=b.place}else{var ev=evById(b.ev);title=ev.t[L];place=ev.place}
 var P=PLACES[place];
 return '<section class="blk"><div class="wrap conf"><div class="mark"><i></i></div><div class="kicker">'+t('s4')+'</div><h2 style="margin:10px 0 12px">'+(b.kind==='priv'?t('privOk'):t('thanks'))+'</h2><p style="color:var(--grey)">'+(b.kind==='priv'?t('privOkP'):t('thanksP'))+'</p>'+
 '<div class="ticket"><div class="ref"><span><small>'+t('ref')+'</small>'+esc(b.ref)+'</span><img src="img/logo.png" alt="" style="height:30px;width:auto"></div><div><small>'+(b.kind==='priv'?t('privT'):t('ev'))+'</small>'+esc(title)+'</div><div><small>'+t('when')+'</small>'+fFull(b.s)+'</div><div><small>'+t('where')+'</small>'+esc(placeTxt(place))+'<br><span style="color:var(--grey);font-size:13px">'+esc(L==='en'?P.addr_en:P.addr)+'</span></div><div><small>'+t('seatsL')+'</small>'+b.q+'</div><div><small>'+t('guest')+'</small>'+esc(b.name)+'<br><span style="color:var(--grey);font-size:13px;word-break:break-all">'+esc(b.email)+' · '+esc(b.phone)+'</span></div><div><small>'+t('profile')+'</small>'+t('profiles')[b.prof]+'</div></div>'+
 '<div class="btns" style="justify-content:center;margin-top:26px"><button class="btn" type="button" id="ics">'+t('ics')+' (.ics)</button><a class="btn ghost" href="#/">'+t('another')+'</a></div><p class="priv" style="text-align:left;margin-top:26px">'+t('privacy')+'</p></div></section>'}
function bindConf(ref){var b=findBooking(ref),x=document.getElementById('ics');if(!b||!x)return;x.onclick=function(){var title=b.kind==='priv'?t('privT')+' · Galerie Cécile Fakhoury':evById(b.ev).t[L]+' · Galerie Cécile Fakhoury';ics({ref:b.ref,s:b.s,place:b.kind==='priv'?b.place:evById(b.ev).place,title:title,q:b.q,dur:b.kind==='priv'?60:90})}}

/* Rendez-vous privé */
var R={place:'abj',day:null,slot:null,prof:''};
function workDays(place){var out=[],d=new Date(NOW.getFullYear(),NOW.getMonth(),NOW.getDate()+1);var last=place==='abj'?pd('2027-01-09'):null;
 while(out.length<10){var w=d.getDay();if(w!==0&&(place==='par'?w!==6:w!==1)){if(last&&d>last)break;out.push(d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2))}d.setDate(d.getDate()+1)}return out}
var HOURS={abj:['10:00','11:30','15:00','16:30'],par:['11:00','14:30','16:00','17:30']};
function privTaken(place,day,h){var r=rnd(place+day+h)();var m=mine();return r<.28||m.b.some(function(b){return b.kind==='priv'&&b.place===place&&b.s===day+'T'+h})}
function viewPriv(){
 var days=workDays(R.place);if(R.day&&days.indexOf(R.day)<0)R.day=null;if(!R.day)R.day=days[0];
 var P=PLACES[R.place];
 var h='<section class="blk"><div class="wrap book"><aside class="side"><div class="im"><img src="'+(R.place==='par'?'img/paris.jpg':'img/vue-2.jpg')+'" alt=""></div><div><div class="kicker">'+t('privT')+'</div><h2>'+(R.place==='par'?'Paris · Showroom':'<i>Dieu n’est pas obligé</i>')+'</h2><p style="color:#333">'+t('privP')+'</p><p class="note">'+esc(placeTxt(R.place))+' · '+esc(L==='en'?P.addr_en:P.addr)+'<br>t. '+P.tel+' · '+P.mail+'</p></div></aside><form id="pv" novalidate>';
 h+='<fieldset><legend>'+t('place')+'</legend><div class="radios">'+[['abj',t('pAbj')],['par',t('pPar')]].map(function(p){return '<label class="'+(R.place===p[0]?'on':'')+'"><input type="radio" name="place" value="'+p[0]+'"'+(R.place===p[0]?' checked':'')+'>'+p[1]+'</label>'}).join('')+'</div></fieldset>';
 h+='<fieldset><legend>'+t('day')+'</legend><div class="slots">'+days.map(function(d){return '<button type="button" class="slot'+(R.day===d?' on':'')+'" data-d="'+d+'"><b>'+fShort(d+'T00:00')+'</b></button>'}).join('')+'</div></fieldset>';
 h+='<fieldset><legend>'+t('chooseSlot')+'</legend><div class="slots">'+HOURS[R.place].map(function(x){var s=R.day+'T'+x,tk=privTaken(R.place,R.day,x);return '<button type="button" class="slot'+(R.slot===s?' on':'')+(tk?' full':'')+'" data-h="'+s+'"'+(tk?' disabled':'')+'><b>'+fTime(s)+'</b><small>'+(tk?t('full'):(R.place==='par'?'Paris':'Abidjan'))+'</small></button>'}).join('')+'</div><p class="note" style="margin-top:10px">'+t('slotsEx')+'</p></fieldset>';
 h+='<fieldset><legend>'+t('you')+'</legend><div class="grid2"><label class="f full">'+t('name')+'<input name="name" autocomplete="name"></label><label class="f">'+t('email')+'<input name="email" type="email" autocomplete="email"></label><label class="f">'+t('phone')+'<input name="phone" type="tel" autocomplete="tel"></label><div class="full"><div style="font-size:12px;color:var(--grey);margin-bottom:6px">'+t('profile')+'</div><div class="radios" id="pp">'+Object.keys(t('profiles')).map(function(k){return '<label class="'+(R.prof===k?'on':'')+'"><input type="radio" name="prof" value="'+k+'"'+(R.prof===k?' checked':'')+'>'+t('profiles')[k]+'</label>'}).join('')+'</div></div><label class="f full">'+t('interest')+'<textarea name="msg" rows="2"></textarea></label></div></fieldset>';
 h+='<p class="priv">'+t('privacy')+'</p><button class="btn" type="submit">'+t('ask')+'</button><div class="err" id="err"></div></form></div></section>';
 return h}
function bindPriv(){var f=document.getElementById('pv');if(!f)return;
 var keep=function(){var o={};['name','email','phone','msg'].forEach(function(k){o[k]=f.elements[k].value});return o};
 var again=function(fn){var o=keep();fn();render();var g=document.getElementById('pv');Object.keys(o).forEach(function(k){g.elements[k].value=o[k]})};
 f.querySelectorAll('input[name=place]').forEach(function(r){r.onchange=function(){again(function(){R.place=r.value;R.day=null;R.slot=null})}});
 f.querySelectorAll('[data-d]').forEach(function(b){b.onclick=function(){again(function(){R.day=b.dataset.d;R.slot=null})}});
 f.querySelectorAll('[data-h]').forEach(function(b){b.onclick=function(){again(function(){R.slot=b.dataset.h})}});
 f.querySelectorAll('#pp input').forEach(function(r){r.onchange=function(){R.prof=r.value;f.querySelectorAll('#pp label').forEach(function(l){l.classList.toggle('on',l.contains(r))})}});
 f.onsubmit=function(e){e.preventDefault();var o=keep(),er=document.getElementById('err');
  if(!R.slot)return er.textContent=t('errSlot');if(o.name.trim().length<2)return er.textContent=t('errName');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(o.email.trim()))return er.textContent=t('errMail');
  if(o.phone.replace(/\D/g,'').length<8)return er.textContent=t('errPhone');if(!R.prof)return er.textContent=t('errProf');
  var m=mine(),ref=newRef();m.b.push({ref:ref,kind:'priv',place:R.place,s:R.slot,q:1,name:o.name.trim(),email:o.email.trim(),phone:o.phone.trim(),prof:R.prof,msg:o.msg.trim(),at:new Date().toISOString()});save(m);
  R={place:R.place,day:null,slot:null,prof:''};location.hash='#/confirmation/'+ref}}

/* Espaces */
function viewSpaces(){
 var S=[['abj',true],['dkr',false],['par',false]];
 return '<section class="blk"><div class="wrap"><div class="head"><div><h2>'+t('spacesT')+'</h2></div><a class="src" href="'+SITE+'/a-propos/" target="_blank" rel="noopener">'+t('more')+' ↗</a></div><div class="spaces">'+S.map(function(x){var P=PLACES[x[0]];
  return '<div class="space"><div class="im"><img src="'+P.img+'" alt="'+P.city+'" loading="lazy"></div><h3>'+P.city+'</h3><p>'+esc(L==='en'?P.addr_en:P.addr)+(P.post?'<br>'+esc(P.post):'')+'<br>t. <a href="tel:'+P.tel.replace(/[^+\d]/g,'')+'">'+P.tel+'</a><br><a href="mailto:'+P.mail+'">'+P.mail+'</a></p><div class="links">'+(P.q?'<a class="btn sm ghost" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(P.q)+'" target="_blank" rel="noopener">'+t('route')+' ↗</a>':'<span class="tag">'+t('rdvOnly')+'</span>')+(x[0]!=='dkr'?'<a class="btn sm" href="#/rendez-vous?lieu='+x[0]+'">'+t('privVisit')+'</a>':'')+'</div></div>'}).join('')+'</div></div></section>'}

/* Côté galerie */
var A={ev:'vernissage-mivekannin',s:null,q:''};
function sessionsOf(ev){return ev.s}
function viewAdmin(){
 var m=mine();var ev=evById(A.ev);if(!A.s||ev.s.indexOf(A.s)<0)A.s=ev.s[0];
 var g=guests(ev,A.s);
 var seats=g.reduce(function(a,x){return a+x.q},0),pres=g.filter(function(x){return x.ci}).reduce(function(a,x){return a+x.q},0);
 var rate=seats?Math.round(pres/seats*100):0;
 var f=A.q.trim().toLowerCase(),rows=g.filter(function(x){return !f||x.name.toLowerCase().indexOf(f)>=0});
 var h='<section class="blk"><div class="wrap"><div class="head"><div><div class="kicker">'+t('demo')+'</div><h2>'+t('admT')+'</h2><p>'+t('admP')+'</p></div><button class="btn sm ghost" id="rst" type="button">'+t('reset')+'</button></div>';
 h+='<div class="bar2"><label class="f">'+t('ev')+'<select id="aev">'+EV.map(function(e){return '<option value="'+e.id+'"'+(e.id===A.ev?' selected':'')+'>'+esc(e.t[L])+(e.ex?' ('+t('ex').toLowerCase()+')':'')+'</option>'}).join('')+'</select></label><label class="f">'+t('session')+'<select id="ases">'+ev.s.map(function(s){return '<option value="'+s+'"'+(s===A.s?' selected':'')+'>'+fFull(s)+(isPast(s)?' · '+t('past'):'')+'</option>'}).join('')+'</select></label><label class="f">'+t('search')+'<input id="aq" value="'+esc(A.q)+'"></label><button class="btn sm" id="csv" type="button">'+t('csv')+'</button></div>';
 h+='<div class="kpis"><div><b>'+g.length+'</b><small>'+t('k1')+'</small></div><div><b>'+seats+' / '+ev.cap+'</b><small>'+t('k2')+'</small></div><div><b>'+pres+'</b><small>'+t('k3')+'</small></div><div><b>'+rate+' %</b><small>'+t('k4')+'</small></div></div>';
 h+='<div class="list"><div class="row h"><div>'+t('hName')+'</div><div>'+t('hProf')+'</div><div>'+t('hSeats')+'</div><div>'+t('hRef')+'</div><div style="text-align:right">'+t('hCi')+'</div></div>';
 h+=rows.length?rows.map(function(x){return '<div class="row"><div class="nm"><b>'+esc(x.name)+(x.fake?'':' <span class="pill new">'+t('yours')+'</span>')+'</b><small>'+esc(x.email)+'</small></div><div><span class="pill">'+t('profiles')[x.prof]+'</span></div><div>'+x.q+'</div><div style="font-size:12.5px;color:var(--grey)">'+x.ref+'</div><div class="ci"><button type="button" class="ck'+(x.ci?' on':'')+'" data-ref="'+x.ref+'" data-v="'+(x.ci?1:0)+'">'+(x.ci?'✓ '+t('ci'):t('nci'))+'</button></div></div>'}).join(''):'<div class="empty">'+t('none')+'</div>';
 h+='</div></div></section>';return h}
function bindAdmin(){
 var e=document.getElementById('aev');if(!e)return;
 e.onchange=function(){A.ev=e.value;A.s=null;render()};
 document.getElementById('ases').onchange=function(){A.s=this.value;render()};
 var q=document.getElementById('aq');q.oninput=function(){A.q=q.value;var p=q.selectionStart;render();var n=document.getElementById('aq');n.focus();n.setSelectionRange(p,p)};
 document.querySelectorAll('.ck').forEach(function(b){b.onclick=function(){var m=mine();m.ci[b.dataset.ref]=b.dataset.v!=='1';save(m);render()}});
 document.getElementById('csv').onclick=function(){var ev=evById(A.ev),g=guests(ev,A.s);
  var head=['reference','evenement','seance','nom','email','telephone','profil','places','present'];
  var lines=[head.join(';')].concat(g.map(function(x){return [x.ref,ev.t.fr,A.s.replace('T',' '),x.name,x.email,x.phone||'',T.fr.profiles[x.prof],x.q,x.ci?'oui':'non'].map(function(v){return '"'+String(v).replace(/"/g,'""')+'"'}).join(';')}));
  download('inscrits-'+ev.id+'-'+A.s.slice(0,10)+'.csv','text/csv;charset=utf-8','\ufeff'+lines.join('\r\n'))};
 document.getElementById('rst').onclick=function(){localStorage.removeItem(STORE);render()};
}

function render(){
 var h=location.hash||'#/';var parts=h.slice(2).split('?'),path=parts[0].split('/'),q=new URLSearchParams(parts[1]||'');
 var r=path[0]||'';var out;
 if(r==='reserver')out=viewBook(path[1],q);
 else if(r==='confirmation')out=viewConf(path[1]);
 else if(r==='rendez-vous'){if(q.get('lieu')&&q.get('lieu')!==R.place&&!R._l){R.place=q.get('lieu')==='par'?'par':'abj';R.day=null;R.slot=null}R._l=q.get('lieu');out=viewPriv()}
 else if(r==='espaces')out=viewSpaces();
 else if(r==='galerie')out=viewAdmin();
 else out=viewAgenda(q);
 app.innerHTML=out;markNav();
 if(r==='reserver')bindBook();else if(r==='confirmation')bindConf(path[1]);else if(r==='rendez-vous')bindPriv();else if(r==='galerie')bindAdmin();
}
var lastRoute='';
window.addEventListener('hashchange',function(){document.body.classList.remove('menu');var k=(location.hash||'#/').split('?')[0];if(k!==lastRoute){window.scrollTo(0,0);lastRoute=k}render()});
document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){L=b.dataset.l;localStorage.setItem('gcf-ev-lang',L);shell();render()}});
document.getElementById('burger').onclick=function(){document.body.classList.toggle('menu')};
window.addEventListener('scroll',function(){},{passive:true});
shell();render();lastRoute=(location.hash||'#/').split('?')[0];
})();
