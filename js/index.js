(() => {
    const modal = document.querySelector('.rating-modal-con');
    const submitBtn = document.querySelector('.submit-btn-box');
    const thankYouModal = document.querySelector('.thank-you-modal-con');
    let currentTarget;
    let rateNum;

    let clickHandler = (e) => {
        let targetElem = e.target;
        
        if (currentTarget) {
            currentTarget.style.backgroundColor = 'hsl(213, 19%, 18%)';
        }
        if (targetElem.classList.contains('ico-box')){
            targetElem.style.backgroundColor = 'lightgrey';
            currentTarget = targetElem;
            rateNum = currentTarget.innerHTML;
            
        }
    }
    modal.addEventListener('click', clickHandler);
    submitBtn.addEventListener('click', () => {
        thankYouModal.classList.add('visable');
        document.querySelector('.rateNum').innerHTML = `${rateNum}`;
    })
    
})();