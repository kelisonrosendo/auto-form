<template>
  <div class="d-flex ga-4">
    <v-btn type="button" color="secondary" @click="$emit('reset')">
      Reset
    </v-btn>

    <v-btn type="submit" color="primary" @click.prevent="$emit('submit')">
      Validar
    </v-btn>
  </div>
</template>

<script setup lang="ts"></script>
