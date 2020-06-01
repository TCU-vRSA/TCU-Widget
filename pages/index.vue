<template>
  <div class="index-wrapper">
    <Header />
    <div class="index">
      <Clock />
      <Links />
    </div>
    <p class="powered">
      Powered by
      <a href="https://tcu-vrsa.net/" target="_blank" rel="noopener">TCU-vRSA</a>
    </p>
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

.powered {
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
  margin: 0.5rem 0;
}

.powered > a {
  text-decoration: none;
  color: #fff;
}

.powered > a:visited {
  text-decoration: none;
  color: #fff;
}
</style>
