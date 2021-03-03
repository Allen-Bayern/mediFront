<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
        ></v-avatar>

        <v-btn
          text
          to="/"
        >回到首页
        </v-btn>

        <v-btn
          text
          to="/subjects"
        >所有科室词汇分类
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <!--- 用于建立搜索 --->
          <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
          >
            <LazyHydrate on-interaction>
              <algolia-search />
            </LazyHydrate>
          </v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
        <slot/>
    </v-main>
  </v-app>
</template>

<script>
import AlgoliaSearch from '../components/AlgoliaSearch.vue';

export default {
  components: {
    AlgoliaSearch
  }
}
</script>