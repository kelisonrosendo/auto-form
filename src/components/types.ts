import { z } from "zod";
import { FORM_COMPONENTS } from "./config";

export type FormConfig = {
  fieldName: string;
  fieldType: keyof typeof FORM_COMPONENTS;
  fieldProps?: {
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
  };
  value?: any;
  cols: number;
  schema: z.ZodSchema;
};

export type FormValue<T extends FormConfig[]> = {
  [K in T[number]["fieldName"]]: Extract<T[number], { fieldName: K }>["value"];
};
