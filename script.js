document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const buySellRent = document.querySelector('input[name=options]:checked');
    
    

    const titleError = document.getElementById('title-error');
    const priceError = document.getElementById('price-error');
    const descriptionError = document.getElementById('description-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const optionsError = document.getElementById('options-error');

    let isValid = true;
    let formData = [];

    if(title === ''){
      titleError.innerText = 'Title is required';
      return isValid = false;
    } else {
      titleError.innerText = '';
      formData.push({name: 'title', value: title});
    }

    if(price === ''){
      priceError.innerText = 'Price is required';
      return isValid = false;
    } else {
      priceError.innerText = '';
      formData.push({name: 'price', value: price});
    }

    if(description === ''){
      descriptionError.innerText = 'Description is required';
      return isValid = false;
    } else {
      description.innerText = '';
      formData.push({name: 'description', value: description});
    }

    if(email === ''){
      emailError.innerText = 'Email is required';
       return isValid = false;

    } else if(!isValidEmail(email)){
      emailError.innerHTML = 'Email format is wrong!';
       return isValid = false;
    } else {
      emailError.innerText = '';
      formData.push({name: 'email', value: email});
    }

    if(phone === ''){
      phoneError.innerText = 'phone is required';
      return isValid = false;
    } else if(!isValidPhone(phone)){
      phoneError.innerText = 'phone format is wrong';
      return isValid = false;
    } else {
      phoneError.innerText = '';
      formData.push({name: 'phone', value: phone});
    }

    if(!buySellRent){
      optionsError.innerText = 'Select either buy/sell or rent';
      return isValid = false;
    } else {
      optionsError.innerText = '';
      formData.push({name: 'Options', value: buySellRent.value});
    }

    if(isValid){
      displayFormData(formData);
      clearForm();
    }

  });

  const isValidPhone = (phone) => {
    return /^(\+91[\-\s]?)?(91)?[6789]\d{9}$/.test(phone);
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  let id = 1;
  const displayFormData = (formData) => {
    let table = document.getElementById('formDataTable')
    let row = table.insertRow();
    let idCell = row.insertCell();
    idCell.innerText = id++;

    formData.forEach(element => {
      let cell = row.insertCell();
      cell.innerText =element.value;
    });
  }
  //clear form
  const clearForm = () => {
    const buySell = document.getElementById('buysell');
    const rent = document.getElementById('rent');
    title.value = '';
    description.value = '';
    price.value = '';
    email.value = '';
    phone.value = '';
    buySell.checked = false;
    rent.checked = false;

    titleError.innerText = '';
    descriptionError.innerText = '';
    priceError.innerText = '';
    emailError.innerText = '';
    phoneError.innerText = '';
    optionsError.innerText = '';
  }
  
});



