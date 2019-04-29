Component({
  options: {
    multipleSlots: true
  },
  properties: {
    
  },
  methods: {
    handleInput(e) {
      console.log(e);
    },
    handleFocus(e) {
      console.log(e)
    },
    handleBlur(e) {
      console.log(e);
    },
    handleConfirm() {
      console.log('我点击了搜索');
    }
  }
});