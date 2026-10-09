// =========================================================
// EXCHANGE PAGE - FINAL SCRIPT
// Calculations, BUY/SELL, Share, Save and Print
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

// =========================================================
// SMALL HELPERS
// =========================================================

function getElement(id) {
return document.getElementById(id);
}

function getNumber(id) {
const input = getElement(id);
return input ? (parseFloat(input.value) || 0) : 0;
}

function showMessage(message) {
const container = getElement('toastContainer');

if (!container) {
alert(message);
return;
}

const messageBox = document.createElement('div');
messageBox.className = 'alert alert-dark shadow-sm mb-2';
messageBox.textContent = message;

container.appendChild(messageBox);

setTimeout(function () {
messageBox.remove();
}, 2500);
}


// =========================================================
// BUY / SELL TAB
// =========================================================

const buyTab = getElement('tab-buy');
const sellTab = getElement('tab-sell');
const exchangeCard = document.querySelector('.exchange-card');

const buyFields = document.querySelectorAll('.buy-only-row');
const sellFields = document.querySelectorAll('.sell-only-row');

const goldLabel =
document.querySelector('.gold-mode-row .field-label');


function changeMode(mode) {

const isBuy = mode === 'buy';

if (buyTab) {
buyTab.classList.toggle('active', isBuy);
}

if (sellTab) {
sellTab.classList.toggle('active', !isBuy);
}

if (exchangeCard) {
exchangeCard.classList.toggle('sell-mode', !isBuy);
}


buyFields.forEach(function (row) {

row.style.setProperty(
'display',
isBuy ? '' : 'none',
'important'
);

});


sellFields.forEach(function (row) {

row.style.setProperty(
'display',
isBuy ? 'none' : 'flex',
'important'
);

});


if (goldLabel) {

goldLabel.textContent =
isBuy
? '(दिया) GIVEN GOLD :'
: 'RECIEVED GOLD :';

}
}


if (buyTab) {

buyTab.addEventListener('click', function () {
changeMode('buy');
});

}


if (sellTab) {

sellTab.addEventListener('click', function () {
changeMode('sell');
});

}


// =========================================================
// GOLD AND CASH CALCULATION
// =========================================================

function updateGoldCalculation() {

const fineLeft =
(getNumber('weightLeft') *
getNumber('touchLeft')) / 100;

const fineRight =
(getNumber('weightRight') *
getNumber('touchRight')) / 100;


const fineLeftElement =
getElement('fineLeft');

const fineRightElement =
getElement('fineRight');

const diffGoldElement =
getElement('diffGold');


if (fineLeftElement) {
fineLeftElement.value =
fineLeft.toFixed(3);
}


if (fineRightElement) {
fineRightElement.value =
fineRight.toFixed(3);
}


if (diffGoldElement) {

diffGoldElement.value =
(
fineLeft +
fineRight -
getNumber('givenGold')
).toFixed(3);

}


updateFinalCash();
}


function updateFinalCash() {

const goldAmount =
getNumber('diffGold') *
(getNumber('ratePS') / 10);


const finalCash =
goldAmount
+ getNumber('cashGR')
- getNumber('charges')
+ getNumber('givenCash')
+ getNumber('rtgsGiven')
+ getNumber('bank2Given')
- getNumber('receivedCash')
- getNumber('rtgsReceived')
- getNumber('bank2Received');


const finalCashElement =
getElement('finalCash');


if (finalCashElement) {

finalCashElement.value =
finalCash.toFixed(2);

}
}


// =========================================================
// GOLD INPUT EVENTS
// =========================================================

[
'weightLeft',
'weightRight',
'touchLeft',
'touchRight',
'givenGold'
].forEach(function (id) {

const element = getElement(id);

if (element) {

element.addEventListener(
'input',
updateGoldCalculation
);

}

});


// =========================================================
// CASH INPUT EVENTS
// =========================================================

[
'ratePS',
'cashGR',
'charges',
'givenCash',
'receivedCash',
'rtgsGiven',
'rtgsReceived',
'bank2Given',
'bank2Received'
].forEach(function (id) {

const element = getElement(id);

if (element) {

element.addEventListener(
'input',
updateFinalCash
);

}

});


// =========================================================
// GIVEN GOLD BUTTON
// =========================================================

const applyGivenGold =
getElement('applyGivenGold');

if (applyGivenGold) {

applyGivenGold.addEventListener(
'click',
updateGoldCalculation
);

}


// =========================================================
// TOUCH 100%
// =========================================================

const touch100 =
getElement('touch100');

if (touch100) {

touch100.addEventListener(
'change',
function () {

if (this.checked) {

const touchLeft =
getElement('touchLeft');

const touchRight =
getElement('touchRight');


if (touchLeft) {
touchLeft.value = '100';
}

if (touchRight) {
touchRight.value = '100';
}


updateGoldCalculation();
}

}
);

}


// =========================================================
// APPLY RATE
// =========================================================

const applyRate =
getElement('applyRate');

if (applyRate) {

applyRate.addEventListener(
'click',
function () {

const ratePS =
getElement('ratePS');

const rateCashAdjust =
getElement('rateCashAdjust');


if (
ratePS &&
rateCashAdjust
) {

rateCashAdjust.value =
ratePS.value;

}

}
);

}


// =========================================================
// UDHARI CALCULATION
// =========================================================

function updateUdhariTotal() {

let goldTotal = 0;
let cashTotal = 0;


document
.querySelectorAll('.udhari-gold')
.forEach(function (input) {

goldTotal +=
parseFloat(input.value) || 0;

});


document
.querySelectorAll('.udhari-cash')
.forEach(function (input) {

cashTotal +=
parseFloat(input.value) || 0;

});


const finalGold =
getElement('udhariFinalGold');

const finalCash =
getElement('udhariFinalCash');


if (finalGold) {

finalGold.value =
goldTotal.toFixed(3);

}


if (finalCash) {

finalCash.value =
cashTotal.toFixed(2);

}
}


document
.querySelectorAll('.udhari-gold, .udhari-cash')
.forEach(function (input) {

input.addEventListener(
'input',
updateUdhariTotal
);

});


// =========================================================
// UDHARI PLUS / MINUS
// =========================================================

document
.querySelectorAll(
'.btn-udhari-plus, .btn-udhari-minus'
)
.forEach(function (button) {

button.addEventListener(
'click',
function () {

const input =
getElement(
button.dataset.target
);


if (!input) {
return;
}


const currentValue =
parseFloat(input.value) || 0;


const step = 0.001;


if (
button.classList.contains(
'btn-udhari-plus'
)
) {

input.value =
(
currentValue + step
).toFixed(3);

} else {

input.value =
Math.max(
0,
currentValue - step
).toFixed(3);

}


updateUdhariTotal();

}
);

});


// =========================================================
// RATE BUTTONS
// =========================================================

document
.querySelectorAll('[data-rate-step]')
.forEach(function (button) {

button.addEventListener(
'click',
function () {

const input =
getElement('udhariRate');


if (!input) {
return;
}


input.value =
(
parseFloat(input.value) || 0
)
+
parseInt(
button.dataset.rateStep,
10
);

}
);

});


// =========================================================
// TOLA TO GRAM CONVERTER
// 1 TOLA = 11.6638 GRAMS
// =========================================================

const convertTola =
getElement('convertTola');

const convertGram =
getElement('convertGram');


if (convertTola) {

convertTola.addEventListener(
'input',
function () {

const tola =
parseFloat(this.value) || 0;


if (convertGram) {

convertGram.value =
(
tola * 11.6638
).toFixed(3);

}

}
);

}


if (convertGram) {

convertGram.addEventListener(
'input',
function () {

const gram =
parseFloat(this.value) || 0;


if (convertTola) {

convertTola.value =
(
gram / 11.6638
).toFixed(3);

}

}
);

}


// =========================================================
// SHARE
// =========================================================

const shareButton =
getElement('shareExchange');


if (shareButton) {

shareButton.addEventListener(
'click',
async function () {

const diffGold =
getElement('diffGold');

const finalCash =
getElement('finalCash');


const goldValue =
diffGold
? diffGold.value
: '0.000';


const cashValue =
finalCash
? finalCash.value
: '0.00';


const shareData = {

title:
'Exchange Transaction',

text:
'Gold: ' +
goldValue +
' gm | Final Cash: ₹' +
cashValue

};


try {

if (navigator.share) {

await navigator.share(
shareData
);

} else {

await navigator.clipboard.writeText(
shareData.text
);

showMessage(
'Exchange details copied.'
);

}

} catch (error) {

// User closed share dialog.
// No action required.

}

}
);

}


// =========================================================
// SAVE TRANSACTION
// =========================================================

const saveTransaction =
getElement('saveTransaction');


if (saveTransaction) {

saveTransaction.addEventListener(
'click',
function () {

const history =
JSON.parse(
localStorage.getItem(
'exchangeHistory'
) || '[]'
);


const customerSearch =
getElement('customerSearch');

const diffGold =
getElement('diffGold');

const finalCash =
getElement('finalCash');


history.push({

customer:
customerSearch
? customerSearch.value
: '',

gold:
diffGold
? diffGold.value
: '0.000',

finalCash:
finalCash
? finalCash.value
: '0.00',

date:
new Date().toISOString()

});


localStorage.setItem(
'exchangeHistory',
JSON.stringify(history)
);


showMessage(
'Transaction saved successfully.'
);

}
);

}


// =========================================================
// PRINT EXCHANGE
// =========================================================

const printExchange =
getElement('printExchange');


if (printExchange) {

printExchange.addEventListener(
'click',
function () {

window.print();

}
);

}


// =========================================================
// PRINT UDHARI
// =========================================================

const printUdhari =
getElement('printUdhari');


if (printUdhari) {

printUdhari.addEventListener(
'click',
function () {

window.print();

}
);

}


// =========================================================
// FINAL PAGE START
// =========================================================

changeMode('buy');

updateGoldCalculation();

updateUdhariTotal();

});