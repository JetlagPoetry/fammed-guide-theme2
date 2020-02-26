<template>
  <!-- <v-content class="px-12"> -->
  <div class="mt-6 px-12 mx-auto" style="width:95vw">
  <v-container>
    <v-stepper v-model="cur_step"
   alt-labels 
   non-linear>
    <v-stepper-header>
      <v-stepper-step step="1" editable><div style="width:240px; font-size:small">CONSTITUER UN GROUPE DE TRAVAIL EN RPO ET ÉTABLIR COLLECTIVEMENT DES PROCESSUS DE FONCTIONNEMENT. </div></v-stepper-step>

      <v-divider style="width:100px"></v-divider>

      <v-stepper-step step="2" editable><div style="width:240px; font-size:small">FORMULER COLLECTIVEMENT LES OBJECTIFS, ANALYSER LES DONNÉES ET DÉTERMINER L’UTILISATION DES RÉSULTATS OBTENUS LORS D’UNE RPO.</div></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" editable><div style="width:240px; font-size:small">ADAPTER LES PROCESSUS DE LA RPO AUX BESOINS DES MEMBRES DU GROUPE DE TRAVAIL</div></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4" editable><div style="width:240px; font-size:small">VEILLER COLLECTIVEMENT À L’ÉTABLISSEMENT ET À L’ENTRETIEN DES RELATIONS AU SEIN DU GROUPE DE TRAVAIL.</div></v-stepper-step>

    </v-stepper-header>

      <v-stepper-items class="px-4 pb-4">
        <v-stepper-content
          key="`1-content`"
          :step="1"
        >
          <Panel1 ref="panel1"/>

          <v-btn
            color="primary"
            @click="nextStep(1)"
            class="mx-2"
          >
            Next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          key="`2-content`"
          :step="2"
        >
          <Panel2 />

          <v-btn
            color="primary"
            @click="lastStep(2)"
            class="mx-2"
          >
            Previous
          </v-btn>

          <v-btn
            color="primary"
            @click="nextStep(2)"
            class="mx-2"
          >
            Next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          key="`3-content`"
          :step="3"
        >
          <Panel3 />

          <v-btn
            color="primary"
            @click="lastStep(3)"
            class="mx-2"
          >
            Previous
          </v-btn>

          <v-btn
            color="primary"
            @click="nextStep(3)"
            class="mx-2"
          >
            Next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          key="`4-content`"
          :step="4"
        >
          <Panel4 />

          <v-btn
            color="primary"
            @click="lastStep(4)"
            class="mx-2"
          >
            Previous
          </v-btn>

          <v-btn
            color="primary"
            @click="toSummary()"
            class="mx-2"
          >
            Generate PDF
          </v-btn>
          
        </v-stepper-content>


      </v-stepper-items>
    </v-stepper>
  </v-container>
</div>
</template>

<script>
import Panel1 from './ExpansionPanel1';
import Panel2 from './ExpansionPanel2';
import Panel3 from './ExpansionPanel3';
import Panel4 from './ExpansionPanel4';

export default {
  name: 'Stepper',

  components: {
    Panel1,
    Panel2,
    Panel3,
    Panel4
  },

  data: () => ({
    cur_step: 1,
    steps: 4,
    // progress : 90,
  }),
  props:{
  },

  watch: {
      steps (val) {
        if (this.cur_step > val) {
          this.cur_step = val
        }
      },
    },

  methods: {
    toSummary () {
        let panel1 = [];
        panel1.push({key: 0, substep : this.$refs.panel1.title_text});
        var i;
        for(i=0; i< this.$refs.panel1.substep_number; i++){
          panel1.data.push({
            key: i+1,
            substep: this.$refs.panel1.subheader_text[i], 
            comment: this.$refs.panel1.panel_comment[i],
            selected: this.$refs.panel1.panel_select[i],
            parent: 1
          });
        }

        this.$router.push({
          name:'summary', 
          params:{ 
            data: panel1}});
      },


      nextStep (n) {
        if (n === this.steps) {
          this.cur_step = 1
        } else {
          this.cur_step = n + 1
        }
      },

      lastStep (n) {
        if (n === 1) {
          this.cur_step = 1
        } else {
          this.cur_step = n - 1
        }
      },

      // isAllStepsRead () {
      //   if(!Panel1.data.progress===100)
      //     return false;
      //   if(!Panel2.data.progress===100)
      //     return false;
      //   if(!Panel3.data.progress===100)
      //     return false;
      //   if(!Panel4.data.progress===100)
      //     return false;
      //   return true;
      // },


      itemIsRead (item) {
        return item===true;
      },
    },
};
</script>
