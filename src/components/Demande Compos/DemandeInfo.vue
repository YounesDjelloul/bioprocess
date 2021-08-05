<template>
  <div class='container'>

    <div>Entrez vos Informations</div>

    <form method='POST'>
      <div>
        <input type='text' v-model='AllInfo.fullname' placeholder="Entrez votre nom complet">
        <div class="error" v-if='ShowFullNameError'>Nom complet doit etre entré</div>
      </div>
      <div>
        <input type='email' v-model='AllInfo.email' placeholder="Entrez votre Email">
        <div class="error" v-if='ShowEmailError'>Email doit etre entré</div>
      </div>
      <div>
        <input type='text' v-model='AllInfo.address' placeholder="Entrez votre Address">
        <div class="error" v-if='ShowAddressError'>Address doit etre entré</div>
      </div>
      <div>
        <input type='text' v-model='AllInfo.tel' placeholder="Entrez votre Tel/Fax">
        <div class="error" v-if='ShowTelError'>Tel/Fax doit etre entré</div>
      </div>
      <div>
        <input type='text' v-model='AllInfo.portable' placeholder="Entrez votre Portable">
        <div class="error" v-if='ShowPortableError'>Portable doit etre entré</div>
      </div>
      <div>
        <input type='text' v-model='AllInfo.quantity' placeholder="Entrez votre Quantité">
        <div class="error" v-if='ShowQuantityError'>Quantité doit etre entré</div>
      </div>

      <div>
        <button @click.prevent='Next'>Suivant</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {

    name: "DemandeInfo",

    data() {
      return {
        AllInfo: {

          fullname: '',
          email: '',
          address: '',
          tel: '',
          portable: '',
          quantity: '',
        },
        ShowFullNameError: false,
        ShowEmailError: false,
        ShowAddressError: false,
        ShowTelError: false,
        ShowPortableError: false,
        ShowQuantityError: false,
      };
    },

    methods: {

      Next() {

        if (this.AllInfo.fullname === '') {

          this.ShowFullNameError = true;
        } else {

          this.ShowFullNameError = false;
        }

        if (this.AllInfo.tel === '') {

          this.ShowTelError = true;
        } else {

          this.ShowTelError = false;
        }

        if (this.AllInfo.email === '') {

          this.ShowEmailError = true;
        } else {

          this.ShowEmailError = false;
        }

        if (this.AllInfo.address === '') {

          this.ShowAddressError = true;
        } else {

          this.ShowAddressError = false;
        }

        if (this.AllInfo.portable === '') {

          this.ShowPortableError = true;
        } else {

          this.ShowPortableError = false;
        }

        if (this.AllInfo.quantity === '') {

          this.ShowQuantityError = true;
        } else {

          this.ShowQuantityError = false;
        }

        if (this.AllInfo.fullname !== '' & this.AllInfo.email !== '' & this.AllInfo.tel !== '' & this.AllInfo.portable !== '' & this.AllInfo.address !== '' & this.AllInfo.quantity !== '') {

          this.$emit('MakeInProduct', this.AllInfo);
        }
      }
    },
  };
</script>

<style lang='scss' scoped>
  .container {

    .error {

      font-family: Calibri;
      color: #cc0000;
      font-weight: 600;
      margin-bottom: 10px;
      margin-top: -13px;
      text-align: left;
      padding-left: 6px;
    }

    > div:first-child {

      font-size: 30px;
      width: 98%;
      text-align: center;
      margin-top: 45px;
      font-weight: 600;
    }

    form {

      margin-left: 5%;
      width: 90%;
      margin-top: 45px;

      > div {

        width: 90%;
        margin-left: 5%;

        input {

          width: 100%;
          box-sizing: border-box;
          padding: 10px 10px 10px 18px;
          border: 1px solid #9e9e9e;
          border-radius: 10px;
          font-size: 19px;
          font-family: Calibri;
          margin-bottom: 20px;
        }

        input:focus {

          outline: none !important;
          border: 1px solid #1e81d0 !important;
          box-shadow: 0 0 5px #1e81d0;
        }

        button {

          margin-top: 30px;
          width: 100%;
          margin-bottom: 20px;
          height: 42px;
          border: 1px solid #1e81d0;
          background-color: #1e81d0;
          border-radius: 10px;
          font-size: 21px;
          font-family: Calibri;
          color: #FFF;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }

  @media only screen and (min-width: 780px) {

    .container {

      > div:first-child {

        width: 100%;
      }

      form {

        width: 70% !important;
        margin-left: 15% !important;
      }
    }
  }

  @media only screen and (min-width: 1200px) {

    .container {

      > div:first-child {

        width: 100%;
      }

      form {

        width: 45% !important;
        margin-left: 27.5% !important;
      }
    }
  }
</style>
