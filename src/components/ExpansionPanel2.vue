<template>
  <v-card
    class="mb-12"
    elevation="0">
      <h2 class="my-4">{{$t('guide.text_content[1].title_text')}}</h2>
      <div v-html="$t('guide.text_content[1].intro_text')" class="my-4"></div>
      <v-divider></v-divider>
      <div class="my-6">        
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
            >
            <v-expansion-panel-header class="py-0">
              <v-checkbox
                  v-model="panel_select[step_no]"
                  @click.native="check($event)"
                ></v-checkbox>
                <span>
                {{$t('guide.text_content[1].subheader_text['+step_no+']')}}
              </span>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <div v-html="$t('guide.text_content[1].guide_text['+step_no+']')"></div>
              <v-divider class="my-6"></v-divider>
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
    substep_number : 3,
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
    //Initialize arrays=
    this.panel_select = new Array(this.substep_number).fill(false);
    this.panel_expand = new Array(this.substep_number).fill(false);
    this.panel_comment = new Array(this.substep_number).fill("");
    this.panel_comment_temp = new Array(this.substep_number).fill("");
    this.btn_expand = this.$t('guide.btn_expandAll');
  },

  methods: {

      check: function(e) {
        e.cancelBubble = true;
      },

      clickAllPanel() {
        if(this.btn_show_expand){
          //Click expand all, read all panels
          this.panel_expand = [...Array(this.substep_number).keys()].map((k, i) => i);
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
        this.panel_select = new Array(this.substep_number).fill(true);
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