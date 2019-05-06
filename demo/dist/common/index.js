/**
 * 一些公共方法
 */

function selectQuery(selector) {
  const query = wx.createSelectorQuery().in(this);

  query.select(selector).boundingClientRect( (res) => {
    console.log(res, '1111');
  })
}


export {
  selectQuery
}