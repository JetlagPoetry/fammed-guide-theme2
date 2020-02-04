<template>
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
          <Panel1 />

          <v-btn
            color="primary"
            @click="nextStep(1)"
            class="mx-2"
          >
            View next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          key="`2-content`"
          :step="2"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="lastStep(2)"
            class="mx-2"
          >
            View previous
          </v-btn>

          <v-btn
            color="primary"
            @click="nextStep(2)"
            class="mx-2"
          >
            View next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          key="`3-content`"
          :step="3"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="lastStep(3)"
            class="mx-2"
          >
            View previous
          </v-btn>

          <v-btn
            color="primary"
            @click="nextStep(3)"
            class="mx-2"
          >
            View next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content
          key="`4-content`"
          :step="4"
        >
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="lastStep(4)"
            class="mx-2"
          >
            View previous
          </v-btn>
          
        </v-stepper-content>


      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import Panel1 from './ExpansionPanel1';

export default {
  name: 'Stepper',

  components: {
    Panel1,
  },

  data: () => ({
        cur_step: 1,
        steps: 4,
        progress : 90
  
  }),

  watch: {
      steps (val) {
        if (this.cur_step > val) {
          this.cur_step = val
        }
      },
    },

  methods: {
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

      isStepComplete (n) {
        if(n==1){
          n=2;
        }
        return Panel1.data.panel_read.every(Panel1.methods.itemIsRead);
      }
    },
};
</script>
