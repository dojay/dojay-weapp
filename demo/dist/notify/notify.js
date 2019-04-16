const defaultOptions = {
  visible: false,
  duration: 2.5,
  type: '',
  content: '',
  selector: '#notify'
}

let timer = null;

function getCurPage() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

function selectComp(selector) {
  return getCurPage().selectComponent(selector);
}

function Notify(options) {
  if (timer) {
    clearTimeout(timer);
  }
  
  options = Object.assign({}, defaultOptions, options, {visible: true});

  const notify = selectComp(options.selector);

  notify.setData({
    ...options
  });

  timer = setTimeout(() => {
    hideNotify(notify);
  }, options.duration * 1000);
}

function hideNotify(notify) {
  notify.setData({
    visible: false
  });
  if (timer) {
    clearTimeout(timer);
  }
}

export default Notify;