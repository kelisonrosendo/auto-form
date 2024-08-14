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
      mask: "(##) #####-####",
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
      rows: 4,
    },
    schema: z.string().optional(),
  },
  {
    fieldName: "select",
    fieldType: "select",
    fieldProps: {
      label: "Select simples",
      placeholder: "Selecione uma opção",
      items: [
        {
          id: 1,
          title: "Item 1",
          value: "1",
        },
        {
          id: 2,
          title: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 6,
    schema: z.union([
      z.string({ required_error: "Selecione uma opção" }),
      z.number(),
    ]),
  },
  {
    fieldName: "selectMultiple",
    fieldType: "select",
    fieldProps: {
      label: "Select múltiplo",
      placeholder: "Selecione uma ou mais opções",
      multiple: true,
      returnObject: true,
      items: [
        {
          id: 1,
          title: "Item 1",
          value: "1",
        },
        {
          id: 2,
          title: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 6,
    schema: z
      .array(
        z.object({
          id: z.union([z.string(), z.number()]),
          title: z.string(),
          value: z.union([z.string(), z.number()]),
        }),
        { message: "Selecione pelo menos uma opção" }
      )
      .min(1, { message: "Selecione pelo menos uma opção" }),
  },
  {
    fieldName: "radio",
    fieldType: "radio",
    fieldProps: {
      label: "Radio group",
      items: [
        {
          label: "Item 1",
          value: "1",
        },
        {
          label: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 6,
    schema: z.union([
      z.string({ required_error: "Escolha uma opção" }),
      z.number({ required_error: "Escolha uma opção" }),
    ]),
  },
  {
    fieldName: "checkbox",
    fieldType: "checkbox",
    fieldProps: {
      label: "Checkbox group",
      items: [
        {
          label: "Item 1",
          value: "1",
        },
        {
          label: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 6,
    schema: z
      .array(z.union([z.string(), z.number()]), {
        required_error: "Selecione ao menos uma opção",
      })
      .min(1, { message: "Selecione ao menos uma opção" }),
  },
  {
    fieldName: "datePicker",
    fieldType: "datePicker",
    fieldProps: {
      label: "DatePicker",
    },
    cols: 6,
    schema: z.date({
      required_error: "A data é obrigatória",
      invalid_type_error: "Data inválida",
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
