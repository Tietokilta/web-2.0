<template>
  <div class="container">
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
        <v-locale class="navbar__item navbar__clickable" />
      </div>

      <div class="burger__menu">
        <input type="checkbox" checked="true" id="burger_button" />
        <label for="burger_button" class="burger"/>
        <span>
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
        </span>
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
