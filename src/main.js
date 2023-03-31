import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable, VDataTableServer } from 'vuetify/labs/VDataTable'

const vuetify = createVuetify({
  components: {
    VDataTable,
    VDataTableServer,
    components
  },
  directives,
})

createApp(App).use(vuetify).mount('#app')
