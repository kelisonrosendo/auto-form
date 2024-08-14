<template>
  <v-text-field
    v-maska="fieldMask"
    persistent-placeholder
    variant="outlined"
    placeholder="Preencher"
    :type="type"
  />
</template>

<script setup lang="ts">
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

const fieldMask = props.mask ?? TYPE_MASKS[props.type];
</script>
