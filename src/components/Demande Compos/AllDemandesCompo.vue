<template>
  <div class='container'>
    <div class='header-container'>
      <Header></Header>
    </div>
    <div class='demandes-container'>
      <input type='search' placeholder="Rechercher avec Référence ou le nom de produit" v-model='filter_keyword'>

      <div class='demande' v-for='demande in demandes' :key='demande.id'>
        <div @click='ShowDesc($event)'>Nom Complet: {{demande.fullname}}</div>
        <div class='desc' style='display: none;'>
          <span>date: <i>{{demande.date}}</i></span>
          <span>Produit: <i>{{demande.product}}</i></span>
          <span>Reference: <i>{{demande.reference}}</i></span>
          <span>Email: <i>{{demande.email}}</i></span>
          <span>Quantité: <i>{{demande.quantity}}</i></span>
          <span>Tel/Fax: <i>{{demande.tel}}</i></span>
          <span>Portable: <i>{{demande.portable}}</i></span>
          <span>Addresse: <i>{{demande.address}}</i></span>

          <div class="del-confirm">
            <span><button @click='displayStep2 = true'>Confirmer</button></span>
          </div>
          <div class="del-confirm-step2" v-if='displayStep2' @click='displayStep2 = false'>
            <div @click.stop='displayStep2'>
              <span>veuillez nous donner le prix pour confirmer</span>
              <input type='number' v-model='price' placeholder="Price">
              <button @click='ConfirmDemande(demande)'>Confirmer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from "@/components/Home Compos/Header.vue";
  import axios from "axios";
  import JSON from "JSON";

  export default {
    name: 'AllDemandesCompo',

    data() {
      return {

        filter_keyword: '',
        demandes: null,
        displayStep2: false,
        price: '',
      }
    },

    created() {

      axios
        .get('https://younes16.pythonanywhere.com/demandes/all/')

        .then(response => {
          this.demandes = response.data;
        })
    },

    watch: {

      filter_keyword() {

        var filter_keyword = this.filter_keyword

        axios
          .post('https://younes16.pythonanywhere.com/demandes/filter/', {

            filter_keyword: filter_keyword
          })

          .then(response => {
            this.demandes = response.data;
          })
      },
    },

    methods: {

      ShowDesc(e) {

        if (e.currentTarget.nextElementSibling.style.display === "none") {
          e.currentTarget.style.borderBottom = "1px solid #9e9e9e";
          e.currentTarget.nextElementSibling.style.display = "block";
        } else {
          e.currentTarget.style.borderBottom = "none";
          e.currentTarget.nextElementSibling.style.display = "none";
        };
      },

      ConfirmDemande(demande) {

        demande['price'] = this.price;

        localStorage.setItem('AllInfo', JSON.stringify(demande));
        this.$router.push('/demande/confirm/');
      },
    },

    components: {
      Header,
    },
  }
</script>

<style lang="scss" scoped>
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

    .loading {

      font-size: 30px;
    }

    .demandes-container {

      width: 100%;
      padding: 40px 10px 10px;
      box-sizing: border-box;
      background-color: #fffff6;

      > input:first-child {

        width: 100%;
        margin-bottom: 50px;
        height: 44px;
        border-radius: 5px;
        border: 1px solid #9e9e9e;
        padding: 5px 5px 5px 13px;
        font-size: 17px;
        font-family: Calibri;
        margin-bottom: 50px;
      }

      > input:focus {

        outline: none !important;
        border: 1px solid #1e81d0 !important;
        box-shadow: 0 0 5px #1e81d0;
      }

      .demande {

        width: 100%;
        height: fit-content;
        border: 1px solid #9e9e9e;
        border-radius: 7px;
        box-sizing: border-box;
        background-color: #FFF;
        font-family: Calibri;
        margin-bottom: 35px;

        > div:first-child {

          width: 100%;
          padding: 11px;
          text-align: center;
          font-size: 19px;
          box-sizing: border-box;
          background-color: #f3f3f391;
          border-radius: 7px;
          font-weight: 600;
          cursor: pointer;
        }

        .desc {

          display: none;

          > span {

            display: block;
            font-size: 20px;
            margin: 0 0 20px 30px;
            text-align: left;
            font-weight: 600;

            > i {

              color: #1e81d0;
            }
          }

          > span:first-of-type {

            margin-top: 25px !important;
          }

          .del-confirm {

            width: 90%;
            margin-left: 5%;
            margin-top: 45px;

            span button {

              width: 100%;
              height: 42px;
              border: 1px solid #1e81d0;
              background-color: #1e81d0;
              border-radius: 10px;
              font-size: 21px;
              font-family: Calibri;
              color: #FFF;
              font-weight: 600;
              cursor: pointer;
              margin-bottom: 20px;
            }
          }

          .del-confirm-step2 {

            background-color: #0000009e;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            > div {

              width: 75%;
              font-family: Calibri;
              background-color: #FFF;
              border-radius: 4px;
              font-size: 21px;
              position: relative;
              height: 143px;
              padding-top: 25px;
              box-sizing: border-box;

              > span {

                display: block;
                border-bottom: 1px solid #CCC;
                padding-bottom: 18px;
              }

              > input {

                border-top: none;
                border-right: none;
                border-left: none;
                border-bottom: 2px solid #2c3e50;
                font-size: 17px;
                font-weight: 600;
                color: #2c3e50;
                position: absolute;
                bottom: 16px;
                left: 65px;
                width: 140px;
                height: 20px;
                background-color: transparent;
                padding: 15px 6px 5px;
              }

              > input:focus {

                outline: none;
                border-bottom: 2px solid #1e81d0;
              }

              > button {

                position: absolute;
                bottom: 16px;
                right: 65px;
                background-color: #1e81d0;
                color: #FFF;
                padding: 4px 15px;
                border: none;
                border-radius: 4px;
                font-size: 19px;
                font-family: Calibri;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1000px) {

    .del-confirm-step2 {

      > div {

        width: 40% !important;
      }
    }

    .demandes-container {

      padding: 40px 27% 10px !important;
    }
  }
</style>
