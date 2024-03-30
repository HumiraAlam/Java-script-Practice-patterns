/*
    *    
   * *   
  *   *  
 *     * 
*********

*/

let n=5;
for(i=1;i<=n;i++){
    var row=""
    for(j=n ;j>=i ;j--){

        row+=" "

    }
    for(k=1 ;k<=(i*2) ; k++){
        row+="*"
        
    }
    for(l=0 ;l<= i; l++){
        row+=" "
    }
    console.log(row)
}