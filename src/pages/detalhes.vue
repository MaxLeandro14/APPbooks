<template>
  <q-page class="main livro">
      <p class="mais-espc central">{{livroInfor.item.volumeInfo.title}}</p>
      <div class="row">
        <div class="esq-infor esp-book">
          <img v-if="typeof livroInfor.item.volumeInfo.imageLinks  !== 'undefined'" :src="livroInfor.item.volumeInfo.imageLinks.thumbnail" alt="">
        </div>
        <div class="dir-infor">
          <div v-if="typeof livroInfor.item.volumeInfo.authors  !== 'undefined'">
              <p v-for="(autor, index) in livroInfor.item.volumeInfo.authors" :key="index">{{autor}}</p>
          </div>
          <div v-if="typeof livroInfor.item.volumeInfo.pageCount  !== 'undefined'">
              <p>Número de pag: {{livroInfor.item.volumeInfo.pageCount}}</p>
          </div>
          <div v-if="typeof livroInfor.item.volumeInfo.publisher !== 'undefined'">
              <p>Publicado: {{livroInfor.item.volumeInfo.publisher}}</p>
          </div>
        </div>
      </div>
      <div class="ff-card">
          <q-btn-group>
            <q-btn color="secondary" glossy label="Já li" ></q-btn>
            <q-btn color="secondary" glossy label="Quero ler" ></q-btn>
            <q-btn color="secondary" glossy label="Dispenso" ></q-btn>
        </q-btn-group>
      </div>
      <div v-if="typeof livroInfor.item.volumeInfo.description  !== 'undefined'">
          <hr>
          <p class="desc">Descrição:</p>
          <p>{{livroInfor.item.volumeInfo.description}}</p>
      </div>
   </q-page>
</template>
<script>
export default {
  name: 'PageDetalhes',
  props:['livroInfor'],
  data(){
      return {
      }
  }
}
</script>
<style lang="stylus">
.livro p{
  margin:0;
  padding: 0;
}
.central{
  display: block;
  text-align: center;
  padding: 5px 0 !important;
}
.mais-espc{
  margin-bottom: 8px  !important;
}
.main{
  margin-top: 30px;
  padding: 0 8px;
}
.esp-book{
  margin: 5px 5px 5px 0;
}
.dir-infor {
  float: right;
}
.desc {
    margin: 10px 0;
}
.ff-card{
  text-align: center;
}
</style>
