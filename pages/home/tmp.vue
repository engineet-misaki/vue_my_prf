<template>
    <div>
        <h1 class="m-5">test</h1>
        <button v-on:click="alert">Add 1</button>
        <div class="box">box</div>
        <div class="box m-5">box</div>
        <div class="box">box</div>
        <div class="box">box</div>
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
h1{
    color: antiquewhite;
}
</style>