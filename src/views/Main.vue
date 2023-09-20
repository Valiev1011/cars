<template>
  <div
    class="about d-flex align-items-center flex-column justify-content-center"
  >
    <div class="d-flex w-100 gap-2">
      <div class="card" style="width: 18rem">
        <img
          src="https://cdni.autocarindia.com/ExtraImages/20211014041054_BMW_3_GL_Iconic_1.jpg"
          class="card-img-top images"
          alt="img"
        />
        <div class="card-body cardd-body">
          <h5 class="card-title">BMW 3 Series</h5>
          <p class="card-text">
            The BMW 3 Series is a line of compact executive cars manufactured by
            the German automaker BMW
          </p>
          <router-link
            :to="{ name: 'cars', params: { id: 1 } }"
            class="btn btn-dark btncolor"
            >More info</router-link
          >
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="https://media.ed.edmunds-media.com/bmw/x5/2024/oem/2024_bmw_x5_4dr-suv_xdrive50e_fq_oem_1_1600.jpg"
          class="card-img-top images"
          alt="img"
        />
        <div class="card-body cardd-body">
          <h5 class="card-title">BMW X5</h5>
          <p class="card-text">
            The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its
            debut in 1999 as the E53 model.
          </p>
          <router-link
            :to="{ name: 'cars', params: { id: 2 } }"
            class="btn btn-dark btncolor"
            >More info</router-link
          >
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="https://images.wapcar.my/file1/1c1dc5f1a69743619a8d8c32fcea038d_1200.jpg"
          class="card-img-top images"
          alt="img"
        />
        <div class="card-body cardd-body">
          <h5 class="card-title">BMW 7 Series</h5>
          <p class="card-text">
            The BMW 7 Series is a full-size luxury sedan manufactured by the
            German automaker BMW.
          </p>
          <router-link
            :to="{ name: 'cars', params: { id: 3 } }"
            class="btn btn-dark btncolor"
            >More info</router-link
          >
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="https://media.ed.edmunds-media.com/bmw/x1/2023/oem/2023_bmw_x1_4dr-suv_xdrive28i_fq_oem_1_1600.jpg"
          class="card-img-top images"
          alt="img"
        />
        <div class="card-body cardd-body">
          <h5 class="card-title">BMW X1</h5>
          <p class="card-text">
            The BMW X1 is a line of cars produced by German marque BMW since
            2009. It is in the subcompact luxury crossover.
          </p>
          <router-link
            :to="{ name: 'cars', params: { id: 4 } }"
            class="btn btn-dark btncolor"
            >More info</router-link
          >
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          src="https://www.bmwusa.com/content/dam/bmwusa/common/vehicles/2023/my24/2-series/gran-coupe/overview/mobile/BMW-MY24-2Series-GranCoupe-Overview-MIY-1-MobileV2.jpg.jpg"
          class="card-img-top images"
          alt="img"
        />
        <div class="card-body cardd-body">
          <h5 class="card-title">BMW 2 Series</h5>
          <p class="card-text">
            The BMW 2 Series is a range of subcompact executive cars
            manufactured by BMW since 2014.
          </p>
          <router-link
            :to="{ name: 'cars', params: { id: 5 } }"
            class="btn btn-dark btncolor"
            >More info</router-link
          >
        </div>
      </div>
    </div>
    <!-- <router-link class="btn btn-dark btncolo text-end">Back</router-link> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const models = ref([]);
</script>
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100vh;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("https://wallpapers.com/images/hd/bmw-logo-blue-car-8yn7wj4lkzlnbcl8.webp");
    opacity: 60%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.cardd-body {
  background-color: rgb(216, 216, 239);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btncolor {
  background-color: rgb(71, 71, 165);
  border-style: none;
}
.images {
  width: 100%;
  height: 200px;
}
</style>
