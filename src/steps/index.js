Component({
  properties: {
    steps: {
      type: Array,
      value: []
    },
    active: {
      type: Number,
      value: 3
    },
    activeColor: {
      type: String,
      value: '#36CFC9'
    },
    icon: {
      type: String,
      value: 'circle-fill'
    },
    activeIcon: {
      type: String,
      value: 'circle-fill'
    },
    vertical: {
      type: Boolean,
      value: false
    }
  }
});