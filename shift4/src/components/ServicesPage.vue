<template>
  <div class="Background">
    <Flicking 
    :options="{ circular: true, moveType: 'freeScroll' }"
    :viewportTag="'div'"
    :cameraTag="'div'"
    :plugins="plugins"
    @need-panel="e => {
      // ADD PANELS
    }">
      <div v-for="(service, i) in services" :key="i" class="Service" @dblclick="serviceModal(service)">
        <div class="ServiceTitle">TestTitle</div>
        <div class="ServiceInfo">
          <div class="Partner">Partner : </div>
          <div class="Information">이 프로젝트의 정보를 여기다가 간략히</div>
        </div>
      </div>
    <div slot="viewport" class="flicking-pagination"></div>
  <span slot="viewport" class="flicking-arrow-prev"></span>
  <span slot="viewport" class="flicking-arrow-next"></span>
    </Flicking>
  </div>
</template>
<script>
import { AutoPlay, Fade, Arrow} from "@egjs/flicking-plugins";
export default {
  name:"ServicesPage",
  data() {
    return {
      services: [0, 1, 2, 3, 4],
      plugins : [new Fade(), new AutoPlay(2000, "NEXT"), new Arrow()],
      options:{
        renderOnlyVisible: true,
        circular:true,
        bounce: 0, bound: true, nested: true
      }
    }
  },
  methods:{
    serviceModal(value){
      this.$emit('serviceModal',value);
    }
  }
}
</script>
<style scoped>
@import "@egjs/vue-flicking/dist/flicking.css";
@import "@egjs/flicking-plugins/dist/arrow.css";
@import "@egjs/flicking-plugins/dist/flicking-plugins.css";
@import "@egjs/flicking-plugins/dist/pagination.css";
.Background {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.Service{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 80vw;
  height: 40vw;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 1vw;
  background-image: url('@/assets/backgrounds/wbg.jpeg');
}
.ServiceTitle{
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 10%;
  background-color: rgba(0,0,0,0.5);
  border-radius: 1vw 1vw 0 0;
  backdrop-filter: blur(10px);
  color: var(--g1);
  font-weight: 100;
  font-size: 2.5vw;
}
.ServiceInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  background-color: rgba(0,0,0,0.5);
  border-radius: 0 0 1vw 1vw;
  backdrop-filter: blur(10px);
  color: var(--g1);
  font-weight: 100;
  font-size: 1.5vw;
}
.ServiceInfo .Partner{
  width:90%;
  height:30%;
  background-color:aquamarine
}
.ServiceInfo .Information{
  width:90%;
  height:70%;
  background-color:var(--e);
}
.flicking-arrow-prev::before,
.flicking-arrow-prev::after,
.flicking-arrow-next::before,
.flicking-arrow-next::after {
  content: "";
  width: 24px;
  height: 6px;
  position: absolute;
  background-color: var(--e);
}
</style>