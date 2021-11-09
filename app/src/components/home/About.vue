<template>
  <v-container class="max-width-container" id="about" tag="section">
    <base-subheading>About BountifulBytes</base-subheading>

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
          Hello, my name is Justin Wesley, and BountifulBytes is a place for me to
          share my exploration of Kubernetes, distributed systems, software engineering,
          machines learning, and other related topics with the world.
        </p>
        <p>
          BountifulBytes will help me communicate things I learn and act as a portal
          to code/examples. The first way I will
          leverage BountifulBytes towards this goal, is by making the whole of this
          site's architecture available to you. From code to browser, I will
          share how BountifulBytes is made.
        </p>

        <p>
          To follow the evolution of this website, click on the Git link at the
          top of the page.
        </p>
        <p>
          If you have questions, comments, or suggestions, please send an email
          to:
          <a href="mailto: justin@bountifulbytes.com">justin@bountifulbytes.com</a>.
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
