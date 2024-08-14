<template>
  <auto-form
    v-bind="{ formConfig, formValue }"
    @update:form-value="updateFormValue"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import AutoForm from "./components/auto-form.vue";
import { FormConfig, FormValue } from "./components/types";
import { formSchema } from "./components/schema";

const formConfig: FormConfig[] = [
  {
    fieldName: "input",
    fieldType: "input",
    fieldProps: {
      label: "Optional input",
    },
    cols: 4,
    schema: formSchema.shape.string.optional(),
  },
  {
    fieldName: "money",
    fieldType: "input",
    fieldProps: {
      type: "money",
      label: "Money",
    },
    cols: 4,
    schema: formSchema.shape.string,
  },
  {
    fieldName: "password",
    fieldType: "input",
    fieldProps: {
      type: "password",
      label: "Password",
    },
    cols: 4,
    schema: formSchema.shape.string,
  },
  {
    fieldName: "date",
    fieldType: "datePicker",
    fieldProps: {
      label: "Date Picker",
    },
    cols: 4,
    schema: formSchema.shape.date,
  },
  {
    fieldName: "selectSingle",
    fieldType: "select",
    fieldProps: {
      label: "Select single",
      returnObject: true,
      items: [
        {
          id: 1,
          title: "Item 1",
          value: 1,
        },
        {
          id: 2,
          title: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 4,
    schema: formSchema.shape.object,
  },
  {
    fieldName: "selectMultiple",
    fieldType: "select",
    fieldProps: {
      label: "Select multiple",
      returnObject: true,
      multiple: true,
      items: [
        {
          id: 1,
          title: "Item 1",
          value: 1,
        },
        {
          id: 2,
          title: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 4,
    schema: formSchema.shape.array,
  },
  {
    fieldName: "textarea",
    fieldType: "textarea",
    fieldProps: {
      label: "Textarea",
      rows: 3,
    },
    schema: formSchema.shape.string,
  },
  {
    fieldName: "radio",
    fieldType: "radio",
    fieldProps: {
      label: "Radio",
      items: [
        {
          label: "Item 1",
          value: 1,
        },
        {
          label: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 6,
    schema: formSchema.shape.number,
  },
  {
    fieldName: "checkbox",
    fieldType: "checkbox",
    fieldProps: {
      label: "Checkbox",
      items: [
        {
          label: "Item 1",
          value: 1,
        },
        {
          label: "Item 2",
          value: 2,
        },
      ],
    },
    cols: 6,
    schema: formSchema.shape.array,
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
