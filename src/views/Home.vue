<template>
  <div class="home">
    <img class="banner-image" src="../assets/oil-protobadge.png" width="330px">
    <HelloWorld msg="Welcome 👋"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.banner-image {
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>
