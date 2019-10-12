<template>
  <div class="locale">
    <nuxt-link
      class="locale__link"
      :to="switchLocalePath(nextLang())"
      v-text="currentLocale.toUpperCase()"
    />
  </div>
</template>

<script>

export default {
  name: 'Locale',

  data() {
    return {
      langs: ['fi', 'en']
    }
  },
  computed: {
    currentLocale() {
      return this.$store.state.i18n.locale
    },
    index() {
      return this.langs.indexOf(this.$store.state.i18n.locale)
    }
  },
  methods: {
    nextLang() {
      let index = this.index + 1
      if (index >= this.langs.length) index = 0
      console.log(index)
      return this.langs[index]
    }
  }
}
</script>
