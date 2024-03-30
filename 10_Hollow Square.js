/*

*****
*   *
*   *
*   *
*****

*/

var n=5;
for(let i=1;i<=n;i++){
    var row="";
    for(let j=1;j<=n;j++){
        if(i===1 || j===1 || i===n ||j===n){
            row+= "*";

        }else{
            row+=" "
        }
        
    }
    console.log(row)
}