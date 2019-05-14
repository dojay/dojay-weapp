Component({
  properties: {
    bgColor: {
      type: String,
      value: '#e5e5e5'
    },
    activeColor: {
      type: String,
      value: '#36CFC9'
    },
    progress: {
      type: Number,
      value: 0,
      observer: "watchNum"
    },
    showNumber: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    watchNum() {
      if( Number(this.data.progress) > 100) {
        this.setData({
          progress: 100
        });
      }
    }
  },
});