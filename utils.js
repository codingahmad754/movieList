export function clearForm() {
    const inputs = document.querySelector('form').getElementsByTagName('input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
}

