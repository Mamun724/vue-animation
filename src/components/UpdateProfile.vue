<template>
  <v-card width="400px" class="mx-auto">
    <v-card-title>Update Profile</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="updateProfile">
        <v-text-field
          v-model="user.fullName"
          label="Full Name*"
          :rules="[rules.required, rules.minLength, rules.maxLength]"/>
        <v-text-field
          v-model="user.username"
          label="Username*"
          :rules="[rules.required, rules.minLength, rules.maxLength]"
          :readonly="true"/>
        <v-text-field
          v-model="user.email"
          label="Email*"
          type="email"
          :rules="[rules.required, rules.minLength, rules.email, rules.maxLength]"/>
        <div class="text-end">
          <v-btn type="submit">Update</v-btn>
          <v-btn
            type="button"
            class="ml-3"
            variant="outlined"
            @click="$emit('close')">Cancel
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import {computed, ref} from "vue";
import {constants} from "@/constants";
import {useStore} from "vuex";

const emit = defineEmits(['close']);

const store = useStore();

const authUser = computed(() => store.getters.authenticatedUser);
const user = ref({
  fullName: authUser.value.fullName,
  username: authUser.value.username,
  email: authUser.value.email,
});

const rules = {
  required: value => !!value || 'Required.',
  minimumPasswordLength: value => value.length >= 6 || "Password should be at least 6 characters.",
  minLength: value => value.length >= 2 || "At least 2 characters required.",
  maxLength: value => value.length <= 255 || "At most 255 characters allowed.",
  email: value => constants.validEmailRegex.test(value) || "Email is not valid.",
};

const updateProfile = () => {
  console.log('TODO update user profile.');
  emit('close');
}
</script>

<style scoped>

</style>
