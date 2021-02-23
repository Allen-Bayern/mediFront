Layout components are used to wrap pages and templates. Layouts should contain components like headers, footers or sidebars that will be used across the site.

Learn more about Layouts: https://gridsome.org/docs/layouts/

You can delete this file.

```html
<!---替换其中的<slot部分>即可--->
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list 
              color="transparent"
              dark=true
              style="position:fixed"
              >
                <v-list-item
                    v-for="n in 5"
                    :key="n"
                    link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      <a href="#">
                      List Item {{ n }}
                      </a>
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
                      Refresh
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
              <slot/>
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
        
      </v-container>
      
    </v-main>

```


```HTML
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

```