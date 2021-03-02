import {data} from './data';
const combineAge = (arr) => arr.reduce((acc,item)=> acc+=item.age,0);
export const show = (container) => container.innerHTML = combineAge(data);