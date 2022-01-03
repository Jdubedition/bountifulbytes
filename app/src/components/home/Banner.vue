<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/earth-3866609-1920-darker.jpg')"
      class="grey lighten-2"
      height="200"
      width="100%"
    >
      <v-row class="fill-height pa-3" align="center">
        <v-col cols="12" md="7" offset-md="5">
          <h1 class="display-2 font-weight-light">BountifulBytes</h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            Here, There, and Everywhere
          </div>

          <div>
            <p class="font-weight-thin">
              <a :href="attribution.authorUrl" target="_blank">{{
                attribution.authorName
              }}</a>
              on
              <a :href="attribution.sourceUrl" target="_blank">{{
                attribution.sourceName
              }}</a>
            </p>
          </div>

          <!-- <v-btn
            color="primary"
            depressed
          >
            Subscribe
          </v-btn> -->
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
export default {
  name: "HomeBanner",

  data: () => {
    return {
      attribution: {
        image: "earth-3866609-1920-darker.jpg",
        sourceName: "pixabay",
        sourceUrl: "https://pixabay.com",
        authorName: "TheDigitalArtist",
        authorUrl: "https://pixabay.com/users/thedigitalartist-202249/",
      },
    };
  },
};
</script>

<style scoped>
.v-application a {
  color: inherit;
  text-decoration: none;
}

.v-application .font-weight-thin {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.85rem;
  padding-right: 1rem;
}
</style>
