import messages from '../locale'
export const i18n = {
  locales: [
    {
      code: 'fi',
      iso: 'fi-FI',
    },
    {
      code: 'en',
      iso: 'en-US',
    },
  ],
  defaultLocale: 'fi',
  vueI18n: {
    fallbackLocale: 'fi',
    messages,
  },
}

export default {
  i18n,
}
