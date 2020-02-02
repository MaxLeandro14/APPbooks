<template>
<q-page class="main livro">
  <div class="livro testee">
      <p>USER: admin@mail.com</p>
      <p>PASS: 123456</p>
        <div class="cent-text m-baixo m-cima">
            <img src="~assets/ebook.png" alt="">
        </div>
        <div class="row">
             <input class="input-st" v-model="email" type="email" placeholder="Email">
        </div>
       <div class="row">
          <input class="input-st" width="100%" v-model="senha" type="password" placeholder="Senha" >
        </div>
        <div class="cent-text">
            <q-btn color="secondary" @click="logar()" glossy label="Acessar" ></q-btn>
        </div>
        <div class="cadd">
          <router-link :to="{ name: 'cadastrase'}">Cadastre-se</router-link>
        </div>
        
   </div>

     <q-dialog
      v-model="alert"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Login não autorizado!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Email ou Senha inváida.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

   </q-page>
</template>
<script>
export default {
  name: 'PageDetalhes',
  props:['livroInfor'],
  data(){
      return {
        text: 'Email',
        text2: 'Senha',
       readonly: false,
       alert: false,
       email: '',
       senha: ''
      }
  },
  computed: {
    tabindex () {
      return this.disable === true || this.readonly === true ? -1 : 0
    }
  },
  methods: {
    logar: async function(){
      var vm = this;
       await this.$auth
                .signInWithEmailAndPassword(vm.email, vm.senha)
                .then(() => {
                    this.$router.push('/logado/logad')
                })
                .catch(err => {
                    vm.alert = true
                })
        }
    }
 
}
</script>
<style lang="stylus">
.main{
  margin-top: 30px;
  padding: 0 8px;
}
.m-baixo{
    margin-bottom: 10px;
}
.m-cima{
    margin-top: 15px;
}
.cent-text{
    text-align: center;
}
.testee p{
    margin: 0;
    padding: 0;
}
.text-h6{
  color: #000;
}
.q-pt-none{
  color: #000;
}
.input-st{
  width: 100%;
  margin: 5px 3px;
  border-radius: 6px;
  padding: 6px 4px;
}
.cadd a{
  padding: 5px;
    margin: 30px auto;
    text-decoration: none;
    color: purple;
    background: #fff;
    display: block;
    text-align: center;
    font-weight: 600;
    width: 84%;
    border-radius: 8px;
    bottom: 5px;
}
</style>
