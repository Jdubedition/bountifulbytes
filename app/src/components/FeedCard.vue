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
          class="image-container"
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
              <div>
                <p class="attribution font-weight-thin">
                  <a :href="value.attribution.authorUrl" target="_blank">{{
                    value.attribution.authorName
                  }}</a>
                  on
                  <a :href="value.attribution.sourceUrl" target="_blank">{{
                    value.attribution.sourceName
                  }}</a>
                </p>
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
            v-html="generate(require(`@/assets/articles/${value.content}`))"
            style="padding: 30px"
            class="article-container"
          />
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
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-json";
import emoji from "node-emoji";

DOMPurify.addHook("afterSanitizeAttributes", function (node) {
  if (node.hasAttribute("href") && !node.getAttribute("href").startsWith(`#`)) {
    // set all elements owning target to target=_blank
    if ("target" in node) {
      node.setAttribute("target", "_blank");
      // prevent https://www.owasp.org/index.php/Reverse_Tabnabbing
      node.setAttribute("rel", "noopener noreferrer nofollow");
    }
    // set non-HTML/MathML links to xlink:show=new
    if (
      !node.hasAttribute("target") &&
      (node.hasAttribute("xlink:href") || node.hasAttribute("href"))
    ) {
      node.setAttribute("xlink:show", "new");
    }
  }

  if (node.nodeName.toLowerCase() === "img") {
    node.setAttribute("class", "v-responsive__content");
  }
});

function parse(markdown) {
  const replacer = (match) => emoji.emojify(match);
  markdown = markdown.replace(/(:.*:)/g, replacer);

  return marked(markdown);
}

export default {
  name: "FeedCard",

  data: () => {
    return {
      reveal: false,
    };
  },

  methods: {
    generate(markdown) {
      return DOMPurify.sanitize(parse(markdown));
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
    prism.highlightAll();
  },
};
</script>

<style scoped>
.image-container >>> .v-image__image {
  transition: 0.3s linear;
}

.article-container >>> pre code {
  background-color: unset;
  padding: unset;
}

.article-container >>> pre {
  border-radius: 7px;
}

.article-container >>> img {
  border-radius: 7px;
}

.image-container >>> a {
  color: inherit;
  text-decoration: none;
}

.image-container >>> .attribution a:hover {
  text-decoration: underline;
}

.image-container >>> .font-weight-thin {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.85rem;
  padding-right: 1rem;
}
</style>
