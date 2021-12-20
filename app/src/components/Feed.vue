<template>
  <v-container class="max-width-container">
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>

      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>

    <v-row align="center">
      <v-col class="text-right" cols="5">
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          square
          outlined
          title="Previous page"
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-col>

      <v-col class="text-center subheading" cols="2">
        Page {{ page }} Of {{ pages }}
      </v-col>

      <v-col class="text-left" cols="5">
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          outlined
          title="Next page"
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "Feed",

  components: {
    FeedCard: () => import("@/components/FeedCard"),
  },

  data: () => ({
    layout: [1, 1, 1, 1, 1],
    page: 1,
  }),

  computed: {
    ...mapState(["articles"]),
    pages() {
      return Math.ceil(this.articles.length / 5);
    },
    paginatedArticles() {
      const start = (this.page - 1) * 5;
      const stop = this.page * 5;

      return this.articles.slice(start, stop);
    },
  },

  watch: {
    page() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
