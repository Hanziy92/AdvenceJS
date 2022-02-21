'use strict'

// const myModuls = require('./main');

// const myModuleIns = new myModuls();

// myModuleIns.hello();
// myModuleIns.goodbye();



//  ІПОРТ ФАЙЛІВ РІЗНИМИ СПОСОБАМИ

// import {one, two} from './main';
// console.log(`${one} and ${two}`);


// import {one as first} from './main';
// console.log(first);


// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

import sayHi from './main.js';
sayHi();