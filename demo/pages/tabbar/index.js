Page({
  data: {
    currentKey: 'home'
  },
  onChange(e) {
    const key = e.detail.key;
    this.setData({
      currentKey: key
    });
  }
});