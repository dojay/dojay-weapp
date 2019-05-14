Component({
  relations: {
    "../grid/index": {
      type: 'parent',
    }
  },
  properties: {
    // icon 名字
    icon: {
      type: String,
      value: ''
    },
    // icon 颜色
    iconColor: {
      type: String,
      value: ''
    },
    // icon 大小
    iconSize: {
      type: Number,
      value: 14
    },
    // title
    title: {
      type: String,
      value: ''
    },
    // title 颜色
    titleColor: {
      type: String,
      value: '#888'
    },
    // title 大小
    titleSize: {
      type: Number,
      value: 16
    },
    border: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    renderChildBorder() {
      this.setData({
        border: true
      })
    }
  }
})