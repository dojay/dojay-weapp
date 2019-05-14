Page({
  data: {
    activeNames: ['1'],
    activeNames1: ['3']
  },
  handleChange(e) {
    this.setData({
      activeNames: e.detail
    });
  },
  handleChange1(e) {
    this.setData({
      activeNames1: e.detail
    });
  }
})