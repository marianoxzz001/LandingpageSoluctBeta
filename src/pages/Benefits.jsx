import { Target, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const valueProps = [
    {
      icon: <Target className="shrink-0 text-brand-blue" size={26} />,
      title: 'Design Desenhado para Converter',
      desc: 'Estruturamos cada seção estrategicamente para guiar o visitante até a tomada de decisão no seu WhatsApp.',
    },
    {
      icon: <Zap className="shrink-0 text-brand-blue" size={26} />,
      title: 'Alta Performance & SEO Otimizado',
      desc: 'Carregamento instantâneo para não perder clientes, preparado para posicionar sua empresa nos buscadores.',
    },
    {
      icon: <TrendingUp className="shrink-0 text-brand-blue" size={26} />,
      title: 'Autoridade Imediata de Marca',
      desc: 'Transmita o mesmo padrão visual das grandes empresas do mercado e passe confiança no primeiro clique.',
    },
    {
      icon: <ShieldCheck className="shrink-0 text-brand-blue" size={26} />,
      title: 'Código Próprio e Sob Medida',
      desc: 'Desenvolvimento sem plataformas pesadas, garantindo uma estrutura leve, rápida e totalmente segura.',
    },
  ];

  return (
    <section id="solucoes" className="border-b border-line bg-bg-soft px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex max-w-3xl flex-col items-start gap-3">
          <span className="rounded-full bg-brand-blue/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            Engenharia & Estratégia
          </span>
          <h2 className="pt-1 text-3xl font-extrabold leading-tight text-fg md:text-4xl">
            Seu site não deve ser apenas um cartão de visitas. Ele precisa gerar negócios.
          </h2>
          <p className="pt-1 text-base leading-relaxed text-muted md:text-lg">
            Unimos design de alta fidelidade e desenvolvimento moderno para criar plataformas que destacam seu negócio e aceleram sua captação de clientes.
          </p>
        </div>

        <div className="grid gap-6 pt-2 md:grid-cols-2">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="effect-card flex gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm"
            >
              <div className="h-fit rounded-xl border border-brand-blue/20 bg-brand-blue/10 p-3">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-fg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
