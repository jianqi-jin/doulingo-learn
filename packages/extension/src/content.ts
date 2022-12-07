/**
 * @file content.ts
 * @author jjq
 * @description content.ts
*/

import App, { init, initListenCenter } from './content/ui/App';

const root = document.createElement('div');
root.id = 'doulingo-ext-root';
document.body.appendChild(root);
init(root);

const rootListenCenter = document.createElement('div');
rootListenCenter.id = 'doulingo-ext-root-listen-center';
document.getElementsByClassName('popoverDom')[0].appendChild(rootListenCenter);
initListenCenter(rootListenCenter);
