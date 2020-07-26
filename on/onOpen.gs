const P=ParametrsV6.P
const R=P.R
const match = R.curry((what, s) => s.match(what));
var NoLabel=R.complement(match(/.*_label/))
const w=()=>{console.log(NoLabel("status"))}
const ListOfMenu={
  title:'Меню',
  items:[['name','functionName'],
    ["🥑Создать Меню","CreateMenuList"],
    ['⚡️Создать Диапазон','RemoveMenu'],
    ['🎉Создать Лист Настройки','createParametrsActive'],
   // ['🔥Создать Лист Меню','createMenuSheet']
   ],
 
}
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  const entries=P.toObject(ListOfMenu.items)
   sheet.addMenu(ListOfMenu.title, entries);
  };
  
const DEF_NumberRowLabel=()=>'_'
const DEF_Parametrs=()=>['Настройки','Parametrs','Values','Default','Description']
function createParametrsActive(){
createParametrs(SpreadsheetApp.getActiveSpreadsheet())

}
function createParametrs(){
const ss=SpreadsheetApp.openById(ssID)
console.log(ss.getName())
var def=DEF_Parametrs()
const name=def.shift()
const sheet=!(new Set(ss.getSheets().map(sh=>sh.getName())).has(name))?ss.insertSheet(name):ss.insertSheet()
} 
function uuid() {
  return Utilities.getUuid();
}
const setRendomNameRangeActive=(ssID)=>{
setRendomNameRange(SpreadsheetApp.getActiveSpreadsheet())
}
const setRendomNameRange=(ssID)=>{
const name=uuid().replace(/-/g,"_")
const ss=SpreadsheetApp.openById(ssID)
const range=ss.getActiveCell()
return ss.setNamedRange(name, range)
}

