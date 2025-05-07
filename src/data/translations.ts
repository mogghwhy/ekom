interface TranslationObject {
  [key: string]: string;
}

interface Translations {
  lv: TranslationObject;
  en: TranslationObject;
}

const translations: Translations = {
  lv: {
    // Navigation
    'nav.home': 'Sākums',
    'nav.ekomini': 'EKO Mini',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Par mums',
    'nav.contact': 'Sazināties',
    'nav.quote': 'Piedāvājums',
    
    // Hero
    'hero.title': 'Ekoloģiskas modulārās mājas',
    'hero.subtitle': 'Ilgtspējīgi un inovatīvi risinājumi ātrai un videi draudzīgai dzīvošanai',
    'hero.cta': 'Saņemt piedāvājumu',
    
    // EKO Mini
    'ekomini.title': 'EKO Mini – Kompakta modulārā māja',
    'ekomini.subtitle': 'Jūsu kompaktā, ekoloģiskā dzīves telpa, gatava dzīvošanai',
    'ekomini.components': 'Mājas galvenie komponenti',
    'ekomini.area': 'Platība',
    'ekomini.area.value': '25m²',
    'ekomini.structure': 'Konstrukcija',
    'ekomini.structure.value': 'Koka karkass',
    'ekomini.insulation': 'Izolācija',
    'ekomini.insulation.value': 'Ekovate',
    'ekomini.solar': 'Saules paneļi',
    'ekomini.solar.value': 'Iekļauti',
    'ekomini.efficiency': 'Energoefektivitāte',
    'ekomini.efficiency.value': 'A+ klase',
    'ekomini.installation': 'Uzstādīšanas laiks',
    'ekomini.installation.value': '1 nedēļa',
    'ekomini.mobile': 'Mobilitāte',
    'ekomini.mobile.value': 'Pārvietojama',
    
    // Benefits
    'benefits.title': 'Priekšrocības',
    'benefits.sustainable': 'Ilgtspējīgi materiāli',
    'benefits.energy': 'Zems enerģijas patēriņš',
    'benefits.quick': 'Ātra uzstādīšana',
    'benefits.mobile': 'Pilnībā pārvietojama',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Iepazīstieties ar mūsu realizētajiem projektiem',
    'portfolio.coastal.title': 'EKO Mini - Jūrmalas atpūta',
    'portfolio.coastal.location': 'Jūrmala, Latvija',
    'portfolio.forest.title': 'EKO Mini - Meža patvērums',
    'portfolio.forest.location': 'Cēsis, Latvija',
    'portfolio.lake.title': 'EKO Mini - Ezera krastā',
    'portfolio.lake.location': 'Liepāja, Latvija',
    
    // About
    'about.title': 'Par mums',
    'about.text': 'EKO-MĀJAS ir vadošs Latvijas uzņēmums ekoloģisko modulāro māju ražošanā. Mūsu misija ir radīt ilgtspējīgus, energoefektīvus un kvalitatīvus mājokļus, kas ir pieejami, mobili un draudzīgi videi.\n\nMēs izmantojam tikai augstākās kvalitātes materiālus un inovatīvas tehnoloģijas, lai nodrošinātu, ka katra EKO-MĀJAS ir ne tikai estētiski pievilcīga, bet arī praktiska un ilgtspējīga.',
    'about.values.sustainability.title': 'Ilgtspējība',
    'about.values.sustainability.description': 'Mēs izmantojam videi draudzīgus materiālus un tehnoloģijas, lai samazinātu ietekmi uz vidi.',
    'about.values.efficiency.title': 'Efektivitāte',
    'about.values.efficiency.description': 'Mūsu modulārie risinājumi ir veidoti ātrai uzstādīšanai un optimālam enerģijas patēriņam.',
    'about.values.innovation.title': 'Inovācijas',
    'about.values.innovation.description': 'Mēs nepārtraukti pētām un ieviešam jaunas, ilgtspējīgas būvniecības metodes.',
    'about.values.quality.title': 'Kvalitāte',
    'about.values.quality.description': 'Katra EKO-MĀJAS māja ir būvēta atbilstoši augstākajiem amatniecības standartiem.',
    
    // Testimonials
    'testimonials.title': 'Klientu atsauksmes',
    'testimonial1.text': 'EKO-MĀJAS komanda uzstādīja mūsu EKO Mini tikai 5 dienās! Patiesi iespaidīgs darbs un kvalitāte.',
    'testimonial1.author': 'Jānis Bērziņš',
    'testimonial1.location': 'Liepāja',
    'testimonial2.text': 'Meklējām ilgtspējīgu un modernu risinājumu, un EKO Mini bija perfekta izvēle. Paldies EKO-MĀJAS komandai!',
    'testimonial2.author': 'Anna Kalna',
    'testimonial2.location': 'Cēsis',
    'testimonial3.text': 'Pārsteidzoša kvalitāte un uzmanība detaļām. Mūsu EKO Mini ir enerģētiski efektīva un estētiski skaista.',
    'testimonial3.author': 'Kārlis Ozols',
    'testimonial3.location': 'Jūrmala',
    
    // Contact
    'contact.title': 'Sazināties ar mums',
    'contact.name': 'Vārds, uzvārds',
    'contact.email': 'E-pasts',
    'contact.message': 'Ziņa',
    'contact.send': 'Nosūtīt',
    'contact.info': 'Kontakti:',
    'contact.email.label': 'E-pasts:',
    'contact.phone.label': 'Tālrunis:',
    
    // Footer
    'footer.description': 'Ilgtspējīgas modulārās mājas modernai dzīvei.',
    'footer.quickLinks': 'Ātrās saites',
    'footer.newsletter': 'Jaunumi',
    'footer.newsletterDescription': 'Piesakieties, lai saņemtu jaunumus par mūsu projektiem un piedāvājumiem.',
    'footer.emailPlaceholder': 'Jūsu e-pasts',
    'footer.subscribe': 'Pieteikties',
    'footer.terms': 'Lietošanas noteikumi',
    'footer.privacy': 'Privātuma politika',
    'footer.cookies': 'Sīkdatņu politika',
    'footer.rights': 'Visas tiesības aizsargātas'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.ekomini': 'EKO Mini',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'nav.quote': 'Get a Quote',
    
    // Hero
    'hero.title': 'Ecological Modular Houses',
    'hero.subtitle': 'Sustainable and innovative solutions for quick and environmentally friendly living',
    'hero.cta': 'Get a Quote',
    
    // EKO Mini
    'ekomini.title': 'EKO Mini – Compact Modular House',
    'ekomini.subtitle': 'Your compact, ecological living space, ready for living',
    'ekomini.components': 'Main Components of the House',
    'ekomini.area': 'Area',
    'ekomini.area.value': '25m²',
    'ekomini.structure': 'Structure',
    'ekomini.structure.value': 'Wooden frame',
    'ekomini.insulation': 'Insulation',
    'ekomini.insulation.value': 'Eco wool',
    'ekomini.solar': 'Solar panels',
    'ekomini.solar.value': 'Included',
    'ekomini.efficiency': 'Energy efficiency',
    'ekomini.efficiency.value': 'A+ class',
    'ekomini.installation': 'Installation time',
    'ekomini.installation.value': '1 week',
    'ekomini.mobile': 'Mobility',
    'ekomini.mobile.value': 'Mobile',
    
    // Benefits
    'benefits.title': 'Benefits',
    'benefits.sustainable': 'Sustainable materials',
    'benefits.energy': 'Low energy consumption',
    'benefits.quick': 'Quick installation',
    'benefits.mobile': 'Fully movable',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Explore our completed projects',
    'portfolio.coastal.title': 'EKO Mini - Coastal Retreat',
    'portfolio.coastal.location': 'Jurmala, Latvia',
    'portfolio.forest.title': 'EKO Mini - Forest Hideaway',
    'portfolio.forest.location': 'Cesis, Latvia',
    'portfolio.lake.title': 'EKO Mini - Lakeside Cabin',
    'portfolio.lake.location': 'Liepaja, Latvia',
    
    // About
    'about.title': 'About Us',
    'about.text': 'EKO-MĀJAS is a leading Latvian company in the production of ecological modular houses. Our mission is to create sustainable, energy-efficient, and quality homes that are accessible, mobile, and environmentally friendly.\n\nWe use only the highest quality materials and innovative technologies to ensure that every EKO-MĀJAS is not only aesthetically appealing but also practical and sustainable.',
    'about.values.sustainability.title': 'Sustainability',
    'about.values.sustainability.description': 'We use eco-friendly materials and technologies to minimize our environmental impact.',
    'about.values.efficiency.title': 'Efficiency',
    'about.values.efficiency.description': 'Our modular solutions are designed for quick installation and optimal energy use.',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.description': 'We constantly research and implement new, sustainable building methods.',
    'about.values.quality.title': 'Quality',
    'about.values.quality.description': 'Every EKO-MĀJAS house is built to the highest standards of craftsmanship.',
    
    // Testimonials
    'testimonials.title': 'Customer Testimonials',
    'testimonial1.text': 'The EKO-MĀJAS team installed our EKO Mini in just 5 days! Truly impressive work and quality.',
    'testimonial1.author': 'Jānis Bērziņš',
    'testimonial1.location': 'Liepaja',
    'testimonial2.text': 'We were looking for a sustainable and modern solution, and EKO Mini was the perfect choice. Thank you, EKO-MĀJAS team!',
    'testimonial2.author': 'Anna Kalna',
    'testimonial2.location': 'Cesis',
    'testimonial3.text': 'Amazing quality and attention to detail. Our EKO Mini is energy-efficient and aesthetically beautiful.',
    'testimonial3.author': 'Kārlis Ozols',
    'testimonial3.location': 'Jurmala',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Contacts:',
    'contact.email.label': 'Email:',
    'contact.phone.label': 'Phone:',
    
    // Footer
    'footer.description': 'Sustainable modular homes for modern living.',
    'footer.quickLinks': 'Quick Links',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDescription': 'Subscribe to receive updates about our latest projects and offers.',
    'footer.emailPlaceholder': 'Your email',
    'footer.subscribe': 'Subscribe',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.rights': 'All rights reserved'
  },
};

export default translations