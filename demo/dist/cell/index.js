Component({
  relations: {
    '../cell-group/index': {
      type: 'parent'
    }
  },
  options: {
    multipleSlots: true // 多个slot，设置为true，否则不生效
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: ''
    },
    custom: {
      type: Boolean,
      value: false
    },
    showLink: {
      type: Boolean,
      value: false
    },
    url: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      vaule: ''
    }
  },
  data: {
    isLast: true
  },
  methods: {
    updateChildLastCell(isLast) {
      this.setData({
        isLast
      });
    },
    // 跳转事件
    navigate() {
      const url = this.data.url;

      if (url === '') return;

      wx.navigateTo({
        url
      })
    },
    // 整行的点击事件
    handleTap() {
      this.navigate();
    }
  }
});