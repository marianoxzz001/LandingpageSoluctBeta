
export default function About() {
  const founders = [
    { id: 1, name: '[ Nome do Fundador 1 ]', role: 'Co-fundador & CEO', desc: '[ Descrição curta sobre foco em produto e gestão de projetos. ]' },
    { id: 2, name: '[ Nome do Fundador 2 ]', role: 'Co-fundador & CTO', desc: '[ Descrição curta sobre arquitetura de software e engenharia. ]' },
    { id: 3, name: '[ Nome do Fundador 3 ]', role: 'Co-fundador & CPO', desc: '[ Descrição curta sobre experiência do usuário e design de interface. ]' },
  ];

  return (
    <section id="sobre" className="border-b border-line bg-bg px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-purple">
            Nossa Equipe
          </span>
          <h2 className="pt-1 text-3xl font-extrabold text-fg md:text-4xl">
            Conheça os Fundadores
          </h2>
          <p className="pt-1 text-sm leading-relaxed text-muted md:text-base">
            Sem intermediários: você conversa e alinha seu projeto diretamente com quem escreve o código.
          </p>
        </div>

        <div className="grid gap-5 pt-4 md:grid-cols-3">
          {founders.map((founder) => (
            <article key={founder.id} className="team-profile">
              <div className="team-profile-top"><span className="team-monogram" aria-hidden="true">S<span>/{founder.id}</span></span><span className="team-role">{founder.role}</span></div>
              <h3>{founder.name}</h3>
              <p>{founder.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
