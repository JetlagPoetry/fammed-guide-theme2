<template>
  <v-card
    class="mb-12"
    elevation="0">
      <h2 class="my-4">{{$t('guide.text_content[3].title_text')}}</h2>
      <div v-html="$t('guide.text_content[3].intro_text')" class="my-4"></div>
      <v-divider></v-divider>
      <div class="d-flex justify-content-start my-4" >        
        <v-progress-linear
          :value="progress"
          color="primary"
          height="15px"
          class="my-3 mx-4"
          striped
        >
          <div style="color:white">
            {{progress.toFixed(0)}}%
          </div>
        </v-progress-linear>

          <v-btn color="primary" class="mx-2" @click="clickAllPanel()" style="width:16%; min-width: 150px">
              <v-icon left medium color="#fff" v-if="btn_show_expand">mdi-plus</v-icon>
              <v-icon left medium v-else>mdi-minus</v-icon>
              {{btn_expand}}
          </v-btn>

          <v-btn color="primary" class="mx-2" @click="selectAllPanel()">
              {{$t('guide.btn_selectAll')}}
          </v-btn>
      </div>
      <v-row justify="center">
        <v-expansion-panels inset multiple focusable class="mx-4" v-model="panel_expand">
          <v-expansion-panel
            v-for="(item,step_no) in substep_number"
            :key="step_no"
            @click="readItem(step_no)"
            >
            <v-expansion-panel-header disable-icon-rotate>
              <!-- {{subheader_text[step_no]}} -->
              {{$t('guide.text_content[3].subheader_text['+step_no+']')}}
              <template v-slot:actions>
                <v-icon color="primary" v-if="panel_select[step_no]">mdi-checkbox-marked-circle</v-icon>
                <v-icon color="#ccc" v-else-if="panel_read[step_no]">mdi-checkbox-marked-circle</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <div v-html="$t('guide.text_content[3].guide_text['+step_no+']')"></div>
              <v-divider class="my-6"></v-divider>
              <div class="d-flex justify-content-start mb-6" >
                <label class="checkbox-label">
                    <input type="checkbox" v-model="panel_select[step_no]">
                    <span class="checkbox-custom rectangular"></span>
                </label>
                <label class="input-title">{{$t('guide.cbx_selectHint')}}</label>
              </div>
              <div class="mt-4 mb-0">
                <v-textarea
                  outlined
                  auto-grow
                  name="input-7-4"
                  :label="$t('guide.txt_instrHint')"
                  v-model="panel_comment_temp[step_no]"
                ></v-textarea>
                <v-btn color="primary" class="mb-4" @click="saveComment(step_no)">
                  {{$t('guide.btn_save')}}
                </v-btn>
              </div>
              
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
  </v-card>
</template>

<script>

// import Vue from 'vue'

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    substep_number : 11,
    progress : 0 ,
    panel_read : [], //If current step is read.
    panel_select : [], //If current step is selected.
    panel_expand : [], //If current step is expanded.
    panel_comment : [],
    panel_comment_temp : [],
    btn_expand : "",
    btn_show_expand : true,

  }),

  watch: {
  },

  mounted:function(){
    //Initialize arrays
    this.panel_read = new Array(this.substep_number).fill(false);
    this.panel_select = new Array(this.substep_number).fill(false);
    this.panel_expand = new Array(this.substep_number).fill(false);
    this.panel_comment = new Array(this.substep_number).fill("");
    this.panel_comment_temp = new Array(this.substep_number).fill("");
    this.btn_expand = this.$t('guide.btn_expandAll');
  },

  methods: {

      clickAllPanel() {
        if(this.btn_show_expand){
          //Click expand all, read all panels
          this.panel_expand = [...Array(this.substep_number).keys()].map((k, i) => i);
          this.panel_read.fill(true);
          this.progress = 100;
          this.btn_expand = this.$t('guide.btn_collapseAll');
          this.btn_show_expand = false;
        }else{
          //Click collapse all, reset all panels
          this.panel_expand = [];
          this.btn_expand = this.$t('guide.btn_expandAll');
          this.btn_show_expand = true;
        }
        
      },

      selectAllPanel() {
        this.panel_read = new Array(this.substep_number).fill(true);
        this.panel_select = new Array(this.substep_number).fill(true);
        this.progress = 100;
      },

      readItem (n) {
        if(!this.panel_read[n]){
          this.panel_read[n] = true;
          this.progress = this.progress + 100.0/this.panel_read.length;
          if(this.panel_read.every(this.itemIsRead)){
            this.progress = 100;
          }
        }
      },

      itemIsRead (item) {
        return item===true;
      },

      saveComment (n) {
        this.panel_comment[n] = this.panel_comment_temp[n];
      },
    },
};
</script>

<style scoped src="../css/mycss.css"/>