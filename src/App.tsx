import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Snowflake, 
  Flame, 
  Settings, 
  ChevronRight, 
  Star, 
  Menu, 
  X,
  ArrowRight,
  MessageSquare,
  Instagram,
  Facebook,
  Linkedin,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#' },
    { name: 'Usluge', href: '#services' },
    { name: 'O nama', href: '#why-us' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-blue-500/20 shadow-lg">
            <Snowflake className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight whitespace-nowrap",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            Heating <span className="text-blue-500">Klimatizacije</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-500",
                isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+381600000000" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
          >
            <Phone size={16} />
            Pozovi odmah
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+381600000000" 
              className="bg-blue-600 text-white p-4 rounded-xl text-center font-bold mt-2 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Pozovi odmah
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Gradient with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Dostupni 24/7 za hitne intervencije</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            Brza i pouzdana <span className="text-blue-500">ugradnja i servis</span> klimatizacije
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            Profesionalna rešenja za grejanje i hlađenje vašeg doma ili poslovnog prostora. 
            Vrhunska oprema, sertifikovani majstori i garancija na sve radove.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+381600000000"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Phone size={20} />
              Pozovi odmah
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Zatraži ponudu
              <ArrowRight size={20} />
            </motion.a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <CheckCircle2 className="text-blue-500" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">15+</p>
                <p className="text-slate-400 text-sm">Godina iskustva</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Star className="text-yellow-500 fill-yellow-500" />
              </div>
              <div>
                <p className="text-white font-bold text-xl">2500+</p>
                <p className="text-slate-400 text-sm">Zadovoljnih klijenata</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1560706834-afe1ba5d6737?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Air Conditioning System" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <ShieldCheck className="text-green-600 w-7 h-7" />
            </div>
            <div>
              <p className="text-slate-900 font-bold">Garancija kvaliteta</p>
              <p className="text-slate-500 text-sm">Do 5 godina na ugradnju</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Ugradnja klima uređaja",
      description: "Profesionalna montaža svih tipova klima uređaja uz savetovanje o najboljoj poziciji za maksimalnu efikasnost.",
      icon: <Snowflake className="w-8 h-8" />,
      color: "bg-blue-600/10"
    },
    {
      title: "Servis i održavanje",
      description: "Redovni godišnji servis, čišćenje, dezinfekcija i dopuna freona za dugovečan rad vašeg uređaja.",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-cyan-600/10"
    },
    {
      title: "Popravka kvarova",
      description: "Brza dijagnostika i otklanjanje svih vrsta kvarova na klima uređajima i sistemima grejanja.",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-indigo-600/10"
    },
    {
      title: "Sistemi grejanja",
      description: "Ugradnja i servis toplotnih pumpi i drugih energetski efikasnih sistema za grejanje vašeg prostora.",
      icon: <Flame className="w-8 h-8" />,
      color: "bg-orange-600/10"
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Naše Usluge</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Kompletna rešenja za vaš komfor</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Od ugradnje do redovnog održavanja, naš tim stručnjaka je tu da osigura da vaš prostor uvek ima idealnu temperaturu.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory no-scrollbar">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group min-w-[280px] md:min-w-0 snap-center"
            >
              <div className={cn("h-48 overflow-hidden relative flex items-center justify-center", service.color)}>
                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/0 transition-colors" />
                <div className="p-3 rounded-2xl text-blue-600 scale-150 opacity-20">
                  {service.icon}
                </div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-lg text-blue-600">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
                <a href="#contact" className="text-blue-600 font-bold flex items-center gap-2 group/link">
                  Saznaj više 
                  <ChevronRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Brza usluga",
      text: "Izlazak na teren u najkraćem mogućem roku, često istog dana.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Sertifikovani eksperti",
      text: "Naš tim čine iskusni majstori sa svim potrebnim licencama.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Povoljne cene",
      text: "Transparentno formiranje cena bez skrivenih troškova.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Garancija",
      text: "Dajemo pismenu garanciju na sve ugrađene delove i radove.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Air Conditioning Unit" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-0" />
          
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-20 hidden md:block">
            <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-2xl">
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-blue-100 text-sm">Zadovoljstvo klijenata</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Zašto mi?</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Vaš komfor je naša najveća briga</h3>
          <p className="text-slate-600 text-lg mb-10">
            Kroz godine rada stekli smo poverenje hiljada klijenata zahvaljujući profesionalnom pristupu i beskompromisnom kvalitetu usluge.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{reason.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
              Saznaj više o nama
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Marko Petrović", role: "Vlasnik stana", text: "Izuzetno profesionalni! Klima je ugrađena za manje od 3 sata, sve je ostavljeno čisto. Svaka preporuka.", rating: 5 },
    { name: "Jelena Kostić", role: "Menadžer restorana", text: "Redovno održavaju naše sisteme već 3 godine. Nikada nismo imali problem, uvek su dostupni za hitne slučajeve.", rating: 5 },
    { name: "Nikola Simić", role: "Privatni korisnik", text: "Najbolja cena u gradu za kvalitet koji pružaju. Majstori su ljubazni i stručni.", rating: 5 },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Utisci Klijenata</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Šta kažu o nama</h3>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-3 snap-x snap-mandatory no-scrollbar">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative min-w-[300px] md:min-w-0 snap-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-slate-500 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="absolute top-10 right-10 text-blue-100">
                <MessageSquare size={64} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Kontakt", desc: "Pozovite nas ili pošaljite upit putem sajta.", icon: <Phone /> },
    { title: "Besplatna procena", desc: "Dolazimo na vašu adresu i vršimo uvid u prostor.", icon: <MapPin /> },
    { title: "Ugradnja", desc: "Vršimo brzu i čistu montažu u dogovorenom terminu.", icon: <Wrench /> },
    { title: "Podrška", desc: "Ostajemo vam na raspolaganju za svako pitanje i servis.", icon: <ShieldCheck /> },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Naš Proces</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Kako radimo</h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 z-0" />
          
          <div className="flex overflow-x-auto pb-8 gap-12 lg:grid lg:grid-cols-4 relative z-10 snap-x snap-mandatory no-scrollbar">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center group min-w-[240px] lg:min-w-0 snap-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center text-blue-600 mx-auto mb-8 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Koliko traje ugradnja klima uređaja?", a: "Standardna ugradnja obično traje između 2 i 4 sata, u zavisnosti od složenosti instalacije i pozicije uređaja." },
    { q: "Koliko često treba raditi servis klime?", a: "Preporučuje se redovan servis jednom godišnje, najbolje pre početka letnje sezone, kako bi se osigurao čist vazduh i efikasan rad." },
    { q: "Da li dajete garanciju na radove?", a: "Da, na sve naše ugradnje dajemo pismenu garanciju do 5 godina, uz uslov redovnog godišnjeg servisa." },
    { q: "Koji brend klima uređaja preporučujete?", a: "Preporučujemo brendove kao što su Daikin, Mitsubishi, Gree i Bergen, ali ugrađujemo sve modele prema vašim željama i budžetu." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Česta pitanja</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                <ChevronDown className={cn("text-blue-600 transition-transform", openIdx === idx && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Kontakt</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Zatražite besplatnu ponudu</h3>
          <p className="text-slate-400 text-lg mb-12">
            Naš tim je spreman da odgovori na sve vaše zahteve. Pošaljite nam poruku ili nas pozovite direktno.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Pozovite nas</p>
                <p className="text-xl font-bold">+381 60 000 0000</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Email adresa</p>
                <p className="text-xl font-bold">info@heating.rs</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Lokacija</p>
                <p className="text-xl font-bold">Beograd, Srbija</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex gap-4">
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all border border-white/10">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Google Maps Embed Placeholder */}
          <div className="mt-12 rounded-3xl overflow-hidden h-64 border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.3511033621!2d20.28251212866953!3d44.81516000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645c0a77c482!2sBelgrade!5e0!3m2!1sen!2srs!4v1711800000000!5m2!1sen!2srs" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16" />
          <h4 className="text-2xl font-bold text-slate-900 mb-8">Pošaljite nam upit</h4>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Ime i prezime</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Vaše ime"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Telefon</label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Vaš broj"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Vrsta usluge</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none">
                <option>Ugradnja klime</option>
                <option>Servis i čišćenje</option>
                <option>Popravka kvara</option>
                <option>Grejanje / Toplotne pumpe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Poruka</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Kako vam možemo pomoći?"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 text-lg">
              Pošalji upit
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Snowflake className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold">Heating Klimatizacije</span>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Heating Klimatizacije. Sva prava zadržana.
        </p>

        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
          <a href="#" className="hover:text-white transition-colors">Uslovi korišćenja</a>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%]">
      <a 
        href="tel:+381600000000" 
        className="bg-blue-600 text-white flex items-center justify-center gap-3 py-4 rounded-2xl shadow-2xl shadow-blue-600/40 font-bold text-lg animate-bounce-subtle"
      >
        <Phone size={24} />
        Pozovi odmah
      </a>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      
      {/* Strong CTA Section */}
      <section className="section-padding bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mt-48" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mb-48" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Potrebna vam je klima ili hitan servis?
          </h3>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Ne čekajte vrućine ili zimu nespremni. Obezbedite idealnu temperaturu u svom domu već danas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+381600000000"
              className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone size={24} />
              Pozovi sada
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-blue-700 text-white border border-blue-400/30 px-10 py-5 rounded-full font-bold text-xl shadow-2xl flex items-center justify-center gap-2"
            >
              Pošalji upit
              <ArrowRight size={24} />
            </motion.a>
          </div>
        </div>
      </section>

      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA />

      {/* Global CSS for subtle bounce and custom scrollbar */}
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
