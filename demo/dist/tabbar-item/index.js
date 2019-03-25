Component({
  properties: {
    iconName: {
      type: String,
      value: ''
    },
    iconSize: {
      type: String,
      value: '16'
    },
    title: {
      type: String,
      value: ''
    },
    key: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    }
  },
  relations: {
    '../tabbar/index': {
      type: 'parent'
    }
  },
  methods: {
    onClick() {
      const parent = this.getRelationNodes('../tabbar/index')[0];
      if (parent) {
        parent.emitEvent(this.data.key);
      }
    },
    changeChildCurrent(isCur) {
      this.setData({
        isCur
      });
    },
    changeChildColor(color) {
      this.setData({
        color
      });
    }
  }
})