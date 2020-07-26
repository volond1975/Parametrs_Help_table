
function myFunction() {
  console.log(P.version())
  const ssId=SpreadsheetApp.getActive().getId()
  const formaCnf={
  ssId:ssId,
  name:'forma',
    }
    const ss=SpreadsheetApp.openById(ssId)   
    const topCell=P.getTopCell({ name: formaCnf.name, ss:ss })
    const ranges=P.getRanges({topCell:topCell})

 var values=P.getValues(ranges) 
 console.log(values)
 var objects=P.getObjects(ranges.topCell,values,ranges.dataRange.getA1Notation()) 
 console.log(JSON.stringify(objects))
 //var NoLabel=R.complement(math(/.*_label/));//(el)=>{return !math(/.*_label/,el.Parametrs)}
 var forma=objects['objDataAndHeaders']
 var formaFilter=forma.arrObj.filter(el=>NoLabel(el.Parametrs))
 console.log(forma.A1Not)
 console.log(JSON.stringify(formaFilter))
 ////Требуется объект в виде:{rg1:'A1Notation String',rg2:'A1Notation String'}
 
var editRangeA1="Форма!A4"
console.log(P.getListObjects(formaCnf.ssId))
 
//var t=Object.keys(result).map(el=>P.calculateIntersection({rg1:result[el],rg2:'A1Notation String'}))
// P.calculateIntersection=
   // const values=P.getValues(ranges['topCell'].getValues())
   // const f=P.CONFIG(formaCnf)
}
