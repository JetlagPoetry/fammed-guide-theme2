<template>
  <div class='lean'>
    <div id="diagram" style="height: 400px;width: 400px"></div>
    <div id="toolTipDIV" style="position: absolute; background: lightblue; z-index: 1000; display: none;">
    <p id="toolTipParagraph">Tooltip</p>
  </div>
  </div>
</template>

<script>
import go from 'gojs';
export default {
  name: "Diagram",
  data: () => ({

    diagram: ''
  }),

  mounted () {
    const GO = go.GraphObject.make
    this.diagram = GO(go.Diagram, 'diagram')
    let myToolTip = GO(go.HTMLInfo, {
      show: this.showToolTip,
      hide: this.hideToolTip
    })
    this.diagram.nodeTemplate =
      GO(go.Node, 'Auto',
        {
          toolTip: myToolTip
        },
        GO(go.Shape, 'RoundedRectangle', { strokeWidth: 0},
          new go.Binding('fill', 'color')),
        GO(go.TextBlock,
          { margin: 8 },
          new go.Binding('text', 'key'))
      )
    this.diagram.model = new go.GraphLinksModel(
    [
      { key: 'Alpha', color: 'lightblue' },
      { key: 'Beta', color: 'orange' },
      { key: 'Gamma', color: 'lightgreen' },
      { key: 'Delta', color: 'pink' },
      { key: 'ABCDE', color: 'lightgreen' },
      { key: 'FASFAS', color: 'pink' }
    ])
  },
  methods: {
    showToolTip(obj, diagram) {
      let toolTipDIV = document.getElementById('toolTipDIV')
      var pt = diagram.lastInput.viewPoint
      toolTipDIV.style.left = (pt.x + 10) + 'px'
      toolTipDIV.style.top = (pt.y + 10) + 'px'
      document.getElementById('toolTipParagraph').textContent = 'Tooltip for: ' + obj.data.key
      toolTipDIV.style.display = 'block'
    },
    hideToolTip() {
      let toolTipDIV = document.getElementById('toolTipDIV')
      toolTipDIV.style.display = 'none'
    },

  }
};
</script>

<style scoped>
.lean {
  height: 100%;
  width: 100%;
}
</style>