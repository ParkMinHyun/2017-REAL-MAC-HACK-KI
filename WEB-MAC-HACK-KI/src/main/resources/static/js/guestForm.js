/**
 * Created by Naver on 2017. 10. 17..
 */
class GuestForm {
  constructor() {
    this.init();
    let nowGender;
  }

  init() {
    console.log(document.querySelector('.mdl-button__ripple-container'));
    document.querySelector('.mdl-button__ripple-container').addEventListener('click', (e) => {
      this.postForm(e);
    });
    this.setCalendar();
  }

  postForm(e) {
    e.preventDefault();
    console.log(e.target);
    const guestData = {
      'name' : document.querySelector('#name').value,
      'email' : document.querySelector('#email').value,
      'age' : document.querySelector('#age').value,
      'gender' : document.querySelector('input[name="gender"]:checked').dataset.id,
      'language' : document.querySelector('#language').value,
      'date' : document.querySelector('#date').value,
      'theme' : document.querySelector('#theme').value,
      'attraction' : document.querySelector('#attraction').value
    };

    fetch('/party/guest', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guestData)
    }).then(res => {
      console.log('ddd: ', res);
      return res.json();
    }).then(json => {
      console.log('res: ', json);
    });
  }

  setCalendar() {
    const nowDay = new Date();
    const year = nowDay.getFullYear();
    const month = nowDay.getMonth() + 1;
    const date = nowDay.getDate();
    document.querySelector('#date').setAttribute('min', year + '-' + month  + '-' + date);
  }
}

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM fully loaded and parsed");
  setTimeout(() => {
    new GuestForm();
    }, 300);
});