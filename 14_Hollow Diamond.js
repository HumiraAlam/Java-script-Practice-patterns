/*
    *    
   * *   
  *   *  
 *     * 
*       * 
 *     * 
  *   *  
   * *   
    *    
*/

let n=5;
for(i=1;i<=n;i++){
    let rows=""
    for(j=1;j<=n-i;j++){
        rows+=" "
    }
    for(k=1;k<=2*i-1;k++){
        if(k==1 || k===2*i-1)
        {
        rows+="*"}
        else{
            rows+=" "
        }
    }
    for(l=1;l<=n-i;l++){
        rows+=" "
    }
    console.log(rows)
}


for(i=4;i>=1;i--){
    let rows=""
    for(j=1;j<=n-i;j++){
        rows+=" "
    }
    for(k=1;k<=2*i-1;k++){
        if(k==1 || k===2*i-1)
        {
        rows+="*"}
        else{
            rows+=" "
        }
    }
    for(l=1;l<=n-i;l++){
        rows+=" "
    }
    console.log(rows)
}

   