Component({
  options: {
    multipleSlots: true
  },
  properties: {
    
  },
  methods: {
    handleInput(e) {
      this.triggerEvent('input', e);
    },
    handleFocus(e) {
      this.triggerEvent('focus', e);
    },
    handleBlur(e) {
      this.triggerEvent('blur', e);
    },
    handleConfirm() {
      this.triggerEvent('confirm', e);
    }
  }
});