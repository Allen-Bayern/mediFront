<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <v-form class="main-container">
      <v-container>
        <v-row>

          <v-col cols="12" sm="6">
            <v-text-field
                v-model="message1"
                label="Regular"
                clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
                v-model="message2"
                solo
                label="Solo"
                clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
                v-model="message3"
                filled
                label="Filled"
                clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
                v-model="message4"
                label="Outlined"
                outlined
                clearable
            ></v-text-field>
          </v-col>

        </v-row>
      </v-container>
    </v-form>

  </Layout>
</template>

<script>
export default {
  data () {
    return {
      message1: 'Hey!',
      message2: 'Hey!',
      message3: 'Hey!',
      message4: 'Hey!',
    }
  },
}
</script>

<style>
.main-container{
  margin-right: 1rem;
}
</style>
