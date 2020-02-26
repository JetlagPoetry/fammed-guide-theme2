<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:90%; max-width:1400px">
        <h2 class="my-4">Summary</h2>
        <v-divider class="my-6"></v-divider>
    <diagram2 ref="diag" v-bind:model-data="$route.params.data" style="background-color: #f2f2f2; width: 100%; height: 800px"></diagram2>

      </div>
    </v-row>
  </v-container>
</template>

<script>
import Diagram2 from './Diagram2.vue'
export default {
  name: 'Summary',

  components: {
    Diagram2,
  },

  data: () => ({

  }),

  mounted: function() {
  },

  computed: {
    
  },
  methods: {
  }
};
</script>