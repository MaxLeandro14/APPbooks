<template>
  <q-page class="main">
    <p class="texte-c">Destaques</p>
        <p class="t-liv l-a">{{b1}}</p>

    <div class="slider">
      <span @click="scrollEsquerda(intervalo1,'scroller')" class="handle handlePrev active">
         <q-icon name="navigate_before" />
      </span>

      <div id="scroller" class="row">
        <div class="row__inner">

          <div class="gui-card"  v-for="(item, index) in result" :key="index">
            <div class="gui-card__media" @click="enviarLivro(item)">
              <img class="gui-card__img" :src="item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail" alt=""  />
            </div>
           
          </div>

         </div>

      </div>
      <span  @click="scrollDireita(intervalo1,'scroller')"  class="handle handleNext active">
        <q-icon name="navigate_next" />
      </span>
    </div>

        <p class="t-liv l-b">{{b2}}</p>
  

    <div class="slider">
      <span @click="scrollEsquerda(intervalo2, 'scroller2')" class="handle handlePrev active">
         <q-icon name="navigate_before" />
      </span>

      <div id="scroller2" class="row">
        <div class="row__inner">

          <div class="gui-card"  v-for="(item, index) in result2" :key="index">
            
            <div class="gui-card__media" @click="enviarLivro(item)">
              <img class="gui-card__img" :src="item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail" alt=""  />
            </div>
        
          </div>

         </div>

      </div>
      <span  @click="scrollDireita(intervalo2, 'scroller2')"  class="handle handleNext active">
        <q-icon name="navigate_next" />
      </span>
    </div>



        <p class="t-liv l-c">{{b3}}</p>


 <div class="slider">
      <span @click="scrollEsquerda(intervalo3, 'scroller3')" class="handle handlePrev active">
         <q-icon name="navigate_before" />
      </span>

      <div id="scroller3" class="row">
        <div class="row__inner">

          <div class="gui-card"  v-for="(item, index) in result3" :key="index">
            <div class="gui-card__media" @click="enviarLivro(item)">
              <img class="gui-card__img" :src="item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail" alt=""  />
            </div>
           
          </div>

         </div>

      </div>
      <span  @click="scrollDireita(intervalo3, 'scroller3')"  class="handle handleNext active">
        <q-icon name="navigate_next" />
      </span>
    </div>
        
        <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-space ></q-space>

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
  
          <q-card-section>
            <div class="">
              <div class="text-h6 texte-c">{{livroTitle}}
              <p>{{subtitle}}</p>
              </div>
            </div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
            <div class="texte-c spc">
                 <img :src="livroImg" alt="">
            </div>
            <p>Quantidade de pagina: {{livroPage}}</p>
            <p>Editora: {{livroEdito}}</p>
            <p>{{livroDetalhes}}</p>
          </q-card-section>
        </q-card>
      </q-dialog>



   </q-page>
</template>
<script>
import axios from 'axios'
export default {
  name: 'PageIndex',
  data(){
      return {
        result: '',
        result2: '',
        result3: '',
        intervalo1: null,
        intervalo2: null,
        intervalo3: null,
        b1: '',
        b2:'',
        b3:'',
        dialog: false,
        maximizedToggle: true,
        livroImg:'',
        livroTitle: '',
        livroDetalhes: '',
        livroPage: '',
        livroEdito: '',
        subtitle: ''
      }
  },
  computed:{
  },
  mounted(){
    this.buscar()
    this.buscar2()
    this.buscar3()
  },
  methods: {
    buscar: function(){
      var vm = this
      var myArray = ['Kotlin', 'Java', 'PHP','Flutter'];
      vm.b1 = myArray[Math.floor(Math.random() * myArray.length)]

      axios.get('https://www.googleapis.com/books/v1/volumes?q='+ vm.b1)
      .then(function (response) {
        vm.result = response.data.items;
      
      })
    },
    buscar2: function(){
      var vm = this
      var myArray = ['Laravel', 'Django', 'Zend','Wordpress'];
      vm.b2 = myArray[Math.floor(Math.random() * myArray.length)]
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+ vm.b2)
      .then(function (response) {
        vm.result2 = response.data.items;
      
      })
    },
    buscar3: function(){
      var vm = this
      var myArray = ['Vuejs', 'React', 'C#','Android'];
      vm.b3 = myArray[Math.floor(Math.random() * myArray.length)]
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+ vm.b3)
      .then(function (response) {
        vm.result3 = response.data.items;
      
      })
    },
    scrollDireita(e, s){
      this.e =  document.getElementById(s).scrollLeft += 14;
    },
    scrollEsquerda(e,s){
      this.e = document.getElementById(s).scrollLeft -= 14;
    },
    enviarLivro(e){
      this.livroImg ='',
      this.livroTitle = '',
      this.livroDetalhes = '',
      this.livroPage ='',
      this.livroEdito ='',
      this.subtitle = ''
      
      this.livroImg = e.volumeInfo.imageLinks && e.volumeInfo.imageLinks.thumbnail
      this.livroTitle = e.volumeInfo && e.volumeInfo.title,
      this.livroDetalhes = e.volumeInfo && e.volumeInfo.description,
      this.livroPage = e.volumeInfo && e.volumeInfo.pageCount,
      this.livroEdito = e.volumeInfo && e.volumeInfo.publisher,
      this.subtitle = e.volumeInfo && e.volumeInfo.subtitle,
      this.dialog = true
    }
  }
}
</script>
<style lang="stylus">
.main{
  margin-top: 30px;
  padding: 0 8px;
}
.t-liv{
  padding: 5px 13px;
}
.l-a{
  background: #088a0c;
}
.l-b{
  background: #a9781f;
}
.l-c{
  background: #409c83;
}
.texte-c{
  text-align: center;
}
.spc{
  margin-bottom: 15px;
}
.texte-c p{
  font-size: 16px;
  color: #fff;
}

body,
html {
  padding: 0 10px;
  margin: 0;
  background: #0e0f11;
  color: #ecf0f1;
  font-family: 'Open Sans', sans-serif;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
}
* {
  box-sizing: border-box;
}

.slider h1,
.slider p {
  text-align: center;
}
.slider p {
  width: 100%;
  max-width: 500px;
  margin: auto;
}


.slider {
    height: 214px;
    position: relative;
    margin: 0;
    padding: 0 4%;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
}

.slider h3{
  position: absolute;
  top: 22px;
  z-index: 30;
}

.slider .handle.handlePrev {
    left: 11px;

}

.slider .handle.handleNext {
    right: 11px;

}

.slider .handle.active {
    cursor: pointer;
}

.slider .handle {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 75px;
    height: 37px;
    bottom: 0;
    z-index: 20;
    width: 10%;
    text-align: center;
    justify-content: center;
    display: flex;
    color: #fff;
    padding: 12px 0 0 0;
}

.fa{
  font-size: 46px;
  margin-top: 120px;
}

.slider .row {
  overflow: hidden;
}
.slider .row__inner {
  -webkit-transition: 450ms -webkit-transform;
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  padding-bottom: 10px;
}


.slider .gui-card {
  position: relative;
  display: inline-block;
  width: 139px;
  height: 140.625px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: 450ms all;
  transition: 450ms all;
  -webkit-transform-origin: center left;
          transform-origin: center left;
}
.slider .gui-card__img {
  -o-object-fit: cover;
     object-fit: cover;
}
.gui-card__details:after,
.gui-card__details:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: #000;
}
.gui-card__details:after {
  margin-top: -25px;
  margin-left: -25px;
  width: 50px;
  height: 50px;
  border: 3px solid #ecf0f1;
  line-height: 50px;
  text-align: center;
  border-radius: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1;
}
.gui-card__details:before {
  content: '▶';
  left: 0;
  width: 100%;
  font-size: 30px;
  margin-left: 7px;
  margin-top: -13px;
  text-align: center;
  z-index: 2;
}
.gui-card:hover .gui-card__details {
  opacity: 1;
}
.gui-card__title {
  position: absolute;
  bottom: 0;
  padding: 10px;
}

</style>
