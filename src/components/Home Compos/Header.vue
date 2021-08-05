<template>
  <div class="header">
    <button @click="showsidebar = true"><i class="fas fa-bars"></i></button>
    <div class="logo">
      <span>BIO</span>
      <span><img src="../../assets/logo.png"></span>
      <span>PROCESS</span>
    </div>
    <ul>
      <router-link tag='li' to="/">ACCUEIL</router-link>
      <li><a href="/chemical-project-frontend/#aboutus" class='aboutus_a'>DE NOUS</a></li>
      <router-link tag='li' to="/Products">PRODUITS</router-link>
      <router-link tag='li' to="/demande">DEMANDER</router-link>
      <li @click="display = !display">CONTACTER<i class="fas fa-angle-down"></i></li>
    </ul>

    <transition name='fade'>
      <div class="contact-list-container" v-if="display" @click='display = false'>
        <div class='contact-list' @click.stop='display = true'>
          <ul>
            <li><span><i class='fab fa-facebook'></i>FACEBOOK</span><span style='display: none;'>...</span></li>
            <li><span><i class='fas fa-fax'></i>FAX</span><span style='display: none;'>...</span></li>
            <li><span><i class="fas fa-envelope-open-text"></i>EMAIL</span><span style='display: none;'>...</span></li>
            <li><span><i class="fas fa-phone-alt"></i>TELEPHONE</span><span style='display: none;'>...</span></li>
          </ul>
        </div>
      </div>
    </transition>

    <transition name='fade'>
      <div class='sidebar-container' @click="showsidebar = false" v-if='showsidebar'>
        <div class='sidebar' @click.stop="showsidebar = true">
          <div class="logo">
            <span>BIO</span>
            <span><img src="../../assets/logo.png"></span>
            <span>PROCESS</span>
          </div>
          <ul>
            <router-link tag='li' to="/"><a href=''><i class="fas fa-home"></i>ACCUEIL</a></router-link>
            <router-link tag='li' to="#aboutus"><a href=''><i class="fas fa-info-circle"></i>DE NOUS</a></router-link>
            <router-link tag='li' to="/Products"><a href=''><i class="fas fa-th-list"></i>PRODUITS</a></router-link>
            <router-link tag='li' to="/demande"><a href=''><i class="fas fa-paper-plane"></i>DEMANDER</a></router-link>
            <li @click="display = !display"><i class="fas fa-question"></i>CONTACTER<i class="fas fa-caret-down"></i></li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Header",

    data () {
      return {
        display: false,
        showsidebar: false,
      }
    },
  };
</script>

<style lang='scss'>
  .header {

    font-family: -webkit-pictograph;
    font-size: 14px;
    padding-top: 45px;
    position: relative;

    .logo {

      float: left;
      margin-left: 230px;
      margin-top: -10px;

      > span:first-child, > span:last-child {

        font-size: 20px;
        font-family: Calibri;
        font-weight: 600;
        position: relative;
        top: -14px;
      }

      > span img {

        width: 40px;
        height: 40px;
        margin: 0px 2px;
      }
    }

    > ul {

      text-align: right;
      margin-right: 190px;
      font-weight: bold;

      li {

        display: inline-block;
        margin-left: 50px;
        color: #FFF;
        cursor: pointer;
        transition: all .8s;

        svg {

          position: relative;
          top: 3px;
          left: 8px;
          font-size: 18px;
          display: inline;
        }

        .aboutus_a {

          color: inherit !important;
          text-decoration: none !important;
        }
      }

      li:hover {

        color: #211F1F;
      }
    }

    .contact-list-container {

      background-color: #0000009e;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      display: flex;
      align-items: center;

      .contact-list {

        width: 30%;
        margin-left: 35%;
        height: 196px;
        background-color: #FFF;
        border-radius: 10px;

        > ul {

          list-style-type: none;

          li {

            font-size: 17px;
            font-weight: 600;
            height: 49px;
            padding-top: 13px;
            box-sizing: border-box;
            cursor: pointer;
            color: #211F1F;

            span svg {
              margin-right: 10px;
            }
          }

          li:first-child {

            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }

          li:last-child {

            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }

          li:hover {

            background-color: #211F1F;
            color: #1e81d0;

            span:first-child {
              display: none;
            }

            span:nth-child(2) {
              display: block !important;
            }
          }
        }

      }
    }

    .sidebar-container {

      background-color: #00000099;
      width: 100%;
      position: fixed;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 5;

      .sidebar {

        position: fixed;
        top: 0;
        left: 0;
        width: 260px;
        height: 100%;
        background-color: #FFF;
        font-family: -webkit-pictograph;
        padding-top: 23px;
        border-top-right-radius: 6px;
        transition: all 2s;

        .logo {

          margin-bottom: 20px;
          padding: 10px 0px 12px 36px;
          border-bottom: 1px solid #b5b5b5;
          text-align: left;

          > span:first-child, > span:last-child {

            font-size: 20px;
            font-family: Calibri;
            font-weight: 600;
            position: relative;
            top: -14px;
            color: #2c3e50;
          }

          > span img {

            width: 40px;
            height: 40px;
            margin: 0px 2px;
          }
        }

        > ul {

          font-weight: 600;
          margin-top: 40px;
          text-align: left;
          padding-left: 25px;
          list-style-type: none;

          li {

            margin-bottom: 30px;
            font-size: 17px;
            cursor: pointer;
            color: #211F1F;

            svg {

              margin-right: 20px;
            }

            a {

              color: inherit;
              text-decoration: none;
            }
          }

          li:last-child {
            svg:last-child {
              position: relative;
              top: 2px;
              left: 20px;
            }
          }

          li:hover {

            color: #1e81d0 !important;
          }
        }
      }
    }

    .fade-enter-active, .fade-leave-active {
      transition: all .5s ease-in-out;
    }

    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

    > button:first-child {

      display: none;
    }
  }

  @media only screen and (max-width: 820px) {

    .contact-list-container {

      .contact-list {

        width: 80% !important;
        margin-left: 10% !important;
      }
    }
  }

  @media only screen and (min-width: 820px) and (max-width: 1000px) {

    .contact-list-container {

      .contact-list {

        width: 50% !important;
        margin-left: 25% !important;
      }
    }
  }

  @media only screen and (min-width: 1300px) {

    .header .sidebar-container {

      display: none !important;
    }
  }

  @media only screen and (min-width: 1100px) and (max-width: 1300px) {

    .header {

      > .logo {

        margin-left: 100px;
      }

      > ul {
        margin-right: 150px !important;
      }

     > button:first-child, .sidebar-container {
         display: none !important;
     }
    }
  }

  @media only screen and (min-width: 950px) and (max-width: 1100px) {

    .header {

      .logo {

         margin-left: 80px !important;
      }

      > ul {
        float: right;
        margin-right: 80px !important;
      }

      > button:first-child, .sidebar-container {

          display: none !important;
      }
    }
  }

  @media only screen and (min-width: 900px) and (max-width: 950px) {

    .header {

      > ul {
        margin-right: 50px !important;
      }

      .logo {
        margin-left: 50px !important;
      }

      > button:first-child, .sidebar-container {

          display: none !important;
      }
    }
  }

  @media only screen and (max-width: 900px) {

    .header {

      display: flex !important;
      justify-content: center !important;

      > ul {
        display: none;
      }

      .logo {

        margin-left: 0 !important;
        float: none !important;
      }

      > button:first-child {

        border: none;
        background-color: transparent;
        display: inline-block !important;
      }

      > button:first-child svg {

        position: absolute;
        left: 45px;
        font-size: 25px;
        top: 40px;
        cursor: pointer;
      }
    }
  }

</style>
