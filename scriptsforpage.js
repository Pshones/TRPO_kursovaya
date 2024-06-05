document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate');
  const sumRowsBtn = document.getElementById('sumRows');
  const sumColsBtn = document.getElementById('sumCols');
  const prodRowsBtn = document.getElementById('prodRows');
  const prodColsBtn = document.getElementById('prodCols');
  const findMinBtn = document.getElementById('findMin');
  const findMaxBtn = document.getElementById('findMax');
  const findAvgBtn = document.getElementById('findAvg');
  const showHistoryBtn = document.getElementById('showHistory');
  const matrixContainer = document.getElementById('matrix');
  const resultContainer = document.getElementById('result');
  const historyContainer = document.getElementById('history');
  const loginBtn = document.getElementById('login');
  let username = '';
  let matrix = [];
  let history = [];

  loginBtn.addEventListener('click', () => {
    username = document.getElementById('username').value.trim();
    if (username) {
      alert(`Welcome, ${username}`);
      loadHistory();
    } else {
      alert('Please enter your username.');
    }
  });

  generateBtn.addEventListener('click', () => {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    generateMatrix(rows, cols);
  });

  sumRowsBtn.addEventListener('click', () => performOperation('sumRows'));
  sumColsBtn.addEventListener('click', () => performOperation('sumCols'));
  prodRowsBtn.addEventListener('click', () => performOperation('prodRows'));
  prodColsBtn.addEventListener('click', () => performOperation('prodCols'));
  findMinBtn.addEventListener('click', () => performOperation('findMin'));
  findMaxBtn.addEventListener('click', () => performOperation('findMax'));
  findAvgBtn.addEventListener('click', () => performOperation('findAvg'));

  showHistoryBtn.addEventListener('click', displayHistory);

  function generateMatrix(rows, cols) {
    matrixContainer.innerHTML = '';
    matrix = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = Math.floor(Math.random() * 10);
        matrixContainer.appendChild(input);
        row.push(input);
      }
      matrix.push(row);
      const br = document.createElement('br');
      matrixContainer.appendChild(br);
    }
  }

  function performOperation(operation) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result;

    switch (operation) {
      case 'sumRows':
        result = sumRows(rows, cols);
        break;
      case 'sumCols':
        result = sumCols(rows, cols);
        break;
      case 'prodRows':
        result = prodRows(rows, cols);
        break;
      case 'prodCols':
        result = prodCols(rows, cols);
        break;
      case 'findMin':
        result = findMin(rows, cols);
        break;
      case 'findMax':
        result = findMax(rows, cols);
        break;
      case 'findAvg':
        result = findAvg(rows, cols);
        break;
    }

    displayResult(operation, result);
    saveHistory(operation, result);
  }

  function sumRows(rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
      let sum = 0;
      for (let j = 0; j < cols; j++) {
        sum += parseInt(matrix[i][j].value);
      }
      result.push(sum);
    }
    return result;
  }

  function sumCols(rows, cols) {
    const result = [];
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      for (let i = 0; i < rows; i++) {
        sum += parseInt(matrix[i][j].value);
      }
      result.push(sum);
    }
    return result;
  }

  function prodRows(rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
      let prod = 1;
      for (let j = 0; j < cols; j++) {
        prod *= parseInt(matrix[i][j].value);
      }
      result.push(prod);
    }
    return result;
  }

  function prodCols(rows, cols) {
    const result = [];
    for (let j = 0; j < cols; j++) {
      let prod = 1;
      for (let i = 0; i < rows; i++) {
        prod *= parseInt(matrix[i][j].value);
      }
      result.push(prod);
    }
    return result;
  }

  function findMin(rows, cols) {
    let min = Infinity;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        min = Math.min(min, parseInt(matrix[i][j].value));
      }
    }
    return min;
  }

  function findMax(rows, cols) {
    let max = -Infinity;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        max = Math.max(max, parseInt(matrix[i][j].value));
      }
    }
    return max;
  }

  function findAvg(rows, cols) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        sum += parseInt(matrix[i][j].value);
        count++;
      }
    }
    return sum / count;
  }

  function displayResult(operation, result) {
    resultContainer.innerHTML = `<h2>Результат</h2>`;
    switch (operation) {
      case 'sumRows':
        resultContainer.innerHTML += `<p>операция: Сумма строк матрицы</p>`;
        result.forEach((val, index) => {
          resultContainer.innerHTML += `<p>строка №${index + 1}: ${val}</p>`;
        });
        break;
      case 'sumCols':
        resultContainer.innerHTML += `<p>операция: Сумма столбцов матрицы</p>`;
        result.forEach((val, index) => {
          resultContainer.innerHTML += `<p>столбец №${index + 1}: ${val}</p>`;
        });
        break;
      case 'prodRows':
        resultContainer.innerHTML += `<p>операция: Произведение строк матрицы</p>`;
        result.forEach((val, index) => {
          resultContainer.innerHTML += `<p>строка №${index + 1}: ${val}</p>`;
        });
        break;
      case 'prodCols':
        resultContainer.innerHTML += `<p>операция: Произведение столбцов матрицы</p>`;
        result.forEach((val, index) => {
          resultContainer.innerHTML += `<p>столбец №${index + 1}: ${val}</p>`;
        });
        break;
      case 'findMin':
        resultContainer.innerHTML += `<p>операция: Минимальный элемент матрицы</p>`;
        resultContainer.innerHTML += `<p>${result}</p>`;
        break;
      case 'findMax':
        resultContainer.innerHTML += `<p>операция: Максимальный элемент матрицы</p>`;
        resultContainer.innerHTML += `<p>${result}</p>`;
        break;
      case 'findAvg':
        resultContainer.innerHTML += `<p>операция: Среднее значение элементов матрицы</p>`;
        resultContainer.innerHTML += `<p>${result}</p>`;
        break;
    }
  }

  function saveHistory(operation, result) {
    const currentDateTime = new Date().toLocaleString();
    const matrixValues = matrix.map(row => row.map(cell => cell.value).join(' ')).join('\n');
    const operationResult = formatResult(operation, result);

    const historyEntry = `
пользователь: ${username}
дата и время входа на сайт: ${currentDateTime}

для матрицы:
${matrixValues}
${operationResult}
дата и время операции: ${currentDateTime}`;

    history.push(historyEntry);

    fetch('save_history.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, historyEntry })
    });
  }

  function formatResult(operation, result) {
    let formattedResult = '';
    switch (operation) {
      case 'sumRows':
        formattedResult += 'сумма строк:\n';
        result.forEach((val, index) => {
          formattedResult += `строка №${index + 1}: ${val}\n`;
        });
        break;
      case 'sumCols':
        formattedResult += 'сумма столбцов:\n';
        result.forEach((val, index) => {
          formattedResult += `столбец №${index + 1}: ${val}\n`;
        });
        break;
      case 'prodRows':
        formattedResult += 'произведение строк:\n';
        result.forEach((val, index) => {
          formattedResult += `строка №${index + 1}: ${val}\n`;
        });
        break;
      case 'prodCols':
        formattedResult += 'произведение столбцов:\n';
        result.forEach((val, index) => {
          formattedResult += `столбец №${index + 1}: ${val}\n`;
        });
        break;
      case 'findMin':
        formattedResult += `минимальный элемент: ${result}\n`;
        break;
      case 'findMax':
        formattedResult += `максимальный элемент: ${result}\n`;
        break;
      case 'findAvg':
        formattedResult += `среднее значение: ${result}\n`;
        break;
    }
    return formattedResult;
  }

  function loadHistory() {
    fetch('load_history.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username })
    })
      .then(response => response.json())
      .then(data => {
        if (data.history) {
          history = data.history;
        }
      });
  }

  function displayHistory() {
    historyContainer.innerHTML = `<h2>История операций</h2>`;
    history.forEach(entry => {
      historyContainer.innerHTML += `<pre>${entry}</pre><hr>`;
    });
  }
});
