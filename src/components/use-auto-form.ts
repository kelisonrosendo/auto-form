import { z } from "zod";
import { FormConfig, FormValue } from "./types";

export const useAutoForm = () => {
  function initFieldsValue(
    formConfig: FormConfig[],
    formValue: FormValue<FormConfig[]>
  ) {
    return formConfig.map((field) => ({
      ...field,
      value: formValue ? formValue[field.fieldName] : null,
    }));
  }

  function createZodSchema(fields: FormConfig[]) {
    const schemaObject: Record<string, any> = {};

    fields.forEach((field) => (schemaObject[field.fieldName] = field.schema));

    return z.object(schemaObject);
  }

  function handleFieldValue(
    fieldName: string,
    newValue: FormConfig["value"],
    formValue: FormValue<FormConfig[]>
  ) {
    const newValueMap = { ...formValue, [fieldName]: newValue };

    return newValueMap;
  }

  return {
    initFieldsValue,
    createZodSchema,
    handleFieldValue,
  };
};
