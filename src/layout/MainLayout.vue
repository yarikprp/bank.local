<template>
  <TheNavBar></TheNavBar>
  <TheSidebar></TheSidebar>
  <div class="container with-nav">
    <AppMessage></AppMessage>
    <router-view />
  </div>
</template>

<script>
  import AppMessage from "@/components/ui/AppMessage.vue";
  import TheNavBar from "../components/TheNavBar.vue";
import TheSidebar from "@/components/TheSidebar.vue";
  

  export default {
    components: { TheNavBar, AppMessage, TheSidebar },
  };
</script>
