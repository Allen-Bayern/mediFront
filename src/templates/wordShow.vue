<template>
    <Layout>
        <v-container>
            <v-row>
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-list 
                            color="transparent"
                            dark=true
                            style="position:fixed"
                        >
                            <!--- 这里会是重点修改的地方 --->
                            <v-list-item 
                                v-for="n in $page.strapiMediData.meanings.meanings"
                                :key="n"
                                link
                            >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ n.source }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-divider class="my-2"></v-divider>

                            <v-list-item
                                link
                                color="grey lighten-4"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        回到顶部
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet
                        min-height=auto
                        rounded="lg"
                    >
                        <h1 class="font-weight-black">{{ $page.strapiMediData.word }}</h1>
                        
                        <v-divider
                            class="my-4 info"
                            style="opacity: 0.22"
                        ></v-divider>

                        <div class="meanAsub">
                            <div id="chineseMeaning">{{ $page.strapiMediData.meanings.chinese }}</div>
                            <div id="subject">所属科室：<g-link :to="'/subjects/' + $page.strapiMediData.subj.subject_name">{{ $page.strapiMediData.subj.subject_chn }}</g-link></div>
                        </div>
                        <v-divider
                            class="my-4 info"
                            style="opacity: 0.22"
                        ></v-divider>

                        <div class="means">
                            <div v-for = "(mean, index) in $page.strapiMediData.meanings.meanings" :key="index">
                                <div class="chinese">
                                    {{ mean.chinese_meaning }}
                                </div>
                                <v-divider
                                    class="my-4 info"
                                    style="opacity: 0.22"
                                ></v-divider>
                                <div class="source">
                                    来源：{{ mean.source }}
                                </div>
                                <v-divider
                                    class="my-4 info"
                                    style="opacity: 0.22"
                                ></v-divider>
                            </div>
                        </div>
                        
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </Layout>
</template>


<page-query>
query($id : ID!){
    strapiMediData(id:$id){
        word
        subj{
            subject_name
            subject_chn
        }
        kaobos{
            is_kaobo
        }
        meanings{
        chinese
        meanings{
            source
            meaning
            chinese_meaning
        }
        }
        relfr{
            relaeng
            relachn
            rightw
        }
    }
}
</page-query>


<script>
export default{
    metaInfo (){
        return { title: this.$page.strapiMediData.word }
    },
    computed : {

    },
    methods : {

    }
}
</script>

<style>
    .font-weight-black{
        font-family : 'Roboto', sans-serif;
        font-size : 48;
    }
    #chineseMeaning{
        font-family : 'Roboto', sans-serif;
        font-size : 34;
    }
</style>