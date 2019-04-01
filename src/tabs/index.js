Component({
  relations: {
    "../tab/index": {
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
    key: {
      type: String,
      value: ''
    },
    current: {
      type: String,
      value: '',
      observer: 'changeCurrent'
    },
    scroll: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    changeCurrent(key=this.data.current) {
      const childs = this.getRelationNodes('../tab/index');
      const len = childs.length;

      if (len ===0) return;

      childs.forEach((item) => {
        item.updateChildCurrent(item.data.key === key)
      })
    },
    emitEvent(key) {
      this.triggerEvent('change', { key })
    }
  }
});