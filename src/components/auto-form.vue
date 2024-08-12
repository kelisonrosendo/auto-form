<template>
  <v-form @onSubmit.prevent="onSubmit">
    <v-row>
      <v-col
        v-for="field in formFields"
        :cols="field.cols"
        :key="field.fieldName"
      >
        <auto-form-content
          :field="field"
          :model-value="field.value"
          :error-messages="errors[field.fieldName]"
          @update:model-value="onChange(field, $event)"
        />
      </v-col>
    </v-row>

    <auto-form-submit></auto-form-submit>
  </v-form>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import AutoFormContent from "./auto-form-content.vue";
import AutoFormSubmit from "./auto-form-submit.vue";
import { useAutoForm } from "./use-auto-form";
import { FormConfig, FormValue } from "./types";

interface Props {
  formConfig: FormConfig[];
  formValue: FormValue<FormConfig[]>;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:form-value"]);

const formFields = ref();
const { initFieldsValue, createZodSchema, handleFieldValue } = useAutoForm();

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(createZodSchema(props.formConfig)),
});

watch(
  () => props.formValue,
  () => {
    formFields.value = initFieldsValue(props.formConfig, props.formValue);
  },
  { immediate: true }
);

const onChange = (field: FormConfig, event: FormConfig["value"]) => {
  const newValue = handleFieldValue(field.fieldName, event, props.formValue);

  emit("update:form-value", newValue);
};

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
