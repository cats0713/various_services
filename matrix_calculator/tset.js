'use strict';

/*
  Matrix Calculator Application
  2022/01/20 R0.0.1 CREATED BY JYJ
  2022/01/21 R0.0.2 EDITED BY JYJ
*/

(() => {
	function MatrixCalculator(arrayInputRowCol, arrayButton, arrayDivContainer) {
		this.arrayInputRowCol = arrayInputRowCol; // �꾩옱 input �쒓렇�� 珥� 4媛쒓� �꾨떂
		this.arrayButton = arrayButton; // �꾩옱 button �쒓렇�� 珥� 9媛쒓� �덉쓬
		this.arrayDivContainer = arrayDivContainer; // �꾩옱 divContainer�� 3媛쒓� �덉쓬

		function PrintMatrix(arrayInputRowCol, arrayButton, arrayDivContainer) {
			this.arrayInputRowCol = arrayInputRowCol;
			this.arrayButton = arrayButton;
			this.arrayDivContainer = arrayDivContainer;
			this.inputMatrixItem = '<input class="inputMatrixItem" value="0" type="text"/>';

			this.printAlert = (alertMessage) => {
				let StringAlertMessage = '';
				StringAlertMessage = alertMessage;
				let divWrapper = document.querySelector('#divWrapper');
				let ulAlertMessageContainer = document.querySelector('#ulAlertMessageContainer');
				let liAlertMessageTag = '<li class="liAlertMessage">' + alertMessage + '</li>';
				let body = document.body;
				let html = document.documentElement;

				let height = Math.max(
					body.scrollHeight,
					body.offsetHeight,
					html.clientHeight,
					html.scrollHeight,
					html.offsetHeight
				);

				divWrapper.style.display = 'flex';
				divWrapper.style.height = height + 'px';
				ulAlertMessageContainer.innerHTML = liAlertMessageTag;

				document.querySelector('#buttonRemoveAlert').addEventListener('click', () => {
					divWrapper.style.display = 'none';
				});
			};

			this.printMatrix = (indexArrayContainer, indexArrayInputRow, indexArrayInputCol) => {
				let boolValue = false;
				let rowValue = parseInt(this.arrayInputRowCol[indexArrayInputRow].value);
				let colValue = parseInt(this.arrayInputRowCol[indexArrayInputCol].value);
				let ArrRowColValueBool = [rowValue, colValue];
				if (/\d/g.test(rowValue) == true && /\d/g.test(colValue) == true) {
					if (rowValue < 10 && colValue < 10) {
						for (let i = 0; i < rowValue; i++) {
							for (let j = 0; j < colValue; j++) {
								this.arrayDivContainer[indexArrayContainer].innerHTML += this.inputMatrixItem;
							}
							this.arrayDivContainer[indexArrayContainer].innerHTML += '<br>';
						}
						boolValue = true;
						ArrRowColValueBool.push(boolValue);
						return ArrRowColValueBool;
					} else {
						this.printAlert(['�쀯툘 Do not enter number greater than 9']);
						switch (indexArrayContainer) {
							case 0:
								this.resetMatrix(0, 1, 0);
								break;
							case 2:
								this.resetMatrix(2, 3, 2);
								break;
						}
						ArrRowColValueBool.push(boolValue);
						return ArrRowColValueBool;
					}
				} else {
					this.printAlert(['�쀯툘 Do not enter values other than number']);
					switch (indexArrayContainer) {
						case 0:
							this.resetMatrix(0, 1, 0);
							break;
						case 2:
							this.resetMatrix(2, 3, 2);
							break;
					}
					ArrRowColValueBool.push(boolValue);
					return ArrRowColValueBool;
				}
			};

			this.resetMatrix = (firstIndex, secondIndex, containerIndex) => {
				this.arrayInputRowCol[firstIndex].value = '';
				this.arrayInputRowCol[secondIndex].value = '';
				this.arrayDivContainer[containerIndex].innerHTML = '';
			};

			this.changeDisplay = (indexDisplayNone, indexDisplayInlineBlock) => {
				this.arrayButton[indexDisplayNone].style.display = 'none';
				this.arrayButton[indexDisplayInlineBlock].style.display = 'inline-block';
			};

			this.clickPrintMatrixButton = () => {
				this.arrayRowColValueAndBool01 = [];
				this.arrayRowColValueAndBool02 = [];
				for (let i = 0; i < this.arrayButton.length; i++) {
					this.arrayButton[i].addEventListener('click', () => {
						switch (this.arrayButton[i]) {
							case this.arrayButton[0]:
								this.arrayRowColValueAndBool01 = this.printMatrix(0, 0, 1);
								if (this.arrayRowColValueAndBool01[2] == true) {
									this.changeDisplay(0, 1);
								}
								break;
							case this.arrayButton[1]:
								this.changeDisplay(1, 0);
								this.resetMatrix(0, 1, 0);
								break;
							case this.arrayButton[2]:
								this.printRandomNumber(0);
								break;
							case this.arrayButton[3]:
								if (!this.arrayRowColValueAndBool01[2] || !this.arrayRowColValueAndBool02[2]) {
									this.printAlert(['�쀯툘 Please enter the correct value in the input box of the row and column']);
								} else if (
									this.arrayRowColValueAndBool01[0] != this.arrayRowColValueAndBool02[0] &&
									this.arrayRowColValueAndBool01[1] != this.arrayRowColValueAndBool02[1]
								) {
									this.printAlert(['�쀯툘 To plus a matrix, the number of rows and columns must be the same']);
								} else {
									let arrayMatrixValue01 = this.createArrayValue(
										this.arrayRowColValueAndBool01[0],
										this.arrayRowColValueAndBool01[1],
										this.arrayRowColValueAndBool02[0],
										this.arrayRowColValueAndBool02[1]
									);
									arrayMatrixValue01[0].flat(1).forEach((item) => {
										item == '' && this.printAlert(['�쀯툘 There are empty spaces in the Matrix']);
									});
									arrayMatrixValue01[1].flat(1).forEach((item) => {
										item == '' && this.printAlert(['�쀯툘 There are empty spaces in the Matrix']);
									});
									this.printMatrixForCalcPlusMinus(
										this.arrayRowColValueAndBool01[0],
										this.arrayRowColValueAndBool01[1],
										this.arrayDivContainer
									);
									let resultPlus = 'plus';
									this.calcPlusMinus(arrayMatrixValue01, arrayDivContainer, resultPlus);
								}
								break;
							case this.arrayButton[4]:
								if (!this.arrayRowColValueAndBool01[2] || !this.arrayRowColValueAndBool02[2]) {
									this.printAlert(['�쀯툘 Please enter the correct value in the input box of the row and column']);
								} else if (
									this.arrayRowColValueAndBool01[0] != this.arrayRowColValueAndBool02[0] &&
									this.arrayRowColValueAndBool01[1] != this.arrayRowColValueAndBool02[1]
								) {
									this.printAlert(['�쀯툘 To minus a matrix, the number of rows and columns must be the same']);
								} else {
									let arrayMatrixValue02 = this.createArrayValue(
										this.arrayRowColValueAndBool01[0],
										this.arrayRowColValueAndBool01[1],
										this.arrayRowColValueAndBool02[0],
										this.arrayRowColValueAndBool02[1]
									);
									arrayMatrixValue02[0].flat(1).forEach((item) => {
										item == '' && this.printAlert(['�쀯툘 There are empty spaces in the Matrix']);
									});
									arrayMatrixValue02[1].flat(1).forEach((item) => {
										item == '' && this.printAlert(['�쀯툘 There are empty spaces in the Matrix']);
									});
									this.printMatrixForCalcPlusMinus(
										this.arrayRowColValueAndBool01[0],
										this.arrayRowColValueAndBool01[1],
										this.arrayDivContainer
									);
									let resultMinus = 'minus';
									this.calcPlusMinus(arrayMatrixValue02, arrayDivContainer, resultMinus);
								}
								break;
							case this.arrayButton[5]:
								let arrayMatrixValue03 = this.createArrayValue(
									this.arrayRowColValueAndBool01[0],
									this.arrayRowColValueAndBool01[1],
									this.arrayRowColValueAndBool02[0],
									this.arrayRowColValueAndBool02[1]
								);
								arrayMatrixValue03.flat(2).forEach((item) => {
									if (item == '') {
										this.printAlert('�쀯툘 There are empty spaces in the Matrix');
									} else if (this.arrayRowColValueAndBool01[0] != this.arrayRowColValueAndBool02[1]) {
										this.printAlert(
											"�쀯툘 To multiply a matrix, the number of first matrix's rows and second's columns must be the same"
										);
									} else {
									}
								});
								this.printMatrixForCalcMultiply(
									this.arrayRowColValueAndBool01[0],
									this.arrayRowColValueAndBool02[1],
									this.arrayDivContainer
								);
								let arrayMultiplyValues = this.calcMultiply(
									this.arrayRowColValueAndBool01[0],
									this.arrayRowColValueAndBool01[1],
									this.arrayRowColValueAndBool02[0],
									this.arrayRowColValueAndBool02[1],
									arrayMatrixValue03
								);
								// console.log("��",arrayInputMatrix)
								// console.log(arrayMultiplyValues)
								this.printCalcMultiply(arrayMultiplyValues);
								break;
							case this.arrayButton[6]:
								this.arrayRowColValueAndBool02 = this.printMatrix(2, 2, 3);
								if (this.arrayRowColValueAndBool02[2] == true) {
									this.changeDisplay(6, 7);
								}
								break;
							case this.arrayButton[7]:
								this.changeDisplay(7, 6);
								this.resetMatrix(2, 3, 2);
								break;
							case this.arrayButton[8]:
								this.printRandomNumber(2);
						}
					});
				}
			};

			this.printRandomNumber = (indexDivMatrixContainer) => {
				switch (indexDivMatrixContainer) {
					case 0:
						let inputMatrixItems01 = document.querySelectorAll(
							'#divLeftMatrixContainer>.divMatrixContainer .inputMatrixItem'
						);
						for (let i = 0; i < inputMatrixItems01.length; i++) {
							inputMatrixItems01[i].value = '';
							inputMatrixItems01[i].value = Math.floor(Math.random() * 100);
						}
						break;
					case 2:
						let inputMatrixItems02 = document.querySelectorAll(
							'#divRightMatrixContainer>.divMatrixContainer .inputMatrixItem'
						);
						for (let i = 0; i < inputMatrixItems02.length; i++) {
							inputMatrixItems02[i].value = '';
							inputMatrixItems02[i].value = Math.floor(Math.random() * 100);
						}
						break;
				}
			};

			this.createArrayValue = (firstRowValue, firstColValue, secondRowValue, secondColValue) => {
				let count = 0;
				let arrayMatrixValue = new Array();
				let arrayFirstMatrixValue = new Array(firstRowValue);
				let arraySecondMatrixValue = new Array(secondColValue);
				let countMatrixInput01 = document.querySelectorAll(
					'#divLeftMatrixContainer>.divMatrixContainer .inputMatrixItem'
				);
				let countMatrixInput02 = document.querySelectorAll(
					'#divRightMatrixContainer>.divMatrixContainer .inputMatrixItem'
				);

				for (let i = 0; i < firstRowValue; i++) {
					arrayFirstMatrixValue[i] = new Array(firstColValue);
				}
				for (let i = 0; i < secondRowValue; i++) {
					arraySecondMatrixValue[i] = new Array(secondColValue);
				}

				for (let i = 0; i < firstRowValue; i++) {
					for (let j = 0; j < firstColValue; j++) {
						arrayFirstMatrixValue[i][j] = countMatrixInput01[count].value;
						count++;
					}
				}
				count = 0;
				for (let i = 0; i < secondRowValue; i++) {
					for (let j = 0; j < secondColValue; j++) {
						arraySecondMatrixValue[i][j] = countMatrixInput02[count].value;
						count++;
					}
				}

				arrayMatrixValue.push(arrayFirstMatrixValue);
				arrayMatrixValue.push(arraySecondMatrixValue);

				return arrayMatrixValue;
			};

			this.printMatrixForCalcPlusMinus = (rowValue, colValue, arrayDivContainer) => {
				arrayDivContainer[1].innerHTML = '';
				for (let i = 0; i < rowValue; i++) {
					for (let j = 0; j < colValue; j++) {
						arrayDivContainer[1].innerHTML += '<input class="inputMatrix" type="text" value="" readonly>';
					}
					arrayDivContainer[1].innerHTML += '<br>';
				}
			};

			this.calcPlusMinus = (arrayMatrixValue, arrayDivContainer, result) => {
				let arrayInputMatrix = document.querySelectorAll('.inputMatrix');
				let divResultContainer = arrayDivContainer[1];
				let arrayFirstMatrixValueFlat = arrayMatrixValue[0].flat(1);
				let arraySecondMatrixValueFlat = arrayMatrixValue[1].flat(1);
				let arrayResultCalc = new Array();
				let i = 0;
				let j = 0;
				switch (result) {
					case 'plus':
						while (i < arrayFirstMatrixValueFlat.length) {
							arrayResultCalc.push(parseInt(arrayFirstMatrixValueFlat[i]) + parseInt(arraySecondMatrixValueFlat[i]));
							i++;
						}
						break;
					case 'minus':
						while (i < arrayFirstMatrixValueFlat.length) {
							arrayResultCalc.push(parseInt(arrayFirstMatrixValueFlat[i]) - parseInt(arraySecondMatrixValueFlat[i]));
							i++;
						}
						break;
				}
				while (j < arrayResultCalc.length) {
					arrayInputMatrix[j].value = arrayResultCalc[j];
					j++;
				}
				console.log(arrayResultCalc);
			};

			this.printMatrixForCalcMultiply = (firstRowValue, secondColValue, arrayDivContainer) => {
				arrayDivContainer[1].innerHTML = '';
				for (let i = 0; i < firstRowValue; i++) {
					for (let j = 0; j < secondColValue; j++) {
						arrayDivContainer[1].innerHTML += '<input class="inputMatrix" type="text" value="" readonly>';
					}
					arrayDivContainer[1].innerHTML += '<br>';
				}
			};

			this.calcMultiply = (firstRowValue, firstColValue, secondRowValue, secondColValue, arrayMatrixValue) => {
				const arrayResultMultiply = new Array(firstRowValue);
				const arrayForMultiply = new Array(firstRowValue);
				let arrayFirstMatrixValues = arrayMatrixValue[0];
				let arraySecondMatrixValues = arrayMatrixValue[1];
				// console.log(arrayFirstMatrixValues);
				// console.log(arraySecondMatrixValues);
				let i = 0;
				let j = 0;
				let k = 0;
				let l = 0;
				while (i < firstRowValue) {
					arrayResultMultiply[i] = new Array(secondColValue);
					arrayForMultiply[i] = new Array(secondColValue);
					i++;
				}
				while (j < firstRowValue) {
					while (k < secondColValue) {
						let sumNumber = 0;
						while (l < firstColValue) {
							sumNumber += arrayFirstMatrixValues[j][l] * arraySecondMatrixValues[l][k];
							console.log(arrayFirstMatrixValues[j][l], arraySecondMatrixValues[l][k]);
							l++;
						}
						arrayForMultiply[j][k] = sumNumber;
						l = 0;
						k++;
					}
					k = 0;
					j++;
				}
				return arrayForMultiply;
				console.log(arrayForMultiply);
			};
			this.printCalcMultiply = (arrayForMultiply) => {
				const arrayInputMatrix = document.querySelectorAll(
					'#divCenterMatrixContainer>.divMatrixContainer .inputMatrix'
				);
				const arrayForMultiplyFlat = arrayForMultiply.flat(1);
				let i = 0;
				while (i < arrayInputMatrix.length) {
					arrayInputMatrix[i].value = arrayForMultiplyFlat[i];
					i++;
				}
			};
		}
		const ObjPrintMatrix = new PrintMatrix(arrayInputRowCol, arrayButton, arrayDivContainer);
		ObjPrintMatrix.clickPrintMatrixButton();
	}

	const arrayInputRowCol = document.querySelectorAll('input');
	const arrayButton = document.querySelectorAll('button');
	const arrayDivContainer = document.querySelectorAll('.divMatrixContainer');

	const ObjMatrixCalculator = new MatrixCalculator(arrayInputRowCol, arrayButton, arrayDivContainer);
})();