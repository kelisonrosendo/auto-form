import { createApp } from "vue";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { pt } from "vuetify/locale";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components
import App from "./app.vue";
import { VDateInput } from "vuetify/labs/VDateInput";

const vuetify = createVuetify({
  locale: {
    locale: "pt",
    messages: { pt },
  },
  components: {
    ...components,
    VDateInput,
  },
  directives,
});

const app = createApp(App);

app.use(vuetify);
app.mount("#app");
