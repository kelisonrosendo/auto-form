import { z } from "zod";

const DEFAULT_REQUIRED_MESSAGE = "Campo obrigatório";

const stringOrNumber = z.union([
  z.string({
    required_error: DEFAULT_REQUIRED_MESSAGE,
  }),
  z.number({
    required_error: DEFAULT_REQUIRED_MESSAGE,
  }),
]);

export const formSchema = z.object({
  string: z.string({
    required_error: DEFAULT_REQUIRED_MESSAGE,
  }),

  number: z.number({
    required_error: DEFAULT_REQUIRED_MESSAGE,
  }),

  stringOrNumber,

  array: z
    .array(z.any(), { required_error: DEFAULT_REQUIRED_MESSAGE })
    .min(1, DEFAULT_REQUIRED_MESSAGE),

  object: z
    .object({}, { required_error: DEFAULT_REQUIRED_MESSAGE })
    .passthrough()
    .refine((obj) => Object.keys(obj).length > 0),

  date: z.date({
    required_error: DEFAULT_REQUIRED_MESSAGE,
    invalid_type_error: "Data inválida",
  }),

  email: z
    .string({
      required_error: DEFAULT_REQUIRED_MESSAGE,
    })
    .email({
      message: "E-mail inválido",
    }),
});
