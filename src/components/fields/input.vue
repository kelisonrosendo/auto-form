<template>
  <v-text-field
    v-maska="fieldMask"
    persistent-placeholder
    variant="outlined"
    placeholder="Preencher"
    :prefix="prefixField"
    :type="customType"
    :append-inner-icon="appendInnerIcon"
    @click:append-inner="onClickAppendInner"
  />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { vMaska } from "maska/vue";
import { TYPE_MASKS } from "../config";

defineOptions({
  name: "AutoFormInput",
});

interface Props {
  type?: string;
  mask?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  mask: undefined,
});

const customType = ref<string>(props.type);
const fieldMask = props.mask ?? TYPE_MASKS[props.type];
const prefixField = props.type === "money" ? "R$" : "";
const showPassword = ref<boolean>(false);

const appendInnerIcon = computed(() =>
  props.type === "password"
    ? showPassword.value
      ? "mdi-eye"
      : "mdi-eye-off"
    : ""
);

const onClickAppendInner = () => {
  showPassword.value = !showPassword.value;
  customType.value = showPassword.value ? "text" : "password";
};
</script>
