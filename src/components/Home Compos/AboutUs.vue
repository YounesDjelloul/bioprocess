<template>
  <div class="container" id='aboutus'>
    <!--<div class="left-image-container">
      <img src='../../assets/2672335.jpg'>
    </div>-->
    <div class="right-text-container">
      <span>Qui sommes-nous ...</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <router-link tag='a' to='/Products'><button>NOS PRODUITS</button><i class="fas fa-angle-right"></i></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs',
  };
</script>

<style lang='scss' scoped>

  .container {

    background-color: #e6e6e6;
    height: 300px;
    padding-top: 55px;

    .left-image-container {
      display: none;
    }

    .right-text-container {

      font-family: Calibri;
      padding: 0 35px 0;
      position: relative;

      > span {

        font-size: 34px;
        border-top: 2px solid #1e81d0;
        border-top-left-radius: 2.5px;
        border-top-right-radius: 2.5px;
        padding: 10px 9px 0px;
        color: #211F1F;
      }

      > p {

        font-size: 19px;
        color: #4e4e4e;
        margin-top: 35px;
        text-align: left;
      }

      > a {

        background-color: #1e81d0;
        border-radius: 40px;
        border: 1px solid #1e81d0;
        padding: 13px;
        width: 170px;
        margin-top: 30px;
        position: absolute;
        left: 32px;
        font-family: Calibri;
        text-decoration: none;
        cursor: pointer;

        > button {

          color: #FFF;
          border: none;
          background-color: transparent;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        > svg {

          position: relative;
          top: 2.3px;
          left: 15px;
          color: #FFF;
          font-size: 17px;
        }
      }
    }
  }

  @media only screen and (min-width: 900px) {

    .right-text-container {

      width: 60%;
      margin-left: 20%;

      > span {

        padding-left: 0 !important;
      }

      > p {

        margin-top: 50px !important;
      }
    }
  }

  @media only screen and (max-width: 680px) {

    .container {

      padding: 82px 0 45px !important;
    }
  }

</style>
