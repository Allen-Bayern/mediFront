<template>
  <Layout>
    <v-container>
      <v-col>
        <v-text-field
          filled
          label="请输入您要查询的单词"
          append-icon="mdi-map-marker"
        ></v-text-field>
      </v-col>
    </v-container>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Mainpage.vue'

export default {
  
  metaInfo: {
    title: 'Medical Dictionary'
  },
  components: {
    Layout
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
