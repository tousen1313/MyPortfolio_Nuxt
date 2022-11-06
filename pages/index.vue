<template>
  <div>
    <!-- <font-awesome-icon :icon="['fab', 'facebook']" /> -->
      <v-container>
        <v-layout wrap>
          <v-flex xs12 sm6 md6>
            <v-profile-card />
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-message-area />
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import VProfileCard from "@/components/VProfileCard.vue";
import VMessageArea from "@/components/VMessageArea.vue";

@Component({
  components: {
    VProfileCard,
    VMessageArea,
  },
})
export default class IndexComponent extends Vue {}
</script>

<style scoped>
.main {
  display: flex;
  @media (max-width: 600px) {
    .container {
      display: block;
    }
  }
}
</style>