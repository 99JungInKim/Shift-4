<template>
  <div class="PortfolioPageWrap">
    <file-system-frame 
      v-if="frameToggled" 
      :toggled="frameToggled"
      @close="toggleFrame"
    />
    <div class="GotoPortfolioWrap" @click="toggleFrame">
      <img 
        class="GotoPortfolio"
        src="https://via.placeholder.com/384x334" 
      />
      <div class="GotoPortfolioText">Go to Portfolio</div>
    </div>
  </div>
</template>

<script>
import FileSystemFrame from "./FileSystemFrame.vue";
export default {
  name: 'PortfolioPage',
  components: { FileSystemFrame },
  props: {

  },
  data() {
    return {
      frameToggled: false
    }
  },
  methods: {
    toggleFrame() {
      let state = !this.frameToggled
      this.frameToggled = state
      console.log(this.frameToggled)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .PortfolioPageWrap {}

  .GotoPortfolioWrap {
    position: fixed;
    width: 550px;
    height: 436px;
    left: calc(50% - 550px/2);
    top: calc(50% - 436px/2 + 58.5px);
  }
  .GotoPortfolioWrap:hover .GotoPortfolio {
    background-color: var(--g8);
  }
  .GotoPortfolioWrap:hover .GotoPortfolioText {
    color: var(--g8);
  }
  
  .GotoPortfolio {
    position: relative;
    display: flex;
    margin: auto;
    background-color: var(--g5);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .GotoPortfolioText {
    position: relative;
    display: flex;
    font-style: normal;
    font-weight: 100;
    font-size: 68px;
    line-height: 88px;
    color: var(--g5);
    justify-content: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
</style>
<style>
</style>