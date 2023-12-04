<template>
  <v-list
    :nav="true"
    :lines="false">
    <v-list-item
      v-for="(item, index) in routeData"
      class="pl-4"
      :class="{'bg-primary-darken-2': selectedSideMenu?.link === item.link}"
      @click="itemClick(item)"
      :key="index">
      {{ item.text }}
      <template v-slot:prepend>
        <v-icon>{{ item.icon }}</v-icon>
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {effect, ref} from "vue";

const router = useRouter();
const route = useRoute();

const props = defineProps(["routeData"]);

const itemClick = (item) => {
  router.push({path: item.link});
}

const selectedSideMenu = ref(null);

effect(() => {
  selectedSideMenu.value = props.routeData.find(item => item.link === route.path);
});
</script>

<style scoped>

</style>
