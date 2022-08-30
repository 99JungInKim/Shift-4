<template>
  <div class="FileSystemModal">
    <div class="SidebarHeader">
      <div class="MenuWrap">
        <button class="CloseButton" @click="closeModal" />
        <button class="MinimizeButton" @click="minimizeModal" />
        <button class="MaximizeButton" @click="maximizeModal" />
      </div>
    </div>
    <div class="ModalHeader">상단바</div> 
    <div class="SidebarContent">
      <div class="MemberTitle">Member</div>
      <div class="MemberList">
        <div class="MemScrollArea">
          <div class="MemberData" v-for="el in food" :key="el">{{el}}</div>
        </div>
      </div>
    </div>
    <div class="ModalContent">
      <!-- <div>{{browserWidth}}</div>
      <div>{{browserHeight}}</div> -->
      <!-- <div class="ContentItem" v-for="el in food" :key="el">{{el}}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileSystemFrame',
  props: {},
  data() {
    return {
      browserWidth: 1920,
      browserHeight: 1080,
      food: ['chicken', 'pizza', 'ramen', 'dumplings', 'chicken', 'pizza', 'ramen', 'dumplings', 'chicken', 'pizza', 'ramen', 'dumplings', 'chicken', 'pizza', 'ramen', 'dumplings', 'chicken', 'pizza', 'ramen', 'dumplings', 'chicken', 'pizza', 'ramen', 'dumplings']
    }
  },
  mounted() {
    let bW = window.innerWidth || document.body.clientWidth
    let bH = window.innerHeight || document.body.clientHeight

    this.browserWidth = bW, this.browserHeight = bH
    document.documentElement.style.setProperty("--browser-width", bW + "px")
    document.documentElement.style.setProperty("--browser-height", bH + "px")
    window.addEventListener('resize', this.handleBrowserResize);
    
    // console.log(screen.availWidth, screen.availHeight)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleBrowserResize);
  },
  methods: {
    closeModal() {
      console.log("close")
      this.$emit("changeFSModal")
    },
    minimizeModal() {
      console.log("minimize")
    },
    maximizeModal() {
      console.log("maximize")
    },
    handleBrowserResize(e) {
      e.preventDefault();
      let bW = window.innerWidth || document.body.clientWidth
      let bH = window.innerHeight || document.body.clientHeight

      this.browserWidth = bW, this.browserHeight = bH
      document.documentElement.style.setProperty("--browser-width", bW + "px")
      document.documentElement.style.setProperty("--browser-height", bH + "px")
    },
    dragModal(element) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(element.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(element.id + "header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        element.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* https://dev.to/mandrewcito/vue-js-draggable-div-3mee */
/* https://studiomeal.com/archives/197 */
/* https://studiomeal.com/archives/533 */
  :root {
    --browser-width: 1920;
    --browser-height: 1080;
  }
  ::-webkit-scrollbar {
    /* display: none; */
  }

  @media (max-width: 1400px) {
    .FileSystemModal {

    }
  }

  .FileSystemModal {
    position: fixed;
    display: grid;
    grid-template-areas: 'aside header'
                         'aside2 content';
    grid-template-rows: 68px minmax(617px, auto);
    grid-template-columns: 380px minmax(auto, auto);
    left: 10vw;
    top: 10vh;
    border-radius: 20px;
    z-index: 10;
    background-color: var(--w); /* 나중에 바꿀거임 */
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.35));
    resize: both;
    overflow: hidden;
    min-width: 760px;
    min-height: 68px;
  }
  
  .SidebarHeader {
    grid-area: aside;
    position: relative;
    display: flex;
    background-color: var(--g5);
    border-radius: 20px 0px 0px 0px;
    opacity: 0.7;
  }

  .MenuWrap {
    position: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5px;
    left: 15px;
    width: 120px;
  }

  .CloseButton {
    background-color: #EC6A5E;
    border-radius: 50%;
    border: none;
    width: 22px;
    height: 22px;
  }
  .MinimizeButton {
    background-color: #F4BF4E;
    border-radius: 50%;
    border: none;
    width: 22px;
    height: 22px;
  }
  .MaximizeButton {
    background-color: #61C554;
    border-radius: 50%;
    border: none;
    width: 22px;
    height: 22px;
  }

  .SidebarContent {
    grid-area: aside2;
    position: relative;
    display: block;
    background-color: var(--g5);
    border-radius: 0px 0px 0px 20px;
    /* backdrop-filter: blur(10px); */
    opacity: 0.7;
  }

  .MemberTitle {
    position: relative;
    left: 25px;
    font-weight: 300;
    font-size: 30px;
    line-height: 39px;
  }
  .MemberList {
    position: relative;
    left: 40px;
    top: 5px;
    height: auto;
    font-weight: 100;
    font-size: 40px;
    line-height: 58px;
  }
  .MemScrollArea {
    position: relative;
    display: inline-block;
    /* width: auto; */
    width: 300px;
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    
  }
  .MemberData {
    
  }

  .ModalHeader {
    grid-area: header;
    position: relative;
    display: block;
    width: auto;
    top: 0px;
    left: 0px;
    background-color: var(--g2);
    border-radius: 0px 20px 20px 20px;
    z-index: 20;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.35));
  }
  .ModalContent {
    grid-area: content;
    position: relative;
    display: grid;
    width: auto;
    height: auto;
    grid-auto-columns: minmax(100px, auto);
    grid-auto-rows: minmax(100px, auto);
    top: 0px;
    left: 0px;
    background-color: var(--w);
    border-radius: 0px 20px 20px 0px;
  }
  .ContentItem {
    
  }
  
</style>
<style>
</style>