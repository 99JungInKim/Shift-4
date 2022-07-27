<template>
  <div class="Background">
    <div class="Carousel">
      <carousel-3d
        :autoplay="true"
        :autoplay-timeout="5000"
        :autoplay-hover-pause="true"
        :display="3"
        :controls-visible="true"
        :clickable="false"
        :width="960"
        :height="540"
        :border="0"
      >
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <figure>
            <figcaption @click="openService(i)">
              <p class="ServiceTitle">{{ i }}</p>
            </figcaption>
            <img src="@/assets/backgrounds/bbg.jpeg" />
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "ServicesPage",
  data() {
    return {
      slides: [0, 1, 2, 3, 4],
    };
  },
  props: {},
  components: {
    Carousel3d,
    Slide,
  },
  methods: {
    openService(i) {
      alert(i);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Background {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Carousel {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-3d-container {
  width: 100vw;
  height: 70vh;
}
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background: linear-gradient(
    180deg,
    var(--b) 10%,
    rgba(255, 255, 255, 0) 100%
  );
  color: #fff;
  top: 0;
  position: absolute;
  top: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.ServiceTitle {
  font-weight: 100;
  font-size: 2vw;
}
</style>
<style></style>
