<template>
  <div class='container'>
    <div class="header-container">
      <Header> </Header>
    </div>
    <DemandeInfo v-if='InInfo === true' @MakeInProduct='MakeInProduct'></DemandeInfo>
    <DemandeProduct v-if='InProduct === true' @SendDemande='SendDemande'></DemandeProduct>
  </div>
</template>

<script>

  import Header from "@/components/Home Compos/Header.vue";
  import DemandeInfo from "@/components/Demande Compos/DemandeInfo.vue";
  import DemandeProduct from "@/components/Demande Compos/DemandeProduct.vue";
  import axios from "axios";

  export default {
    name: "DemandeCompo",

    data() {
      return {
        Info: '',
        Product: '',
        InInfo: true,
        InProduct: false,
        AllInfo: null,
      };
    },

    methods: {
      MakeInProduct(variable) {

        this.InInfo    = false;
        this.InProduct = true;
        this.Info      = 'done';
        this.AllInfo   = variable;
      },

      SendDemande(variable){

        var AllInfo = this.AllInfo

        AllInfo['product'] = variable;

        axios
          .post('https://younes16.pythonanywhere.com/demandes/create/', AllInfo)
          .finally(() => { this.$router.push('/') })
      },
    },

    components: {
      Header,
      DemandeInfo,
      DemandeProduct,
    },
  };
</script>

<style lang='scss' scoped>
  .container {
    width: 100%;

    .header-container {

      width: 100%;
      background-image: linear-gradient(to right, #581845bf, #1e81d07a);
      height: 70px;

      .header {
        padding-top: 26px !important;

        > button:first-child svg {
          top: 26px !important;
        }
      }
    }
  }
</style>
