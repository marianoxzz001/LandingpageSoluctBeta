import { Target, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const valueProps = [
    {
      icon: <Target className="shrink-0 text-brand-blue" size={26} />,
      title: 'Entender antes de construir',
      desc: 'Conversamos sobre sua rotina, suas dificuldades e o que é prioridade para escolher uma solução adequada ao seu negócio.',
    },
    {
      icon: <Zap className="shrink-0 text-brand-blue" size={26} />,
      title: 'Rotinas mais simples',
      desc: 'Automações, integrações e ajustes nas ferramentas que você já usa podem reduzir tarefas repetitivas e retrabalho.',
    },
    {
      icon: <TrendingUp className="shrink-0 text-brand-blue" size={26} />,
      title: 'Presença digital com clareza',
      desc: 'Sites que apresentam seus serviços, funcionam no celular e facilitam o contato de quem procura seu negócio.',
    },
    {
      icon: <ShieldCheck className="shrink-0 text-brand-blue" size={26} />,
      title: 'Entrega com escopo definido',
      desc: 'De um ajuste de processo a um sistema sob medida, combinamos entregas, prazos, custos e responsabilidades antes de começar.',
    },
  ];

  return (
    <section id="solucoes" className="border-b border-line bg-bg-soft px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="flex max-w-3xl flex-col items-start gap-3">
          <span className="rounded-full bg-brand-blue/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
            Como podemos ajudar
          </span>
          <h2 className="pt-1 text-3xl font-extrabold leading-tight text-fg md:text-4xl">
            Tecnologia que faz sentido para o seu negócio.
          </h2>
          <p className="pt-1 text-base leading-relaxed text-muted md:text-lg">
            Atendemos clínicas de estética, salões e profissionais da beleza. Primeiro entendemos o que precisa melhorar; depois avaliamos o caminho mais simples para resolver.
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
