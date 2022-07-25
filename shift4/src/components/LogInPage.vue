<template>
  <div class="Background">
    <div class="Modal">
      <div class="Left">
        <img src="@/assets/icons/Shift4W.svg" @click="goHome()"/>
        <span @click="isLogInMod=!isLogInMod">Go To {{ (isLogInMod) ? msg[1] : msg[0] }}</span>
      </div>
      <div class="Right">
        <span>{{ (isLogInMod) ? msg[0] : msg[1] }}</span>
        <div class="inputArea">
          <input type="text" placeholder="ID" v-model="id">
          <input type="password" placeholder="PW" v-model="pw">
          <input v-if="!isLogInMod" type="text" placeholder="NAME" v-model="name">
          <input v-if="!isLogInMod" type="number" placeholder="PHONE" v-model="phone">
        </div>
        <div class="LogInPageSubmit" @click="doWork(isLogInMod)">{{ (isLogInMod) ? msg[0] : msg[1] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// import {doc, getDoc} from "firebase/firestore";

export default {
  name: 'LogInPage',
  props: {},
  data() {
    return {
      isLogInMod: true,
      id: null,
      pw: null,
      name: null,
      phone: null,
      msg: ["Log In", "Sign Up"],
      db: {}
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    doWork(bool) {
      const auth = getAuth();
      if (bool) {//LogIn
        alert("id : " + this.id + "\npw : " + this.pw)
        signInWithEmailAndPassword(auth, this.id, this.pw)
            .then((userCredential) => {
              const loginUser = userCredential.user;
              console.log("loginPage ", loginUser)
              this.$store.state.User = loginUser;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('errorCode ', errorCode, 'errorMessage ', errorMessage)
            });
      } else {//SignUp
        alert("name : " + this.name + "\nphone : " + this.phone + "\nid : " + this.id + "\npw : " + this.pw)
        if (this.pw.length < 6) {
          alert('비밀번호는 6자리 이상 입력해야 합니다.')
        } else {
          createUserWithEmailAndPassword(auth, this.id, this.pw)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('user ', user);
                // insert DB
                // 회원가입이 바로 되면 안되고 DB에 먼저 넣고 수락했을 때 회원가입이 되어야 하고, DB에 관리자 추가하고,
                // 관리자는 관리자만 줄 수 있게
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode ', errorCode, 'errorMessage ', errorMessage)
              });
        }
      }
    }
  }
}
</script>
<style scoped>
.Background {
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-image: url('@/assets/backgrounds/wbg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.Modal {
  display: flex;
  width: 800px;
  height: 500px;
  background-color: red;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
}

.Left {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background: #E5E8EB;
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