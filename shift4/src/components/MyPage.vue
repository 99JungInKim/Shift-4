<template>
	<div class="Background">
		<div class="Card">
			<div class="CardOuter">
				<div class="CardTop">
					<div class="Img">
						<div @dblclick="changeImg">Change Image</div>
						<img src="@/assets/icons/Login.svg" />
            <img :src=test />
					</div>
					<div class="Info">
						<input
							v-if="infoEdit"
							@dblclick="infoEdit = !infoEdit"
							type="text"
							v-model="user.info"
						/>
						<p v-else @dblclick="infoEdit = !infoEdit">
							{{
								user.info == null || user.info == ''
									? '자기 소개를 넣어주세요.'
									: user.info
							}}
						</p>
					</div>
				</div>
				<div class="CardBottom">
					<div class="UserData" v-if="$store.getters.isLogin">
						<div @dblclick="edit('name')">
							<input
								v-if="nameEdit"
								type="text"
								v-model="user.name"
							/>
							<p v-else>
								{{
									user.name == null || user.name == ''
										? '이름'
										: user.name
								}}
							</p>
						</div>
						<div @dblclick="edit('duty')">
							<input
								v-if="dutyEdit"
								type="text"
								v-model="user.duty"
							/>
							<p v-else>
								{{
									user.duty == null || user.duty == ''
										? '직책'
										: user.duty
								}}
							</p>
						</div>
						<div>
							<select
								v-if="stackEdit"
								type="text"
								@change="edit('stack')"
								v-model="user.stack"
							>
								<option>Not A Programmer</option>
								<option>Full Stack</option>
								<option>Front End</option>
								<option>Back End</option>
							</select>
							<p v-else @dblclick="edit('stack')">
								{{
									user.stack == null
										? '개발 스택'
										: user.stack
								}}
							</p>
						</div>
						<div @dblclick="edit('github')">
							<input
								v-if="githubEdit"
								type="text"
								v-model="user.github"
							/>
							<p v-else>
								{{
									user.github == null || user.github == ''
										? '깃허브 계정'
										: user.github
								}}
							</p>
						</div>
					</div>
					<div class="Img">
						<img src="@/assets/icons/Logo.svg" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EventBus from '@/EventBus';

import { db } from '@/main';
import { doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";

export default {
	name: 'MyPage',
	props: {},
	mounted() {
		// this.userData=this.  user
		EventBus.$on('notifyUserUpdated', (email) => {
			this.userDoc = doc(db, 'Member', email);
			this.user = this.$store.state.user;
		});
	},
	data() {
		return {
			user: {},
			userDoc: {},
			infoEdit: false,
			nameEdit: false,
			dutyEdit: false,
			stackEdit: false,
			githubEdit: false,
      test: '',
		};
	},
	methods: {
		async edit(property) {
			const edit = property + 'Edit';
			this[edit] = !this[edit];
			console.log(this[edit]);
			if (!this[edit]) {
				console.log(this.user[property]);
				await updateDoc(this.userDoc, {
					[property]: this.user[property],
				});
				EventBus.$emit('notifyUserDataUpdated');
			}
		},
		changeImg() {
			alert('Change Image Method');
      const storage = getStorage();
      const test = ref(storage, "/test/test.png");
      this.test = test
      console.log('test ', this.test)
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Background {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(var(--g5) 50%, var(--g1) 0%);
}
.Card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
}
.CardOuter {
  width: 56vw;
  height: 35vw;
  background-color: var(--w);
  border-radius: 20px;
  overflow: hidden;
}
.CardTop {
  height: 17.5vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}
.CardTop .Img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.5vw;
  height: 100%;
  overflow: hidden;
}
.CardTop .Img div {
  position: absolute;
  width: 17.5vw;
  height: 17.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  font-size: 2vw;
  color: var(--g1);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px 0 0 0;
  opacity: 0;
}
.CardTop .Img div:hover {
  opacity: 1;
}
.CardTop .Img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.CardTop .Info {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-left: 1vw;
  width: 36vw;
  height: 100%;
}
.CardBottom {
  display: flex;
  justify-content: space-between;
  height: 17.5vw;
  width: 100%;
}
.CardBottom .UserData {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 17.5vw;
  height: 100%;
}
.CardBottom .Img {
  display: flex;
  align-items: flex-end;
  width: 10vw;
  margin-right: 4vw;
}
p {
  word-wrap: break-word;
  color: var(--g5);
  font-weight: 100;
  font-size: 1.5vw;
}
input {
  text-align: center;
  border: 0;
  word-wrap: break-word;
  color: var(--g9);
  background-color: var(--g1);
  font-weight: 100;
  font-size: 1.5vw;
  border-radius: 0.5vw;
  outline: none;
}
input:focus{
    outline: none !important;
}

select {
	text-align: center;
	border: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	color: var(--g9);
	background-color: var(--g1);
	font-weight: 100;
	font-size: 1.5vw;
	border-radius: 0.5vw;
	outline: none;
}
</style>
