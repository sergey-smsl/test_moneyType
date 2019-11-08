var moneyTypes = [5000, 1000, 500, 100, 50, 10];

		function getMoney(amount) {
			if (typeof amount === 'number') { // является ли параметр числом
				var moneyObj = {}; объект для хранения типа купюры : кол-ва
				var outputObj = {}; // объект для возврата результата
				var countItter = 0; // счётчик иттераций
				for (var i = 0; i < moneyTypes.length; i++) { // наполнение объекта из массива, тип купюры : кол-во 
					moneyObj[moneyTypes[i]] = i + 1
				}
				for (keys in moneyObj) {
					countItter++
					if (amount === +keys) {
						outputObj[amount] = moneyObj[amount] //наполнение объекта для возврата результата
						return outputObj
					}

					else if (Object.keys(moneyObj).length === countItter && amount !== +keys) { // пройдена вся длина объекта и нет переданого значения
						return "Don't have this type of money"
					}
				}

			}
			else return NaN
		}
		console.log(getMoney()) // ввести число для проверки кол-ва