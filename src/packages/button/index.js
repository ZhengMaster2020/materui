import MsButton from './src/button';

/* istanbul ignore next */
MsButton.install = function(Vue) {
  Vue.component(MsButton.name, MsButton);
};

export default MsButton;
