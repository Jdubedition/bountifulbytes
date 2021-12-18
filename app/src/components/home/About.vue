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
          Hello, my name is Justin Wesley, and BountifulBytes is a place for me
          to share my exploration of software engineering, cloud engineering,
          distributed systems, decentralized applications, machines learning and
          who knows what else...
        </p>
        <p>
          BountifulBytes will help me share things I learn and act as a bridge
          from explanation (maybe some pontification) to code/examples. The
          first way I will leverage BountifulBytes towards this goal, is by
          making the source code, hosted on
          <a href="https://github.com/" target="_blank">GitHub</a>, available to
          you. This sites hosting is made possible by
          <a href="https://pages.cloudflare.com/" target="_blank"
            >Cloudflare Pages</a
          >.
        </p>

        <p>
          To follow the evolution of this website, click here:
          <v-btn
            dark
            icon
            href="https://github.com/Jdubedition/bountifulbytes/"
            target="_blank"
          >
            <br />
            <v-icon dark> mdi-git </v-icon>
          </v-btn>
        </p>
        <p>
          If you have questions, comments, or suggestions, please send an email
          to:
          <a href="mailto: justin@bountifulbytes.com"
            >justin@bountifulbytes.com</a
          >.
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
