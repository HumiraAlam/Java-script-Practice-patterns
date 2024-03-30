/*

1
2 2
3   3
4     4
5       5
 

*/

var n=5;
for(i=1;i<=n;i++){
    row=""
    for(j=1;j<=i;j++){
        if(j===1||j===i)
        {row+=j;}else{
            row+=" "
        }
    }
    console.log(row)
}