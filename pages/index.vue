<template>
  <div class="index-wrapper">
    <div class="index">
      <Header />
      <Clock />
      <Links />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Clock from '~/components/Clock.vue';
import Links from '~/components/Links.vue';

export default {
  components: {
    Header,
    Clock,
    Links,
  },
};
</script>

<style>
.index-wrapper {
  min-height: 100vh;
  background-color: #232c4b;
}

.index {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</style>
