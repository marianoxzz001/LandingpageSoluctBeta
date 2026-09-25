import { Smartphone, Layout, Cpu, MousePointerClick } from 'lucide-react';

export default function Projects() {
  const specs = [
    { icon: <Smartphone size={18} />, label: '100% Responsivo & Mobile First' },
    { icon: <Layout size={18} />, label: 'Navegação simples e intuitiva' },
    { icon: <Cpu size={18} />, label: 'Tecnologia sob medida' },
    { icon: <MousePointerClick size={18} />, label: 'Contato a um clique' },
  ];

  return (
    // Faixa intencionalmente escura nos dois temas (contraste editorial), não usa os tokens de --color-*
    <section id="projetos" className="border-b border-white/10 bg-ink px-4 py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Showcase de Interface
          </span>
          <h2 className="pt-1 text-3xl font-extrabold text-white md:text-4xl">
            Padrão de Qualidade em Cada Pixel
          </h2>
          <p className="pt-1 text-base leading-relaxed text-slate-400">
            Interfaces construídas com rigor técnico, arquitetura limpa e estética moderna.
          </p>
        </div>

        <div className="space-y-8 rounded-3xl border border-white/10 bg-ink-soft/60 p-6 shadow-2xl md:p-8">
          <div className="showcase-window" aria-label="Demonstração visual de um site para um estúdio de bem-estar, projeto conceitual">
            <div className="demo-browser"><span>●●●</span><span>PRÉVIA DE UMA POSSIBILIDADE</span><span>↗</span></div>
            <div className="demo-page" aria-hidden="true">
              <div className="demo-nav"><strong>essência.</strong><span>O espaço &nbsp;&nbsp; Experiências &nbsp;&nbsp; Nossa filosofia</span><span>Vamos conversar ↗</span></div>
              <div className="demo-content">
                <div><small>SEU TEMPO. SEU EQUILÍBRIO.</small><h3>Um respiro<br />na sua rotina.</h3><p>Um espaço pensado para desacelerar, reconectar e cuidar do que realmente importa. Você.</p><span className="demo-button">Encontre seu momento ↗</span></div>
                <div className="demo-sculpture" />
              </div>
            </div>
          </div>
          <div className="showcase-caption"><div><strong>Presença que traduz a sua essência.</strong>Design sob medida para tornar sua marca memorável.</div><span>EXPLORAÇÃO VISUAL / PROJETO CONCEITUAL</span></div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink p-3.5 text-xs font-medium text-slate-300"
              >
                <span className="text-brand-cyan">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
