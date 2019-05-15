Component({
  properties: {
    value: {
      type: Number,
      value: 0,
      observer: 'checkValue'
    },
    min: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: 100
    },
    plusDisabled: {
      type: Boolean,
      value: false
    },
    minusDisabled: {
      type: Boolean,
      value: false
    }
  },
  attached() {
    this.checkValue();
  },
  methods: {
    handlePlus() {
      const { value, max } = this.data;

      if (value >= max) {
        return;
      }

      this.setValue(value + 1);
    },
    handleMinus() {
      const { value, min } = this.data;

      if (value <= min) {
        return;
      }

      this.setValue(value - 1);
    },
    handleInput(e) {
      const value = Number(e.detail.value);
      const { min, max } = this.data;

      if (value <= min) {
        this.setValue(min);
        return;
      }
      if (value >= max) {
        this.setValue(max);
        return;
      }
      
      this.setValue(value);
    },
    checkValue() {
      const { value } = this.data;
      const { min, max } = this.data;

      if (value <= min) {
        this.setDisabled('minusDisabled', true);
        return;
      } else {
        this.setDisabled('minusDisabled', false);
      }

      if (value >= max) {
        this.setDisabled('plusDisabled', true);
        return;
      } else {
        this.setDisabled('plusDisabled', false);
      }
    },
    setDisabled(type, bool) {
      this.setData({
        [type]: bool
      });
    },
    setValue(value) {
      this.setData({
        value
      });
      this.triggerEvent('change', value);
    }
  },
});