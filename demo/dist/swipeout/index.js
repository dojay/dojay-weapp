Component({
  properties: {
    leftAction: {
      type: Array,
      value: []
    },
    rightAction: {
      type: Array,
      value: []
    }
  },
  data: {
    left: 0,
    right: 0,
    clientX: 0
  },
  methods: {
    handleTouchmove(e) {
      const { clientX } = e.touches[0];
      if (clientX - this.data.clientX > 0) {
      }
      this.setData({
        clientX
      });
    }
  }
})