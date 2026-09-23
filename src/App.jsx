import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Projects from './pages/Projects';
import FooterContact from './pages/FooterContact';

export default function App() {
  const WHATSAPP_NUMBER = "5549999999999";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites.`;

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Header whatsappLink={WHATSAPP_LINK} />
      <main className="pt-16">
        <Hero whatsappLink={WHATSAPP_LINK} />
        <Benefits />
        <Projects />
        <About />
      </main>
      <FooterContact whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}