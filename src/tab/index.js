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
    },
    count: {
      type: Number,
      value: 0
    },
    dot: {
      type: Boolean,
      value: false
    },
    scroll: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    updateChildCurrent(isCur) {
      this.setData({
        isCur
      });
    },
    updateChildScroll(scroll) {
      this.setData({
        scroll
      });
    },
    updateChildColor(color) {
      this.setData({
        color
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