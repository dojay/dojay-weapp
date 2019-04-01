Page({
  data: {
    currentKey: 'all'
  },
  onChange(e) {
    const key = e.detail.key;
    this.setData({
      currentKey: key
    });
  }
})