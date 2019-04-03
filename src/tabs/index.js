Component({
  relations: {
    "../tab/index": {
      type: 'child',
      linked() {
        this.changeCurrent();
        this.isScroll();
      },
      linkChanged() {
        this.changeCurrent();
        this.isScroll();
      },
      unlinked() {
        this.changeCurrent();
        this.isScroll();
      }
    }
  },
  properties: {
    key: {
      type: String,
      value: ''
    },
    current: {
      type: String,
      value: '',
      observer: 'changeCurrent'
    },
    scroll: {
      type: Boolean,
      value: false,
      observer: 'isScroll'
    },
    activeColor: {
      type: String,
      value: '#36CFC9'
    }
  },
  methods: {
    changeCurrent(key=this.data.current) {
      const childs = this.getRelationNodes('../tab/index');
      const len = childs.length;
      const activeColor = this.data.activeColor;

      if (len ===0) return;

      childs.forEach((item) => {
        let curColor = item.data.key === key ? activeColor : '';

        item.updateChildCurrent(item.data.key === key);
        item.updateChildColor(curColor);
      });
    },
    isScroll() {
      const childs = this.getRelationNodes('../tab/index');
      const len = childs.length;

      if (len ===0) return;

      if(len > 5) {
        this.setData({
          scroll: true
        });
      } else {
        this.setData({
          scroll: false
        });
      }

      childs.forEach((item) => {
        item.updateChildScroll(this.data.scroll)
      });
    },
    emitEvent(key) {
      this.triggerEvent('change', { key });
    }
  }
});