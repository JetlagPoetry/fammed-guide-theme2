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

          <v-btn color="primary" class="mx-2" @click="clickAllPanel()" style="width:18%;">
              <v-icon left medium color="#fff" v-if="btn_show_expand">mdi-plus</v-icon>
              <v-icon left medium v-else>mdi-minus</v-icon>
              {{btn_text}}
          </v-btn>
      </div>
      <v-row justify="center">
        <v-expansion-panels inset multiple focusable class="mx-4" v-model="panel_expand">
          <v-expansion-panel
            v-for="(item,i) in substep_number"
            :key="i"
            @click="readItem(i)">
            <v-expansion-panel-header disable-icon-rotate>
              {{subheader_text[i]}}
              <template v-slot:actions>
                <v-icon color="primary" v-if="panel_select[i]">mdi-checkbox-marked-circle</v-icon>
                <v-icon color="#ccc" v-else-if="panel_read[i]">mdi-checkbox-marked-circle</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pt-4">
              <div v-html="guide_text[i]"></div>
              <v-divider class="my-6"></v-divider>
              <div class="d-flex justify-content-start mb-6" >
                <label class="checkbox-label">
                    <input type="checkbox" v-model="panel_select[i]">
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
                  v-model="panel_comment_temp[i]"
                ></v-textarea>
                <v-btn color="primary" class="mb-4" @click="saveComment(i)">
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

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    substep_number : 3,
    progress : 0 ,
    panel_read : [false, false, false], //If current step is read.
    panel_select : [false, false, false], //If current step is selected.
    panel_expand : [], //If current step is expanded.
    panel_comment : ["", "", ""],
    panel_comment_temp : ["", "", ""],
    btn_text : "Expand All",
    btn_show_expand : true,
    title_text : "2. FORMULER COLLECTIVEMENT LES OBJECTIFS, ANALYSER LES DONNÉES ET DÉTERMINER L’UTILISATION DES RÉSULTATS OBTENUS LORS D’UNE RPO. ",
    intro_text : "Une revue systématique de la littérature en RPO avec des organisations de santé indique que les décisions essentielles qui doivent être prises de façon participative concernent la question et les objectifs spécifiques du projet de recherche, l’analyse des données ainsi que l’utilisation des résultats (Bush et al., 2015). Même s’il n’en est pas explicitement question dans ce document, le type de participation à chaque phase du projet de recherche peut également être décidé de manière collective par le groupe de travail. Par exemple, ceci peut prendre la forme d’une discussion au sein du groupe de travail pour planifier la collecte des données, notamment identifier les participants à recruter et la façon de s’y prendre pour les recruter, ou le type de données à recueillir et la manière de procéder.",
    subheader_text: [
      "2.1. FORMULER RAPIDEMENT DES OBJECTIFS POUR AIDER À FAVORISER L’ENGAGEMENT DES MEMBRES DU GROUPE DE TRAVAIL.",
      "2.2. ANALYSER LES DONNÉES ET INTERPRÉTER LES RÉSULTATS.",
      "2.3. METTRE EN ŒUVRE LES CHANGEMENTS D’APRÈS LES RÉSULTATS.",
    ],
    guide_text: [
      "Les résultats de cette revue de la littérature suggèrent que la probabilité que la RPO entraîne des bénéfices au-delà des effets souhaités est quadruplée lorsque les projets de recherche sont initiés par les organisations de santé (Bush et al., 2017). Tous les membres du groupe de travail devraient contribuer à définir la nature exacte de la RPO pour s’assurer que les objectifs sont pertinents du point de vue de toutes les parties prenantes qui seront touchées par les changements ou qui devront les mettre en œuvre.",

      "L’analyse des données et l’interprétation des résultats constituent des éléments essentiels au processus de la RPO. La diversité des membres conférera une profondeur et une rigueur au groupe de travail dans ce domaine. Les universitaires mettent notamment leur expertise à contribution en matière d’analyse de données, et d’autres personnes offrent leur expertise pratique (entre autres exemples).<br /><br /> Une démarche collective d’analyse de données ne signifie pas que tous les membres du groupe de travail participent aux tâches analytiques (p. ex., coder les données qualitatives, effectuer des analyses statistiques). Avec le soutien des universitaires, le groupe de travail peut déterminer les types d’analyses qui sont requises (p. ex., comparaison entre types de participants, changements qui se produisent dans les variables au fil du temps) ou bien formuler des commentaires sur les catégories qualitatives comme les thèmes préliminaires afin d’aider à diriger l’analyse que les universitaires peuvent effectuer.<br /><br /> Il faut travailler de manière itérative, discuter, débattre et réfléchir en tant que groupe. Ces efforts demandent la validation, la confirmation et la compréhension de points de vue différents ainsi que la documentation des réflexions émises et des décisions prises.",

      "Le fait que des changements en termes de pratiques peuvent être apportés au sein de l’organisation de santé dès que le groupe de travail a obtenu des résultats de recherche s’avère un avantage important d’une approche en RPO.<br /><br /> Selon la méthodologie de recherche utilisée, il peut arriver au groupe de travail de prendre des mesures pour améliorer les pratiques en fonction des résultats préliminaires.<br /><br /> Les processus participatifs peuvent engendrer des changements dans le milieu de la pratique et à l’égard des membres de l’organisation de santé, ce qui pourrait à son tour influencer la RPO.<br /><br /> Le groupe de travail doit documenter les changements apportés ou survenus, réfléchir à l’incidence de ces changements sur l’organisation, ses membres et la recherche en soi, réévaluer les objectifs de la RPO de même qu’en fixer des nouveaux lorsque c’est nécessaire ou souhaitable.<br /><br /> Le groupe de travail devrait également planifier et mettre en œuvre un processus permettant d’évaluer les changements apportés."
      ]


  }),

  watch: {
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

<style scoped src="../css/mycss.css">