Page({
  data: {
    fruits: [
      { key: 'banana', value: '香蕉' },
      { key: 'watermelon', value: '西瓜' },
      { key: 'apple', value: '苹果' }
    ],
    custom: [
      { key: 'custom', value: '自定义图标' }
    ],
    color: [
      { key: 'color', value: '自定义颜色' }
    ]
  },
  handleChange(e) {
    console.log(e.detail);
  }
})