import Toast from '../../dist/toast/toast';

Page({
  handleSuccess() {
    Toast({
      type: 'success',
      content: '成功'
    });
  },
  handleFail() {
    Toast({
      type: 'error',
      content: '失败'
    });
  },
  handleLoading() {
    Toast({
      type: 'success',
      content: '我是内容我是内容'
    });
  },
  handleIcon() {
    Toast({
      type: 'success',
      content: '有图标'
    });
  },
  handleNoIcon() {
    Toast({
      content: '没有图标'
    });
  },
  handle5Seconds() {
    Toast({
      type: 'success',
      content: '持续5秒再消失',
      duration: 5
    });
  }
});