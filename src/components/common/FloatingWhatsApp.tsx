import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/formatters';

interface FloatingWhatsAppProps {
  telefono?: string;
  mensajeInicial?: string;
}

export const FloatingWhatsApp = ({
  telefono = '5493584112233',
  mensajeInicial = '¡Hola! Estoy visitando la web de Feria Imperio y me gustaría hacer una consulta.',
}: FloatingWhatsAppProps) => {
  const url = buildWhatsAppLink(telefono, mensajeInicial);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 sm:hidden flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="text-xs font-bold tracking-wide">WhatsApp Feria</span>
    </a>
  );
};
