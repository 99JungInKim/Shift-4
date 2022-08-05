<template>
  <div class="FileSystemModal">
    <div class="ModalSidebar">사이드바</div>
    <div class="ModalContent">
      <div class="ModalHeader">상단바</div>
      <div class="ModalBody">
        모달 컨텐츠
        <button @click="closeToggled">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileSystemFrame',
  props: {},
  methods: {
    closeToggled() {
      console.log("close")
      this.$emit("changeFSModal")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* https://studiomeal.com/archives/197 */
/* https://studiomeal.com/archives/533 */
  .FileSystemModal {
    position: fixed;
    display: flex;
    left: 10vw;
    top: 10vh;
    margin: auto auto;
    border-radius: 20px;
    z-index: 10;
    background-color: var(--g3);
    resize: both;
    overflow: hidden;
    min-width: 350px;
    min-height: 200px;
  }

  .ModalSidebar {
    position: relative;
    width: 500px;
    background-color: var(--g5);
    border-radius: 20px 0px 0px 20px;
    /* backdrop-filter: blur(10px); */
    opacity: 0.7;
  }

  .ModalContent {
    position: relative;
    display: flex;
    width: 68.75%;
    background-color: var(--e);
    border-radius: 0px 20px 20px 0px;
  }

  .ModalHeader {
    position: relative;
    display: block;
    height: 88px;
    background-color: var(--e);
  }
  .ModalBody {
    position: relative;
    background-color: var(--g8);
  }
</style>
<style>
</style>