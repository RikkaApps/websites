<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

  </main>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
