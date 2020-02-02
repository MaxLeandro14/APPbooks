<template>
<q-page class="main livro">
  <div class="livro testee">
        <p>Cadastre-se</p>
        <div class="cent-text m-baixo m-cima">
            <img src="~assets/ebook.png" alt="">
        </div>
        <div class="row">
             <p>*Senha deve ter 6 caracteres.</p>
        </div>

        <div class="row">
             <input class="input-st" v-model="email" type="email" placeholder="Email">
        </div>
       <div class="row">
          <input class="input-st" width="100%" v-model="senha" type="password" placeholder="Senha" >
        </div>
        <div class="cent-text">
            <q-btn color="secondary" @click="cadastrar()" glossy label="Cadastrar" ></q-btn>
        </div>
                
   </div>
        <div class="loginn">
            <router-link :to="{ name: 'login'}" >Já tenho login</router-link>
        </div>
     <q-dialog
      v-model="alert"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6"></div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Cadastro feito com sucesso!
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
       senha: '',
      
      }
  },
  computed: {
    tabindex () {
      return this.disable === true || this.readonly === true ? -1 : 0
    }
  },
  methods: {
    cadastrar: async function(){
      var vm = this;
      if(vm.email != '' && vm.senha != ''){
          await this.$auth.createUserWithEmailAndPassword(vm.email, vm.senha)
          .then(() => {
                    vm.alert = true
                    vm.email = ''
                    vm.senha = ''
                    
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
      }

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
.loginn a{
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