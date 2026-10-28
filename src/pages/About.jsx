export default function About() {
  const founders = [
    {
      id: 1,
      name: 'Bruno',
      photo: '/team/bruno.webp',
      desc: 'Profissional de tecnologia e cofundador da Solv. Integra a equipe que transforma desafios de negócios em soluções digitais.',
    },
    {
      id: 2,
      name: 'Mariano',
      photo: '/team/mariano.webp',
      desc: 'Profissional de tecnologia e cofundador da Solv. Participa da construção de soluções adequadas à realidade de cada negócio.',
    },
    {
      id: 3,
      name: 'Ryan',
      photo: '/team/ryan.webp',
      desc: 'Profissional de tecnologia e cofundador da Solv. Atua com a equipe no desenvolvimento e na entrega de soluções digitais.',
    },
  ];

  return (
    <section id="sobre" className="border-b border-line bg-bg px-4 py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-muted">
            Nossa Equipe
          </span>
          <h2 className="pt-1 text-3xl font-extrabold text-fg md:text-4xl">
            Conheça os Fundadores
          </h2>
          <p className="pt-1 text-sm leading-relaxed text-muted md:text-base">
            Somos três profissionais de tecnologia de Chapecó, SC. Você conversa sobre seu projeto diretamente com quem vai desenvolver e entregar a solução.
          </p>
        </div>

        <div className="grid gap-5 pt-4 md:grid-cols-3">
          {founders.map((founder) => (
            <article key={founder.id} className="team-profile">
              <div className="team-profile-top">
                <img
                  className="team-portrait"
                  src={founder.photo}
                  alt={`Retrato de ${founder.name}, cofundador da Solv`}
                  width="84"
                  height="84"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <span className="team-role">Cofundador</span>
                  <h3>{founder.name}</h3>
                </div>
              </div>
              <p>{founder.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
