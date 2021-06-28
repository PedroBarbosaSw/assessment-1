var one = ['','one','two','three','four', 'five','six','seven','eight','nine'];
var one2 = ['','eleven','twelve','thirteen','fourteen','fifteen', 'sixteen','seventeen','eighteen','nineteen'];
var tens = ['','ten','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function describe(n) {
   if(n.length == 1){
      if(n == 0) return 'zero'
      return one[parseInt([n[0]])]
   }
   if(n.length == 2) return twoNumbers(n)
   if(n.length == 3) return threeNumbers(n)
   if(n.length == 4) return fourNumbers(n)
   if(n.length == 5) return fiveNumbers(n)
   if(n.length == 6) return sixNumbers(n)
   if(n.length == 7) return sevenNumbers(n)

}

function twoNumbers(n){
   if(n % 10 == 0) return tens[parseInt(n[0])]
   if(n[0] == 1) return one2[parseInt(n[1])]
   if(n[0] != 0) return `${tens[parseInt(n[0])]}-${one[parseInt(n[1])]}`
   if(n[0] == 0) return `${one[parseInt([n[1]])]}`
}

function threeNumbers(n){
   let auxVar = ''
   let currentPhrase = ''

   if(n[0] == 0){
      if(n[1] == 0) return one[parseInt(n[2])]
      auxVar = n[1]
      auxVar += n[2]
      return twoNumbers(auxVar)
   }
   else{
      currentPhrase = `${one[parseInt(n[0])]} hundred`
      if(n[1] == 0 && n[2] == 0) return currentPhrase
      auxVar = n[1]
      auxVar += n[2]
      return `${currentPhrase} and ${twoNumbers(auxVar)}`
   }
}

function fourNumbers(n){
   auxVar = ''
   let currentPhrase = ''

   if(n[0] == 0){
      auxVar = n[1]
      auxVar += n[2]
      auxVar += n[3]
      return threeNumbers(auxVar)
   }
   currentPhrase = `${one[parseInt(n[0])]} thousand`
   if(n[1] != 0 || n[2] != 0 || n[3] != 0){
      auxVar += n[1]
      auxVar += n[2]
      auxVar += n[3]
      return `${currentPhrase} and ${threeNumbers(auxVar)}`
   }
   return currentPhrase
}

function fiveNumbers(n){
   auxVar = ''
   let currentPhrase = ''
   if(n[0] == 0){
      if(n[1] == 0){
         auxVar  = n[2]
         auxVar += n[3]
         auxVar += n[4]
         return threeNumbers(auxVar)
      }
      auxVar  = n[1]
      auxVar += n[2]
      auxVar += n[3]
      auxVar += n[4]
      return fourNumbers(auxVar)
   }else{
      auxVar  = n[0]
      auxVar += n[1]
      currentPhrase = `${twoNumbers(auxVar)} thousand`
      if(n[2] != 0 || n[3] != 0 || n[4] != 0){
         auxVar = n[2]
         auxVar += n[3]
         auxVar += n[4]
         return `${currentPhrase} and ${threeNumbers(auxVar)}`
      }
   }
}

function sixNumbers(n){
   auxVar = ''
   let currentPhrase = ''
   if(n[0] == 0){
      if(n[1] != 0 || n[2] != 0 || n[3] != 0 || n[4] != 0 || n[5] != 0){
         auxVar =  n[1]
         auxVar += n[2]
         auxVar += n[3]
         auxVar += n[4]
         auxVar += n[5]
         return fiveNumbers(auxVar)
      }
   }else{
      currentPhrase = `${one[parseInt(n[0])]} hundred`
      if(n[1] != 0 || n[2] != 0){
         auxVar =  n[1]
         auxVar += n[2]
         currentPhrase += ` and ${twoNumbers(auxVar)}`
      }
      else{
         currentPhrase += ' thousand'
      }
      if(n[1] != 0 || n[2] != 0) currentPhrase += ' thousand'
      if(n[3] != 0 || n[4] != 0 || n[5] != 0){
         auxVar =  n[3]
         auxVar += n[4]
         auxVar += n[5]
         return `${currentPhrase} and ${threeNumbers(auxVar)}`
      } 
   }
}

function sevenNumbers(n){
   auxVar = ''
   let currentPhrase = ''
   if(n[0] == 0){
      if(n[1] != 0 || n[2] != 0 || n[3] != 0 || n[4] != 0 || n[5] != 0 || n[6] != 0){
         auxVar =  n[1]
         auxVar += n[2]
         auxVar += n[3]
         auxVar += n[4]
         auxVar += n[5]
         auxVar += n[6]
         return sixNumbers(auxVar)
      }
   }
   currentPhrase = `${one[parseInt(n[0])]} million`
      if (n[1] != 0 || n[2] != 0 || n[3] != 0 || n[4] != 0 || n[5] != 0 || n[6] != 0)
      {
         auxVar =  n[1]
         auxVar += n[2]
         auxVar += n[3]
         auxVar += n[4]
         auxVar += n[5]
         auxVar += n[6]
         return `${currentPhrase} and ${sixNumbers(auxVar)}`
      }else return currentPhrase
}

module.exports = {
   describe
}