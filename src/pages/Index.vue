<template>
  <Layout>
    <v-container>
      <v-col>
        <v-sheet
                min-height=auto
                rounded="lg"
        >
          <div>
            <h1>Search</h1>
            <LazyHydrate on-interaction>
              <Search />
            </LazyHydrate>
          </div>
        </v-sheet>
      </v-col>
    </v-container>
  </Layout>
</template>

<script>

export default {
  
  metaInfo: {
    title: 'Medical Dictionary'
  },
  components: {
    Search: () => import('~/components/Search.vue')
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
