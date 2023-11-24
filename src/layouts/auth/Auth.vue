<template>
  <v-app>
    <BackgroundAnimation/>
    <v-main>
      <v-container :fluid="true" class="fill-height">
        <v-row align-content="center">
          <v-spacer/>
          <v-col cols="8" md="4">
            <slot></slot>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import BackgroundAnimation from "@/components/BackgroundAnimation.vue";
</script>

<style scoped>

</style>
