<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar_menu">
        <nuxt-link class="navbar__item" to="/guild">{{ $t('navigation.guild') }}</nuxt-link>
        <nuxt-link class="navbar__item" to="/freshmen">{{ $t('navigation.freshmen') }}</nuxt-link>
        <nuxt-link class="navbar__item" to="/abi">{{ $t('navigation.abi') }}</nuxt-link>
        <nuxt-link class="navbar__item" to="/companies">{{ $t('navigation.companies') }}</nuxt-link>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style>

</style>
