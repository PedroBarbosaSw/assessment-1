function conversion(){
   var number = document.getElementById('number').value
   if(number.length > 7){
      document.getElementById('result').innerHTML = "Please type a valid number"
      document.getElementById('result').style.color = "red"
   }
   else{
      var phrase = describe(number.toString())
      document.getElementById('result').innerHTML = phrase
      document.getElementById('result').style.color = "#2a4d69"
   }
}