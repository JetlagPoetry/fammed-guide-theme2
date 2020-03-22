<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:90%; max-width:1400px">
        <div class="d-flex justify-content-start my-4" style="width:100%">
          <v-btn text large color="primary" class="mx-2" @click="toGuidePage()">
              <v-icon left color="primary">mdi-arrow-left</v-icon>
              Modify Your Customization
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text class="mx-2" large color="primary"  @click="generateImages()">
              Download Your PDF
              <v-icon right color="primary">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <h2 class="my-4 mx-6">Summary</h2>
        <v-divider class="ma-6"></v-divider>
        <diagram2 class="mx-6" ref="diag" v-bind:model-data="diagram_data" style="background-color: #fff; width: 100%;"></diagram2>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from 'jspdf'
import go from 'gojs'
import Diagram2 from './Diagram2.vue'
import {mapState} from 'vuex'

export default {
  name: 'Summary',

  components: {
    Diagram2,
  },

  data: () => ({

  }),

  computed:{
    ...mapState([
      'diagram_data',
      'test',
      'diagram_height',
      'diagram_width'])
  },

  mounted: function() {

  },
  
  methods: {
    toGuidePage() {
      this.$router.push('/guide');
    },

    generateImages() {
      var pageData = this.$refs.diag.diagram.makeImage({
        scale: 1,
        type: "image / jpeg",
        background: "white",
        maxSize: new go.Size(Infinity, Infinity)
      });
      var margin = 20;


      var contentWidth = this.diagram_width;
      var contentHeight = this.diagram_height;

    var imgWidth = 210 - 2*margin; 
    var pageHeight = 295;  
    var imgHeight = contentHeight * imgWidth / contentWidth;
    var heightLeft = imgHeight;

    var doc = new jsPDF('p', 'mm');
    var position = 0;

    doc.addImage(pageData, 'PNG', margin, position, imgWidth, imgHeight);

    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(pageData, 'PNG', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    doc.save( 'file.pdf');


      // var pdf = new jsPDF();
      // pdf.addImage(img.src, 'jpeg', 15, 40, 180, 320);
      // pdf.save('diagram.pdf');

      // var contentWidth = this.diagram_width;
      // var contentHeight = this.diagram_height;

      // //一页pdf显示html页面生成的canvas高度;
      // var pageHeight = contentWidth / 592.28 * 841.89;
      // //未生成pdf的html页面高度
      // var leftHeight = contentHeight;
      // //页面偏移
      // var position = 0;
      // //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      // var imgWidth = 595.28;
      // var imgHeight = 592.28/contentWidth * contentHeight;

      // // var pageData = canvas.toDataURL('image/jpeg', 1.0);

      // var pdf = new jsPDF('', 'pt', 'a4');

      // //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      // //当内容未超过pdf一页显示的范围，无需分页
      // if (leftHeight < pageHeight) {
      // pdf.addImage(pageData, 'JPEG', margin, position, imgWidth, imgHeight );
      // } else {
      //     while(leftHeight > 0) {
      //         pdf.addImage(pageData, 'JPEG', margin, position, imgWidth, imgHeight)
      //         leftHeight -= pageHeight;
      //         position -= 841.89;
      //         //避免添加空白页
      //         if(leftHeight > 0) {
      //           pdf.addPage();
      //         }
      //     }
      // }

      // pdf.save('content.pdf');

    }
  }
};
</script>