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
    substep_number : 8,
    progress : 0 ,
    panel_read : [], //If current step is read.
    panel_select : [], //If current step is selected.
    panel_expand : [], //If current step is expanded.
    panel_comment : [],
    panel_comment_temp : [],
    btn_text : "Expand All",
    btn_show_expand : true,
    title_text : "1. CONSTITUER UN GROUPE DE TRAVAIL EN RPO ET ÉTABLIR COLLECTIVEMENT DES PROCESSUS DE FONCTIONNEMENT. ",
    intro_text : "Toute RPO est menée par un groupe de travail composé des représentants de parties prenantes membres universitaires et membres d’organisations de santé.<br /><br /> Les parties prenantes organisationnelles qui participent à ce groupe de travail devraient représenter tous les types de parties prenantes de l’organisation de santé, c’est-à-dire les représentants de ceux qui devront mettre en œuvre les changements visés par la RPO et les personnes qui représentent ceux touchés par les changements (et leurs répercussions possibles) devraient tous prendre part aux décisions liées à la recherche avec le ou les universitaires tout au long de la RPO.<br /><br /> Des revues de la littérature indiquent que la participation à la prise de décision par les parties prenantes d’organisations de santé peut prendre la forme soit d’une consultation par le ou les universitaires, ou d’une mise en contexte de la RPO en collaboration avec ce ou ces derniers (Bush et al., 2015; Munn-Giddings, McVicar et Smith, 2008). La décision quant à l’ampleur de la participation doit être décidée par le groupe de travail.",

    subheader_text: [
      "1.1. RECRUTER DES REPRÉSENTANTS DES PARTIES PRENANTES QUI ONT UNE EXPÉRIENCE DE TRAVAIL EN GROUPE. ",
      "1.2. RECRUTER DES MEMBRES DU GROUPE DE TRAVAIL QUI PROVIENNENT DE TOUTES LES PARTIES PRENANTES, DONT LA GESTION.",
      "1.3. ÉVALUER ET SATISFAIRE AUX BESOINS EN FORMATION DES MEMBRES DU GROUPE DE TRAVAIL.",
      "1.4. ÉTABLIR DES PROCESSUS DE GESTION DE PROJET.",
      "1.5. PLANIFIER ET TENIR DES RÉUNIONS À INTERVALLES RÉGULIERS.",
      "1.6. S’ASSURER QUE LES RÉUNIONS SONT STRUCTURÉES, CIBLÉES ET ÉVALUÉES.",
      "1.7. S’ENTENDRE SUR DES MÉCANISMES DE COMMUNICATIONS.",
      "1.8. ÉTABLIR DES MÉCANISMES ASSURANT LA CONTINUITÉ.",
    ],

    guide_text: [
      "Les membres du groupe de travail devraient collaborer de bon gré, être disposés à écouter d’autres personnes et accepter de faire des compromis lorsque cela est pertinent et nécessaire.<br /><br /> Les membres du groupe de travail exprimant des opinions divergentes ou qui contestent les objectifs et les processus de la RPO peuvent contribuer de manière pertinente et appropriée.",

      "Tous les types de parties prenantes doivent être représentés au sein du groupe de travail étant donné que les divergences de point de vue entre les membres peuvent accroître la valeur et la pertinence des résultats pour les parties prenantes.<br /><br /> La diversité au sein des parties prenantes est importante. Elle s’obtient notamment par le recrutement de patients dont les caractéristiques socio-économiques, l’âge et l’état de santé diffèrent; également par le recrutement d’universitaires ayant une expérience appropriée en recherche utilisant les méthodes qualitatives, quantitatives ou mixtes.<br /><br /> Les parties prenantes doivent être représentées en effectifs équivalents.<br /><br /> Il peut s’avérer difficile de parvenir à une telle représentation équitable de toutes les parties prenantes, mais ce recrutement ne doit pas freiner le processus RPO. Certains projets de recherche sont mis en branle avec quelques personnes et d’autres personnes peuvent être recrutées après que la RPO ait débuté au sein de l’organisation.<br /><br /> Une participation pertinente des gestionnaires est requise pour l’approbation de la RPO et la mise en œuvre d’activités de changements ainsi que l’affectation des ressources nécessaires au changement.",

      "Il est essentiel que tous les membres du groupe de travail disposent des compétences et des connaissances nécessaires (ou de la possibilité de se former et de se perfectionner) pour pouvoir contribuer efficacement à la RPO.<br /><br /> Les membres du groupe de travail devraient exprimer leurs besoins et déterminer la façon de les satisfaire dès le début d’une RPO.<br /><br /> Pour ce faire, ceci pourrait prendre la forme d’un atelier sur la littératie en recherche offert aux membres non universitaires de l’équipe, une formation de base en RPO pour les universitaires et de tous les autres membres du groupe de travail, une formation sur le développement de compétences d’animation de réunion ou bien un séminaire sur les règles et convenances nécessaires au bon déroulement d’une réunion, entre autres.",

      "Les projets de RPO exigent une certaine gestion et coordination pour, par exemple, planifier des réunions, préparer les ordres du jour, rédiger et distribuer les comptes rendus, et effectuer le suivi auprès des membres du groupe de travail à l’égard de leurs tâches.<br /><br /> Idéalement, ces responsabilités peuvent être partagées entre un membre du groupe qui est universitaire, un qui fait partie de l’organisation de santé et un qui est utilisateur de services. Les responsables doivent avoir les compétences et les connaissances pertinentes, et ont à cœur le succès de la RPO. Cette disposition est particulièrement importante pour permettre le développement de nouveaux projets au sein de l’organisation de santé.<br /><br /> Une gestion de ce genre n’est pas toujours possible ni pratique, et les universitaires assument souvent la gestion de projet. Il est recommandé d’élaborer un plan de relève en vue de confier les responsabilités de la gestion de projet à une personne de l’organisation de santé et à un utilisateur de services pour faciliter la poursuite des travaux.<br /><br /> La direction doit appuyer ces responsables (leaders) afin de s’assurer qu’ils ou elles disposent du temps et des ressources nécessaires pour gérer le projet.<br /><br /> L’appui à l’utilisateur de services qui assume des responsabilités doit inclure un soutien sous forme de compensation financière et de ressources matérielles (p. ex., espace de bureau et fournitures informatiques, entre autres).",

      "Les réunions du groupe de travail s’avèrent essentielles à tout projet RPO puisqu’elles offrent de précieuses occasions aux membres pour discuter, débattre, réfléchir ainsi qu’établir des relations qui contribuent à stimuler le projet et à maintenir sa pertinence auprès de l’organisation de santé. Travailler de manière participative dès la phase de planification du projet, et tenir régulièrement des réunions du groupe de travail, jouent un rôle important dans le cadre du processus de RPO et contribuent à générer des bénéfices au-delà des objectifs initiaux du projet de cette recherche.",

      "Les membres du groupe de travail doivent ressentir que le temps alloué à la réunion est productif. Pour y parvenir, il est possible de commencer chaque réunion en examinant les actions et les effets de la RPO, suivie d’une prise de décisions éclairées à l’égard de démarches ultérieures.<br /><br /> Les ordres du jour devraient être établis et envoyés avant chaque réunion et tous les membres du groupe de travail devraient pouvoir leur apporter des modifications ou ajouts.<br /><br /> Produire et faire circuler un résumé des discussions et des réflexions du groupe de travail peu de temps après chaque réunion est essentiel. Inclure un résumé des décisions prises et des actions à mener accompagné d’instructions et du nom des personnes à qui elles s’appliquent de même qu’un échéancier.<br /><br /> Veiller à ce que les membres du groupe de travail remplissent régulièrement un questionnaire d’évaluation sur le processus de la RPO, réfléchissent aux résultats et mettent en œuvre des moyens afin d’améliorer les procédés relatifs au fonctionnement de groupe, notamment les réunions. Une liste de questionnaires d’évaluation se trouve ici <a href='http://digitool.library.mcgill.ca/webclient/StreamGate?folder_id=0&dvs=1536349314587~470'> http://digitool.library.mcgill.ca/webclient/StreamGate?folder_id=0&dvs=1536349314587~470</a>",

      "Toutes les décisions et les mesures liées à la RPO doivent être rendues explicites, consignées et validées verbalement par tous les membres du groupe de travail. Le fait que l’information a circulé ne permet pas de supposer que tous les membres ont tout compris de la même façon.<br /><br /> Une vérification continue de la compréhension de chacun des membres est nécessaire. Elle s’accomplit notamment en commençant chaque réunion en révisant les notes prises durant la séance précédente.<br /><br /> Il est important de déterminer les moyens de communiquer avec les membres du groupe de travail qui ont manqué des réunions ou avec ceux de l’organisation qui ne participent pas à la RPO. Pour y parvenir, il est possible de tenir un registre au sein de l’organisation de santé ou bien d’afficher l’information sur un babillard en ligne.",

      "Des conflits d’horaire peuvent empêcher certains membres du groupe de travail d’assister à toutes les réunions. De plus, quelques-uns seraient plus disposés à s’impliquer s’ils ont la garantie de ne pas être obligés de participer à chaque séance. Certaines études sur la RPO rapportent que l’ajout de nouveaux membres au groupe de travail pendant le processus de la RPO pourrait être bénéfique, alors que d’autres présentent ce dernier comme un élément perturbateur. Le groupe de travail doit se prononcer sur ce qui convient le mieux à ses membres, et ce qui convient le mieux au projet RPO.<br /><br /> Le groupe de travail doit également mettre en place des moyens de communication pour faire en sorte que tous les membres puissent facilement se tenir informés des activités et participer à la prise de décisions.<br /><br /> Cette mesure pourrait prendre la forme d’un enregistrement vidéo des réunions qui peut être disponible en ligne, et de la distribution par infolettre ou babillard en ligne des comptes rendus des réunions peu de temps après leur tenue.<br /><br /> Le groupe de travail pourrait décider d’emblée de la façon de renouveler les membres (y compris les universitaires) qui pourraient quitter en cours de projet (p. ex., en raison du roulement de personnel, des contraintes professionnelles, de raisons de santé, ou tout simplement d’une insatisfaction à l’égard de la RPO).<br /><br /> Dans l’éventualité où le groupe de travail décide de remplacer les membres qui quittent, il est important de recruter des personnes ayant des compétences équivalentes en plus de provenir du même type de partie prenante."
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