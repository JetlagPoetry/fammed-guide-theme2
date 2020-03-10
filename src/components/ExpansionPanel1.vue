<template>
  <v-card
    class="mb-12"
    elevation="0">
      <h2 class="my-4">{{$t('guide.text_content[0].title_text')}}</h2>
      <div v-html="$t('guide.text_content[0].intro_text')" class="my-4"></div>
      <v-divider></v-divider>
      <div class="d-flex justify-content-start my-4">        
        <v-progress-linear
          :value="panel_progress[0]"
          color="primary"
          height="15px"
          class="my-3 mx-4"
          striped
        >
          <div style="color:white">
            {{panel_progress[0]}}%
          </div>
        </v-progress-linear>

<!--           <v-btn color="primary" class="mx-2" v-if="btn_show_expand[0]" @click="expandAllPanel(step)" style="width:16%; min-width: 150px">
              <v-icon left medium color="#fff" >mdi-plus</v-icon>
              {{$t('guide.btn_expandAll')}}
          </v-btn>
          <v-btn color="primary" class="mx-2" v-else @click="expandAllPanel({ step: 0 })" style="width:16%; min-width: 150px">
              <v-icon left medium >mdi-minus</v-icon>
              {{$t('guide.btn_collapseAll')}}
          </v-btn> -->
          <v-btn color="primary" class="mx-2" @click="selectAllPanel({ step: 0 })">
              {{$t('guide.btn_selectAll')}}
          </v-btn>
      </div>
      <v-row justify="center">
        <v-expansion-panels inset multiple focusable class="mx-4" v-model="panel_expand[0]">
          <v-expansion-panel
            v-for="(item,step_no) in 8"
            :key="step_no"
            >
            <!--
            @click="expandPanel({ step: 0 , substep: step_no})"-->
            <v-expansion-panel-header disable-icon-rotate>
              {{$t('guide.text_content[0].subheader_text['+step_no+']')}}
              <template v-slot:actions>
                <v-icon color="primary" v-if="panel_select[0][step_no]">mdi-checkbox-marked-circle</v-icon>
                <v-icon color="#ccc" v-else-if="panel_read[0][step_no]">mdi-checkbox-marked-circle</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <div v-html="$t('guide.text_content[0].guide_text['+step_no+']')"></div>
              <v-divider class="my-6"></v-divider>
              <div class="d-flex justify-content-start mb-6" >
                <label class="checkbox-label">
                    <input type="checkbox" v-model="panel_select[0][step_no]">
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
                  v-model="panel_comment[0][step_no]"
                ></v-textarea>
              </div>
              
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
  </v-card>
</template>

<script>

// import Vue from 'vue'
import { mapState, mapMutations} from 'vuex'
export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    step: 0,
  }),

  watch: {
  },

  mounted:function(){
    
  },

  methods: {
      ...mapMutations([
      'initPanel',
      'expandAllPanel',
      'selectAllPanel',
      'expandPanel'
    ]),
    },
    computed:{
      ...mapState([
      'substeps',
      'panel_select',
      'panel_read',
      'panel_comment',
      'panel_expand',
      'panel_progress',
      'btn_show_expand'
    ]),
    }
    // computed:{
    //   ...mapState({
    //   substeps: 'substeps[0]',
    //   panel_select: 'panel_select[0]',
    //   panel_read: 'panel_read[0]',
    //   panel_comment :'panel_comment[0]',
    //   panel_expand :'panel_expand[0]',
    //   panel_progress :'panel_progress[0]',
    //   btn_show_expand :'btn_show_expand[0]'
    // }),
    // }
};
</script>

<style scoped src="../css/mycss.css"/>