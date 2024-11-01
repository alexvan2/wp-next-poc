const supportedLocales = ['en', 'de', 'pt-BR'];

export function nextLocaleToWpLocale(nextLocale: string) {
  return supportedLocales.includes(nextLocale) ? nextLocale : 'en';
}
