<template>
  <div class="main">
    <button class="btn" @click="show = !show">切り替え</button>
    <transition name="fade">
      <p v-if="show">hello!</p>
    </transition>
    <transition name="slide" appear="">
      <p v-if="show">bey</p>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちわ</p>
    </transition>
    <br /><br />
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div class="circle" v-if="show">circle</div>
    </transition>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TestComponent extends Vue {
  setup() {
    console.log("setup!!!");
  }

  show = true;

  beforeEnter(el) {
    el.style.transform = 'scale(0)'
  }
  // CSS と組み合わせて使う時、done コールバックはオプションです
  enter(el, done) {
    let scale = 0
    const interval = setInterval(() => {
      el.style.transform = `scale(${scale})`
      scale += 0.1
      if (scale > 1) {
        clearInterval(interval);
        done()
      }
    }, 30)
  }

  // CSS と組み合わせて使う時、done コールバックはオプションです
  leave(el, done) {
    let scale = 1
    const interval = setInterval(() => {
      el.style.transform = `scale(${scale})`
      scale -= 0.1
      if (scale < 0) {
        clearInterval(interval);
        done()
      }
    }, 30)
  }
}
</script>


<style lang="sass" scoped>
.btn
  color: black
  background-color: #FFF
  border-radius: 5px
.circle
  width: 200px
  height: 200px
  margin: auto
  border-radius: 100px
  background-color: deeppink
.fade-enter
  opacity: 0
.fade-enter-active
  transition: opacity 5s
.fade-enter-to
  opacity: 1
.fade-leave
  opacity: 1
.fade-leave-active
  transition: opacity 5s

.slide-enter-active
  animation: slide-in 0.5s
.slide-leave-active
  animation: slide-in 0.5s reverse

@keyframes slide-in
  from
    transform: translateX(100px)
  to
    transform: translateX(0)
.main
  width: 70%
  margin: auto
  text-align: center
</style>