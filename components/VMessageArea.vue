<template>
  <div class="message-main">
    <p class="">
      {{ this.$PROFILE_MESSAGE }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class MessageAreaComponent extends Vue {}
</script>

<style scoped>
.message-main {
  font-size: 25px;
  border: solid #32a1ce;
  border-radius: 5px;
  white-space: pre-line;
  padding-left: 10px;
}
</style>
