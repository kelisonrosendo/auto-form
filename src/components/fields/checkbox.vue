<template>
  <v-input :error-messages="errorMessages">
    <div class="d-flex flex-column">
      <v-label class="ml-1"> {{ props.label }} </v-label>

      <v-checkbox
        v-for="item in props.items"
        multiple
        hide-details
        density="compact"
        :label="item.label"
        :value="item.value"
        :model-value="selectedItems"
        :error="!!errorMessages"
        :key="item.value"
        @update:model-value="onCheck"
      />
    </div>
  </v-input>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { CheckboxItemProps } from "../types";

defineOptions({
  name: "AutoFormCheckbox",
});

interface Props {
  label: string;
  items: CheckboxItemProps[];
  errorMessages: string | undefined;
  inputValue: unknown;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:model-value"]);
const selectedItems = ref<unknown>([]);

watch(
  () => props.inputValue,
  () => {
    selectedItems.value = props.inputValue;
  },
  { immediate: true }
);

const onCheck = (event: string[] | number[] | unknown) => {
  selectedItems.value = event;
  emit("update:model-value", selectedItems.value);
};
</script>
