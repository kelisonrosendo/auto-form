<template>
  <div>
    <pre class="mb-4">{{ formValue }}</pre>

    <auto-form
      v-bind="{ formConfig, formValue }"
      @update:form-value="updateFormValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { z } from "zod";
import AutoForm from "./components/auto-form.vue";
import { FormConfig, FormValue } from "./components/types";

const formConfig: FormConfig[] = [
  {
    fieldName: "password",
    fieldType: "input",
    fieldProps: {
      type: "password",
      label: "Senha",
    },
    schema: z.string(),
  },
];

const formValue = ref<FormValue<FormConfig[]>>({});

const updateFormValue = (newValue: FormValue<FormConfig[]>) => {
  formValue.value = newValue;
};
</script>

<style>
@import "./assets/css/main.css";
</style>
