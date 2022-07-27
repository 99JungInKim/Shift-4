<template>
  <div class="Background">
    <div class="AboutUsLogo">TEST</div>
    <div class="Information">
      <div class="LeftInfo"><img src="@/assets/backgrounds/bbg.jpeg" /></div>
      <div class="RightInfo"></div>
    </div>
    <div class="Information">
      <div class="LeftInfo"></div>
      <div class="RightInfo"><img src="@/assets/backgrounds/bbg.jpeg" /></div>
    </div>
    <div class="Information">
      <div class="LeftInfo"><img src="@/assets/backgrounds/bbg.jpeg" /></div>
      <div class="RightInfo"></div>
    </div>
    <div class="AboutUsCarousel"></div>
    <div class="AboutUsFooter">footer</div>
  </div>
</template>

<script>
export default {
  name: "AboutUsPage",
  components: {},
  props: {},
  data() {
    return {
      slides: 6,
    };
  },
};
</script>

<style scoped>
.Background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.AboutUsLogo {
  width: 100vw;
  height: 100vh;
  background-color: var(--b);
}
.Information {
  width: 100vw;
  height: 50vw;
  font-size: 3vw;
  background-color: var(--e);
  border: 1px solid var(--b);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Information div {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Information div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.LeftInfo {
  width: 50%;
  height: 100%;
}
.RightInfo {
  width: 50%;
  height: 100%;
}
.AboutUsCarousel {
  width: 100vw;
  height: 30vw;
  display: flex;
  background-color: red;
  align-items: center;
  justify-content: center;
}
.AboutUsCarousel-3d-container {
  width: 100vw;
  height: 30vw;
}
.carousel-3d-container figure {
  margin: 0;
}
.AboutUsFooter {
  width: 90vw;
  height: 40vh;
  font-size: 3vw;
}
</style>
