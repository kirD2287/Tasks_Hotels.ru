let result = ''
function multiplicationTable (numb) {
    for (let i = 1; i <= numb; i++) {
        for (let j = 1; j <= numb; j++) {
            result += (j*i)+ " "
                
        }
        
        console.log(result)
        result = ''
    } 
     
}
   

multiplicationTable (5)
