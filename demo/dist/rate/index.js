Component({
  properties: {
    checkedIcon: {
      type: String,
      value: 'star-fill'
    },
    icon: {
      type: String,
      value: 'star'
    },
    number: {
      type: Number,
      value: 5
    },
    size: {
      type: Number,
      value: 14
    },
    color: {
      type: String,
      value: '#faad14'
    },
    readOnly: {
      type: Boolean,
      value: false
    },
    value: {
      type: Number,
      value: 0
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },
  data: {
    curTarget: 0
  },
  attached(){
    this.setData({
      curTarget: this.data.value
    });
  },
  observers: {
    'curTarget': function(curTarget) {
      const arr = [];
      const { number } = this.data;
      let i =0;

      for(i;i<number;i++) {
        if (i < curTarget) {
          arr.push(true);
        } else {
          arr.push(false);
        }
      }

      this.setData({
        rateList: arr
      });
    }
  },
  methods: {
    selectQuery(selector) {
      return new Promise((resolve) => {
        const query = wx.createSelectorQuery().in(this);
        query.selectAll(selector).boundingClientRect((rect) => {
          if (rect.length) {
            resolve(rect)
          }
        }).exec();
      })
    },
    handleTouchmove(e) {
      if (this.data.disabled) {
        return;
      }

      const { clientX, clientY } = e.touches[0];

      this.selectQuery('.d-rate-item').then(list => {
        list.forEach((item, index) => {
          if(clientX >= item.left && clientX <= item.right && clientY >= item.top && clientY <= item.bottom) {
            this.setCurTarget(index + 1);
          }
        });
      });
    },

    handleClick(e) {
      if (this.data.disabled) {
        return;
      }
      const index = e.currentTarget.dataset.index;
      this.setCurTarget(index + 1);
    },

    setCurTarget(num) {
      this.setData({
        curTarget: num
      });
      this.triggerEvent('change', num);
    }
  }
})