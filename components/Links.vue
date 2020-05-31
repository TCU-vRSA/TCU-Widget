<template>
  <div class="links">
    <Btn v-for="item in links" :key="item.name" :name="item.name" :url="item.url" />
  </div>
</template>

<script>
import Btn from '~/components/ui/Btn.vue';

export default {
  data() {
    return {
      links: [
        { name: '出席登録システム', url: 'https://call.off.tcu.ac.jp/index.php' },
        { name: 'WebClass', url: 'https://webclass.tcu.ac.jp/' },
        { name: 'ポータルサイト', url: 'https://portal.off.tcu.ac.jp/' },
        { name: 'TCU-Mail', url: 'https://mail.tcu.ac.jp/' },
      ],
    };
  },
  components: {
    Btn,
  },
};
</script>

<style>
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>