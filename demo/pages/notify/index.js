import Notify from '../../dist/notify/notify';

Page({
  handleSuccess() {
    Notify({
      type: 'success',
      content: '我成功了哦'
    });
  },
  handleWarning() {
    Notify({
      type: 'warning',
      content: '我是警告哦'
    });
  },
  handleFail() {
    Notify({
      type: 'error',
      content: '我是错误'
    });
  },
  handleLoading() {
    Notify({
      type: 'loading',
      content: '我是加载'
    });
  }
});