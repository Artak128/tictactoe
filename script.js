import { submitType } from "./Helpers/submitType/index.js";
import { submitValue } from "./Helpers/submitValue/index.js";
import { PlayerClick} from "./Helpers/PlayerClick/index.js";

let data = {
  indexForBackground: "",
  indexForGameType: "",
  area:{
    item1:'',
    item2:'',
    item3:'',
    item4:'',
    item5:'',
    item6:'',
    item7:'',
    item8:'',
    item9:'',
  },
};

document.addEventListener("click", (e)=>{submitType(e,data)});
document.addEventListener("click", (e)=>{submitValue(e,data)});
document.addEventListener("click", (e)=>{PlayerClick(e,data)});
