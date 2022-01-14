<!--
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-04-22 14:26:50
 * @LastEditors: chenchuhua
 * @LastEditTime: 2021-08-18 14:58:05
-->
# mycherry

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# create a new vue project
    vue init webpack demo
# run the project demo
    cd demo
    npm run dev
# install some necessary dependencies
    
# install element
    cnpm i element-ui -S
    import ElementUI from 'element-ui'; ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css'; 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);

# install less
    cnpm install less less-loader@5.0.0 --save

    # Wrong：Module build failed: TypeError: this.getOptions is not a function
    # Solution: degrade the less-loader version to 5.0.0
        cnpm uninstall less-loader
        cnpm install less-loader@5.0.0

# install Vuex
    cnpm install vuex --save
    import store from './store/index.js' store from './store/index.js'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    new Vue({store})
    /src/store/index.js

# install background animation
    cnpm install vue-particles --save-dev
    import VueParticles from 'vue-particles'
    Vue.use(VueParticles)

# install axios aplayer
    cnpm install --save axios vue-aplayer
    cnpm install --save hls.js

# Wrong: repeat Router
# Solution: upgrade the vue-router version to 3.0
    cnpm i vue-router@3.0 -S

# install swiper
    cnpm install vue-awesome-swiper@2.6.7 --save

# install Truffle
    npm install -g truffle

# cnpm install swiper swiper@3.4.2 --save-dev






For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
