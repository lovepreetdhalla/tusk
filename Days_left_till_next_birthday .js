// Write your code here.
	var now = new Date();
	var yy  = now.getFullYear();
	var mm  = now.getMonth();
	var dd 	= now.getDate();

  var birthday =new Date(yy, 11, 4);

  if(mm==11 && dd>4)
  {
   birthday.setFullYear(yy+1); 

  }

	var msPerDay = 24 * 60 * 60 * 1000 ; 

  var daysLeft = (birthday.getTime() 
    - now.getTime()) / msPerDay;

  daysLeft = Math.round(daysLeft);
console.log(daysLeft);

