<template>
    <Layout>

    </Layout>
</template>

<page-query>
query ($id: ID!) {
  strapiSubjects(id: $id){
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