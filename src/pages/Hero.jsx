import WhatsAppIcon from '../components/WhatsAppIcon';
import { lazy, Suspense } from 'react';
import { ArrowUpRight } from 'lucide-react';
const HeroScene = lazy(() => import('../components/HeroScene'));

export default function Hero({ whatsappLink }) {
  return (
    <section id="hero" className="hero-stage">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="eyebrow"><i /> SOLUÇÕES DIGITAIS PARA O SEU NEGÓCIO.</span>
          <h1>Seu próximo<br />grande passo<br /><span>é digital.</span></h1>
          <p>Começamos pelo seu desafio. Criamos sites, sistemas e automações ou adaptamos ferramentas que você já usa, conforme a realidade do seu negócio.</p>
          <div className="hero-actions">
            <a className="primary-cta" href={whatsappLink} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={23} variant="black" /> Vamos conversar no WhatsApp <ArrowUpRight size={19} /></a>
          </div>
          <div className="hero-location"><span>De Chapecó para o seu próximo desafio.</span><span>Design + tecnologia + estratégia</span></div>
        </div>
        <div className="hero-art">
          <div className="art-halo" aria-hidden="true" />
          <div className="orbit-fallback" aria-hidden="true" />
          <Suspense fallback={null}><HeroScene /></Suspense>
          <p className="art-story">Do que você imagina.<br /><span>Ao que seu negócio pode ser.</span></p>
        </div>
      </div>
    </section>
  );
}
