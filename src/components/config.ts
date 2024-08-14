import { MaskOptions } from "maska";
import { Component } from "vue";

import AutoFormCheckbox from "./fields/checkbox.vue";
import AutoFormInput from "./fields/input.vue";
import AutoFormRadio from "./fields/radio.vue";
import AutoFormSelect from "./fields/select.vue";
import AutoFormTextarea from "./fields/textarea.vue";
import AutoFormDatePicker from "./fields/date-picker.vue";

export const FORM_COMPONENTS: Record<string, Component> = {
  checkbox: AutoFormCheckbox,
  input: AutoFormInput,
  radio: AutoFormRadio,
  select: AutoFormSelect,
  textarea: AutoFormTextarea,
  datePicker: AutoFormDatePicker,
};

export const TYPE_MASKS: Record<string, MaskOptions> = {
  money: {
    mask: "9.99#,##",
    tokens: {
      9: {
        pattern: /[0-9]/,
        repeated: true,
      },
    },
    reversed: true,
  },
  phone: {
    mask: "(##) #####-####",
  },
  cep: {
    mask: "#####-###",
  },
};
