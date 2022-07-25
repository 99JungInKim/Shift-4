<template>
  <div class="Background">
    <div class="Profile">
        <div class="Circle" style="background: #BDBDBD;">
            <img class="ProfileImg" src="@/assets/icons/Logo_W.svg">
        </div>
        <div class="Text">
            <p>Name</p>
            <p>Duty</p>
            <p>Stack</p>
        </div>
    </div>
    <div class="Card">
        <div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Background{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(var(--g5) 50%, var(--g1) 0%);
}
.Circle{
    width: 150px;
    height: 150px; 
    border-radius: 50%;
    overflow: hidden;
}
.ProfileImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>