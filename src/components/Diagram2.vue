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
            // OR: Scroll to show a particular node, once the layout has determined where that node is
            // "InitialLayoutCompleted": function(e) {
            //  var node = e.diagram.findNodeForKey(28);
            //  if (node !== null) e.diagram.commandHandler.scrollToPart(node);
            // },
            layout:
              $(go.TreeLayout,  // use a TreeLayout to position all of the nodes
                {
                  isOngoing: false,  // don't relayout when expanding/collapsing panels
                  treeStyle: go.TreeLayout.StyleLastParents,
                  // properties for most of the tree:
                  angle: 0,
                  layerSpacing: 80,
                  // properties for the "last parents":
                  alternateAngle: 0,
                  alternateAlignment: go.TreeLayout.AlignmentStart,
                  alternateNodeIndent: 15,
                  alternateNodeIndentPastParent: 1,
                  alternateNodeSpacing: 15,
                  alternateLayerSpacing: 40,
                  alternateLayerSpacingParentOverlap: 1,
                  alternatePortSpot: new go.Spot(0.001, 1, 20, 0),
                  alternateChildPortSpot: go.Spot.Left
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
            $(go.Panel, "Horizontal",
              { margin: 8 },
              $(go.Picture,  // flag image, only visible if a nation is specified
                { margin: this.mr8, visible: false, desiredSize: new go.Size(50, 50) },
                new go.Binding("source", "nation", this.theNationFlagConverter),
                new go.Binding("visible", "nation", function(nat) { return nat !== undefined; }),
              ),
              $(go.Panel, "Table",
                $(go.TextBlock,
                  {
                    row: 0, alignment: go.Spot.Left,
                    font: "16px Roboto, sans-serif",
                    stroke: "rgba(0, 0, 0, .87)",
                    maxSize: new go.Size(160, NaN)
                  },
                  new go.Binding("text", "name")
                ),
                $(go.TextBlock, this.textStyle("title"),
                  {
                    row: 1, alignment: go.Spot.Left,
                    maxSize: new go.Size(160, NaN)
                  },
                  new go.Binding("text", "title")
                ),
                $("PanelExpanderButton", "INFO",
                  { row: 0, column: 1, rowSpan: 2, margin: this.ml8 }
                )
              ),
            ),
            $(go.Shape, "LineH",
              {
                stroke: "rgba(0, 0, 0, .60)", strokeWidth: 1,
                height: 1, stretch: go.GraphObject.Horizontal
              },
              new go.Binding("visible").ofObject("INFO")  // only visible when info is expanded
            ),
            $(go.Panel, "Vertical",
              {
                name: "INFO",  // identify to the PanelExpanderButton
                stretch: go.GraphObject.Horizontal,  // take up whole available width
                margin: 8,
                defaultAlignment: go.Spot.Left,  // thus no need to specify alignment on each element
              },
              $(go.TextBlock, this.textStyle("headOf"),
                new go.Binding("text", "headOf", function(head) { return "Head of: " + head; })
              ),
              $(go.TextBlock, this.textStyle("boss"),
                new go.Binding("margin", "headOf", function() { return this.mt8; }), // some space above if there is also a headOf value
                new go.Binding("text", "boss", function(boss) {
                  var boss2 = myDiagram.model.findNodeDataForKey(boss);
                  if (boss2 !== null) {
                    return "Reporting to: " + boss2.name;
                  }
                  return "";
                })
              )
            )
          )
        );

    myDiagram.linkTemplate =
        $(go.Link, go.Link.Orthogonal,
          { corner: 5, selectable: false },
          $(go.Shape, { strokeWidth: 3, stroke: "#424242" }));  // dark gray, rounded corner links

    myDiagram.model =
      $(go.TreeModel,
        {
          nodeParentKeyProperty: "boss",  // this property refers to the parent node data
          nodeDataArray: this.modelData,
        });

    this.diagram = myDiagram;

    // this.updateModel(this.modelData);
  },
  watch: {
    modelData: function(val) { this.updateModel(val); }
  },
  methods: {
    model: function() { return this.diagram.model; },

    textStyle(field) {
      return [
        {
          font: "12px Roboto, sans-serif", stroke: "rgba(0, 0, 0, .60)",
          visible: false  // only show textblocks when there is corresponding data for them
        },
        new go.Binding("visible", field, function(val) { return val !== undefined; })
      ];
    },

      // define Converters to be used for Bindings
    theNationFlagConverter(nation) {
      return "https://www.nwoods.com/images/emojiflags/" + nation + ".png";
    }
  }
}
</script>

<style scoped>
.lean {
  height: 100%;
  width: 100%;
}
</style>