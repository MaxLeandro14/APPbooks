<template>
  <q-page class="main">
      <p class="abaixo">Busque seu livro abaixo:</p>
      <q-input bg-color="green" v-model="search" filled type="search">
          <template v-slot:append>
            <q-icon name="send" @click="buscar()"></q-icon>
          </template>
        </q-input>

        <div class="row">
            <div class="col-12 st-img" v-for="(item, index) in result" :key="index">
                   <div @click="exbirL(item)" ><div class="box-p">
                    <p v-if="typeof item.volumeInfo.title  !== 'undefined'" class="title-box">{{item.volumeInfo.title}}</p>
                      <img v-if="typeof item.volumeInfo.imageLinks  !== 'undefined'" :src="item.volumeInfo.imageLinks.thumbnail" alt="">
                   </div>
                   </div>     
            </div>
        </div>

<q-dialog v-model="card">
      <q-card class="my-card">
        <q-img :src="liimg" ></q-img>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="arrow_downward"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          ></q-btn>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{liTitle}}
              <p>- {{subtitle}}</p>
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" ></q-rating>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Descrição:
          </div>
          <div class="text-caption text-grey">
            {{lidesc}}
          </div>
        </q-card-section>

        <q-separator ></q-separator>

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="Já tenho" ></q-btn>
          <q-btn v-close-popup flat color="primary" label="Quero ler" ></q-btn>
          <q-btn v-close-popup flat color="primary" round icon="menu_book" ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>



<div class="fundo">


        <q-tabs
          v-model="tab"
          dense
          no-caps
          inline-label
          class="bg-purple text-white shadow-2"
        >
          <q-tab name="mails" icon="check_circle" label="Já li" @click="exibirLivro('Já li')" ></q-tab>
          <q-tab name="alarms" icon="favorite_border" label="Quero" @click="exibirLivro('Quero Ler')" ></q-tab>
          <q-tab name="movies" icon="chrome_reader_mode" label="Tenho" @click="exibirLivro('Tenho')" ></q-tab>
        </q-tabs>
   </div>  


   <q-dialog
        v-model="dialog2"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="text-white">
          <q-bar>
            <q-space ></q-space>

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>
  
          <q-card-section>
            <div class="">
              <div class="text-h6 texte-a">{{livro}}</div>
            </div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
            <div class="texte-c spc">
                 <img src="" alt="">
            </div>
            <p>Sem Livros a mostrar.</p>
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
        search: '',
        result: '',
        dialog2: false,
        maximizedToggle: true,
        tab: '',
        livro: '',
        stars: 3,
        card: false,
        liTitle: '',
        liimg: '',
        lidesc: '',
        subtitle: ''
      }
  },
  methods: {
    buscar: function(){
      var vm = this;
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+ this.search)
      .then(function (response) {
        vm.result = '';
        vm.result = response.data.items;
        
       // console.log(vm.result)
      })
      .finally(function () {
        // always executed
      });
    },
    exibirLivro(e){
      this.livro = e
      console.log(e)
      this.dialog2 = true
    },
    exbirL(item){
       this.liTitle = '',
       this.liimg = '',
       this.lidesc = '',
       this.subtitle = '',

       this.liTitle = item.volumeInfo && item.volumeInfo.title,
       this.liimg = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail,
       this.lidesc = item.volumeInfo && item.volumeInfo.description,
       this.subtitle = item.volumeInfo && item.volumeInfo.subtitle,
      this.card = true
    }
  }
}
</script>
<style lang="stylus">
.main{
  margin-top: 30px;
  padding: 0 8px;
}
.box-p{
  border: 1px solid #a9a0a0;
  border-radius: 9px;
  margin: 18px auto 0 auto;
  padding: 5px;
  min-height: 250px;
  max-width: 230px;
  display: block;
}
.st-img{
  text-align: center;
}
.p-esp{
    margin-right: 15px;
}
.p-esp-b{
    margin-bottom: 10px;
}
.title-box{
  background: #f5f3f3;
  padding: 5px;
  color: #000;
}
.st-img a {
    text-decoration: none;
}
.abaixo{
  margin-top: 30px;
}
.fundo{
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  /* top: 92%;*/
}
.texte-a{
  text-align: center;
  color: #000;
}
</style>
