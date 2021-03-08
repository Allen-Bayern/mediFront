<template>
    <Layout>
        <v-container>
            <v-row>
                <v-col col="2">
                    <v-sheet
                        min-height=auto
                        rounded="lg"
                    >
                        <h1 class="font-weight-black">{{ $page.strapiEtyms.word }}</h1>
                        <div>类型： {{ $page.strapiEtyms.type_chn }}</div>
                        <div>意义： {{ $page.strapiEtyms.meaning_of_etyms.chinese }}</div>
                        <div v-if="isNotNull($page.strapiEtyms.variation)">变形：{{ $page.strapiEtyms.variation }}</div>
                        <div v-if="isNotNull($page.strapiEtyms.medi_word)">在该词根词缀下的单词有：</div>
                            <ul v-for="(word, index) in $page.strapiEtyms.medi_word" :key="index">
                                <li><g-link :to="'/words/'+word.id">{{ word.word }}</g-link>意思：{{ word.meanings.chinese }}</li>
                            </ul>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </Layout>
</template>

<page-query>
query($id : ID!){
    strapiEtyms(id:$id){
        id
        word
        meaning_of_etyms{
            chinese
        }
        variation
        type
        type_chn
        medi_word{
            id
            word
            meanings{
                chinese
            }
        }
    }
}
</page-query>

<script>
export default{
    metaInfo (){
        return { title : this.$page.strapiEtyms.word }
    },
    computed: {
        isNotNull(){ 
            return function (txt){
                if (txt != null){
                    return txt;
                }
            }
        }
    }
}
</script>