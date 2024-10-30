export function wpLocaleToNextLocale(wpLocale: string) {
  switch (wpLocale) {
    case 'en':
      return 'en';
    case 'de':
      return 'de';
    case 'pt-br':
      return 'pt_BR';
    default:
      return 'en';
  }
}
