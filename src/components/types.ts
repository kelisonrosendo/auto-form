import { z } from "zod";
import { FORM_COMPONENTS } from "./config";

export type SelectItemProps = {
  id: string | number;
  title: string;
  value: string | number;
};

export type RadioItemProps = {
  label: string;
  value: string | number;
};

export type CheckboxItemProps = {
  label: string;
  value: string | number;
};

export type FormConfig = {
  fieldName: string;
  fieldType: keyof typeof FORM_COMPONENTS;
  fieldProps?: {
    label?: string;
    type?: string;
    placeholder?: string;
    rows?: number;
    items?: SelectItemProps[] | RadioItemProps[] | CheckboxItemProps[];
    returnObject?: boolean;
    multiple?: boolean;
  };
  value?: any;
  cols?: number;
  schema: z.ZodSchema;
};

export type FormValue<T extends FormConfig[]> = {
  [K in T[number]["fieldName"]]: Extract<T[number], { fieldName: K }>["value"];
};
