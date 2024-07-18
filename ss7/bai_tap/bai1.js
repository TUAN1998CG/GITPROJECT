let inputPhisic=prompt('Nhập điểm Lý');
let inputChemis =prompt('Nhập điểm Hoá');
let inputBio =prompt('Nhập điểm sinh');
let Phisic =parseInt(inputPhisic);
let Chemis =parseInt(inputChemis);
let Bio =parseInt(inputBio);
let total = Phisic+Chemis+Bio
let averagesum =total/3
document.write('total='+total)
document.write('<br>')
document.write('averagesum='+averagesum)