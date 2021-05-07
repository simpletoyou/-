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

# img v-for拿不到图片
    img: require("../assets/banner/banner9.jpg")

# svg 动画

# css 
    border-sizing: border-box; 将边框绘制在指定宽高容器之内
# div内图片下方存在空白像素
    1.display:block
    2.vertical-align:middle
    3.设置小值行高
    4.设置小值font-size

# css规范
body,p,h1,h2,h3,h4,h5,h6{margin:0;}
ul,ol{list-type:none; margin:0; padding:0;}

# Vue全局变量之prototype（原型属性）
    1. 直接定义：Vue.prototype.a=1
    2. import-export引入导出变量
        1). 新建js文件，定义变量及数值后export
        2). 在main.js文件import上述js文件
            import datas from '../src/json/datas'
Vue.prototype.$datas = datas
            则定义了全局变量datas
    3. 在vue文件中，使用this.a或者this.$datas即可

    





For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
