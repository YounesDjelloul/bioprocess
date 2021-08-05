<template>
  <div class='container'>
    <div class='header-container'>
      <Header></Header>
    </div>
    <div ref='container' class='pdf-content-container' style="width: fit-content;">
      <div class='pdf-header'>
        <div class="logo">
          <span>BIO</span>
          <span><img src="../../assets/logo.png"></span>
          <span>PROCESS</span>
        </div>
        <span>Réactif, Produits Chimiques, Verrerie, Matériels et Consomable de Laboratoire</span>
        <div>
          <span>Adresse: Segmet Douera alger</span>
          <span>Email: bioprocess2018@gmail.com</span>
          <span>Tel: 0699210877/0699210877</span>
        </div>
        <div>
          <span><i>RC</i> A4955965987 <i>16/00</i></span>
          <span><i>NIF</i> 054848456484515</span>
        </div>
      </div>

      <span class='date'>16/01/2004</span>

      <div class='client-info'>
        <span>CLIENT: {{name}}</span>
        <span>Addresse: {{address}}</span>
        <span>Tel/Fax: {{tel}}</span>
        <span>Portable: {{portable}}</span>
      </div>
      <div class="facture-number">
        <span>FACTURE PROFORMA</span>
        <span>N 005/2020</span>
      </div>
      <div class="table">
        <table>
          <tr>
            <th>Référence</th>
            <th>Designation</th>
            <th>Unite</th>
            <th style="padding: 5px 40px;">Prix Ht</th>
            <th>Total Ht</th>
          </tr>
          <tr>
            <td>{{reference}}</td>
            <td>{{product}}</td>
            <td>{{quantity}}</td>
            <td>{{price}}</td>
            <td>{{price}}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>Total HT</th>
            <td>{{price}}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>TVA 19%</th>
            <td>{{tvaValue}}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>TTC</th>
            <td>{{finalPrice}}</td>
          </tr>
        </table>
      </div>
      <div>
        <span>Arrêtée la présente proforma à la somme de :</span>
        <span>Vingt-Trois Mille Cinq Cent Soixante-Deux Dinars .</span>
      </div>
    </div>
    <div>
      <button @click='MakeInSecond()'>Download ..</button>
    </div>
  </div>
</template>

<script>

  import jsPDF from 'jspdf';
  import domtoimage from "dom-to-image";
  import Header from "@/components/Home Compos/Header.vue";

  export default {

    name: "PDFContentCompo",
    props: ['name', 'product', 'reference', 'quantity', 'email', 'address', 'tel', 'portable', 'price'],

    data() {
      return {

        tvaValue: '',
        finalPrice: ''
      }
    },

    created() {

      var tvaValue    = 0.19 * this.price;
      this.tvaValue   = tvaValue;

      this.finalPrice = Number(this.price) + Number(this.tvaValue);
    },

    components: {

      Header
    },

    methods: {

      MakeInSecond() {

        var doc = new jsPDF('px', 'mm');
        var el  = this.$refs.container;

        domtoimage
          .toPng(el)
          .then(function (dataURL) {

            var img = new Image();
            img.src = dataURL;

            img.onload = function () {

              doc.addImage(img, "png", 0, 0);
              doc.save()
            }
          })
          .finally(() => (this.$emit("MakeInSecond")))
      },
    },
  }
</script>

<style lang='scss' scoped>
  .container {

    color: #000;
    font-family: auto;
    height: fit-content;

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

    .pdf-content-container {
      > .pdf-header {

        font-family: auto;
        position: relative;
        top: 100px;
        left: 125px;

        .logo {

          width: unset;
          display: flex;
          margin-left: 88px;

          > span:first-child, > span:last-child {

            font-size: 20px;
            font-family: Calibri;
            font-weight: 600;
            position: relative;
            top: 7px;
            display: inline;
            width: unset;
            color: #2c3e50;
          }

          > span img {

            width: 40px;
            height: 40px;
            margin: 0px 2px;
            display: inline;
          }
        }

        span {

          display: block;
          font-size: 18px;
          font-weight: bold;
        }

        > span:first-of-type, > div {

          margin-bottom: 20px;
        }

        div, span:first-of-type {

          width: 350px;
        }

        > div:last-of-type {

          span {

            i:first-child {
              margin-right: 15px;
            }
          }

          span:first-child {

            i:last-child {

              margin-left: 15px;
            }
          }
        }
      }

      > .date {

        position: relative;
        left: 385px;
        top: 80px;
      }

      > .client-info {

        position: relative;
        left: 408px;
        top: 100px;
        padding: 29px 15px;
        border: 3px solid orange;
        border-radius: 40px;
        width: 330px;
        text-align: left;
        font-weight: bold;

        > span:first-child {

          color: red;
          font-size: 18px;
          margin-bottom: 30px !important;
        }

        > span {

          display: block;
          margin-bottom: 8px;
          font-size: 15px;
        }
      }

      .facture-number {

        border: 3px solid orange;
        border-radius: 15px;
        padding: 17px;
        width: 260px;
        position: relative;
        top: 150px;
        left: 250px;

        > span {

          display: block;
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 7px;
        }
      }

      .table {

        position: relative;
        top: 190px;
        left: 80px;
        font-size: 15px;
        width: fit-content;

        table:first-child {

          border-collapse: collapse;
          empty-cells: hide;

          th, td {

            border: 1px solid black;
            border-collapse: collapse;
            padding: 5px 18px;
          }

          tr td:empty {

            border: none;
            background-color: transparent;
          }
        }
      }

      > div:last-child {

        font-weight: 600;
        font-size: 15px;
        position: relative;
        top: 250px;
        right: 0px;

        > span {

          display: block;
        }

        span:first-child {

          text-decoration-line: underline;
          font-weight: normal;
        }

        span:last-child {

          font-weight: 600;
        }
      }
    }

    > div:last-child {

      position: relative;
      top: 315px;

      button {

        width: 90%;
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
  }

  @media only screen and (min-width: 780px) {

    .container {

      > div:last-child {

        button {

          width: 50% !important;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {

    .container {

      > div:last-child {

        button {

          width: 30% !important;
        }
      }
    }
  }
</style>
