<template>
  <div>
    {{ formValue }}
    <auto-form
      v-bind="{ formConfig, formValue }"
      @update:form-value="updateFormValue"
    >
      App
    </auto-form>
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
      required: true,
    },
    cols: 6,
    schema: z
      .string({
        required_error: "O usuário é obrigatório",
      })
      .min(2, {
        message: "O usuário deve conter pelo menos  2 caracteres",
      }),
  },
  {
    fieldName: "password",
    fieldType: "input",
    fieldProps: {
      type: "password",
      label: "Senha",
      placeholder: "Insira sua senha",
      required: true,
    },
    cols: 6,
    schema: z
      .string({
        required_error: "A senha é obrigatória",
      })
      .min(8, { message: "A senha deve conter 8 caracteres" }),
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
