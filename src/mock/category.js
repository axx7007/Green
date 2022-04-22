import {data} from '../mock/data'
var len1 = data.length;
var len2 = data.filter((value)=>value.category=='House Plants').length;
var len3 = data.filter((value)=>value.category=='Potter Plants').length;
var len4 = data.filter((value)=>value.category=='Seeds').length;
var len5 = data.filter((value)=>value.category=='Small Plants').length;
var len6 = data.filter((value)=>value.category=='Big Plants').length;
var len7 = data.filter((value)=>value.category=='Succulents').length;
var len8 = data.filter((value)=>value.category=='Trerrariums').length;
var len9 = data.filter((value)=>value.category=='Gardening').length;
var len10 = data.filter((value)=>value.category=='Accessories').length;
export const category = [
    
    { id: 1, name: 'House Plants', much: len2 },
    { id: 2, name: 'Potter Plants', much: len3 },
    { id: 3, name: 'Seeds', much: len4 },
    { id: 4, name: 'Small Plants', much: len5 },
    { id: 5, name: 'Big Plants', much: len6 },
    { id: 6, name: 'Succulents', much: len7 },
    { id: 7, name: 'Trerrariums', much: len8 },
    { id: 8, name: 'Gardening', much: len9 },
    { id: 9, name: 'Accessories', much: len10 },
  ];