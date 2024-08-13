<template>
  <v-radio-group :error-messages="errorMessages">
    <v-radio
      v-for="item in props.items"
      :label="item.label"
      :value="item.value"
      :error="!!errorMessages"
      :key="item.value"
    />
  </v-radio-group>
</template>

<script setup lang="ts">
import { RadioItemProps } from "../types.ts";

defineOptions({
  name: "AutoFormRadio",
});

interface Props {
  items: RadioItemProps[];
  errorMessages: string | undefined;
}

const props = defineProps<Props>();
</script>
