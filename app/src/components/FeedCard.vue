<template>
  <v-col>
    <v-col cols="12" :md="size === 2 ? 6 : size === 3 ? 4 : undefined">
      <base-card
        :height="value.prominent ? 450 : 350"
        color="grey lighten-1"
        dark
        href="#!"
      >
        <v-img
          :src="require(`@/assets/articles/${value.hero}`)"
          height="100%"
          gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
          @click="reveal = !reveal"
        >
          <v-row v-if="!value.prominent" class="fill-height text-right ma-0">
            <v-col cols="12">
              <!-- Not using categories until later, but keeping code here for that time -->
              <!-- <v-chip
                label
                class="mx-0 mb-2 text-uppercase"
                color="grey darken-3"
                text-color="white"
                small
                @click.stop=""
              >
                {{ value.category }}
              </v-chip> -->

              <h3 class="title font-weight-bold mb-2">
                {{ value.title }}
              </h3>

              <div class="caption">
                {{ value.author }}<br />{{ value.date }}
              </div>
            </v-col>
          </v-row>
        </v-img>
      </base-card>
      <v-expand-transition>
        <div v-show="reveal" class="grey darken-4">
          <v-divider></v-divider>
          <v-card-text class="pb-0">
            <p class="display-1 text--primary" align="center">
              {{ value.title }}
            </p>
            <p class="diplay-2 text-primary font-italic" align="center">
              {{ value.flavor }}
            </p>
          </v-card-text>
          <div
            v-html="test(require(`@/assets/articles/${value.content}`))"
            style="padding: 30px"
          ></div>
          <v-card-actions class="pt-0 justify-center">
            <v-btn text color="teal accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-col>
  </v-col>
</template>

<script>
import marked from "marked";
import DOMPurify from "dompurify";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";

export default {
  name: "FeedCard",

  data: () => {
    return {
      reveal: false,
    };
  },

  methods: {
    test(markdown) {
      return DOMPurify.sanitize(marked(markdown));
    },
  },

  props: {
    size: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.theme--dark.v-application code {
  background-color: unset;
}

.v-application code {
  padding: unset;
}

pre {
  border-radius: 7px;
}
</style>
