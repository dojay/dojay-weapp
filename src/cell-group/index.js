Component({
  relations: {
    '../cell/index': {
      type: 'child',
      linked() {
        this.updateLastCell();
      },
      linkChanged() {
        this.updateLastCell();
      },
      unlinked() {
        this.updateLastCell();
      }
    }
  },
  methods: {
    updateLastCell() {
      const childs = this.getRelationNodes('../cell/index');
      const cellLen = childs.length;

      if (cellLen === 0) return;
      
      childs.forEach((item, index) => {
        item.updateChildLastCell(index === cellLen - 1);
      });
    }
  }
});