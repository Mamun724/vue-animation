<template>
  <v-card>
    <v-card-title>
      Security
    </v-card-title>
    <v-card-text>
      <v-form @submit.prevent="console.log('form submitted')">
        <v-container :fluid="true">
          <v-row>
            <v-col>
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                placeholder="Old Password"
                variant="outlined"
                label="Old Password"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="togglePasswordVisibility"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                placeholder="New Password"
                variant="outlined"
                label="New Password"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="togglePasswordVisibility"/>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col class="text-center">
              <v-btn type="submit" variant="elevated">Update Password</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {ref} from "vue";

const showPassword = ref(false);

const togglePasswordVisibility = () => showPassword.value = !showPassword.value;
</script>
