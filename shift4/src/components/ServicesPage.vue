<template>
  <div class="Background">
    <Flicking :options="{ moveType: 'freeScroll', bound: true }" :plugins="plugins">
      <span class="button mr-2 is-white">🍎 Apple</span>
      <span class="button mr-2 is-white">🍉 Watermelon</span>
      <span class="button mr-2 is-white">🥝 Kiwi</span>
      <span class="button mr-2 is-white">🍎 Apple</span>
      <span class="button mr-2 is-white">🍉 Watermelon</span>
      <span class="button mr-2 is-white">🥝 Kiwi</span>
      <span class="button mr-2 is-white">🍎 Apple</span>
      <span class="button mr-2 is-white">🍉 Watermelon</span>
      <span class="button mr-2 is-white">🥝 Kiwi</span>
      <span class="button mr-2 is-white">🍎 Apple</span>
      <span class="button mr-2 is-white">🍉 Watermelon</span>
      <span class="button mr-2 is-white">🥝 Kiwi</span>
      <span class="button mr-2 is-white">🍎 Apple</span>
      <span class="button mr-2 is-white">🍉 Watermelon</span>
      <span class="button mr-2 is-white">🥝 Kiwi</span>
      <span class="button mr-2 is-white">🍎 Apple</span>
      <span class="button mr-2 is-white">🍉 Watermelon</span>
      <span class="button mr-2 is-white">🥝 Kiwi</span>
    </Flicking>
  </div>
</template>
<script>
import { AutoPlay } from "@egjs/flicking-plugins";

const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];
export default {
  data() {
    return {
      list: [0, 1, 2, 3, 4],
      plugins
    }
  }
}
</script>
<style scoped>
.Background {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flicking-panel {
    align-items: flex-end;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    height: 200px;
    justify-content: start;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 30px 20px;
    position: relative;
    width: 50%;
}
</style>