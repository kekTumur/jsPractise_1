const checkNumInputs = (selector, regexp = /[^0-9+()\-]/) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(regexp, "");
        });
    });
};

export default checkNumInputs;