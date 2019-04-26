Component({
  relations: {
    '../checkbox/index': {
      type: 'child'
    }
  },
  data: {
    checkedArr: []
  },
  methods: {
    emitEvent(value) {
      const index = this.data.checkedArr.indexOf(value);
      const arr = this.data.checkedArr;

      if (index === -1) {
        arr.push(value);
      } else {
        arr.splice(index, 1);
      }

      this.setData({
        checkedArr: arr
      })
      this.triggerEvent('change', [...arr])
    }
  }
});