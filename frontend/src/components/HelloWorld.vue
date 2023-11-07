<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1> welcome {{ user }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {HTTP} from '../http-common'
export default {
  name: 'HelloWorld',

  data: () => {
    return {
      user: ""
    }
  },
  async mounted() {
    await HTTP.get('user')
    .then(res => {
      this.user = res.data.name
    })
  }
}
</script>
