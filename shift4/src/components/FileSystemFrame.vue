<template>
  <div class="FileSystemModal">
    <!-- 마우스 크기 조절 https://exhibitlove.tistory.com/68 -->
    <div class="ModalSidebar">사이드바</div>
    <div class="ModalHeader">상단바</div>
    <div class="ModalContent">
      컨텐츠
      <button @click="closeToggled">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileSystemFrame',
  props: {
    toggled: Boolean
  },
  methods: {
    closeToggled() {
      console.log(this.toggled)
      this.$emit("close")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .FileSystemModal {
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80vw;
    height: 80vh;
    margin: auto;
    border-radius: 20px;
    z-index: 10;
    background-color: var(--w);
    opacity: 1;
  }

  .ModalContent {
    background-color: var(--e);
  }
</style>
<style>
</style>