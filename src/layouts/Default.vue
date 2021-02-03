<template>
    <v-app>
      <v-app-bar>
        <v-app-bar-title>Medical Dictionary</v-app-bar-title>
      </v-app-bar>
      <v-main>
        <slot/>
      </v-main>
    </v-app>
</template>


<script>

</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
/* Layout use grid. Documentation: http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html */
</style>