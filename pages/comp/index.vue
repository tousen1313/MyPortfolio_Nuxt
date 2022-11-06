<template>
  <div>
    <v-layout>
      <v-flex xs6 sm6 md6>
        <ul class="main">
          <li v-for="item in componentsListItem" :key="item.name">
            <span @click="test(item)" style="cursor: pointer">
              {{ item.name }}
            </span>
          </li>
        </ul>
      </v-flex>
      <v-flex xs6 sm6 md6 class="select-area">
        <component :is="selectCompName"></component>
      </v-flex>
    </v-layout>
  </div>
</template>

<!-- <v-container>
  <v-layout wrap>
    <v-flex xs12 sm6 md6> -->

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { componentsList, componentsListType } from "@/data/componentsList";

import DefaultMessage from "@/components/DefaultMessage.vue";
import VProfileCard from "@/components/VProfileCard.vue";
import VMessageArea from "@/components/VMessageArea.vue";

@Component({
  components: {
    DefaultMessage,
    VProfileCard,
    VMessageArea,
    // 'VMessageArea': () => import('@/components/VMessageArea.vue')
  },
})
export default class CompPage extends Vue {
  componentsListItem = componentsList;
  selectComp: componentsListType =   {
    name: "default-message",
    desc: `初期処理`,
  }

  get selectCompName() {
    return this.selectComp.name
  }

  test(obj: componentsListType) {
    console.log("ここまできてます！！", obj.name);
    this.selectComp = obj
  }

  currentComponentName() {
    console.log("currentComponentName発火！！",);
    return this.selectCompName;
  }
}
</script>


<style lang="sass" scoped>
.main
  border: solid 2px $mainColor
  border-radius: 5px

.select-area
  margin: 0px 10px
</style>