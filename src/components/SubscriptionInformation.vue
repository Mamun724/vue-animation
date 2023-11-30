<template>
  <v-card>
    <v-card-title>
      Subscription Information
    </v-card-title>
    <v-card-text>
      <v-container :fluid="true">
        <v-row>
          <v-col class="v-col-12 v-col-md-6 v-col-lg-4 d-flex">
            <div>Subscription Plan:</div>
            <div class="ml-2">Monthly Plan</div>
          </v-col>
          <v-col class="v-col-12 v-col-md-6 v-col-lg-4 d-flex">
            <div>Subscription Billing Cycle:</div>
            <div class="ml-2">Monthly</div>
          </v-col>
          <v-col class="v-col-12 v-col-md-6 v-col-lg-4 d-flex">
            <div>Subscription Amount:</div>
            <div class="ml-2">$3.99</div>
          </v-col>
          <v-col class="v-col-12 v-col-md-6 v-col-lg-4 d-flex">
            <div>Subscription Start Date:</div>
            <div class="ml-2">01-Nov-2023</div>
          </v-col>
          <v-col class="v-col-12 v-col-md-6 v-col-lg-4 d-flex">
            <div>Subscription End Date:</div>
            <div class="ml-2">30-Nov-2023</div>
          </v-col>
          <v-col class="v-col-12 v-col-md-6 v-col-lg-4 d-flex">
            <div>Subscription Status:</div>
            <div class="ml-2">Active</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn variant="elevated">Update Subscription</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>

</script>
