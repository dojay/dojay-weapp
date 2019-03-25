Component({
  relations: {
    "../grid-item/index": {
      type: 'child',
      linked() {
        this.renderBorder();
      },
      linkChanged() {
        this.renderBorder();
      },
      unlinked() {
        this.renderBorder();
      }
    }
  },
  properties: {
    // 是否显示border
    border: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    renderBorder() {
      const childs = this.getRelationNodes('../grid-item/index');
      const childsLen = childs.length;

      if (childsLen === 0) return;

      if (this.data.border) {
        childs.forEach(item => {
          item.renderChildBorder();
        })
      }
    }
  }
});