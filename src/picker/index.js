Component({
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    data: {
      type: Array,
      value: []
    },
    index: {
      type: Number,
      value: 0
    },
    value: {
      type: String,
      value: ''
    },
    rightArrow: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    bindPickerChange(e) {
      const index = e.detail.value;
      const { data } = this.data;

      this.setData({
        value: data[index],
        index
      });

      this.triggerEvent('change', value);
    }
  }
})