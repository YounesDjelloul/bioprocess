<template>
  <div>
    <FirstSection> </FirstSection>
    <AboutUs> </AboutUs>
    <Footer> </Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstSection from "@/components/Home Compos/FirstSection.vue";
import AboutUs from "@/components/Home Compos/AboutUs.vue";
import Footer from "@/components/Home Compos/Footer.vue";

export default {
  name: "Home",
  components: {
    FirstSection,
    AboutUs,
    Footer,
  },
};
</script>
