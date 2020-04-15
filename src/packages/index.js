const install = (Vue) => {
  // 把所有的组件设置成全局组件
  // Vue.component(Button.name, Button);
  // Vue.component(ButtonGroup.name, ButtonGroup);
  // Vue.component(Icon.name, Icon);
  // require.context()
  const requireComponent = require.context('.', true, /\.vue/);
  // requireComponent.keys() // 文件路径的数组
  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName)
    // console.log(config)
    Vue.component(config.default.name, config.default);
  });
}
export default {
  install
}