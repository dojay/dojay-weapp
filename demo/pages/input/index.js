Page({
  data: {
    phoneNum: ''
  },
  handleChange(e) {
    const value = e.detail;
    this.setData({
      phoneNum: value
    });
  }
})