Templates for **GraphQL collections** should be added here.
To create a template for a collection called `WordPressPost`
create a file named `WordPressPost.vue` in this folder.

Learn more: https://gridsome.org/docs/templates/

You can delete this file.

```JavaScript

<template>
    <Layout>
        
    </Layout>
</template>

<script>
export default{
    metaInfo : {
        title : null
    }
}
</script>

<style>

</style>

```

```JavaScript
<template>
    <Layout>
        <div>
            <div v-html='$page.strapiMediData.word'></div>
            <div v-html='$page.strapiMediData.which_type.type_name'></div>
        </div>
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
```