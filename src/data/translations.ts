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
    'ekomini.structure': 'Konstrukcija',
    'ekomini.insulation': 'Izolācija',
    'ekomini.solar': 'Saules paneļi',
    'ekomini.efficiency': 'Energoefektivitāte',
    'ekomini.installation': 'Uzstādīšanas laiks',
    'ekomini.mobile': 'Mobila un transportējama',
    
    // Benefits
    'benefits.title': 'Priekšrocības',
    'benefits.sustainable': 'Ilgtspējīgi materiāli',
    'benefits.energy': 'Zems enerģijas patēriņš',
    'benefits.quick': 'Ātra uzstādīšana',
    'benefits.mobile': 'Pilnībā pārvietojama',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Iepazīstieties ar mūsu realizētajiem projektiem',
    
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
    
    // About
    'about.title': 'Par mums',
    'about.text': 'EKO-MĀJAS ir vadošs Latvijas uzņēmums ekoloģisko modulāro māju ražošanā. Mūsu misija ir radīt ilgtspējīgus, energoefektīvus un kvalitatīvus mājokļus, kas ir pieejami, mobili un draudzīgi videi.\n\nMēs izmantojam tikai augstākās kvalitātes materiālus un inovatīvas tehnoloģijas, lai nodrošinātu, ka katra EKO-MĀJAS ir ne tikai estētiski pievilcīga, bet arī praktiska un ilgtspējīga.',
    
    // Contact
    'contact.title': 'Sazināties ar mums',
    'contact.name': 'Vārds, uzvārds',
    'contact.email': 'E-pasts',
    'contact.message': 'Ziņa',
    'contact.send': 'Nosūtīt',
    'contact.info': 'Vai sazināties tieši:',
    'contact.email.label': 'E-pasts:',
    'contact.phone.label': 'Tālrunis:',
    
    // Footer
    'footer.terms': 'Lietošanas noteikumi',
    'footer.privacy': 'Privātuma politika',
    'footer.cookies': 'Sīkdatņu politika',
    'footer.rights': 'Visas tiesības aizsargātas',
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
    'ekomini.structure': 'Structure',
    'ekomini.insulation': 'Insulation',
    'ekomini.solar': 'Solar panels',
    'ekomini.efficiency': 'Energy efficiency',
    'ekomini.installation': 'Installation time',
    'ekomini.mobile': 'Mobile and transportable',
    
    // Benefits
    'benefits.title': 'Benefits',
    'benefits.sustainable': 'Sustainable materials',
    'benefits.energy': 'Low energy consumption',
    'benefits.quick': 'Quick installation',
    'benefits.mobile': 'Fully movable',
    
    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Explore our completed projects',
    
    // Testimonials
    'testimonials.title': 'Customer Testimonials',
    'testimonial1.text': 'The EKO-MĀJAS team installed our EKO Mini in just 5 days! Truly impressive work and quality.',
    'testimonial1.author': 'John Smith',
    'testimonial1.location': 'Liepaja',
    'testimonial2.text': 'We were looking for a sustainable and modern solution, and EKO Mini was the perfect choice. Thank you, EKO-MĀJAS team!',
    'testimonial2.author': 'Anna Hill',
    'testimonial2.location': 'Cesis',
    'testimonial3.text': 'Amazing quality and attention to detail. Our EKO Mini is energy-efficient and aesthetically beautiful.',
    'testimonial3.author': 'Karl Oak',
    'testimonial3.location': 'Jurmala',
    
    // About
    'about.title': 'About Us',
    'about.text': 'EKO-MĀJAS is a leading Latvian company in the production of ecological modular houses. Our mission is to create sustainable, energy-efficient, and quality homes that are accessible, mobile, and environmentally friendly.\n\nWe use only the highest quality materials and innovative technologies to ensure that every EKO-MĀJAS is not only aesthetically appealing but also practical and sustainable.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.info': 'Or contact us directly:',
    'contact.email.label': 'Email:',
    'contact.phone.label': 'Phone:',
    
    // Footer
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.rights': 'All rights reserved',
  },
};

export default translations;