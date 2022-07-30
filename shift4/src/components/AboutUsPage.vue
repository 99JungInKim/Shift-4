<template>
  <div class="Background">
    <div class="AboutUsLogo">
      <img src="@/assets/icons/logoText.svg" />
    </div>
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
    <p>우리의 포트폴리오를 소개합니다.</p>

    <div class="AboutUsCarousel">
      <carousel-3d
        :disable3d="true"
        :space="365"
        :clickable="false"
        :controls-visible="true"
      >
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <span class="title">포트폴리오 제목</span>
          <p>
            You know, being a test pilot isn't always the healthiest business in
            the world.
          </p>
        </slide>
      </carousel-3d>
    </div>
    <div class="AboutUsFooter">
      <div>
        <div class="SnsFont">sns</div>
        <img src="@/assets/icons/Shift4W.svg" />
      </div>

      <div class="FooterFont">
        <p class="tell">tel:010-6586-6842</p>
        <p>대구광역시 북구 복현로 35</p>
        <p>shift4 @ gmail.com</p>
        <p>shift 4 채용문의</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import "animate.css";

export default {
  name: "AboutUsPage",
  components: {
    Carousel3d,
    Slide,
  },
  props: {},
  data() {
    return {
      slides: [0, 1, 2, 3, 4],
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
  background-color: var(--g1);
  display: inline-block;
  padding: 10px;
  animation: fadeIn 3s;
  -moz-animation: fadeIn 3s; /* Firefox */
  -webkit-animation: fadeIn 3s; /* Safari
and Chrome */
  -o-animation: fadeIn 3s; /* Opera */
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  /* Safari and
Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  /*
Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.Information {
  width: 100vw;
  height: 50vw;
  font-size: 3vw;
  background-color: var(--g1);
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
  height: 70vh;
  display: flex;
  background-color: var(--g1);
  align-items: center;
  justify-content: center;
}

.carousel-3d-container {
  width: 100vw;
  height: 100vh;
}
.carousel-3d-slide {
  border-radius: 20px 20px 20px 20px;
  border: 40px;
  padding: 20px;
}
.carousel-3d-title {
  font-size: 22px;
}

.AboutUsTitle {
  font-weight: 100;
  font-size: 2vw;
}

.AboutUsFooter {
  width: 90vw;
  height: 30vh;
  font-size: 3vw;
}
.AboutUsFooter img {
  width: 10%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 1));
}

.FooterFont {
  font-size: 1.1vw;
  position: relative;
  left: 30vw;
  font-weight: initial;
  letter-spacing: 3px;
  line-height: 200%;
}
.tell {
  font-size: 1.5vw;
}
.SnsFont {
  position: relative;
  left: 70vw;
  top: 8vw;
}
</style>
