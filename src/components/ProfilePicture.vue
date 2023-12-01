<template>
  <v-card>
    <v-card-title>Profile Picture</v-card-title>
    <v-card-text>
      <v-img class="w-100 position-relative" :src="profilePictureUrl">
        <v-btn
          variant="text"
          icon
          size="large"
          class="camera-icon rounded-0"
          @click="pickFile">
          <v-icon size="48px">mdi-camera</v-icon>
        </v-btn>
      </v-img>
      <input type="file" ref="filePicker" class="d-none" @change="previewImage"/>
    </v-card-text>
    <v-card-actions class="justify-center" v-if="profilePicturePath !== profilePictureUrl">
      <v-btn variant="elevated" @click="uploadProfilePicture">Upload</v-btn>
      <v-btn variant="outlined" @click="resetProfilePicture">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from "vue";

const filePicker = ref(null);
const profilePicturePath = "/images/flower-2.jpg";
const profilePictureUrl = ref(profilePicturePath);
const pickFile = () => filePicker.value.click();
const previewImage = (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }
  profilePictureUrl.value = URL.createObjectURL(file);
}
const resetProfilePicture = () => {
  profilePictureUrl.value = profilePicturePath;
}
const uploadProfilePicture = () => {
  console.log("TODO upload and update store user.");
}
</script>

<style>
.camera-icon {
  position: absolute !important;
  bottom: 0;
  right: 0;
  background-color: rgb(var(--v-theme-surface)) !important;
}
</style>
