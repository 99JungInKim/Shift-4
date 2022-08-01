<template>
  <div class="Background">
    <Flicking :options="options" :plugins="plugins">
      <div v-for="(service, i) in services" :key="i" class="panel">
      </div>
    <div slot="viewport" class="flicking-pagination"></div>
  <span slot="viewport" class="flicking-arrow-prev"></span>
  <span slot="viewport" class="flicking-arrow-next"></span>
    </Flicking>
  </div>
</template>
<script>
import { Panel } from "@egjs/flicking";
import { AutoPlay, Arrow, Fade, Pagination } from "@egjs/flicking-plugins";
const plugins = [new Arrow(), new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true }), new Fade(), new Pagination({ type: "bullet" })];
export default {
  name:"ServicesPage",
  data() {
    return {
      services: [0, 1, 2, 3, 4],
      plugins,
      Arrow,
      Fade,
      Panel,
      Pagination,
      options:{
        renderOnlyVisible: true,
        circular:true,
        bounce: 0, bound: true, nested: true
      }
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
.panel{
  display: inline-block;
  background: var(--e);
  width: 70vw;
  height: 20vw;
  margin-left: 10px;
  margin-right: 10px;
}
.flicking-arrow-prev::before,
.flicking-arrow-prev::after,
.flicking-arrow-next::before,
.flicking-arrow-next::after {
  content: "";
  width: 24px;
  height: 6px;
  position: absolute;
  background-color: var(--g1);
}
</style>