<template>
    <Layout>
        <v-container>
            <v-col>
                <v-sheet
                    min-height=auto
                    rounded="lg"
                >
                <div>
                    <h1 id="heading">查询词根词缀</h1>
                    <LazyHydrate on-interaction>
                        <etym-search style="max-width:600px;" />
                    </LazyHydrate>
                    </div>
                </v-sheet>
            </v-col>
        </v-container>
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