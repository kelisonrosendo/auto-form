<template>
  <v-text-field
    v-maska="props.mask"
    persistent-placeholder
    variant="outlined"
  />
</template>

<script setup lang="ts">
import { vMaska } from "maska/vue";

defineOptions({
  name: "AutoFormInput",
});

interface Props {
  mask?: string | undefined;
}

const props = defineProps<Props>();
</script>
