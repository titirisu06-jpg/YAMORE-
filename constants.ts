
export const WHATSAPP_NUMBER = "542910000000"; // Replace with real number
export const INSTAGRAM_HANDLE = "@yamore.ar";
export const STORE_LOCATION = "Alsina 615, Bahía Blanca, Buenos Aires, Argentina";
export const BRAND_NAME = "YAMORE";

export const generateWhatsAppLink = (productName?: string, size?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  
  if (!productName) {
    return `${baseUrl}?text=${encodeURIComponent("Hola Yamore! Quisiera recibir más información sobre sus prendas.")}`;
  }

  let message = `Hola! Quiero comprar: ${productName}`;
  if (size) {
    message += `. Talle: ${size}`;
  }
  
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};
