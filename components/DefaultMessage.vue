<template>
  <v-flex xs6 sm6 md6>
    {{ this.message }}
  </v-flex>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class DefaultMessageComponent extends Vue {
  message =
    "左のコンポーネントリストから対象のラベルを選択すると、ここに選択されたComponentの詳細がプレビューされます";
}
</script>


<style lang="sass" scoped>
</style>