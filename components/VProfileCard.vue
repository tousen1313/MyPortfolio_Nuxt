<template>
  <div class="test">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ this.$PROFILE_NAME }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0"> </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ProfileCardComponent extends Vue {
  loading = false;
  selection = 1;

  reserve() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 2000);
  }
}
</script>

<style lang="sass" scoped>
.test
  border: 1px solid $mainColor
  border-radius: 5px
  margin-right: 10px

.vuetify-logo
  height: 180px
  width: 180px
  transform: rotateY(560deg)
  animation: turn 3.5s ease-out forwards 1s

@keyframes turn 
  100%
    transform: rotateY(0deg)
</style>
