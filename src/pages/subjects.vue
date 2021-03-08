<template>
    <Layout>
        <v-container>
            <v-row>
                <v-col>
                    <v-sheet min-height=auto rounded="lg">
                        <h1>目前收录的科室如下：</h1>
                        <div id="listSubjects" v-for="(item, index) in items" :key=index>
                            <g-link :to="'/subjects/' + item.sub_eng"><v-icon color="black">{{ item.sub_icon }}</v-icon>{{ item.sub_chn }}</g-link>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
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
        data (){
            return {
                items:
                    [
                    { sub_eng : `endocrine`, sub_chn : `内分泌科`, sub_icon : `mdi-medical-bag`},
                    { sub_eng : `microorganism`, sub_chn : `微生物学`, sub_icon : `mdi-rhombus-split`},
                    { sub_eng : `ophthalmic`, sub_chn : `眼科`, sub_icon: `mdi-eye-check`},
                    { sub_eng : `respiratory`, sub_chn : `呼吸科`, sub_icon : `mdi-lungs` },
                    { sub_eng : `urology`, sub_chn: `泌尿科`, sub_icon : `mdi-water-remove` }
                    ]
            }
        }
    }
</script>

<style>

</style>