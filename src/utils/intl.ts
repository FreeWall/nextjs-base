export { IntlProvider } from 'react-intl';
import CS from '@/locale/cs.json';
import EN from '@/locale/en.json';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof EN;
    }
  }
}

export const getMessages = (locale?: string) => {
  switch (locale) {
    case 'en':
      return EN;
    case 'cs':
      return CS;
    default:
      return EN;
  }
};
