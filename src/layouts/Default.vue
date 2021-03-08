<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
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

        <v-btn
          text
          to="/meaning"
        >按意义查找词根
        </v-btn>

        <v-btn
          text
          to="/root"
        >词根词缀查询
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <!--- 用于建立搜索 --->
          <LazyHydrate on-interaction>
            <algolia-search style="max-width : 300px" />
          </LazyHydrate>
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