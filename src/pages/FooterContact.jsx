import WhatsAppIcon from '../components/WhatsAppIcon';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function FooterContact({ whatsappLink }) {
  return (
    <footer id="contato" className="border-t border-line bg-bg-soft">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-fg">Qual desafio podemos resolver com você?</h2>
          <p className="text-muted">
            Atendemos em Chapecó e no oeste de Santa Catarina, com visitas a combinar, e também online. Conte o que precisa melhorar no seu negócio para avaliarmos juntos o próximo passo.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-fg">
              <MapPin className="text-brand-blue" size={20} />
              <span>Chapecó - Santa Catarina</span>
            </div>
            <div className="flex items-center gap-3 text-fg">
              <Mail className="text-brand-blue" size={20} />
              <a href="mailto:sol@solv.website" className="transition hover:text-fg hover:underline">sol@solv.website</a>
            </div>
            <div className="flex items-center gap-3 text-fg">
              <Phone className="text-brand-blue" size={20} />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="transition hover:underline">+55 49 98874-4527</a>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
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
              href="https://www.instagram.com/solv_tec/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-line p-3 transition hover:bg-bg-soft"
            >
              <svg className="h-6 w-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <div>
                <div className="text-sm font-semibold text-fg">Instagram</div>
                <div className="text-xs text-muted">@solv_tec</div>
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
