<template>
  <v-container id="container-full">
    <v-layout>
      <!-- xs sm md lg xl max12-->
      <v-flex>
        <v-img max-height="125" contain src="https://media.giphy.com/media/IZuMiO3akbRVWnI3kH/giphy.gif"></v-img>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 id="about">
      <v-flex xs12>
        <span class="display-2 font-weight-bold">About Me</span>
      </v-flex>
    </v-layout>
    <v-layout mt-3 px-5 class="text-xs-center" row wrap>
      <v-flex xs12>
        <v-avatar size="250" color="grey lighten-4">
          <img
            src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/50988163_10213734001079444_2817855097181044736_n.jpg?_nc_cat=104&_nc_ht=scontent-nrt1-1.xx&oh=d558e14acbf714985470fb4b740c35a8&oe=5D357E65"
            alt="avatar"
          >
        </v-avatar>
        <p class="headline font-weight mt-2">Gwen Danielle Merida</p>
        <p
          class="title font-weight-thin mt-3"
        >Hello I'm a Full Stack Web Developer and iOS Developer from Philippines. Have 5 years work experience in IT Industry.</p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center mt-5 px-3 py-3 blue>
      <v-flex xs12>
        <span class="display-2 font-weight-bold white--text" id="skills">Skill Sets</span>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center px-3 py-3 blue row wrap>
      <v-flex xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Vue.js</p>
      </v-flex>
      <v-flex xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Reactjs</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
            alt="avatar"
          >
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Angular 7</p>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center px-3 py-3 blue row wrap>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://tutorialedge.net/images/node.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Node.js</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/mysql-6-logo-png-transparent.png"
            alt="avatar"
          >
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">MySQL</p>
      </v-flex>
      <v-flex lg4 sm12 xs12>
        <v-avatar size="150" color="grey lighten-4">
          <img src="https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo_globe.png" alt="avatar">
        </v-avatar>
        <p class="subheading font-weight mt-2 white--text">Neo4j</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VuetifyPage extends Vue {
}
</script>

<style scoped>
</style>