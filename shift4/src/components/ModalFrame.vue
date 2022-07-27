<template>
  <div class="Modal">
    <div class="Overlay"></div>
    <div class="ModalContent">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalFrame',
            props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Modal
.Overlay{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0; top: 0;
  z-index: 9;
}
.Overlay{
  opacity: 0.5;
  background-color: var(--b);
}
.ModalContent{
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
</style>
<style>
</style>