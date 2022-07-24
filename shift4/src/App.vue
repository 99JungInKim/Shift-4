<template>
  <div id="app">
    <div class="menu" >
      <nav class="clearfix">
        <ul class="clearfix">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/AboutUs">About Us</router-link></li>
          <li><router-link to="/Services">Services</router-link></li>
          <li><router-link to="/Portfolio">Portfolio</router-link></li>
          <li v-if="true"><router-link to="/LogIn">Log In</router-link></li>
          <li v-else><router-link to="/MyPage">My Page</router-link></li>
        </ul>
      <a id="pull" href="#"></a>
    </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap');
:root {
  --w : #ffffff;
  --g1 : #f2f4f6;
  --g2 : #e5e8eb;
  --g3 : #d1d6db;
  --g4 : #b0b8c1;
  --g5 : #8b95a1;
  --g6 : #6b7684;
  --g7 : #4e5968;
  --g8 : #333d4b;
  --g9 : #191f28;
  --b : #000000;
  --e : #5492ff;
}
*{
  font-family: 'IBM Plex Sans KR', sans-serif;
  margin : 0 auto;
  padding : 0 auto;
}
nav{
  font-size: 12pt;
  position: relative;
}
nav ul{
  padding: 0;
  margin: 0 auto;
  width: auto;
}
nav a{
  line-height: 50px;
  height: 50px;
}
nav li a{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
nav a#pull{
  display: none;
}

ul{
  /*list-style-type: none;*/
  margin: 0;
  padding: 0;
  background-color: var(--g9);
  text-align: center;
}
li{
  /*position: relative;*/
  display: inline-block;
}
li a{
  color: var(--g1);
  text-align: center;
  padding: 14.5px 16px;
  text-decoration: none;
}
li a:hover{
  /*color: #597812;*/
  color: var(--w);
  font-weight:normal;
  filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5));
}
.menu {
  width: 5000px;
  height: 50px;
  text-align: center;
  max-width: 100%;
  background-position: center;
  background-size: cover;
  background-color: var(--g9);color: white;
  position: absolute;z-index: 1;
}
</style>
