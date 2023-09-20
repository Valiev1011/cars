<template>
  <div class="home d-flex justify-content-center align-items-center login">
    <router-link to="/login"
      ><button type="button" class="btn btn-dark px-5 py-3">
        Login
      </button></router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/05/2024-bmw-i5-edrive40-1.jpg");
  object-fit: cover;
  background-position: center;
  background-size: cover;
}
</style>
