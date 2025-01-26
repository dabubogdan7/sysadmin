// LocalStorage Helper Functions
function getTests() {
    return JSON.parse(localStorage.getItem('brakeTests')) || [];
}

function saveTest(test) {
    const tests = getTests();
    tests.push(test);
    localStorage.setItem('brakeTests', JSON.stringify(tests));
}

// Adăugarea unui test
document.getElementById('test-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const time = parseFloat(document.getElementById('time').value);
    const distance = parseFloat(document.getElementById('distance').value);

    saveTest({ time, distance });

    alert('Testul a fost adăugat!');
    e.target.reset();
});

// Vizualizarea rezultatelor
if (document.getElementById('results-table')) {
    const resultsTable = document.getElementById('results-table');
    const tests = getTests();

    tests.forEach((test) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${test.time}</td><td>${test.distance}</td>`;// LocalStorage Helper Functions
function getTests() {
    return JSON.parse(localStorage.getItem('brakeTests')) || [];
}

function saveTest(test) {
    const tests = getTests();
    tests.push(test);
    localStorage.setItem('brakeTests', JSON.stringify(tests));
}

// Adăugarea unui test
document.getElementById('test-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const time = parseFloat(document.getElementById('time').value);
    const distance = parseFloat(document.getElementById('distance').value);

    saveTest({ time, distance });

    alert('Testul a fost adăugat!');
    e.target.reset();
});

// Vizualizarea rezultatelor
if (document.getElementById('results-table')) {
    const resultsTable = document.getElementById('results-table');
    const tests = getTests();

    tests.forEach((test) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${test.time}</td><td>${test.distance}</td>`;
        resultsTable.appendChild(row);
    });
}

// Generarea graficului
document.getElementById('generate-graph')?.addEventListener('click', () => {
    const tests = getTests();

    fetch('/generate_graph', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test_data: tests }),
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('brake-graph').src = '/' + data.graph_path;
        });
});

        resultsTable.appendChild(row);
    });
}

// Generarea graficului
document.getElementById('generate-graph')?.addEventListener('click', () => {
    const tests = getTests();

    fetch('/generate_graph', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test_data: tests }),
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('brake-graph').src = '/' + data.graph_path;
        });
});
