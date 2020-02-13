<template>
  <v-card
    class="mb-12"
    elevation="0">
      <h2 class="my-4">{{title_text}}</h2>
      <div v-html="intro_text" class="my-4"></div>
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

          <v-btn color="primary" class="mx-2" @click="clickAllPanel()" style="width:16%;">
              <v-icon left medium color="#fff" v-if="btn_show_expand">mdi-plus</v-icon>
              <v-icon left medium v-else>mdi-minus</v-icon>
              {{btn_text}}
          </v-btn>

          <v-btn color="primary" class="mx-2" @click="selectAllPanel()">
              SELECT ALL
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
              {{subheader_text[step_no]}}
              <template v-slot:actions>
                <v-icon color="primary" v-if="panel_select[step_no]">mdi-checkbox-marked-circle</v-icon>
                <v-icon color="#ccc" v-else-if="panel_read[step_no]">mdi-checkbox-marked-circle</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <div v-html="guide_text[step_no]"></div>
              <v-divider class="my-6"></v-divider>
              <div class="d-flex justify-content-start mb-6" >
                <label class="checkbox-label">
                    <input type="checkbox" v-model="panel_select[step_no]">
                    <span class="checkbox-custom rectangular"></span>
                </label>
                <label class="input-title">Select this substep</label>
              </div>
              <div class="mt-4 mb-0">
                <v-textarea
                  outlined
                  auto-grow
                  name="input-7-4"
                  label="Customized instructions"
                  v-model="panel_comment_temp[step_no]"
                ></v-textarea>
                <v-btn color="primary" class="mb-4" @click="saveComment(step_no)">
                  Save
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
    substep_number : 4,
    progress : 0 ,
    panel_read : [], //If current step is read.
    panel_select : [], //If current step is selected.
    panel_expand : [], //If current step is expanded.
    panel_comment : [],
    panel_comment_temp : [],
    btn_text : "Expand All",
    btn_show_expand : true,
    title_text : "3. ADAPTER LES PROCESSUS DE LA RPO AUX BESOINS DES MEMBRES DU GROUPE DE TRAVAIL.",
    intro_text : "Tous les membres du groupe de travail doivent pouvoir avoir un droit de parole égal. Autrement dit, le groupe devrait mettre en œuvre des moyens informels ou des procédures claires pour veiller à ce que tous les membres se sentent à l’aise de s’exprimer pendant les réunions. Il est nécessaire d’adapter les travaux de la RPO aux connaissances, aux compétences et aux besoins de tous les membres du groupe de travail. Ceci pourrait prendre la forme de suggestions soumises par écrit avant les réunions.",
    subheader_text: [
      "3.1. ADAPTER CES PROCESSUS SELON LES HORAIRES.",
      "3.2. ADAPTER CES PROCESSUS SELON LES BESOINS LINGUISTIQUES ET EN LITTÉRATIE.",
      "3.3. ADAPTER LES OUTILS DE COMMUNICATION AUX BESOINS DES MEMBRES DU GROUPE DE TRAVAIL.",
      "3.4. ADAPTER CES PROCESSUS SELON LES COMPÉTENCES DES MEMBRES DU GROUPE DE TRAVAIL."
    ],
    guide_text: [
      "Le groupe de travail doit négocier la meilleure manière de tenir compte des horaires différents de ses membres.<br /><br /> Pour y arriver, il est possible d’utiliser des plateformes vidéo ou de téléconférence afin de permettre la participation à distance des membres du groupe de travail qui ne peuvent pas se déplacer pour assister aux réunions en présence.",

      "Il est important de partager les termes spécialisés en usage dans le projet de RPO (le « jargon » et les symboles du projet); aucune partie prenante ne peut comprendre l’ensemble du lexique technique des autres parties par exemple.<br /><br /> Des mesures doivent être prises pour s’assurer que tous les membres du groupe de travail comprennent bien ce qui est discuté et peuvent ainsi participer pleinement à la discussion.<br /><br /> Cette recommandation pourrait prendre la forme de plusieurs suggestions telles que : décourager l’emploi d’acronymes; adapter l’écrit et l’oral à l’intention de ceux dont la langue utilisée lors des réunions n’est pas la langue maternelle ou bien pour ceux qui ont un faible niveau de littératie en recherche et en santé; utiliser des schémas ou toute autre aide visuelle comme des vidéos, ou toute autre option que les membres jugent nécessaire.",

      "Certains membres du groupe de travail peuvent présenter des limitations fonctionnelles (p. ex., déficience visuelle, auditive ou cognitive), tandis que d’autres risquent de ne pas avoir accès à de l’équipement informatique ou à l’Internet. Le groupe de travail doit vérifier les besoins de ses membres en matière de communication et les satisfaire. Une ressource pertinente peut être consultée à ce sujet : <a href='https://coco-net.org/accessibility-guidelines-organizersfacilitators/?lang=fr'> https://coco-net.org/accessibility-guidelines-organizersfacilitators/?lang=fr</a>",

      "Il n’est pas nécessaire que les tous les membres du groupe de travail disposent de compétences en recherche, mais la capacité d’analyser et de synthétiser des idées constitue un atout.<br /><br /> Bien que les compétences en recherche ne soient pas une condition préalable à la participation, un niveau minimal de littératie en recherche est important pour participer pleinement à un projet en RPO.<br /><br /> Il pourrait être pertinent de soutenir l’amélioration des compétences chez tous les membres du groupe de travail en termes de recherche et de contexte du projet.<br /><br /> Cela peut prendre la forme d’une formation en littératie en recherche et en RPO qui est offerte à tous les membres du groupe de travail afin de s’assurer qu’ils comprennent bien les concepts clés, les processus et les méthodes à l’égard de la recherche en général (p. ex., les notions de base en épidémiologie, en statistiques et en méthodes qualitatives), les considérations éthiques, les mécanismes de publication de même que les critères de promotion en milieu universitaire. Les universitaires doivent apprendre l’importance de travailler avec des gens qui ne sont pas affiliés à une université et aussi la façon de participer avec respect et de façon significative avec tous les membres du groupe de travail."
      ]

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
  },

  methods: {

      clickAllPanel() {
        if(this.btn_show_expand){
          //Click expand all, read all panels
          this.panel_expand = [...Array(this.substep_number).keys()].map((k, i) => i);
          this.panel_read.fill(true);
          this.progress = 100;
          this.btn_text = "Collapse All";
          this.btn_show_expand = false;
        }else{
          //Click collapse all, reset all panels
          this.panel_expand = [];
          this.btn_text = "Expand All";
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