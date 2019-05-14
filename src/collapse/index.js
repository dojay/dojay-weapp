Component({
  relations: {
    '../collapse-group/index': {
      type: 'parent'
    }
  },
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    name: {
      type: String,
      value: ''
    }
  },
  data: {
    isLast: false,
    animation: null,
    height: 0,
    open: false
  },
  created() {
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease-in-out'
    });
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
    changeChildCurrent(activeNames, accordion) {
      const {name} = this.data;
      const accordionOpen = this.data.open ? !this.data.open : activeNames[0] === name;
      const open = accordion ? accordionOpen : activeNames.some(item => item === name);
      
      this.changeHeight(open);
    },
    changeHeight(open) {
      this.selectQuery('.d-collapse-content').then(res => {
        const height = open ? res.height : 0;
        
        this.animation.height(height).step();
        this.setData({
          open,
          animation: this.animation.export()
        });
      });
    },
    updateChildLast(isLast) {
      this.setData({
        isLast
      });
    },
    onClick() {
      const parent = this.getRelationNodes('../collapse-group/index')[0];
      if (parent) {
        parent.emitEvent(this.data.name);
      }
    }
  },
});