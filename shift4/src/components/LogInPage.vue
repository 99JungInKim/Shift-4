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
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { setDoc, getDoc, doc } from "firebase/firestore";
import {db} from "@/main"

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
      data: {}
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    doWork(bool) {
      const auth = getAuth();
      if (bool) {//LogIn
        signInWithEmailAndPassword(auth, this.id, this.pw)
            .then(async (userCredential) => {
              const loginUser = userCredential.user;
              console.log(loginUser)
              const snapShot = await getDoc(doc(db, "Member", this.id));
              this.$store.commit("updateUserData",snapShot);
              await this.$router.push('/MyPage')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('errorCode ', errorCode, 'errorMessage ', errorMessage)
            });
      } else {//SignUp
        if (this.pw.length < 6) {
          alert('비밀번호는 6자리 이상 입력해야 합니다.')
        } else {
          setDoc(doc(db, "Member", this.id), {
            name: this.name,
            phone: this.phone,
            isAuth: false,
            duty:null,
            github:null,
            info:null,
            stack:null
          })
          alert('관리자 접근 허용 대기')
          // createUserWithEmailAndPassword(auth, this.id, this.pw)
          //     .then((userCredential) => {
          //       // Signed in
          //       const user = userCredential.user;
          //       console.log('user ', user);
          //       // insert DB
          //       // 회원가입이 바로 되면 안되고 DB에 먼저 넣고 수락했을 때 회원가입이 되어야 하고, DB에 관리자 추가하고,
          //       // 관리자는 관리자만 줄 수 있게
          //     })
          //     .catch((error) => {
          //       const errorCode = error.code;
          //       const errorMessage = error.message;
          //       console.log('errorCode ', errorCode, 'errorMessage ', errorMessage)
          //     });
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
  width: 60vw;
  height: 40vw;
  border-radius: 1vw;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
}
.Left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 1vw 0 0 1vw;
  background-color: var(--e);
}
.Left img {
  width: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.Left img:hover {
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
}
.Left span {
  color: var(--w);
  font-weight: 100;
  font-size: 2vw;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.Left span:hover {
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
}
.Right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 0 1vw 1vw 0;
  background-color: var(--w);
}
.Right span {
  color: var(--e);
  font-size: 3vw;
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
  width: 20vw;
  height: 3vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5vw;
  margin-bottom: 1.5vw;
  font-size: 1.5vw;
  font-weight: 100;
  padding-left: 1.5vw;
  outline: none;
}
.LogInPageSubmit {
  display: flex;
  width: 8vw;
  height: 3vw;

  justify-content: center;
  align-items: center;
  color: var(--g1);
  font-size: 1.5vw;
  font-weight: 100;
  background: var(--g5);
  border-radius: 1vw;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.LogInPageSubmit:hover {
  background: var(--e);
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
  font-size: 4vw;
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
  width: 20vw;
  height: 3vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1vw;
  margin-bottom: 1vw;
  font-size: 1.5vw;
  font-weight: 100;
}

.LogInPageSubmit {
  display: flex;
  width: 10vw;
  height: 4vw;
  font-size : 2vw;
  justify-content: center;
  align-items: center;
  color: var(--g1);
  background: var(--g5);
  border-radius: 1vw;

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
