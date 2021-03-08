<template>
    <Layout>
        <v-container>
            <v-col>
                <v-sheet
                    min-height=auto
                    rounded="lg"
                >
                <div>
                    <h1 id="heading">按意义查找词根</h1>
                    <LazyHydrate on-interaction>
                        <meaning-etym-search style="max-width:600px;" />
                    </LazyHydrate>
                    </div>
                </v-sheet>
            </v-col>
        </v-container>
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