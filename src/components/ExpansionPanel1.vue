<template>
  <v-card
    class="mb-12">
      <v-progress-linear
        v-model="progress"
        color="third"
        buffer-value="0"
        value="20"
        stream
        class="my-2"
        height="15px"
      ><div style="color:white">{{progress}}%</div></v-progress-linear>

      <v-row justify="center">
        <v-expansion-panels inset multiple focusable>
          <v-expansion-panel
            :key="1">
            <v-expansion-panel-header disable-icon-rotate>
              1.1. RECRUTER DES REPRÉSENTANTS DES PARTIES PRENANTES QUI ONT UNE 
EXPÉRIENCE DE TRAVAIL EN GROUPE. 
            <template v-slot:actions>
              <v-icon color="teal">mdi-check</v-icon>
            </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Les membres du groupe de travail devraient collaborer de bon gré, être disposés à écouter 
d’autres personnes et accepter de faire des compromis lorsque cela est pertinent et nécessaire.<br /><br />
Les membres du groupe de travail exprimant des opinions divergentes ou qui contestent les 
objectifs et les processus de la RPO peuvent contribuer de manière pertinente et appropriée.   
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            :key="2">
            <v-expansion-panel-header>1.2. RECRUTER DES MEMBRES DU GROUPE DE TRAVAIL QUI PROVIENNENT DE TOUTES 
LES PARTIES PRENANTES, DONT LA GESTION.</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Tous les types de parties prenantes doivent être représentés au sein du groupe de travail étant 
donné que les divergences de point de vue entre les membres peuvent accroître la valeur et la 
pertinence des résultats pour les parties prenantes. <br /><br />
La diversité au sein des parties prenantes est importante. Elle s’obtient notamment par le 
recrutement de patients dont les caractéristiques socio-économiques, l’âge et l’état de santé 
diffèrent; également par le recrutement d’universitaires ayant une expérience appropriée en 
recherche utilisant les méthodes qualitatives, quantitatives ou mixtes. <br /><br />
Les parties prenantes doivent être représentées en effectifs équivalents. <br /><br />
Il peut s’avérer difficile de parvenir à une telle représentation équitable de toutes les parties 
prenantes, mais ce recrutement ne doit pas freiner le processus RPO. Certains projets de 
recherche sont mis en branle avec quelques personnes et d’autres personnes peuvent être 
recrutées après que la RPO ait débuté au sein de l’organisation. <br /><br />
Une participation pertinente des gestionnaires est requise pour l’approbation de la RPO et la 
mise en œuvre d’activités de changements ainsi que l’affectation des ressources nécessaires au 
changement. 
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            :key="3">
            <v-expansion-panel-header>1.3. ÉVALUER ET SATISFAIRE AUX BESOINS EN FORMATION DES MEMBRES DU GROUPE 
DE TRAVAIL.</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Il est essentiel que tous les membres du groupe de travail disposent des compétences et des 
connaissances nécessaires (ou de la possibilité de se former et de se perfectionner) pour 
pouvoir contribuer efficacement à la RPO.<br /><br />
Les membres du groupe de travail devraient exprimer leurs besoins et déterminer la façon de 
les satisfaire dès le début d’une RPO. <br /><br />
Pour ce faire, ceci pourrait prendre la forme d’un atelier sur la littératie en recherche offert aux 
membres non universitaires de l’équipe, une formation de base en RPO pour les universitaires 
et de tous les autres membres du groupe de travail, une formation sur le développement de 
compétences d’animation de réunion ou bien un séminaire sur les règles et convenances 
nécessaires au bon déroulement d’une réunion, entre autres.   
            </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            :key="4">
            <v-expansion-panel-header>1.4. ÉTABLIR DES PROCESSUS DE GESTION DE PROJET.</v-expansion-panel-header>
            <v-expansion-panel-content>
              Les projets de RPO exigent une certaine gestion et coordination pour, par exemple, planifier des 
réunions, préparer les ordres du jour, rédiger et distribuer les comptes rendus, et effectuer le 
suivi auprès des membres du groupe de travail à l’égard de leurs tâches. <br /><br />
Idéalement, ces responsabilités peuvent être partagées entre un membre du groupe qui est 
universitaire, un qui fait partie de l’organisation de santé et un qui est utilisateur de services. Les 
responsables doivent avoir les compétences et les connaissances pertinentes, et ont à cœur le 
succès de la RPO. Cette disposition est particulièrement importante pour permettre le 
développement de nouveaux projets au sein de l’organisation de santé. <br /><br />
Une gestion de ce genre n’est pas toujours possible ni pratique, et les universitaires assument 
souvent la gestion de projet. Il est recommandé d’élaborer un plan de relève en vue de confier 
les responsabilités de la gestion de projet à une personne de l’organisation de santé et à un 
utilisateur de services pour faciliter la poursuite des travaux. <br /><br />
La direction doit appuyer ces responsables (leaders) afin de s’assurer qu’ils ou elles disposent du 
temps et des ressources nécessaires pour gérer le projet. <br /><br />
L’appui à l’utilisateur de services qui assume des responsabilités doit inclure un soutien sous 
forme de compensation financière et de ressources matérielles (p. ex., espace de bureau et 
fournitures informatiques, entre autres). 
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            :key="5">
            <v-expansion-panel-header>1.5. PLANIFIER ET TENIR DES RÉUNIONS À INTERVALLES RÉGULIERS.
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Les réunions du groupe de travail s’avèrent essentielles à tout projet RPO puisqu’elles offrent de 
précieuses occasions aux membres pour discuter, débattre, réfléchir ainsi qu’établir des 
relations qui contribuent à stimuler le projet et à maintenir sa pertinence auprès de 
l’organisation de santé. Travailler de manière participative dès la phase de planification du 
projet, et tenir régulièrement des réunions du groupe de travail, jouent un rôle important dans 
le cadre du processus de RPO et contribuent à générer des bénéfices au-delà des objectifs 
initiaux du projet de cette recherche. 
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            :key="6">
            <v-expansion-panel-header>1.6. S’ASSURER QUE LES RÉUNIONS SONT STRUCTURÉES, CIBLÉES ET ÉVALUÉES.</v-expansion-panel-header>
            <v-expansion-panel-content>
              Les membres du groupe de travail doivent ressentir que le temps alloué à la réunion est 
productif. Pour y parvenir, il est possible de commencer chaque réunion en examinant les 
actions et les effets de la RPO, suivie d’une prise de décisions éclairées à l’égard de démarches 
ultérieures. <br /><br />
Les ordres du jour devraient être établis et envoyés avant chaque réunion et tous les membres 
du groupe de travail devraient pouvoir leur apporter des modifications ou ajouts. <br /><br />
Produire et faire circuler un résumé des discussions et des réflexions du groupe de travail peu de 
temps après chaque réunion est essentiel. Inclure un résumé des décisions prises et des actions 
à mener accompagné d’instructions et du nom des personnes à qui elles s’appliquent de même 
qu’un échéancier. <br /><br />
Veiller à ce que les membres du groupe de travail remplissent régulièrement un questionnaire 
d’évaluation sur le processus de la RPO, réfléchissent aux résultats et mettent en œuvre des 
moyens afin d’améliorer les procédés relatifs au fonctionnement de groupe, notamment les 
réunions. Une liste de questionnaires d’évaluation se trouve ici 
<a href="http://digitool.library.mcgill.ca/webclient/StreamGate?folder_id=0&dvs=1536349314587~470"> http://digitool.library.mcgill.ca/webclient/StreamGate?folder_id=0&dvs=1536349314587~470</a>
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
  
  }),

  watch: {
    },

  methods: {
    },
};
</script>
