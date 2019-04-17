Page({
  data: {
    visible1: false,
    visible2: false,
    visible3: false,
    btnActions1: [
      {
        name: '取消',
        color: '#f00'
      }, {
        name: '确定',
        color: '#36CFC9'
      }
    ],
    btnActions2: [
      {
        name: '我知道了'
      }
    ]
  },

  handleTwo() {
    this.setData({
      visible1: true
    });
  },

  handleModal1(e) {
    const index = e.detail; 
    if (index === 0) {
      this.setData({
        visible1: false
      });
    } else if (index === 1) {
      console.log(index, '我点击了1');
    }
  },

  handleOne() {
    this.setData({
      visible2: true
    });
  },

  handleModal2(e) {
    const index = e.detail; 
    if (index === 0) {
      this.setData({
        visible2: false
      });
    }
  },

  handleTitle() {
    this.setData({
      visible3: true
    });
  }
});