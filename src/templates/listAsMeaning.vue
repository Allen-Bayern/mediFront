<template>
    <Layout>
        <v-container>
            <v-row>
                <v-col col="2">
                    <v-sheet
                        min-height=auto
                        rounded="lg"
                    >
                        <h1>表示{{$page.strapiMeaningOfEtyms.chinese}}的词根词缀有：</h1>
                        <div v-for="(etym, index) in $page.strapiMeaningOfEtyms.etyms" :key=index>
                            <div>{{ index + 1 }}.<g-link :to="'/etyms/root/'+etym.id">{{ etym.word }}</g-link></div>
                            <div>类型：{{ etym.type }}</div>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </Layout>
</template>

<page-query>
query($id : ID!){
    strapiMeaningOfEtyms(id : $id){
        id 
        meaning
        chinese
        etyms{
            id
            word
            variation 
            type
        }
    }
}
</page-query>

<script>
export default {
    metaInfo (){
        return { title : this.$page.strapiMeaningOfEtyms.chinese };
    }
}
</script>