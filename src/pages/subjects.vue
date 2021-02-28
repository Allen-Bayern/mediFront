<template>
    <Layout>


    </Layout>
</template>

<page-query>

query{
    allStrapiSubjects{
        edges{
            node{
                subject_chn
                subject_name
            }
        }
    }
}

</page-query>

<script>
    export default {
        metaInfo (){
            return { title: `科室词汇一览表` }
        },
    }
</script>

<style>

</style>