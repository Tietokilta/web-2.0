<template lang="md">
  <div v-html="abit" />
</template>

<script>
import abit from '../../markdown/abi/index.md'
export default {
  name: 'Abi',
  computed: {
    abit() {
      return abit
    }
  }
}
</script>

<style>
</style>
