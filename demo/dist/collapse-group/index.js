Component({
  relations: {
    '../collapse/index': {
      type: 'child'
    },
    linked() {
      this.changeCurrent();
    },
    linkChanged() {
      this.changeCurrent();
    },
    unlinked() {
      this.changeCurrent();
    }
  },
  ready() {
    this.changeCurrent();
  },
  properties: {
    activeNames: {
      type: Array,
      value: [],
      observer: 'changeCurrent'
    },
    accordion: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    changeCurrent() {
      const { activeNames, accordion } = this.data;
      const child = this.getRelationNodes('../collapse/index');

      if (child.length === 0) {
        return;
      }

      child.forEach((item, index) => {
        const isLast = index === child.length - 1;
        item.changeChildCurrent(activeNames, accordion);
        item.updateChildLast(isLast);
      });
    },

    emitEvent(name) {
      const { activeNames, accordion } = this.data;
      const index = activeNames.indexOf(name);
      if (accordion) {
        const len = activeNames.length;
        activeNames.splice(0, len, name);
      } else {
        if (index > -1) {
          activeNames.splice(index, 1);
        } else {
          activeNames.push(name);
        }
      }

      this.triggerEvent('change', activeNames );
    }
  },
})