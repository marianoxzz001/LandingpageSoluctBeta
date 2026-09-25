import WhatsAppIcon from '../components/WhatsAppIcon';
import { Mail, MapPin } from 'lucide-react';

export default function FooterContact({ whatsappLink }) {
  return (
    <footer id="contato" className="border-t border-line bg-bg-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-fg">Pronto para criar o site do seu negócio?</h2>
          <p className="text-muted">
            Atendemos presencialmente em Chapecó-SC ou via reunião online. Entre em contato diretamente pelo WhatsApp para conversarmos sem compromisso.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-fg">
              <MapPin className="text-brand-blue" size={20} />
              <span>Chapecó - Santa Catarina</span>
            </div>
            <div className="flex items-center gap-3 text-fg">
              <Mail className="text-brand-blue" size={20} />
              <span>contato@suaempresa.com.br</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <WhatsAppIcon size={23} />
              <span>Iniciar conversa no WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="social-panel space-y-6">
          <h3 className="text-sm font-semibold text-muted">Encontre a Solv também por aqui</h3>

          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-4 rounded-lg border border-line p-3 transition hover:bg-bg-soft"
            >
              <svg className="h-6 w-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <div>
                <div className="text-sm font-semibold text-fg">Instagram</div>
                <div className="text-xs text-muted">@suaempresa.chapeco</div>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 rounded-lg border border-line p-3 transition hover:bg-bg-soft"
            >
              <svg className="h-6 w-6 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
              <div>
                <div className="text-sm font-semibold text-fg">LinkedIn</div>
                <div className="text-xs text-muted">linkedin.com/company/suaempresa</div>
              </div>
            </a>


          </div>
        </div>
      </div>

      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Solv. Todos os direitos reservados.
      </div>
    </footer>
  );
}
