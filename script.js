document.getElementById('numberOfTests').addEventListener('change', function () {
    const numberOfTests = this.value;
    const testInputs = document.getElementById('testInputs');
    testInputs.innerHTML = '';

    for (let i = 0; i < numberOfTests; i++) {
        const gradeInput = document.createElement('div');
        gradeInput.innerHTML = `
            <label for="grade${i}">Enter grade for test ${i + 1}:</label>
            <input type="number" id="grade${i}" required>
            <label for="weight${i}">Weight for test ${i + 1}:</label>
            <input type="number" id="weight${i}" required>
        `;
        testInputs.appendChild(gradeInput);
    }
});

function calculateGrades() {
    const numberOfTests = document.getElementById('numberOfTests').value;
    const grades = [];
    const weights = [];
    
    for (let i = 0; i < numberOfTests; i++) {
        grades.push(parseFloat(document.getElementById(`grade${i}`).value));
        weights.push(parseFloat(document.getElementById(`weight${i}`).value));
    }

    let percentage = 0;
    let TOTALWEIGHT = 0;

    for (let j = 0; j < grades.length; j++) {
        let Total = (grades[j] / 100) * weights[j];
        TOTALWEIGHT += weights[j];
        percentage += Total;
    }

    let rest = (100 - TOTALWEIGHT);
    let average = (50 - percentage);
    let averagePercentage = (average / rest) * 100;

    const results = document.getElementById('results');
    results.innerHTML = `
        <p>Your initial grades are ${percentage.toFixed(2)}</p>
        <p>Your final exam score needed to reach average is ${averagePercentage.toFixed(2)}</p>
    `;
}
