import { createApp } from "vue";
import vuetify from "./plugins/vuetify";

import App from "./app.vue";

const app = createApp(App);

app.use(vuetify);
app.mount("#app");
