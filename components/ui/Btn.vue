<template>
  <div class="btn" @click="jumpTo(url)">
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'url'],
  methods: {
    jumpTo: function(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style>
.btn {
  color: #fff;
  font-size: 1rem;
  width: 90%;
  padding: 1rem 0;
  margin: 0.8rem 0;
  border: 1px solid #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn:hover {
  background-color: #fff;
  color: #232c4b;
  transition: background-color 0.3s ease 0s;
}

@media screen and (max-width: 400px) {
  .btn {
    padding: 0.8rem 0;
    margin: 0.3rem 0;
  }
}
</style>