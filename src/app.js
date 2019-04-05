console.log('[entry] app');
import(/* webpackChunkName: 'foo' */ './foo').then(mod => console.log(mod.default));
import(/* webpackChunkName: 'bar' */ './bar').then(mod => console.log(mod.default));