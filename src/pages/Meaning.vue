<template>
    <Layout>
        <v-container>
            <v-col>
                <v-sheet
                    min-height=auto
                    rounded="lg"
                >
                <div class="mainsearch">
                    <div id="main-show">
                        <h1 id="heading">按意义查找词根</h1>
                    </div>
                    <div id="search-box">
                    <LazyHydrate on-interaction><meaning-etym-search style="max-width:600px;" /></LazyHydrate>
                    </div>
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

<style scoped lang="css">
.mainsearch{
    display : grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 50% 50%;
    grid-template-areas : 'a b c'
                            'd e f';
    justify-items : center;
    align-items : center;
}
#main-show {
    grid-area : b;
}
#search-box {
    grid-area : e;
    width : 600px;
}
</style>