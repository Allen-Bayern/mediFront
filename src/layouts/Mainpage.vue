<template>
    <v-app id="inspire">
            
        <v-app-bar
            app
            color="white"
            flat
        >
        <v-container class="py-0 fill-height">
            <v-avatar
                class="mr-10"
                color="grey darken-1"
                size="32"
            ></v-avatar>

            <v-btn
                v-for="link in links"
                :key="link"
                text
            >
            {{ link }}
            </v-btn>
        </v-container>
        </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row
                    align='center'
                >
                    <v-col>
                        <v-sheet
                            color='white'
                            min-height='auto'
                            rounded="lg"
                        >
                            <slot/>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
        '交大岁月',
        '益民任职',
        '二院生涯',
        '临危受命',
        '军队不得经商',
        '谈笑风生',
        '怒斥港记',
        '二院情深'
    ],
  }),
}
</script>