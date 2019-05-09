Component({
  properties: {
    duration: {
      type: Number,
      value: 10
    },
    bgColor: {
      type: String,
      value: '#FFFFCC'
    },
    color: {
      type: String,
      value: '#f5222d'
    },
    leftIcon: {
      type: String,
      value: 'sound'
    },
    value: {
      type: 'String',
      value: ''
    },
    mode: {
      type: String,
      value: ''
    }
  },
  ready() {
    this.initAnimation();
  },
  detached() {
    this.destroyTimer();
  },
  data: {
    animationData: {},
    timer: null,
    boxWidth: 0,
    width: 0
  },
  methods: {
    selectQuery(selector) {
      return new Promise((resolve) => {
        const query = wx.createSelectorQuery().in(this);

        query.select(selector).boundingClientRect((rect) => {
          if (rect) {
            resolve(rect);
          }
        }).exec();
      })
    },

    initAnimation() {
      const { duration } = this.data;

      this.selectQuery('.d-notice-bar-box').then(boxRes => {
        this.selectQuery('.d-notice-bar-txt').then( res => {

          this.setData({
            boxWidth: boxRes.width,
            width: res.width
          });

          const animation = wx.createAnimation({
            duration: duration * 1000,
            timingFunction: 'linear',
            delay: 0
          });

          this.animation = animation;

          this.startAnimation();
        });
      });
    },

    startAnimation() {
      const { boxWidth, width, duration } = this.data;

      if(this.animation.option.transition.duration !== 0) {
        this.animation.option.transition.duration = 0;
        this.animation.translateX(boxWidth).step();

        this.setData({
          animationData: this.animation.export()
        });
      }

      this.animation.option.transition.duration = duration * 1000;
      this.animation.translateX(-width).step();

      setTimeout(() => {
        this.setData({
          animationData: this.animation.export()
        });
      }, 100);

      const timer = setTimeout(() => {
        this.startAnimation();
      }, duration * 1000);

      this.setData({
        timer
      });
    },

    destroyTimer() {
      if(this.data.timer) {
        clearTimeout(this.data.timer);
      }
    }
  }
})