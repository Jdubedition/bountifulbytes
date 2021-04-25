<template>
  <v-container id="about" tag="section">
    <base-subheading>About JustinK8s</base-subheading>

    <v-row>
      <v-col cols="2">
        <v-img
          :src="require('@/assets/justin-headshot-2021.jpg')"
          class="grey lighten-2"
          width="100"
          height="100"
        />
      </v-col>

      <v-col cols="10">
        <p>
          Hello, my name is Justin Wesley, and JustinK8s is a place for me to
          share my Kubernetes journey with the world.
        </p>
        <p>
          JustinK8s will help me share the things that I learn, by making the
          whole of this site available to you. From code to hosting, I will
          share how JustinK8s is made.
        </p>

        <p>
          To follow the evolution of this website, watch this repository:
          <v-btn
            class="ma-2"
            color="grey"
            dark
            href="https://github.com/Jdubedition/justink8s/"
            target="_blank"
          >
            Source Code
            <br />
            <v-icon large dark> mdi-github </v-icon>
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeAbout",
};
</script>
