<template>
  <!-- <div class="d-flex w-100">
    <div class="card" style="width: 18rem">
      <img
        :src="car_info[+route.params.id - 1].img"
        class="card-img-top"
        alt="img"
      />
      <div class="card-body">
        <h5 class="card-title">{{ car_info[+route.params.id - 1].title }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        
      </div>
    </div>
  </div> -->
  <di class="bgimage">
    <div class="main">
      <div class="select">
        <img :src="result[0].img[0]" alt="img" @click="change = 0" />
        <img :src="result[0].img[1]" alt="img" @click="change = 1" />
        <img :src="result[0].img[2]" alt="img" @click="change = 2" />
      </div>
      <div class="main-img">
        <!-- <h1>{{ typeof change }}</h1> -->
        <img :src="result[0].img[change]" alt="img" />
      </div>
      <div class="info">
        <h1>Brand - {{ result[0].brand }}</h1>
        <h2>Model - {{ result[0].title }}</h2>
        <h3>Price - {{ result[0].price }}</h3>
        <router-link to="/main"
          ><button type="submit" class="btn btn-dark">Back</button></router-link
        >
      </div>
    </div>
  </di>
</template>

<script setup>
[
  "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/b0e6e904-1a30-4216-9645-eadd0c8d0fc5/P90485027_highRes_bmw-m340i-xdrive-sal.jpg?width=800&fm=jpg&auto=format",
  "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/29665752-2a13-4fd3-a746-6293c8739926/P90485032_highRes_bmw-m340i-xdrive-sal.jpg",
  "https://www.bmw.in/content/bmw/marketIN/bmw_in/en_IN/all-models/3-series/sedan-long-wheelbase/2022/bmw-3-series-long-wheelbase-highlight/jcr:content/par/mosaicgallery_3733_c/items/mosaicgalleryitem_28/image/mobile.transform/mosaic963/image.1673354770692.jpg",
  "https://www.modnations.com/cdn/shop/products/DSC03599_1200x1200.jpg?v=1610128193",
];
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const change = ref(3);

const car_info = ref([
  {
    id: 1,
    title: "BMW 3 Series",
    brand: "BMW",
    price: "$60.000",
    img: [
      "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/b0e6e904-1a30-4216-9645-eadd0c8d0fc5/P90485027_highRes_bmw-m340i-xdrive-sal.jpg?width=800&fm=jpg&auto=format",
      "https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/29665752-2a13-4fd3-a746-6293c8739926/P90485032_highRes_bmw-m340i-xdrive-sal.jpg",
      "https://www.bmw.in/content/bmw/marketIN/bmw_in/en_IN/all-models/3-series/sedan-long-wheelbase/2022/bmw-3-series-long-wheelbase-highlight/jcr:content/par/mosaicgallery_3733_c/items/mosaicgalleryitem_28/image/mobile.transform/mosaic963/image.1673354770692.jpg",
      "https://www.modnations.com/cdn/shop/products/DSC03599_1200x1200.jpg?v=1610128193",
    ],
  },
  {
    id: 2,
    title: "BMW X5",
    brand: "BMW",
    price: "$90.000",
    img: [
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg",
      "https://images.prismic.io/carwow/585d8660-215c-4396-95a9-267473baa569_2018+BMW+X5+Front+3%3A4+Driving+1.jpg",
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230714060800_BMW_X5_facelift_rear.jpg&w=700&q=90&c=1",
      "https://images.prismic.io/carwow/41cc2fec-f9fa-4d07-9930-14b6e0a7e0d0_LHD+BMW+X5+2024+Exterior+13.jpg?fit=clip&q=60&w=750&cs=tinysrgb&auto=format",
    ],
  },
  {
    id: 3,
    title: "BMW 7 Series",
    brand: "BMW",
    price: "$100.000",
    img: [
      "https://pictures.dealer.com/s/sonicmomentumbmwwest/1778/b7a3b74d34606c7fee42796a53236cd1x.jpg",
      "https://cdn-fastly.thetruthaboutcars.com/media/2022/07/10/8872340/2023-bmw-7-series-everything-but-the-kitchen-sink.jpg?size=720x845&nocrop=1",
      "https://mediapool.bmwgroup.com/cache/P9/202209/P90480890/P90480890-the-new-bmw-740d-xdrive-09-2022-600px.jpg",
      "https://mediapool.bmwgroup.com/cache/P9/202209/P90480881/P90480881-the-new-bmw-740d-x-drive-09-2022-600px.jpg",
    ],
  },
  {
    id: 4,
    title: "BMW X1",
    brand: "BMW",
    price: "$40.000",
    img: [
      "https://images.blackcircles.com/hub/articles/4x4/bmw-x1/bmw-x1-continental-tyres-blackcircles-hero-770x390.jpg",
      "https://carsales.pxcrush.net/carsales//cars/dealer/6j7gdsp1mug1jvxrlvqgw9ywt.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480",
      "https://carsales.pxcrush.net/carsales//car/dealer/9f8c7fab5ea80e2b003105a0d7355274.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480",
      "https://cdn.leasing.com/cms/p90465595_highres_the-all-new-bmw-x1-x.jpg",
    ],
  },
  {
    id: 5,
    title: "BMW 2 Series",
    brand: "BMW",
    price: "$45.000",
    img: [
      "https://images.wsj.net/im-469722/?width=700&height=467",
      "https://carsales.pxcrush.net/carsales//cars/private/1omg79m3t73kr9w800cr1sl5x.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480",
      "https://mediapool.bmwgroup.com/cache/P9/202111/P90444239/P90444239-bmw-m240i-xdrive-coup-11-2021-600px.jpg",
      "https://carsales.pxcrush.net/carsales//cars/dealer/rj4u6ngctu15pbm3iied27ve.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480",
    ],
  },
]);
const result = car_info.value.filter((item) => item.id == route.params.id);
console.log(result);
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  width: 100%;
  padding: 30px;
  justify-content: center;
  opacity: 100%;
  // align-items: center;
  position: relative;
  z-index: 1;
  gap: 20px;
}
.bgimage {
  width: 100%;
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url("https://wallpapers.com/images/hd/white-bmw-hood-4pr01b27namnijcb.webp");
    opacity: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.select {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  img {
    width: 200px;
    height: 33.3%;
    object-fit: cover;
    border-radius: 5%;
  }
  right: 0;
}
.main-img {
  width: 50%;
  // height: fit-content;
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  align-items: flex-start;
  // gap: 10px;
  img {
    width: 100%;
    height: 487px;
    object-fit: cover;
    border-radius: 5%;
  }
}
.info {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}
</style>
