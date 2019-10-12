<template>
  <div class="container">
    <v-locale />
    <nav class="navbar">
      <div class="navbar__icon">
        <nuxt-link class="navbar__item navbar__clickable" :to="localePath('guild')">
          {{ $t('navigation.guild') }}
        </nuxt-link>
      </div>
      <div class="navbar__menu">
        <nuxt-link class="navbar__item navbar__clickable" :to="localePath('freshmen')">
          {{ $t('navigation.freshmen') }}
        </nuxt-link>
        <nuxt-link class="navbar__item navbar__clickable" :to="localePath('abi')">
          {{ $t('navigation.abi') }}
        </nuxt-link>
        <nuxt-link class="navbar__item navbar__clickable" :to="localePath('members')">
          {{ $t('navigation.members') }}
        </nuxt-link>
        <nuxt-link class="navbar__item navbar__clickable" :to="localePath('companies')">
          {{ $t('navigation.companies') }}
        </nuxt-link>
      </div>
      <div class="navbar__lang">
        <nuxt-link class="navbar__item navbar__clickable" :to="switchLocalePath('fi')">
          {{ $t('navigation.fi') }}
        </nuxt-link>
        <span class="navbar__item">
          /
        </span>
        <nuxt-link class="navbar__item navbar__clickable" :to="switchLocalePath('en')">
          {{ $t('navigation.en') }}
        </nuxt-link>
      </div>
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
