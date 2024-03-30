/*
*********
 *     *
  *   *
   * *
    *

*/
var n=5
for(i=1;i<=n;i++){
    var row=""
    for(j=1 ;j<=n-i ; j++){
        row+=" "
    }
    for(k=1 ;k<=2*i-1 ; k++){
        if(k===1 || k===2*i-1 || i===n){
            row+="*"

        }else{
            row+=" ";
        }
        
    }
    console.log(row)
   }