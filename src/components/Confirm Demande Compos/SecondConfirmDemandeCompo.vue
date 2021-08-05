<template>
  <div class="container">
    <div class="header-container">
      <Header></Header>
    </div>
    <div class='form'>
      <input type='file' v-on:change='FileInputHandler()' ref='fileInput'>
      <button @click='Upload()'>Upload</button>
    </div>
  </div>
</template>

<script>

  import Header from "@/components/Home Compos/Header.vue";

  export default {

    name: 'SecondConfirmDemandeCompo',

    data() {

      return {

        file: ''
      }
    },

    components: {

      Header
    },

    methods: {

      FileInputHandler() {

        this.file = this.$refs.fileInput.files[0];
      },

      Upload() {

        this.$emit('Upload', this.file);
      },
    },
  }
</script>


<style lang="scss" scoped>

  .container {

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

    > div.form {

      margin-top: 100px;
    }
  }

</style>
