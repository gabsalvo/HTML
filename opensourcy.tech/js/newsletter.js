const submit = document.querySelector('.submit-email');
const email = document.querySelector('.add-email');
const form =  document.querySelector('.subscription');


submit.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if(submit.value === "") {
        console.log('insert valid email pls')
      } else {
      form.classList.add('done');
      console.log(document.querySelector('.add-email').value);
      setTimeout(() => {
      form.classList.remove('done')
      }, "5000")
      }
  });
