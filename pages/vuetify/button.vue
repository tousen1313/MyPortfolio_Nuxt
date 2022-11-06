<template>
  <div id="app">
  <v-app id="inspire">
    <v-btn block>
      Block Button
    </v-btn>
  </v-app>
</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VuetifyButtonPage extends Vue {
}
</script>

<style scoped>
</style>