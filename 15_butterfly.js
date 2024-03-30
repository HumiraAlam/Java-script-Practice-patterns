/*

*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        *


*/

let n=5;
for(i=1;i<=n;i++){
    let rows=""
    for(j=1;j<=i;j++){
        rows+="*"
    }
    for(k=1;k<=2*n-2*i;k++){
        
        rows+=" "
    }
    for(l=1;l<=i;l++){
        rows+="*"
    }
    console.log(rows)
}


for(i=n;i>=1;i--){
    let rows=""
    for(j=1;j<=i;j++){
        rows+="*"
    }
    for(k=1;k<=2*n-2*i;k++){
        
        rows+=" "
    }
    for(l=1;l<=i;l++){
        rows+="*"
    }
    console.log(rows)
}
   