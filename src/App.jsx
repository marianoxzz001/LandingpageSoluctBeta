import { ThemeProvider } from './context/ThemeContext';
import Header from './pages/Header';
import ScrollEffects from './components/ScrollEffects';
import Hero from './pages/Hero';
import About from './pages/About';
import Benefits from './pages/Benefits';
import FooterContact from './pages/FooterContact';

export default function App() {
  const WHATSAPP_NUMBER = '5549999999999';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20sites.`;

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-bg font-sans text-fg">
        <div className="grain-overlay pointer-events-none fixed inset-0 z-[60]" />
        <ScrollEffects />
        <Header whatsappLink={WHATSAPP_LINK} />
        <main className="pt-16">
          <Hero whatsappLink={WHATSAPP_LINK} />
          <Benefits />
          <About />
        </main>
        <FooterContact whatsappLink={WHATSAPP_LINK} />
      </div>
    </ThemeProvider>
  );
}
