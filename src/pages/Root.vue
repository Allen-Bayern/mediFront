<template>
    <Layout>
        <h1 id="heading">按意义查找词根</h1>
        <LazyHydrate on-interaction>
            <etym-search style="max-width:600px;" />
        </LazyHydrate>
    </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import EtymSearch from '../components/EtymSearch.vue';
export default {
    metaInfo (){
        return { title : `按词根查找词根` };
    },
    components: {
        LazyHydrate,
        EtymSearch
    }
}
</script>