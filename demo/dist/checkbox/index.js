Component({
  relations: {
    "../checkbox-group/index": {
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
      const parent = this.getRelationNodes('../checkbox-group/index')[0];

      if (parent) {
        const value = e.currentTarget.dataset.value || '';
        parent.emitEvent(value);
      }
      
      this.setData({
        checked: !this.data.checked
      });
    }
  }
});