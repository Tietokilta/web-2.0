<template>
  <div>
    <p>home</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted() {
    console.log(this.$i18n.messages)
  }
}
</script>

<style>
</style>
