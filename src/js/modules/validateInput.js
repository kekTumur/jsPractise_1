const validateInput = (inputSelector, modalSelector, windows) => {
    const input = document.querySelectorAll(inputSelector),
          modal = document.querySelector(modalSelector);
    let count = 0;
    input.forEach((item,i) => {
        if (item.value && ++count == input.length){
            input.forEach(a => a.style.borderColor = '#ccc');
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'block';
            document.body.style.overflow = "hidden";
        } else {
            item.style.borderColor = 'red';
        }
    });
};

export default validateInput;