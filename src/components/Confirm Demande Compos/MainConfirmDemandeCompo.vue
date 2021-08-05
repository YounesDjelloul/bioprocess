<template>
  <div>
    <PDFContentCompo @MakeInSecond='MakeInSecond' v-if='InFirst' :name='AllInfo.fullname' :product='AllInfo.product' :reference='AllInfo.reference' :quantity='AllInfo.quantity' :email='AllInfo.email' :address='AllInfo.address' :tel='AllInfo.tel' :portable='AllInfo.portable' :price='AllInfo.price'></PDFContentCompo>
    <SecondConfirmDemandeCompo @Upload='Upload' v-if='InSecond'></SecondConfirmDemandeCompo>
  </div>
</template>

<script>
  import SecondConfirmDemandeCompo from "@/components/Confirm Demande Compos/SecondConfirmDemandeCompo.vue";
  import PDFContentCompo from "@/components/Confirm Demande Compos/PDFContentCompo.vue";
  import axios from "axios";
  import JSON from "JSON";

  export default {

    name: 'MainConfirmDemandeCompo',

    data() {

      return {

        AllInfo: null,
        InFirst: true,
        InSecond: false,
      }
    },

    components: {

      PDFContentCompo,
      SecondConfirmDemandeCompo
    },

    created() {

      this.AllInfo = JSON.parse(localStorage.getItem('AllInfo'));
    },

    methods: {

      Upload(variable) {

        let formData = new FormData();
        formData.append('file', variable);
        formData.append('email', this.AllInfo.email);

        axios
          .post('https://younes16.pythonanywhere.com/demandes/confirm/',
          formData,
          {headers: {'Content-Type': 'multipart/form-data'}})
          .finally(() => { this.$router.push('/') })
      },

      MakeInSecond() {

        this.InFirst  = false,
        this.InSecond = true;
      },
    },
  }
</script>
