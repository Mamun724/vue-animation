<template>
  <v-container :fluid="true">
    <v-row class="flex-column-reverse flex-sm-row">
      <v-col class="v-col-md-8 d-flex flex-column">
        <v-card class="flex-grow-1">
          <PersonalInformation/>
          <UserPreferences/>
        </v-card>
      </v-col>
      <v-col class="v-col-md-4">
        <ProfilePicture/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ProfilePicture from "@/components/ProfilePicture.vue";
import PersonalInformation from "@/components/PersonalInformation.vue";
import UserPreferences from "@/components/UserPreferences.vue";
</script>
