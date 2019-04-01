Component({
  relations: {
    "../tabs/index": {
      type: "parent"
    }
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    key: {
      type: String,
      value: ''
    }
  },
  methods: {
    updateChildCurrent(isCur) {
      this.setData({
        isCur
      });
    },
    onClick() {
      const parent = this.getRelationNodes('../tabs/index')[0];
      if (parent) {
        parent.emitEvent(this.data.key);
      }
    }
  }
})