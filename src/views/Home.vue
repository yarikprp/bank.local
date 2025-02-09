<template>
  <AppPage title="Список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
  </AppPage>
  <RequestTable :requests="requests"></RequestTable>

  <teleport to="body">
    <AppModal v-if="modal" title="Создать заявку" @close="modal = false">
      <RequestModal @created="modal = false"></RequestModal>
    </AppModal>
  </teleport>
</template>

<script>
  import { computed, ref } from "vue";
  import AppPage from "../components/ui/AppPage.vue";
  import RequestTable from "../request/RequestTable.vue";
  import AppModal from "@/components/ui/AppModal.vue";
  import RequestModal from "@/request/RequestModal.vue";
  import { useStore } from "vuex";

  export default {
    name: "HomeView",
    setup() {
      const store = useStore();

      const modal = ref(false);

      const requests = computed(() => store.getters['request/requests']);

      return {
        modal, requests
      };
    },
    components: { AppPage, RequestTable, AppModal, RequestModal },
  };
</script>

