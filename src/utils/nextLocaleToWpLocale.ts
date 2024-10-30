export function nextLocaleToWpLocale(nextLocale: string) {
  switch (nextLocale) {
    case 'en':
      return 'en';
    case 'de':
      return 'de';
    case 'pt_BR':
      return 'pt-br';
    default:
      return 'en';
  }
}
