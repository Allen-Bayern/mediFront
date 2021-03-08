<template>
  <Layout>
    <v-container>
      <v-col>
        <v-sheet
            min-height=auto
            rounded="lg"
        >
          <div>
            <h1>医学词汇</h1>
            <LazyHydrate on-interaction>
              <algolia-search style="max-width:600px;" />
            </LazyHydrate>
          </div>
        </v-sheet>
      </v-col>
    </v-container>
  </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import AlgoliaSearch from '../components/AlgoliaSearch.vue';
export default {
  metaInfo: {
    title: 'Medical Dictionary'
  },
  components: {
    LazyHydrate,
    AlgoliaSearch
  }
}
</script>

<style scoped lang="css">
#inbox{
  padding : 10px;
  max-width : 500px;
}
</style>
