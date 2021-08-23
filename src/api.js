const romanNumbers = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const parse = (roman)=>{
  if(typeof(roman) !== 'string'){
    throw new Error('Not a string') }

  const characterRoman =[ 'I','V','X','L', 'C','D','M'];
  const romanArray =roman.split('')

  const isValidRoman = romanArray.map((chart) => characterRoman.includes(chart))

  if(isValidRoman.includes(false)){
    throw new Error('Unknown roman numeral')
  }

  const regex =/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if(!regex.test(roman)){
      if(/L{2}|D{2}|V{2}/gs.test(roman)){
        //REPETICION DE 5, 50 Y 500
        const repeatChart =roman.match(/L{2}|D{2}|V{2}/gs)[0].slice(1)
        const value = romanNumbers[repeatChart];
        throw new Error(`Invalid repetition of number starting with 5: ${repeatChart} (${value})}`)
      }
      else if(/M{4}|C{4}|X{4}|I{4}/gs.test(roman)){
        //REPETICION DE MAS DE 3 VECES X C M I
        const repeatChart =roman.match(/M{4}|C{4}|X{4}|I{4}/gs)[0].slice(0,1)
        throw new Error(`Too many repetitions of roman numeral ${repeatChart}`)
      }
      else if(/VX|VL|VC|VD|VM|LC|LD|LM|DM/gs.test(roman)){
        //SUSTRACION INVALID
        const invalidChart =roman.match(/VX|VL|VC|VD|VM|LC|LD|LM|DM/gs)[0].slice(0,1)
        console.log(invalidChart)
        throw new Error(`Invalid substraction prefix ${invalidChart}`)
      }
      else{ throw new Error('Invalid order')}
}else{

  const changeToArabigos = romanArray.map((elem)=> romanNumbers[elem])

  //TRANSFORMAR A NUMEROS
  const total =changeToArabigos.reduce((acumulador, current, index, array)=>{
    if (current >= array[index + 1]  || index === array.length - 1  ) {
      return acumulador += current;
    } else {
      return acumulador -= current;
    }
  },0)
console.log(total)
return total;


}}


const stringify =(num)=>{
  if( typeof (num) !== Number){
    throw new Error('Not a number')
  }
}

module.exports = {
  parse,
  stringify
}
