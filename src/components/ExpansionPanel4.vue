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
    title_text : "4. VEILLER COLLECTIVEMENT À L’ÉTABLISSEMENT ET À L’ENTRETIEN DES RELATIONS AU SEIN DU GROUPE DE TRAVAIL.",
    intro_text : "Établir et entretenir des relations parmi les membres du groupe de travail peut prendre du temps et nécessite un effort constant. Cependant, cette étape est essentielle. Il n’est pas toujours possible de consacrer beaucoup de temps et d’énergie à bâtir ces relations en raison des horaires conflictuels et des exigences de la recherche (p. ex., les échéanciers et cycles de financement). En conséquence, il est important de mettre en œuvre des activités facilitant la création et le maintien de bonnes relations entre les membres.",
    subheader_text: [
      "4.1. ASSURER LA RÉCIPROCITÉ, LA CONFIANCE ET LE RESPECT AU SEIN DU GROUPE DE TRAVAIL.",
      "4.2. RECONNAÎTRE EXPLICITEMENT CE QU’APPRENNENT MUTUELLEMENT LES MEMBRES DU GROUPE DE TRAVAIL.",
      "4.3. VEILLER À CE QUE LES DIFFÉRENCES DE POUVOIR POTENTIELLES, RÉELLES OU APPRÉHENDÉES PARMI LES MEMBRES DU GROUPE DE TRAVAIL SOIENT RECONNUES ET ABORDÉES.",
      "4.4. VEILLER À CE QUE LES ATTENTES DE CHAQUE MEMBRE DU GROUPE DE TRAVAIL SOIENT EXPRIMÉES ET COMPRISES",
      "4.5. ABORDER, DÉFINIR ET CLARIFIER LES RÔLES ET LES RESPONSABILITÉS LIÉS À LA RPO ET LES ATTRIBUER À CHAQUE MEMBRE DU GROUPE DE TRAVAIL.",
      "4.6. ABORDER, DÉFINIR ET CLARIFIER LES RÈGLES D’ÉTHIQUE POUR COLLECTER, STOCKER ET ANALYSER LES DONNÉES.",
      "4.7. ABORDER, DÉFINIR ET CLARIFIER LES RÈGLES POUR L’ACCÈS ET LA DIFFUSION DE DOCUMENTS ET DE PUBLICATIONS DE RECHERCHE SCIENTIFIQUE.",
      "4.8. ABORDER ET CLARIFIER DÈS LE DÉPART LES BÉNÉFICES DE PARTICIPATION EN RPO POUR TOUS LES MEMBRES DU GROUPE DE TRAVAIL.",
      "4.9. FAIRE PREUVE DE TRANSPARENCE QUANT AUX DÉFIS QUI PEUVENT SE POSER ET DÉTERMINER LA FAÇON DE LES RELEVER.",
      "4.10. ABORDER, DÉFINIR ET CLARIFIER LA MANIÈRE DONT LES MEMBRES DU GROUPE DE TRAVAIL DEVRAIENT ÊTRE DÉDOMMAGÉS.",
      "4.11. PRÉPARER UN DOCUMENT EXPOSANT LES LIGNES DIRECTRICES DE LA RPO DÈS LA MISE EN CONTEXTE DE LA RECHERCHE.",
    ],
    guide_text: [
      "Les membres du groupe de travail doivent cultiver et entretenir une atmosphère de compréhension et respect mutuels.<br /><br /> Le climat du groupe de travail doit faire en sorte que les membres se sentent à l’aise d’exprimer leurs pensées ou leurs sentiments concernant la RPO.<br /><br /> Pour ce faire, voici quelques suggestions: signer des ententes de confidentialité, organiser des exercices visant à renforcer le travail d’équipe, tenir des rencontres en prenant un repas pour le plaisir (avant, pendant ou après les réunions) ou bien s’appeler par prénom plutôt que par titre de civilité (p. ex., « Dr », « Professeur »).",

      "Pour favoriser l’engagement, les membres du groupe de travail doivent exprimer régulièrement leur reconnaissance à l’égard des contributions des autres et exprimer de façon explicite ce qu’ils ont appris entre eux.<br /><br /> Voici quelques suggestions envisageables pour y arriver : allouer un temps précis à cet aspect dans l’ordre du jour des réunions, attribuer à un membre du groupe de travail la tâche de noter les principales forces soulignées et d’en faire part lors d’une prochaine réunion, remercier les membres au moyen de cartes de vœux et d’appels téléphoniques.",

      "Les différences de pouvoir parmi les membres du groupe de travail sont inévitables, qu’elles soient réelles ou perçues. Le groupe doit mettre tous les membres sur un pied d’égalité et s’efforcer d’atteindre l’équité en termes de participation aux discussions par exemple.<br /><br /> Le groupe doit explicitement permettre de s’assurer que tous les membres soient mis sur le même pied en termes de leur expertise (académique, professionnelle ou expérientielle) et jouissent d’autant de pouvoir, d’emprise et d’influence dans le cadre du projet RPO, et ce, peu importe leurs rôles, à l’extérieur de cette recherche.<br /><br /> Le groupe devrait effectuer au besoin des évaluations sur sa transparence et son équité avec des outils validés pendant le projet de RPO dans une optique d’amélioration continue.",

      "Les attentes de tous les membres du groupe de travail devraient être explicites et comprises par les autres. Cela peut comprendre des discussions et des prises de décision transparentes concernant les échéanciers du projet, les engagements en temps exigés et la façon dont les activités de RPO cadreront avec les horaires de tous ceux et celles qui y participent. La source de financement et les exigences connexes doivent être rendues explicites, en même temps que les résultats attendus et les livrables. Il pourrait être utile d’établir des jalons et de les distribuer par écrit au besoin. Le groupe de travail doit rester flexible et agile pour modifier ou prioriser les objectifs spécifiques du projet RPO afin de répondre aux attentes du groupe qui peuvent évoluer au fil du temps et du renouvellement de ses membres.",

      "Le groupe de travail doit définir les rôles qu’il faut exercer en matière de RPO et des responsabilités qui lui sont connexes.<br /><br /> Il pourrait s’agir, entre autres choses, de décider qui sera responsable des comptes rendus et de l’échéancier de leur distribution, de l’analyse des données et la façon de communiquer les résultats, ou de la communication des résultats (à qui, quand, comment).<br /><br /> Il n’est pas nécessaire que tous les membres du groupe de travail exercent un rôle de leader ou soient responsables de tâches spécifiques.<br /><br /> Le dédoublement des rôles ou la rivalité entre les membres du groupe de travail devraient faire l’objet de discussions en toute transparence et être rendus explicites, de même que les conflits d’intérêts, le cas échéant.",

      "Le groupe de travail doit définir et savoir comment gérer les données sensibles et confidentielles. Par exemple, il est nécessaire de rendre anonymes toutes les données agrégées et les résultats des analyses avant leur communication au groupe de travail.",

      "Tous les membres du groupe de travail doivent avoir accès aux outils de recherche, aux documents, aux données et aux autres matériels. Il reste à leur discrétion de décider d’utiliser les outils ou non.<br /><br /> Les lignes directrices sur la publication des résultats de la RPO devraient être élaborées et consenties dans une entente écrite entre les membres du groupe de travail, notamment lorsque le groupe décide de ne pas appliquer les normes académiques habituelles (p. ex., la « Politique des 3 conseils scientifiques » au Canada).<br /><br /> Tous les membres du groupe de travail méritent la même reconnaissance pour leurs contributions à la RPO s’ils le souhaitent.<br /><br /> Les exigences en matière de propriété intellectuelle, de collaboration et de remerciements dans les publications et les présentations (de travaux universitaires ou autres) doivent être discutées et les décisions adoptées par consensus en réunion (consensus et décision inscrits dans le compte rendu de réunion). Elles devraient être négociées et consenties dans une entente écrite entre les membres du groupe de travail lorsque le groupe décide de ne pas appliquer les normes académiques habituelles.<br /><br /> Les contributions des membres du groupe de travail dans les publications et les présentations doivent être décrites.",

      "Les membres du groupe de travail de la RPO bénéficient de leur participation de diverses façons. Par exemple, les patients peuvent bénéficier de connaissances qu’ils acquièrent par l’intermédiaire de la RPO au sujet de leur état de santé et la raison d’être de certaines pratiques en matière de soins, les praticiens peuvent améliorer leurs relations de travail avec les autres membres de l’organisation de santé, les relations qu’établissent les patients et les praticiens peuvent être bénéfiques pour leurs interactions, et tous les membres du groupe de travail peuvent ressentir un gain de confiance ou une amélioration des compétences en leadership.<br /><br /> Il importe également de clarifier ce qui ne pourra pas être réalisé par l’intermédiaire de la RPO. Il pourrait s’agir, entre autres choses, de préciser que la RPO ne permet pas de régler les problèmes cliniques ou sociaux propres aux membres du groupe de travail.",

      "Il est important d’établir un moyen pour les membres du groupe de travail d’exprimer leurs préoccupations ou bien les doléances qu’ils peuvent avoir sur le plan éthique, pratique, théorique ou méthodologique (ou autre) au fur et à mesure que la RPO avance.<br /><br /> Notamment, les défis peuvent comprendre les risques de conflits d’intérêts dans les relations entre patient et praticien, les relations tendues dans un milieu de travail ou les divergences d’opinions sur la signification des résultats.<br /><br /> Par exemple, les suggestions suivantes pourraient permettre de relever ces défis : rapporter plus d’une interprétation de résultats dans les publications (p. ex., faire preuve de transparence sur les divergences), communiquer avec l’ombudsman de l’université, ou faire appel à un comité d’éthique indépendant de l’établissement dans lequel la RPO a été approuvée.<br /><br /> Le groupe de travail doit déterminer des mécanismes ou procédures permettant de traiter les dissensions entre les membres (idéalement avant que toute dissension survienne). Il est parfois nécessaire de faire appel à un arbitre.",

      "Le dédommagement doit être inclus dans la planification de la RPO (p. ex., une demande de financement ou d’approbation éthique).<br /><br /> Par exemple, la suggestion suivante peut aider : établir un budget pour que les utilisateurs de services reçoivent une compensation financière pour leur temps et pour les dépenses engagées relatives à leur participation (p. ex., stationnement, garde d’enfants, repas), et prévoir des honoraires et remboursements pour les praticiens qui doivent prendre congé de leurs obligations professionnelles et assumer des dépenses pour participer aux activités de la RPO.<br /><br /> Le dédommagement versé aux différents membres du groupe de travail peut être assujetti aux règlements institutionnels et cela devrait être explicite d’entrée de jeu.",

      "Les décisions du groupe de travail relatives aux recommandations formulées dans ce guide de pratique devraient être énoncées dans un document exposant les lignes directrices de la RPO.<br /><br /> Tous les membres du groupe de travail devraient souscrire par écrit à ces principes (ou pourraient donner leur consentement éclairé dans une réunion lorsque cela est formellement présenté, discuté et consigné dans un compte rendu de réunion).<br /><br /> Les lignes directrices peuvent être modifiées dans le cadre de la RPO, mais il importe que le groupe de travail produise d’entrée de jeu un document exposant les principes directeurs de leur projet RPO."
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