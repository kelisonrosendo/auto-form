import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { pt } from "vuetify/locale";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  locale: {
    locale: "pt",
    messages: { pt },
  },
  components,
  directives,
});
