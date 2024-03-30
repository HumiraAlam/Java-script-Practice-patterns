/*


*        *
 *      * 
  *    *  
   *  *   
    **    


*/

let n=5
for (i=1;i<=n;i++){
    var row=""
    for(j=1;j<=i;j++){
        if(j===i)
            {row+="*"}else{
                row+=" "
            }
    }
    for(k=i; k<=2*n-i;k++){
        
            row+=" "
    }
    for(l=1;l<=i;l++){

        if(l===1)
            {row+="*"}
            else{
                row+=" "
            }
    }
    console.log(row)

}