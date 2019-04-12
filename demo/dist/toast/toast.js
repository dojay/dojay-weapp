const defaultOptions = {
  visible: false,
  type: '',
  icon: '',
  content: '',
  duration: 2,
  selector: '#toast'
}

let timer = null;

function getCurPage() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

function selectComp(selector) {
  return getCurPage().selectComponent(selector);
}

function Toast(options) {
  options = Object.assign({}, defaultOptions, options, {visible: true});

  const toast = selectComp(options.selector);

  toast.setData({
    ...options
  });
  
  timer = setTimeout(() => {
    hideToast(toast);
  }, options.duration * 1000);
  
  return toast;
}

function hideToast(toast) {
  toast.setData({
    ...defaultOptions
  });
  if (timer) {
    clearTimeout(timer);
  }
}

export default Toast;