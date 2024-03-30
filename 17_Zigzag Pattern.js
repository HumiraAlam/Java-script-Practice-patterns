/*

*         *
**       **
***     ***
****   ****
***** *****



*/
let n=5
for (i=1;i<=n;i++){
    var row=""
    for(j=1;j<=i;j++){
        row+="*"
    }
    for(k=i; k<=2*n-i;k++){
        row+=" "
    }
    for(l=1;l<=i;l++){
        row+="*"
    }
    console.log(row)

}