<template>
  <div class='container'>
    <div class='header-container'>
      <Header> </Header>
    </div>
    <div class='table-search-container'>
      <input type='search' placeholder="Rechercher avec Référence ou le nom de produit" v-model='filter_keyword'>
      <table v-if='loading===false'>
        <tr>
          <th>Référence</th>
          <th>Produit</th>
        </tr>
        <tr v-if='products.length===0'>
          <td>Rien ne correspondait</td>
          <td>Rien ne correspondait</td>
        </tr>
        <tr v-else v-for='product in products' :key='product.id'>
          <td>{{ product.reference }}</td>
          <td>{{ product.name }}</td>
        </tr>
      </table>
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

  import Header from "@/components/Home Compos/Header.vue";

  export default {
    name: "ProductsCompo",

    data() {
      return {
        products: null,
        total_pages: 0,
        page_num: null,
        filter_keyword: '',
        loading: true,
        InFilter: false,
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

    components: {
      Header,
    }
  };
</script>

<style lang="scss">
  .container {

    .header-container {

      height: 70px;
      background-image: linear-gradient(to right, #581845bf, #1e81d07a);

      .header {
        padding-top: 26px;

        button svg {

          top: 22px;
        }
      }
    }

    .table-search-container {

      width: 100%;
      padding: 40px 10px 10px;
      box-sizing: border-box;

      > input:first-child {

        width: 100%;
        margin-bottom: 50px;
        height: 44px;
        border-radius: 10px;
        border: 1px solid #9e9e9e;
        padding: 5px 5px 5px 13px;
        font-size: 17px;
        font-family: Calibri;
      }

      > input:focus {

        outline: none !important;
        border: 1px solid #1e81d0 !important;
        box-shadow: 0 0 5px #1e81d0;
      }

      table {

        width: 100%;

        tr td:nth-child(1) {
          width: 30%;
        }

        th {

          font-size: 19px;
        }
      }

      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 10px;
        text-align: left;
        font-family: Calibri;
      }

      .loading {

        font-size: 30px;
      }

      .paginator {

        width: 100%;
        margin: 30px 0 20px;

        div {

          display: inline-block;
          position: relative;

          span {
            background-color: #2c3e50;
            color: #FFF;
            font-size: 17px;
            padding: 6px 0 0 1px;
            border-radius: 50%;
            margin-left: 11px;
            width: 35px;
            height: 35px;
            display: inline-block;
            text-align: center;
            box-sizing: border-box;
            font-weight: 600;
            font-family: Calibri;
          }

          div {
            width: 35px;
            height: 35px;
            background-color: #000;
            border-radius: 50%;
            position: absolute;
            left: 25px;
          }
        }

        span {

          cursor: pointer;
        }

        div:first-of-type span {

          margin-left: 24px;
        }

        > span:last-child, > span:first-child {

          background-color: transparent;
          color: #2c3e50;
          margin-left: 24px;
          font-size: 32px;
          position: relative;
          top: 7px;
        }
      }
    }
  }

  @media only screen and (min-width: 1000px) {

    .table-search-container {

      padding: 40px 17% 10px !important;
    }
  }
</style>
