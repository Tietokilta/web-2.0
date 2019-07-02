<template>
  <div class="locale">
    <nuxt-link v-if="currentLocale === 'fi'" :to="switchLocalePath('en')">
      En
    </nuxt-link>
    <nuxt-link v-else :to="switchLocalePath('fi')">
      Fi
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'Locale',
  computed: {
    currentLocale() {
      return this.$store.state.i18n.locale
    }
  }
}
</script>
