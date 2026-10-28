import { ThemeProvider } from './context/ThemeContext';
import Header from './pages/Header';
import ScrollEffects from './components/ScrollEffects';
import Hero from './pages/Hero';
import About from './pages/About';
import Benefits from './pages/Benefits';
import FooterContact from './pages/FooterContact';

export default function App() {
  const WHATSAPP_NUMBER = '5549988744527';
  const WHATSAPP_MESSAGE = 'Olá! Quero conversar sobre uma necessidade do meu negócio.';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
