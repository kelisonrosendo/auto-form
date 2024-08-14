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
    fieldName: "username",
    fieldType: "input",
    fieldProps: {
      label: "Usuário",
      placeholder: "Insira o usuário",
    },
    cols: 12,
    schema: z
      .string({
        required_error: "O usuário é obrigatório",
      })
      .min(2, {
        message: "O usuário deve conter pelo menos 2 caracteres",
      }),
  },
  {
    fieldName: "email",
    fieldType: "input",
    fieldProps: {
      type: "email",
      label: "E-mail",
      placeholder: "Insira o e-mail",
    },
    cols: 12,
    schema: z
      .string({
        required_error: "A senha é obrigatória",
      })
      .email({
        message: "E-mail inválido",
      }),
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
