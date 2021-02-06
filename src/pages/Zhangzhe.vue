<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
      <br/>
      <a href="https://zh.wikipedia.org/wiki/%E6%B1%9F%E6%B3%BD%E6%B0%91">我们的长者</a>
      <img src="https://p1.ssl.qhimg.com/dmsmty/1080_1503_/t01225fbd06cbeed7d3.jpg"/>
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  
  metaInfo: {
    title: 'My Website'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
