<template>
  <component
    v-bind="{ ...field.fieldProps, errorMessages }"
    :is="FORM_COMPONENTS[field.fieldType]"
  />
</template>

<script setup lang="ts">
import { FORM_COMPONENTS } from "./config";
import { FormConfig } from "./types";

interface Props {
  field: FormConfig;
  errorMessages: string | undefined;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:model-value"]);
</script>
