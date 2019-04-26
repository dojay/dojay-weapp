Component({
  relations: {
    "../radio/index": {
      type: 'child'
    }
  },
  methods: {
    changeCurrent(value) {
      const childs = this.getRelationNodes('../radio/index');

      if(childs.length > 0) {
        childs.forEach(item => {
          item.changeChildCurrent(item.data.value === value);
        });
      }
    },
    emitEvent(value) {
      this.changeCurrent(value);
      this.triggerEvent('change', value)
    }
  }
});