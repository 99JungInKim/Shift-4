<template>
  <div class="Background">
    <div class="Modal">
      <div class="Left">
        <img src="@/assets/icons/Shift4W.svg" @click="goHome()" />
        <span @click="isLogInMod = !isLogInMod"
          >Go To {{ isLogInMod ? msg[1] : msg[0] }}</span
        >
      </div>
      <div class="Right">
        <span>{{ isLogInMod ? msg[0] : msg[1] }}</span>
        <div class="inputArea">
          <input type="text" placeholder="ID" v-model="id" />
          <input type="password" placeholder="PW" v-model="pw" />
          <input
            v-if="!isLogInMod"
            type="text"
            placeholder="NAME"
            v-model="name"
          />

          <input
            v-if="!isLogInMod"
            type="number"
            placeholder="PHONE"
            v-model="phone"
          />
        </div>
        <div class="LogInPageSubmit" @click="doWork(isLogInMod)">
          {{ isLogInMod ? msg[0] : msg[1] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogInPage",
  props: {},
  data() {
    return {
      isLogInMod: true,
      id: null,
      pw: null,
      name: null,
      phone: null,
      msg: ["Log In", "Sign Up"],
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    doWork(bool) {
      if (bool) {
        //LogIn
        alert("id : " + this.id + "\npw : " + this.pw);
      } else {
        //SignUp
        alert(
          "name : " +
            this.name +
            "\nphone : " +
            this.phone +
            "\nid : " +
            this.id +
            "\npw : " +
            this.pw
        );
      }
    },
  },
};
</script>
<style scoped>
.Background {
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: url("@/assets/backgrounds/wbg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Modal {
  display: flex;
  width: 800px;
  height: 500px;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
}
.Left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  background-color: var(--e);
}
.Left img {
  width: 70%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.Left span {
  color: var(--w);
  font-weight: 100;
  font-size: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.Right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  background-color: var(--w);
}
.Right span {
  color: var(--e);
  font-size: 60px;
  font-weight: 100;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.inputArea {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
.inputArea input {
  background: #e5e8eb;
  border: none;
  width: 70%;
  height: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 100;
  padding-left: 15px;
}
.LogInPageSubmit {
  display: flex;
  width: 100px;
  height: 40px;

  justify-content: center;
  align-items: center;
  color: var(--g1);
  background: var(--g5);
  border-radius: 10px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.LogInPageSubmit:hover {
  background: var(--e);
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
