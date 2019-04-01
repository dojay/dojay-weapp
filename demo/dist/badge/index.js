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
    },
    finalyCount: {
      type: String,
      value: ''
    }
  },
  methods: {
    // 判断大小
    checkCount() {
      let count = this.data.count;
      let finalyCount = '';

      if (count > 99) {
        finalyCount = '99+'
      } else {
        finalyCount = count;
      }

      this.setData({
        finalyCount
      });
    }
  }
});