/**
 * Utilidades de formateo para Feria Imperio
 */

/**
 * Formatea un monto numérico a formato de moneda Pesos Argentinos ($ ARS).
 * Ejemplo: 15000 -> "$ 15.000 ARS"
 */
export function formatARS(precio: number): string {
  const formateado = new Intl.NumberFormat('es-AR', {
    maximumFractionDigits: 0,
  }).format(precio);
  return `$ ${formateado} ARS`;
}

/**
 * Formatea un número de WhatsApp a enlace clickeable con mensaje pre-armado
 */
export function buildWhatsAppLink(telefono: string, mensaje: string): string {
  // Limpia caracteres no numéricos
  const telefonoLimpio = telefono.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(mensaje);
  return `https://wa.me/${telefonoLimpio}?text=${encodedMsg}`;
}
