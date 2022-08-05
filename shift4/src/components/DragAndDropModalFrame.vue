<template>
  <div class="Modal">
    <div class="Overlay" @click.self="modalOff"></div>
    <div class="Content">
    <div class="file-upload-container" 
      @dragenter="onDragenter"
      @dragover="onDragover"
      @dragleave="onDragleave"
      @drop="onDrop"
      @click="onClick"
    >
      <div class="file-upload" :class="isDragged ? 'dragged' : ''">
        Drag & Drop Files
      </div>
    </div>
    <!-- 파일 업로드 -->
    <input type="file" ref="fileInput" class="file-upload-input" @change="onFileChange" multiple>
    <!-- 업로드된 리스트 -->
    <div class="file-upload-list">
      <div class="file-upload-list__item" v-for="(file, index) in fileList" :key="index">
        <div class="file-upload-list__item__data">
          <img class="file-upload-list__item__data-thumbnail" :src="file.src">
          <div class="file-upload-list__item__data-name">
            {{ file.name }}
          </div>
        </div>
        <div class="file-upload-list__item__btn-remove" @click="handleRemove(index)">
          삭제
        </div>
      </div>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
  name: "DragAndDropModalFrame",
  props: {
    service:Number
  },
  data(){
    return{
      files:{}
    }
  },
  methods:{
    modalOff(){
      this.$emit('changeModal')
    },
    addFiles(files){
      this.files=files
      console.log(files)
    },
    onClick () {
        this.$refs.fileInput.click()
      },
      onDragenter (event) {
        // class 넣기
        console.log(event)
        this.isDragged = true
      },
      onDragleave (event) {
        // class 삭제
        console.log(event)
        this.isDragged = false
      },
      onDragover (event) {
        // 드롭을 허용하도록 prevetDefault() 호출
        event.preventDefault()
      },
      onDrop (event) {
        // 기본 액션을 막음 (링크 열기같은 것들)
        event.preventDefault()
        this.isDragged = false
        const files = event.dataTransfer.files
        this.addFiles(files)
      },
      onFileChange (event) {
        const files = event.target.files
        this.addFiles(files)
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Modal .Overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.Overlay {
  opacity: 0.5;
  background-color: var(--b);
}
.Content {
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
<style></style>
