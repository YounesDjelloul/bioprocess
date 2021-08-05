<template>
  <div class='container'>
    <div class='sub-container'>
      <Header> </Header>
      <div>
        <h3>LOREM IPSUM DOLOR SIT CONSECTETUR</h3>
        <h1>Medical Testing</h1>
        <button><router-link to="/demande">DEMANDE MAINTENANT</router-link><i class></i></button>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from "@/components/Home Compos/Header.vue";

  export default {
    name: "FirstSection",

    components: {
      Header,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
  * {

    margin: 0;
    padding: 0;
  }
</style>

<style scoped lang="scss">
  .container {

    width: 100%;
    height: 630px;
    background-image: url('C:/Users/TS/Desktop/chemical-project/chemical-project-frontend/src/assets/first-section-background.jpg');
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    background-size: cover;
    background-position: center center;
    position: relative;

    .sub-container {

      height: 100%;
      width: 100%;
      background-image: linear-gradient(to right, #581845bf, #1e81d07a);
      position: absolute;
      top: 0;
      left: 0;

      > div:last-child {

        margin-top: 200px;
        color: white;
        font-family: -webkit-pictograph;

        h1 {
          font-size: 69px;
        }

        h3 {
          font-size: 21px;
        }

        button {

          border: 2px solid #e0dbe4;
          background-color: transparent;
          border-radius: 30px;
          width: 350px;
          height: 50px;
          font-size: 18px;
          margin-top: 30px;
          cursor: pointer;
          color: #FFF;

          a {

            text-decoration: none;
            color: #FFF;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 680px) {

    .sub-container {
      div:last-child {
        h1 {
          font-size: 51px !important;
        }

        h3 {
          font-size: 16px !important;
        }
      }

      > div:last-child button {

        width: 322px !important;
      }
    }
  }
</style>
