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
    },
    cols: 6,
    schema: z
      .string({
        required_error: "A senha é obrigatória",
      })
      .min(8, { message: "A senha deve conter 8 caracteres" }),
  },
  {
    fieldName: "email",
    fieldType: "input",
    fieldProps: {
      type: "email",
      label: "E-mail",
      placeholder: "Insira seu e-mail",
    },
    schema: z.string().email({ message: "E-mail inválido" }).optional(),
  },
  {
    fieldName: "number",
    fieldType: "input",
    fieldProps: {
      type: "number",
      label: "Número",
      placeholder: "Insira um número",
    },
    schema: z.coerce.number({ message: "Somente números" }),
  },
  {
    fieldName: "textarea",
    fieldType: "textarea",
    fieldProps: {
      label: "Textarea",
      placeholder: "Insira um textão",
    },
    schema: z.string().optional(),
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
