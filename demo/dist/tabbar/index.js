Component({
  relations: {
    '../tabbar-item/index': {
      type: 'child',
      linked() {
        this.changeCurrent();
      },
      linkChanged() {
        this.changeCurrent();
      },
      unlinked() {
        this.changeCurrent();
      }
    }
  },
  properties: {
    current: {
      type: String,
      value: '',
      observer: 'changeCurrent'
    },
    activeColor: {
      type: String,
      value: '#36CFC9'
    },
    color: {
      type: String,
      value: '#999'
    },
    fixed: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    changeCurrent(key = this.data.current) {
      const childs = this.getRelationNodes('../tabbar-item/index');
      const activeColor = this.data.activeColor || '#36CFC9';
      const color = this.data.color || '#999';

      childs.forEach(item => {
        const isCur = item.data.key === key;
        item.changeChildCurrent(isCur);
        item.changeChildColor(isCur ? activeColor : color);
      });
    },
    emitEvent(key) {
      this.triggerEvent('change', { key })
    }
  }
});