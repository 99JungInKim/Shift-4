<template>
  <div class="Background">
    <div class="Modal">
        <div class="Left">
            <img src="@/assets/icons/Logo_W.svg" @click="goHome()"/>
            <span>Go To Sign Up</span>
        </div>
        <div class="Right">
            <span>Log In</span>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogInPage',
  props: {
  },
  methods : {
    goHome(){
        this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.Background{
    height: 100vh;
    overflow: hidden;
    margin:0;
    padding: 0;
    background-image: url('@/assets/backgrounds/wbg.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Modal{
    display: flex;
    width: 800px;
    height: 600px;
    background-color: red;
    border-radius: 20px;
    filter: 
    drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
}
.Left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    border-radius: 20px 0 0 20px;
    background-color: var(--e);
}
.Left img{
    width: 70%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.Left span{
    color : var(--w);
    font-weight: 100;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.Right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    border-radius: 0 20px 20px 0;
    background-color: var(--w);
}
.Right span{
    color : var(--e);
    font-size: 60px;
    font-weight: 100;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>