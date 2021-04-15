<template>
    <div class="container">
      <div class="row parent m-5 p-5">
        <div class="box1 child p-5 bg-info">
          <h1>愛知県の田舎に生まれ</h1>
        </div>
        <div class="box1b child p-5 bg-info">
        </div>
        <div class="box2 child p-5 bg-info">
          <h1>のほほんと暮らしていたが、、</h1>
        </div>
        <div class="box2b child p-5 bg-info">
        </div>
        <div class="box3 child p-5 bg-info">
          <h1>プログラマーになろうと一念発起！！</h1>
        </div>
        <div class="box3b child p-5 bg-info">
        </div>
      </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
 methods: {
   alert: function () {
     alert('componentAlert')
   },
 },
})
</script>

<style scoped>
.parent {
  position: relative;
}
.child {
  position: absolute;
  display: block;
  width: 50vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box1 {
  z-index: 1;
}
.box1b {
  z-index: 2;
}
.box2 {
  z-index: 3;
}
.box2b {
  z-index: 4;
}
.box3 {
  z-index: 5;
}
.box3b {
  z-index: 6;
}
</style>