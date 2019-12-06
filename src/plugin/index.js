import List from './components/list';
import Form from './components/form';
import Upload from './components/upload';
import Util from './libs/util';

const sm = {
  SmList: List,
  SmForm: Form,
  SmUpload: Upload
}


const install = function (Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(sm).forEach(key => {
    Vue.component(key, sm[key]);
  });

  Vue.prototype.$smUtil = Util;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


const API = {
  version: process.env.VERSION,
  install,
  ...sm
}

export default API;
