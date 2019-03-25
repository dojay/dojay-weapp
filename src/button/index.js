Component({
  properties: {
    title: {
      type: String,
      value: '按钮'
    },
    size: {
      type: String,
      value: '' // long、small、default
    },
    color: {
      type: String,
      value: '' // red、green、yellow、blue、purple
    },
    type: {
      type: String,
      value: '' // round
    },
    empty: {
      type: Boolean,
      value: false,
      observer: "isEmpty"
    },
    emptyColor: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ''
    },
    line: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    isEmpty() {
      if (this.data.empty) {
        const color = this.data.color;
        if (color !== '') {
          this.setData({
            emptyColor: `empty-${color}`
          });
        } else {
          this.setData({
            emptyColor: 'empty'
          });
        }
      }
    }
  }
});