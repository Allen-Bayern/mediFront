<template>
    <Layout>
        <h1 id="heading">按意义查找词根</h1>
        <LazyHydrate on-interaction>
            <meaning-etym-search style="max-width:600px;" />
        </LazyHydrate>
    </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import MeaningEtymSearch from '../components/MeaningEtymSearch.vue';
export default {
    metaInfo (){
        return { title : `按意义查找词根` };
    },
    components: {
        LazyHydrate,
        MeaningEtymSearch
    }
}
</script>