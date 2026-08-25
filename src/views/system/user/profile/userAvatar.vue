<template>
  <div class="user-info-head">
    <img :src="userStore.avatar" alt="用户头像" class="img-circle img-lg" />
  </div>
</template>

<script setup>
import useUserStore from "@/store/modules/user";

const userStore = useUserStore();
</script>

<style lang='scss' scoped>
.user-info-head {
  position: relative;
  display: inline-block;
  height: 120px;
}
</style>
