Component({
  properties: {
    count: {
      type: String,
      value: '0',
      observer: 'checkCount'
    },
    dot: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    // 判断大小
    checkCount() {
      let count = this.data.count;

      if (count > 99) {
        count = '99+'
      }

      this.setData({
        count
      });
    }
  }
});