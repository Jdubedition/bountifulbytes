<template>
  <v-container id="about" tag="section">
    <base-subheading>About JustinK8s</base-subheading>

    <v-row>
      <v-col cols="2">
        <v-img
          :src="require('@/assets/justin-headshot-2021.jpg')"
          class="grey lighten-2 rounded-lg"
          width="100"
          minHeight="50"
        />
      </v-col>

      <v-col cols="10">
        <p>
          Hello, my name is Justin Wesley, and JustinK8s is a place for me to
          share my Kubernetes journey with the world.
        </p>
        <p>
          JustinK8s will help me communicate the things that I learn about
          Kubernetes and its surrounding ecosystem. The first way I will
          leverage JustinK8s towards this goal, is by making the whole of this
          site's architecture available to you. From code to browser, I will
          share how JustinK8s is made.
        </p>

        <p>
          To follow the evolution of this website, click on the git link at the
          top of the page.
        </p>
        <p>
          If you have questions, comments, or suggestions, please send an email
          to:
          <a href="mailto: me@justink8s.com">me@justink8s.com</a>.
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
