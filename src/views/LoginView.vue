<template>
  <div class="login d-flex justify-content-center align-items-center">
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" class="text-light"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-light"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputPassword1" class="text-light">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <!-- <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
        <router-link to="/main"
          ><button type="submit" class="btn btn-dark">
            Submit
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("https://www.autobics.com/wp-content/uploads/2023/05/2024-BMW-i5-eDrive40-Rear-Quarter.jpg");
  object-fit: cover;
  background-position: center;
  background-size: cover;
}
</style>
