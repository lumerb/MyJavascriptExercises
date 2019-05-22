const pairingDNA = (str)=>{

  let nBase = str.split('');
  let basePair = nBase.map((n)=>{
  let tempPair = [];

  switch (n){
      case 'A':
        return tempPair = [n,'T'];
        break;

      case 'T':
        return tempPair = [n,'A'];
        break;

      case 'C':
        return tempPair = [n,'G'];
        break;

      case 'G':
        return tempPair = [n,'C'];
        break;

      default:
        return tempPair = ['',''];
        break;
  }

  return tempPair;

  })

  return basePair;

}

module.exports = pairingDNA;
