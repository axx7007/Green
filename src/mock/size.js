import { data } from "./data"
var len1=data.filter((value)=>value.size==="Small").length;
var len2=data.filter((value)=>value.size==="Medium").length;
var len3=data.filter((value)=>value.size==="Large").length;
export const size = [
    {id: 1, title: 'Small', count:len1},
    {id: 2, title: 'Medium', count: len2},
    {id: 3, title: 'Large', count: len3},

]