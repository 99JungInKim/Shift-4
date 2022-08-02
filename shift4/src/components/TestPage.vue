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
<script lang>
import { Component, Vue } from "vue-property-decorator";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";

@Component({})

export default class TestPage extends Vue {
  plugins = [new Fade(), new AutoPlay(2000, "NEXT")];
}
</script>