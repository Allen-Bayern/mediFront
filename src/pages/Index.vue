<template>
    <Layout>
        <v-container>
          <v-col>
            <v-text-field
              filled
              label="请输入您要查询的单词"
              append-icon="mdi-map-marker"
            >
            </v-text-field>
            
            <v-card
              class="mx-auto"
              max-width="400"
              tile
            >
              <v-list-item class = 'words-view'>
                <v-list-item-content v-for='word in $page.words' :key='word.id'>
                  <v-list-item-title>{{ word.word }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            
          </v-col>
        </v-container>
    </Layout>
</template>

<page-query>
query{
    words : mediData{
        id
        word
        meaning_quick
        meaning_dorland
    }
}
</page-query>

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
