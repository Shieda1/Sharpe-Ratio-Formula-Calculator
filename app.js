// https://www.omnicalculator.com/finance/sharpe-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const sharperatioRadio = document.getElementById('sharperatioRadio');
const returnoftheassetorinvestmentRadio = document.getElementById('returnoftheassetorinvestmentRadio');
const riskfreereturnRadio = document.getElementById('riskfreereturnRadio');
const standarddeviationRadio = document.getElementById('standarddeviationRadio');

let sharperatio;
let returnoftheassetorinvestment = v1;
let riskfreereturn = v2;
let standarddeviation = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

sharperatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Return of the asset or investment';
  variable2.textContent = 'Risk free return';
  variable3.textContent = 'Standard deviation';
  returnoftheassetorinvestment = v1;
  riskfreereturn = v2;
  standarddeviation = v3;
  result.textContent = '';
});

returnoftheassetorinvestmentRadio.addEventListener('click', function() {
  variable1.textContent = 'Sharpe ratio';
  variable2.textContent = 'Risk free return';
  variable3.textContent = 'Standard deviation';
  sharperatio = v1;
  riskfreereturn = v2;
  standarddeviation = v3;
  result.textContent = '';
});

riskfreereturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Sharpe ratio';
  variable2.textContent = 'Return of the asset or investment';
  variable3.textContent = 'Standard deviation';
  sharperatio = v1;
  returnoftheassetorinvestment = v2;
  standarddeviation = v3;
  result.textContent = '';
});

standarddeviationRadio.addEventListener('click', function() {
  variable1.textContent = 'Sharpe ratio';
  variable2.textContent = 'Return of the asset or investment';
  variable3.textContent = 'Risk free return';
  sharperatio = v1;
  returnoftheassetorinvestment = v2;
  riskfreereturn = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(sharperatioRadio.checked)
    result.textContent = `Sharpe ratio = ${computesharperatio().toFixed(2)}`;

  else if(returnoftheassetorinvestmentRadio.checked)
    result.textContent = `Return of the asset or investment = ${computereturnoftheassetorinvestment().toFixed(2)}`;

  else if(riskfreereturnRadio.checked)
    result.textContent = `Risk free return = ${computeriskfreereturn().toFixed(2)}`;

  else if(standarddeviationRadio.checked)
    result.textContent = `Standard deviation = ${computestandarddeviation().toFixed(2)}`;
})

// calculation

function computesharperatio() {
  return ((Number(returnoftheassetorinvestment.value) / 100) - (Number(riskfreereturn.value) / 100)) / (Number(standarddeviation.value) / 100);
}

function computereturnoftheassetorinvestment() {
  return ((Number(sharperatio.value) * (Number(standarddeviation.value) / 100)) + (Number(riskfreereturn.value) / 100)) * 100;
}

function computeriskfreereturn() {
  return ((Number(returnoftheassetorinvestment.value) / 100) - (Number(sharperatio.value) * (Number(standarddeviation.value) / 100))) * 100;
}

function computestandarddeviation() {
  return (((Number(returnoftheassetorinvestment.value) / 100) - (Number(riskfreereturn.value) / 100)) / Number(sharperatio.value)) * 100;
}