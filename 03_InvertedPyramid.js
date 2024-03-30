/*
Inverted Pyramid Pattern
*********
 *******
  *****
   ***
    *

*/

let n=5;
for(i=1;i<=n;i++){
    var row=""
    for(j=1;j<=i;j++){
        row+=" "
    }
    for(k=2*n-i;k>=i;k--){
        row+="*"
    }
    
    console.log(row)
    }


