<template>
    <Layout>
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height=auto
              rounded="lg"
            >
              <h1>我们已收录的{{ $page.strapiSubjects.subject_chn }}词汇如下：</h1>
              <div class="word-lists">
                <div v-for="(word, index) in $page.strapiSubjects.medis" :key=index>
                  <div class="word"><g-link :to="'/words/' + word.id">{{ word.word }}   {{ word.meanings.chinese }}</g-link></div>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  strapiSubjects(id: $id){
    subject_name
    subject_chn
    medis{
      word
      meanings{
        chinese
      }
    }
  }
}
</page-query>

<script>
export default{
    metaInfo (){
        return { title : this.$page.strapiSubjects.subject_name }
    }
}
</script>