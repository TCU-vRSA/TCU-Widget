<template>
  <div class="index-wrapper">
    <Header />
    <div class="index">
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
  background: #232c4b url('/img/bg-yc.jpg');
  background-blend-mode: multiply;
  background-size: cover;
}

.index {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</style>
