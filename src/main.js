import "./main.css"
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import { OhVueIcon, addIcons } from "oh-vue-icons"
import * as FaIcons from "oh-vue-icons/icons/fa"

const app = createApp(App)

// Import Font Awesome
const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)
app.component("VIcon", OhVueIcon)

app.use(createPinia())

app.mount("#app")
