<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:90%; max-width:1400px">
        <h2 class="my-4">Summary</h2>
        <v-divider class="my-6"></v-divider>
        <diagram2 ref="diag" v-bind:model-data="$route.params.data" style="background-color: #f2f2f2; width: 100%; height: 800px"></diagram2>
        <v-btn @click="generateImages()">TEST</v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from 'jspdf'
import go from 'gojs'
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

    generateImages() {

      //making images
      // var db = this.$refs.diag.diagram.documentBounds.copy();
      // var boundswidth = db.width;
      // var boundsheight = db.height;
      // // var imgWidth = 6000;
      // // var imgHeight = 10000;
      // var p = db.position.copy();
      //making images
      // for (var i = 0; i < boundsheight; i += imgHeight) {
      //   var img;
      //   for (var j = 0; j < boundswidth; j += imgWidth) {
      //     img = this.$refs.diag.diagram.makeImage({
      //       scale: 1,
      //       type: "image / jpeg",
      //       background: "white",
      //       position: new go.Point(p.x + j, p.y + i),
      //       size: new go.Size(4000, NaN)
      //     });
      //   }
      // }

      var img = this.$refs.diag.diagram.makeImage({
        scale: 1,
        type: "image / jpeg",
        background: "white",
        maxSize: new go.Size(Infinity, Infinity)
      });

      var doc = new jsPDF();
      doc.addImage(img.src, 'jpeg', 15, 40, 180, 320);
      doc.save('diagram.pdf');
    }
  }
};
</script>