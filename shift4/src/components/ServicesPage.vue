<template>

  <div class="Background">
  </div>
</template>
<script src="https://unpkg.com/vue-agile"></script>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      slides: [0, 1, 2, 3, 4],
      myOptions: {
        navButtons: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false
            }
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: false
            }
          }
        ]
      }
    };
  },
  props: {},
  components: {
  },
  methods: {
    openService(i) {
      this.$emit("serviceModal",i)
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
