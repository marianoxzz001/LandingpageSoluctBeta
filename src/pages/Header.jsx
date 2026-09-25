import WhatsAppIcon from '../components/WhatsAppIcon';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';

export default function Header({ whatsappLink }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#hero" aria-label="Solv — início">
          <Logo />
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-muted md:flex">
          {/* <a href="#hero" className="transition hover:text-brand-blue">
            Início
          </a> */}
          <a href="#sobre" className="transition hover:text-brand-blue">
            Sobre Nós
          </a>
          <a href="#contato" className="transition hover:text-brand-blue">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            <WhatsAppIcon size={20} />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
