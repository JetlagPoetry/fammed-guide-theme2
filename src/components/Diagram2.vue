<template>
  <div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import go from 'gojs';
export default {

  name: "Diagram2",

  data: () => ({
    diagram: '',
    roundedRectangleParams: '',
  }),

  props: ["modelData"],

  mounted: function() {
    let $ = go.GraphObject.make;
    this.roundedRectangleParams = {
      parameter1: 2,
      spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight
    };
    var myDiagram = $(go.Diagram, this.$el,

      {
        initialDocumentSpot: go.Spot.TopCenter,
        initialViewportSpot: go.Spot.TopCenter,
        hasVerticalScrollbar:false,
        padding: new go.Margin(56,0,56,0),
        isReadOnly: true,
        "ViewportBoundsChanged": function() {
          myDiagram.allowHorizontalScroll = false;
          myDiagram.allowVerticalScroll = false;
        },
        "InitialLayoutCompleted": function(e) {
            var dia = e.diagram;
            dia.div.style.height = (dia.documentBounds.height+24) + "px";
        },
        layout:
          $(go.TreeLayout, 
            {
              angle: 0,
              alignment: go.TreeLayout.AlignmentStart,
              nodeIndent: 20,
              nodeIndentPastParent: 1,
              nodeSpacing: 25,
              layerSpacing: 80,
              layerSpacingParentOverlap: 1,
              arrangementSpacing: new go.Size(0,50),
              portSpot: new go.Spot(0.001, 1, 20, 0),
              childPortSpot: go.Spot.Left
            })
      });
    myDiagram.toolManager.panningTool.isEnabled = false;

    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
          {
            locationSpot: go.Spot.TopCenter,
            isShadowed: true, shadowBlur: 1,
            shadowOffset: new go.Point(1, 1),
            shadowColor: "rgba(0, 0, 0, .14)",
            selectionAdornmentTemplate:
              $(go.Adornment, "Auto",
                $(go.Shape, "RoundedRectangle", this.roundedRectangleParams,
                  { fill: null, stroke: "#7986cb", strokeWidth: 1 }
                ),
                $(go.Placeholder)
              )
          },
          $(go.Shape, "RoundedRectangle", this.roundedRectangleParams,
            { name: "SHAPE", fill: "#ffffff", strokeWidth: 1, stroke: "#adadad" },
          ),
          $(go.Panel, "Vertical",
            { maxSize: new go.Size(600, Infinity), },

            $(go.Panel, "Horizontal",
              { maxSize: new go.Size(600, Infinity), padding: 12},
              $(go.Picture, 
                { source: "selected.png", width: 20, height: 20},
                new go.Binding("visible", "", function(data){ return data.selected&&!data.isParent;})
              ),
              $(go.TextBlock,
                {
                  font: "12px Roboto, sans-serif",
                  wrap: go.TextBlock.WrapFit,
                  isMultiline: true,
                  maxSize: new go.Size(550, Infinity)
                },
                new go.Binding("text", "substep"),
                new go.Binding("stroke", "selected", function(selected){ return selected ? "#424242":"#adadad"})
              )
            ),
            $(go.Shape, "LineH",
              {
                stroke: "rgba(0, 0, 0, .60)", strokeWidth: 1,
                height: 1, stretch: go.GraphObject.Horizontal
              },
              new go.Binding("visible", "", function(data) { return data.comment!=""&&!data.isParent})
            ),
            $(go.TextBlock, 
            {
                font: "12px Roboto, sans-serif",
                stroke: "rgba(0, 0, 0, .87)",
                maxSize: new go.Size(160, Infinity),
                width: 300,
              },
              {
                maxSize: new go.Size(160, Infinity)
              },
              new go.Binding("text", "comment"),
              new go.Binding("visible", "comment", function(comment) { return comment!==""&&comment!==undefined;}),
            ),
          ),
        );

    myDiagram.linkTemplate =
        $(go.Link, go.Link.Orthogonal,
          { corner: 5, selectable: false },
          $(go.Shape, { strokeWidth: 3, stroke: "#424242" }),
          );
    myDiagram.model =
      $(go.TreeModel,
        {
          nodeParentKeyProperty: "parent",
          nodeDataArray: this.modelData,
        });
    this.diagram = myDiagram;
  },
  watch: {
  },
  methods: {
    model: function() {
     return this.diagram.model;
    },

    ...mapMutations([
            'updateTest'
          ])
  }
}
</script>

<style scoped>

</style>