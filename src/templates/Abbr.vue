<template>
    <Layout>
        <v-container>
            <v-row>
                <v-col col="2">
                    <v-sheet min-height=auto rounded="lg">
                        <div class="wordshow">
                            <div id="title"><h1>{{ $page.strapiAbbrs.word }}</h1></div>
                            <div id="originword"><p>{{ $page.strapiAbbrs.origin_word }}</p></div>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </Layout>
</template>

<page-query>
query{
	strapiAbbrs(id:15){
        id
        word
        origin_word
    }
}
</page-query>

<script>
export default {
    metaInfo (){
        return { title : this.$page.strapiAbbrs.word };
    }
}
</script>

<style scoped lang="css">

</style>