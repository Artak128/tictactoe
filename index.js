 import {foo} from './script.js';
let dof = '';

function func1(params) {
    dof = params;
}

const decorator = (func1) => {
    
  
    return (params) => {
      foo(dof);
      return func1(params);
    };
  };

  let func2 = decorator(func1);

 export {func2};

