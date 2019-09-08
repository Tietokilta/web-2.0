<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar__icon">
        <nuxt-link class="navbar__item" to="/guild">
          {{ $t('navigation.guild') }}
        </nuxt-link>
      </div>
      <div class="navbar__menu">
        <nuxt-link class="navbar__item" to="/freshmen">
          {{ $t('navigation.freshmen') }}
        </nuxt-link>
        <nuxt-link class="navbar__item" to="/abi">
          {{ $t('navigation.abi') }}
        </nuxt-link>
        <nuxt-link class="navbar__item" to="/members">
          {{ $t('navigation.members') }}
        </nuxt-link>
        <nuxt-link class="navbar__item" to="/companies">
          {{ $t('navigation.companies') }}
        </nuxt-link>
      </div>
      <div class="navbar__lang">
        <nuxt-link class="navbar__item" to="/">
          {{ $t('navigation.fi') }}
        </nuxt-link>
        <span class="navbar__item">
          /
        </span>
        <nuxt-link class="navbar__item" to="/en">
          {{ $t('navigation.en') }}
        </nuxt-link>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style>

</style>
