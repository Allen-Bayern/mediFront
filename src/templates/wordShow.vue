<template>
    <Layout>
        <div v-text='$page.strapiMediData.word'></div>
        <div v-html='$page.strapiMediData.which_type.type_name'></div>
        <div>{{ $page.strapiMediData.which_subject.subject_name }}</div>
    </Layout>
</template>

<page-query>
query ($id : ID!){
  strapiMediData(id : $id){
    word
    which_type{
      type_name
    }
    which_subject{
      subject_name
    }
    attribute{
      quick_meaning
      meanings{
      	source
        meaning
      }
      sentences{
        eng
        chn
      }
    }
  }
}
</page-query>

<script>
export default{
    metaInfo (){
        return { title: this.$page.strapiMediData.word }
    }
}
</script>

<style>

</style>