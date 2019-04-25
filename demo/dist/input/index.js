Component({
  properties: {
    icon: {
      type: String,
      value: ''
    },
    label: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请输入...'
    },
    clearable: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: ''
    }
  },
  data: {
    value: ''
  },
  methods: {
    handleClear() {
      this.setData({
        value: ''
      });
    },
    handleInput(e) {
      this.setData({
        value: e.detail.value
      });
      this.triggerEvent('change', e.detail.value);
    }
  }
});