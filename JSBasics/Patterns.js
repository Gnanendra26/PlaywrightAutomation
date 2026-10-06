/* Print the 4 Square "0"s pattern*/

for (let r=1; r<=3; r++)
{
    row="";
    for(let c=1; c<=5; c++)
    {
        row+="* ";
       
    }
     console.log(row);  
}

console.log("--------------------------");

for(let r=1;r<=4;r++)
    
    {
        rowdata="";
        for(let c=1;c<=r;c++)
            {
                rowdata=rowdata+"* ";

            }
            console.log(rowdata);
    }

