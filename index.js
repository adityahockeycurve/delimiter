function delimiter() {
    let input = document.getElementById("input").value;
    let rows = input.split('\n');
    let result = '';
    for (let i = 0; i < rows.length; i++) {
        let substrings = rows[i].split('"');
        for (let j = 1; j < substrings.length; j += 2) {
            result += substrings[j] + '\n';
        }
    }
    document.getElementById("output").value = result.trim();
}
