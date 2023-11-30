<template>
  <div class="pa-4">
    <h1>Profile</h1>
    <v-container :fluid="true">
      <v-row class="flex-column-reverse flex-sm-row">
        <v-col class="v-col-md-8 d-flex flex-column">
          <PersonalInformation/>
        </v-col>
        <v-col class="v-col-md-4 d-flex flex-column">
          <ProfilePicture/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
              <PasswordChange/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <UserPreferences/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <SubscriptionInformation/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import PasswordChange from "@/components/PasswordChange.vue";
import SubscriptionInformation from "@/components/SubscriptionInformation.vue";
import PersonalInformation from "@/components/PersonalInformation.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import UserPreferences from "@/components/UserPreferences.vue";
</script>

