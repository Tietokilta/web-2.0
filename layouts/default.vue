<template>
  <div class="container">
    <v-locale />
    <nav class="navbar">
      <ul>
        <li>{{ $t('navigation.guild') }}</li>
        <li>{{ $t('navigation.freshmen') }}</li>
        <li>{{ $t('navigation.abi') }}</li>
        <li>{{ $t('navigation.companies') }}</li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import VLocale from '../components/locale'
export default {
  name: 'DefaultLayout',
  components: {
    VLocale
  }
}
</script>

<style>

</style>
