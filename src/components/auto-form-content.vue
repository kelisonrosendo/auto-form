<template>
  <component
    v-bind="{ ...field.fieldProps, errorMessages }"
    :is="FORM_COMPONENTS[field.fieldType]"
    :model-value="inputValue"
    @update:model-value="onChange($event)"
  />
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useField } from "vee-validate";
import { FORM_COMPONENTS } from "./config";
import { FormConfig } from "./types";

interface Props {
  field: FormConfig;
  errorMessages: string | undefined;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:model-value"]);

const {
  value: inputValue,
  setValue,
  resetField,
} = useField(props.field.fieldName);

watch(
  () => props.field.value,
  () => {
    props.field.value ? setValue(props.field.value) : resetField();
  },
  { immediate: true }
);

const onChange = (event: FormConfig["value"]) => {
  emit("update:model-value", event);
};
</script>
