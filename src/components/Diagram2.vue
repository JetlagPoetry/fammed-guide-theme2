<template>
  <div>
  </div>
</template>

<script>
import go from 'gojs';
export default {
  name: "Diagram2",
  data: () => ({
    diagram: '',
    mt8: '',
    mr8: '',
    ml9: '',
    roundedRectangleParams: '',
  }),
  props: ["modelData"],
  mounted: function() {
    let $ = go.GraphObject.make;
    this.mt8 = new go.Margin(8, 0, 0, 0);
    this.mr8 = new go.Margin(0, 8, 0, 0);
    this.ml8 = new go.Margin(0, 0, 0, 8);
    this.roundedRectangleParams = {
      parameter1: 2,  // set the rounded corner
      spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  // make content go all the way to inside edges of rounded corners
    };
    var myDiagram = $(go.Diagram, this.$el,  // the DIV HTML element
      

          {
            // Put the diagram contents at the top center of the viewport
            initialDocumentSpot: go.Spot.LeftCenter,
            initialViewportSpot: go.Spot.LeftCenter,
            hasVerticalScrollbar:false,
            // OR: Scroll to show a particular node, once the layout has determined where that node is
            // "InitialLayoutCompleted": function(e) {
            //  var node = e.diagram.findNodeForKey(28);
            //  if (node !== null) e.diagram.commandHandler.scrollToPart(node);
            // },
            layout:
              $(go.TreeLayout,  // use a TreeLayout to position all of the nodes
                {
                  // isOngoing: false,  // don't relayout when expanding/collapsing panels
                  // treeStyle: go.TreeLayout.StyleLastParents,
                  // // properties for most of the tree:
                  // angle: 0,
                  // layerSpacing: 80,
                  // alignment: go.TreeLayout.AlignmentStart,
                  // // properties for the "last parents":
                  // alternateAngle: 0,
                  // // alternateAlignment: go.TreeLayout.AlignmentTopLeftBus,
                  // alternateNodeIndent: 15,
                  // alternateNodeIndentPastParent: 1,
                  // alternateNodeSpacing: 50,
                  // alternateLayerSpacing: 40,
                  // alternateLayerSpacingParentOverlap: 1,
                  // alternatePortSpot: new go.Spot(0.001, 1, 20, 0),
                  // alternateChildPortSpot: go.Spot.Left
                  angle: 0,
                  alignment: go.TreeLayout.AlignmentStart,
                  nodeIndent: 40,
                  nodeIndentPastParent: 1,
                  nodeSpacing: 30,
                  layerSpacing: 80,
                  layerSpacingParentOverlap: 1,
                  portSpot: new go.Spot(0.001, 1, 20, 0),
                  childPortSpot: go.Spot.Left
                })
          });
    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
          {
            locationSpot: go.Spot.TopCenter,
            isShadowed: true, shadowBlur: 1,
            shadowOffset: new go.Point(0, 1),
            shadowColor: "rgba(0, 0, 0, .14)",
            selectionAdornmentTemplate:  // selection adornment to match shape of nodes
              $(go.Adornment, "Auto",
                $(go.Shape, "RoundedRectangle", this.roundedRectangleParams,
                  { fill: null, stroke: "#7986cb", strokeWidth: 3 }
                ),
                $(go.Placeholder)
              )  // end Adornment
          },
          $(go.Shape, "RoundedRectangle", this.roundedRectangleParams,
            { name: "SHAPE", fill: "#ffffff", strokeWidth: 0 },
            // bluish if highlighted, white otherwise
            new go.Binding("fill", "isHighlighted", function(h) { return h ? "#e8eaf6" : "#ffffff"; }).ofObject()
          ),
          $(go.Panel, "Vertical",
            { maxSize: new go.Size(500, NaN), },
                $(go.TextBlock,
                  {
                    font: "16px Roboto, sans-serif",
                    stroke: "rgba(0, 0, 0, .87)",
                    maxSize: new go.Size(500, NaN),
                    margin: 12
                  },
                  new go.Binding("text", "substep")
                ),
                $(go.Shape, "LineH",
                  {
                    stroke: "rgba(0, 0, 0, .60)", strokeWidth: 1,
                    height: 1, stretch: go.GraphObject.Horizontal
                  },
                  new go.Binding("visible", "comment", function(comment) { return comment!==""&&comment!==undefined;})
                ),
                $(go.TextBlock, 
                {
                    font: "12px Roboto, sans-serif",
                    stroke: "rgba(0, 0, 0, .87)",
                    maxSize: new go.Size(160, NaN),
                    width: 300,
                  },
                  {
                    maxSize: new go.Size(160, NaN)
                  },
                  new go.Binding("text", "comment"),
                  new go.Binding("visible", "comment", function(comment) { return comment!==""&&comment!==undefined;}),
                ),
              ),
        );

    myDiagram.linkTemplate =
        $(go.Link, go.Link.Orthogonal,
          { corner: 5, selectable: false },
          $(go.Shape, { strokeWidth: 3, stroke: "#424242" }));  // dark gray, rounded corner links
    myDiagram.model =
      $(go.TreeModel,
        {
          nodeParentKeyProperty: "parent",  // this property refers to the parent node data
          nodeDataArray: this.modelData,
        });
    this.diagram = myDiagram;
    // this.updateModel(this.modelData);
  },
  watch: {
    // modelData: function(val) { this.updateModel(val); }
  },
  methods: {
    model: function() { return this.diagram.model; }
  }
}
</script>

<style scoped>

</style>