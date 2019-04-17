Component({
  properties: {
    visible: {
      type: Boolean,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    btnActions: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleCloseModal() {
      this.setData({
        visible: false
      });
    },
    handleClick(e) {
      const index = e.currentTarget.dataset.index;
      this.triggerEvent('click', index);
    }
  }
});