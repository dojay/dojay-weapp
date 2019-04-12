Page({
  data: {
    currentKey: 'home',
    list: [
      {
        title: '布局',
        list: [
          { name: 'Layout 布局', url: '/pages/layout/index' },
          { name: 'Grid 宫格', url: '/pages/grid/index' },
          { name: 'List 列表', url: '/pages/list/index' },
          { name: 'Panel 面板', url: '/pages/panel/index' },
          { name: 'Card 卡片', url: '/pages/card/index' }
        ]
      }, {
        title: '基础组件',
        list: [
          { name: 'Button 按钮', url: '/pages/button/index' },
          { name: 'Icon 图标', url: '/pages/icon/index' }
        ]
      }, {
        title: '导航',
        list: [
          { name: 'Tabbar 标签栏', url: '/pages/tabbar/index'},
          { name: 'Tabs 标签页', url: '/pages/tabs/index'},
          { name: 'Badge 徽章', url: '/pages/badge/index'}
        ]
      }, {
        title: '操作提示',
        list: [
          { name: 'Toast 轻提示', url: '/pages/toast/index'},
          { name: 'Modal 对话框', url: '/pages/modal/index'},
          { name: 'Notify 消息通知', url: '/pages/notify/index'}
        ]
      }
    ]
  },
  onChange(e) {
    const key = e.detail.key;
    this.setData({
      currentKey: key
    });
  }
})