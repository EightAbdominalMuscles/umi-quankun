export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('demo bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    console.log('demo mount', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('demo unmount', props);
  },
};