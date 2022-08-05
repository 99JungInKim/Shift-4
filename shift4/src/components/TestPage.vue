<template>
  <flicking
    :options="{ circular: true, moveType: 'freeScroll' }"
    :viewportTag="'div'"
    :cameraTag="'div'"
    :plugins="plugins"
    @need-panel="e => {
      // ADD PANELS
    }"
  >
    <div>CONTENTS OF PANEL 0</div>
    <div>CONTENTS OF PANEL 1</div>
    <div>CONTENTS OF PANEL 2</div>
  </flicking>
</template>
<script>
import { Fade, AutoPlay } from "@egjs/flicking-plugins";
export default {
  name:"TestPage",
  data() {
    return {
  plugins : [new Fade(), new AutoPlay(2000, "NEXT")],
    }
  }
}
</script>