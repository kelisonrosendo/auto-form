<template>
  <div>
    <v-menu v-model="show" :close-on-content-click="false">
      <template v-slot:activator="{ props: activator }">
        <v-text-field
          v-bind="activator"
          v-maska="'##/##/####'"
          persistent-placeholder
          variant="outlined"
          placeholder="dd/mm/aaaa"
          prepend-inner-icon="mdi-calendar"
          :label="label"
          :error-messages="errorMessages"
          :model-value="inputDate"
          @update:model-value="onUpdateInput"
        />
      </template>

      <v-date-picker
        :model-value="pickerDate"
        @update:model-value="onUpdateDatePicker"
      />
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { vMaska } from "maska/vue";

defineOptions({
  name: "AutoFormDatePicker",
});

interface Props {
  label: string;
  errorMessages: string | undefined;
  modelValue: Date | undefined;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:model-value"]);

const show = ref<boolean>(false);
const inputDate = ref<string>("");
const pickerDate = ref<Date>();

onMounted(() => {
  pickerDate.value = props.modelValue ? new Date(props.modelValue) : undefined;

  inputDate.value =
    props.modelValue instanceof Date
      ? new Date(props.modelValue).toLocaleDateString("pt-br")
      : "";
});

watch(
  () => props.modelValue,
  () => {
    if (!props.modelValue) {
      pickerDate.value = undefined;
      inputDate.value = "";
    }
  }
);

const onUpdateInput = (date: string) => {
  show.value = false;
  inputDate.value = date;

  if (!date.length) {
    pickerDate.value = undefined;
  }

  if (date.length === 10) {
    const [day, month, year] = date.split("/");
    pickerDate.value = new Date(Number(year), Number(month) - 1, Number(day));

    emit("update:model-value", pickerDate.value);
  } else {
    emit("update:model-value", date);
  }
};

const onUpdateDatePicker = (date: Date) => {
  show.value = false;
  pickerDate.value = date;
  inputDate.value = date.toLocaleDateString("pt-br");

  emit("update:model-value", date);
};
</script>
