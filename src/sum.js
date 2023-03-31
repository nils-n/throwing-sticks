export function add(a, b) {
    return a + b
}

export function buttonClick() {
    console.log('button was clicked! changing the DOM now. ' )
    document.getElementById('result').innerText = 'Tadaaaaaaaa';
}

