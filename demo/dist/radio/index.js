Component({
  relations: {
    "../radio-group/index": {
      type: 'parent'
    }
  },
  properties: {
    name: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#999'
    },
    activedColor: {
      type: String,
      value: '#36CFC9'
    }
  },
  methods: {
    handleChange(e) {
      const parent = this.getRelationNodes('../radio-group/index')[0];

      if (parent) {
        const value = e.currentTarget.dataset.value || '';
        const checked = e.currentTarget.dataset.checked;

        if (checked) {
          parent.emitEvent('');
        } else {
          parent.emitEvent(value);
        }
      }
    },
    changeChildCurrent(checked) {
      this.setData({
        checked
      });
    }
  }
});