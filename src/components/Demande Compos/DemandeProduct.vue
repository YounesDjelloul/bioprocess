<template>
  <div class="container">
    <div>choisissez un produit</div>
    <div class="note">
      pour demander un produit, il vous suffit de cliquer sur le produit que vous sougaitez et nous prendrons le reste.
    </div>
    <div class='table-search-container'>
      <input type='search' placeholder="Rechercher avec Référence ou le nom de produit" v-model='filter_keyword'>
      <table v-if='loading===false'>
        <tr>
          <th>Référence</th>
          <th>Product</th>
        </tr>
        <tr v-if='products.length===0'>
          <td>Rien ne correspondait</td>
          <td>Rien ne correspondait</td>
        </tr>
        <tr v-else v-for='product in products' :key='product.id'>
          <td>{{ product.reference }}</td>
          <td @click='SelectProduct(product.name)'>{{ product.name }}</td>
        </tr>
      </table>
      <div class='ProductCheckPopUp' v-if='ShowProductCheckPopUp' @click.self='ShowProductCheckPopUp = false'>
        <div>
          <span> voulez vous vraiment demandé {{ SelectedProduct }} ? </span>
          <span>
            <button @click='ShowProductCheckPopUp = false'>Cancel</button>
            <button @click='SendDemande'>Yes</button>
          </span>
        </div>
      </div>
      <div class='loading' v-if='loading===true'>
        <i class='fas fa-spinner'></i>
      </div>
      <div class="paginator" v-if='InFilter===false'>
        <span @click='page_num--' v-show='page_num>1'><i class='fas fa-angle-left'></i></span>
        <div v-for='i in total_pages' :key='i' style='display: inline-block;'>
          <span @click='page_num = i' v-show='i<=2' v-if='page_num === i' style='background-color: #1e81d0;'>{{ i }}</span>
          <span @click='page_num = i' v-show='i<=2' v-else>{{ i }}</span>
        </div>
        <div style="display: inline-block;"><span v-show='total_pages>4'>...</span></div>
        <div style="display: inline-block;" v-if="page_num === total_pages" v-show='total_pages>4'><span @click='page_num = total_pages' style='background-color: #1e81d0;'>{{ total_pages }}</span></div>
        <div style="display: inline-block;" v-else v-show='total_pages>4'><span @click='page_num = total_pages'>{{ total_pages }}</span></div>
        <span @click='page_num++' v-show='page_num<total_pages'><i class='fas fa-angle-right'></i></span>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from "axios";

  export default {

    name: 'DemandeProduct',

    data() {
      return {
        products: null,
        total_pages: 0,
        page_num: null,
        filter_keyword: '',
        loading: true,
        InFilter: false,
        ShowProductCheckPopUp: false,
        SelectedProduct: '',
      }
    },

    created() {
      this.page_num = 1;
    },

    watch: {
      page_num() {

        this.loading = true;

        if ( this.page_num === null ) {

          this.page_num = 1
        }

        var page_num = this.page_num;

        axios
          .get('https://younes16.pythonanywhere.com/products/?page=' + page_num)
          .then(response => {
            (this.products = response.data.results);
            (this.total_pages = response.data.total_pages);
          })
          .finally(() => { this.loading = false })
      },

      filter_keyword() {

        var filter_keyword = this.filter_keyword

        if (filter_keyword !== '') {

          this.loading  = true
          this.InFilter = true

          axios
            .post('https://younes16.pythonanywhere.com/products/filter/', {

              filter_keyword: filter_keyword
            })

            .then(response => {
              this.products = response.data;
            })

            .finally(() => { this.loading = false })

        } else {

          this.page_num = null
          this.InFilter = false
        }
      },
    },

    methods: {

      SelectProduct(name) {
        this.ShowProductCheckPopUp = true;
        this.SelectedProduct       = name;
      },

      SendDemande() {

        this.$emit('SendDemande', this.SelectedProduct);
      },
    },
  }
</script>

<style lang='scss' scoped>
  .container {

    > div:first-child {

      font-size: 30px;
      width: 98%;
      text-align: center;
      margin-top: 45px;
      font-weight: 600;
    }

    table tr td:nth-child(2) {

      cursor: pointer;
    }

    .ProductCheckPopUp {

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

        > span:first-child {

          display: block;
          border-bottom: 1px solid #CCC;
          padding: 25px 15px;
        }

        > span:last-child {

          width: 100%;
          padding: 20px 10px 15px;
          display: flex;
          position: relative;
          box-sizing: border-box;

          button {

            font-size: 19px;
            font-family: Calibri;
            cursor: pointer;
          }

          > button:first-child {

            border: none;
            background-color: transparent;
            color: #CCC;
            position: relative;
            left: 10px;
          }

          > button:last-child {

            position: absolute;
            top: 16px;
            right: 20px;
            background-color: #1e81d0;
            color: #FFF;
            padding: 4px 15px;
            border: none;
            border-radius: 4px;
            width: 80px;
          }
        }
      }
    }

    .note {

      width: 95%;
      margin-left: 2.5%;
      border-left: 4px solid green;
      margin-top: 45px;
      background: #f8f8f8;
      padding: 15px;
      box-sizing: border-box;
      font-size: 19px;
      font-family: Calibri;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  @media only screen and (min-width: 1000px) {

    .note {

      width: 66% !important;
      margin-left: 17% !important;
    }

    .ProductCheckPopUp > div {

      width: 40% !important;
    }
  }
</style>
