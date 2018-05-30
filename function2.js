
function calculateAge(year)
{
  var now = 2018; 
  return year - now;     
}

 var narendra = calculateAge(1994);
 var srikanth = calculateAge(1999);
 
 
 
 
 function retirementAge(name,year)
 {
      var age = calculateAge(year)
       
        var retirement = 65 - age;
        
        if(retirement>=0)
        {
            console.log(name,'your are retired');
        }
         else
         {
            console.log(name,'you are still young yar');
         }
       
 }
 
 retirementAge('narendra',1994);
 retirementAge('srikanth',1999);
 
 


