<template>
  <v-card-title>
    Personal Information
  </v-card-title>
  <v-card-text>
    <v-table class="px-4">
      <tr>
        <th class="text-left">Name</th>
        <td>John Doe</td>
      </tr>
      <tr>
        <th class="text-left">Email</th>
        <td>a@b.c</td>
      </tr>
      <tr>
        <th class="text-left">Phone</th>
        <td>+880100000000</td>
      </tr>
      <tr>
        <th class="text-left">NID Number</th>
        <td>123123123</td>
      </tr>

    </v-table>
  </v-card-text>

  <v-card-title>
    Address
  </v-card-title>
  <v-card-text>
    <v-table class="px-4">
      <tr>
        <th class="text-left">Address Line 1</th>
        <td>1/2 Nazrul Avenue</td>
      </tr>
      <tr>
        <th class="text-left">Address Line 2</th>
        <td></td>
      </tr>
      <tr>
        <th class="text-left">City</th>
        <td>Dhaka</td>
      </tr>
      <tr>
        <th class="text-left">State</th>
        <td>123123123</td>
      </tr>
      <tr>
        <th class="text-left">Zip Code</th>
        <td>12312</td>
      </tr>
    </v-table>
  </v-card-text>
  <v-card-actions class="justify-center">
    <v-dialog v-model="openModal">
      <template v-slot:activator="{props}">
        <v-btn v-bind="props" variant="elevated">Update Profile</v-btn>
      </template>
      <UpdateProfile @close="openModal = false;"/>
    </v-dialog>
  </v-card-actions>
</template>
<script setup>
import UpdateProfile from "@/components/UpdateProfile.vue";
import {ref} from "vue";

const openModal = ref(false);
</script>
