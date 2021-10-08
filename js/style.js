// const 
let moviessection = document.getElementById('the-movies-div');
let getmoviesbyword = document.getElementById('getmoviesbyword') ;
let yourname = document.getElementById('yourname');
let youremail = document.getElementById('youremail');
let yourphone = document.getElementById('yourphone');
let yourage = document.getElementById('yourage');
let yourpassword = document.getElementById('yourpassword');
let reyourpassword = document.getElementById('reyourpassword');
let submitbtn = document.getElementById('submitbtn');
let controlicon = document.getElementById('controlicon');
let sidebarholder = document.getElementById('sidebarholder');
let firstlist = document.getElementById('firstlist');
let searchdiv = document.getElementById('searchdiv');
let contactus = document.getElementById('contactus');

let data = [];         //for the data came from the API
let contactdata = [];  //for the information entered by the user

// geting data from the API
function fetchdata() {
  // fetchbody
  // console.log(fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k'));
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k').then(response =>{
    return response.json();
  }).then(moviesdata =>{
    // console.log(moviesdata.results);
    for(var i = 0 ; i<= moviesdata.results.length ; i++){
      data.push(moviesdata.results[i]);
    }
    
    // console.log(moviesdata.results[2])
    // console.log(data)

    for(var i = 0 ; i<=data.length ; i++){

      let unit = `<div class="col-lg-4  col-sm-12  movie-card mb-5 item">
      <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" width="100%" height="auto" alt="Movies-photo">
      <div class="item-overlay top p-5 ">
      <h4>${data[i].original_title}</h4>
      <p>${data[i].overview}</p>
      <p>rate : ${data[i].vote_average}</p>
      <p>${data[i].release_date}</p>
      </div>
      </div>`
      moviessection.innerHTML += unit ;
    }
  })
}
fetchdata();

console.log(data)

// the filtering movies by their names
getmoviesbyword.addEventListener('keyup',function(){
  moviessection.innerHTML = '' ;
  for(var i = 0 ; i<=data.length ; i++){
    console.log(getmoviesbyword.value)
    console.log( data[i].original_title)
    
    if(getmoviesbyword.value == data[i].original_title){
      let sw = `<div class="col-lg-4  col-sm-12  movie-card mb-5 item">
      <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" width="100%" height="auto" alt="Movies-photo">
      <div class="item-overlay top p-5 ">
      <h4>${data[i].original_title}</h4>
      <p>${data[i].overview}</p>
      <p>rate : ${data[i].vote_average}</p>
      <p>${data[i].release_date}</p>
      </div>
      </div>`
      moviessection.innerHTML += sw ;
      console.log('yes');
    }else 
      console.log('no')
    }
  
})

controlicon.addEventListener('click',function(){
  
  if(sidebarholder.classList.contains('side-bar')){
    contactus.classList.remove('indexeditor')
  searchdiv.classList.remove('indexeditor')
    sidebarholder.classList.remove('side-bar');
    sidebarholder.classList.add('side-bar1');
    firstlist.classList.remove('list');
    firstlist.classList.add('list1');
controlicon.classList.remove('fa-bars')
controlicon.classList.add('fa-times')
  }else{
    sidebarholder.classList.remove('side-bar1');
    sidebarholder.classList.add('side-bar');
    firstlist.classList.remove('list1');
    firstlist.classList.add('list');
    contactus.classList.add('indexeditor')
    searchdiv.classList.add('indexeditor')
    controlicon.classList.remove('fa-times')
controlicon.classList.add('fa-bars')
  }
  
})


// the crud system for contact us 
class person{
  constructor(name,email,phone,age,password,repassword){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.age=age;
    this.password=password;
    this.repassword=repassword;
  }
  
}

// the submition(validations) bottin
yourname.addEventListener('keydown',function(){
  let namevali = /^[A-Za-z]/gm;
   if(namevali.test(yourname.value) == true){
    yourname.classList.remove('is-invalid');
    yourname.classList.add('is-valid');
   }else{
     yourname.classList.remove('is-valid')
     yourname.classList.add('is-invalid')
   }
})
youremail.addEventListener('keydown',function(){
  let emailvali =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if(emailvali.test(youremail.value) == true){
    youremail.classList.remove('is-invalid');
    youremail.classList.add('is-valid');
   }else{
     youremail.classList.remove('is-valid')
     youremail.classList.add('is-invalid')
   }
})
yourphone.addEventListener('keydown',function(){
  let phonevali =  /^[(01)(00201)][0125][0-9]{8}$/
   if(phonevali.test(yourphone.value) == true){
    yourphone.classList.remove('is-invalid');
    yourphone.classList.add('is-valid');
   }else{
     yourphone.classList.remove('is-valid')
     yourphone.classList.add('is-invalid')
   }
})

yourage.addEventListener('keydown',function(){
  let agevali =  /^100|[1-9]?\d$/
   if(agevali.test(yourage.value) == true){
    yourage.classList.remove('is-invalid');
    yourage.classList.add('is-valid');
   }else{
     yourage.classList.remove('is-valid')
     yourage.classList.add('is-invalid')
   }
})
yourpassword.addEventListener('keydown', ()=>{
  let passwordvali =  /[0-9]{8}$/
   if(passwordvali.test(yourpassword.value) == true){
    yourpassword.classList.remove('is-invalid');
    yourpassword.classList.add('is-valid');
    // submitbtn.removeAttribute('disabled');
   }else{
     yourpassword.classList.remove('is-valid')
     yourpassword.classList.add('is-invalid')
   }
})
reyourpassword.addEventListener('keyup',function(){
  
   if(yourpassword.value == reyourpassword.value ){
    reyourpassword.classList.remove('is-invalid');
    reyourpassword.classList.add('is-valid');
    submitbtn.disabled=false;
   }else{
     reyourpassword.classList.remove('is-valid')
     reyourpassword.classList.add('is-invalid')
     submitbtn.disabled=true;
   }
   
})

submitbtn.addEventListener('click' , function(){

contactdata.push(new person(yourname.value,youremail.value,yourphone.value,yourage.value,yourpassword.value,reyourpassword.value));
console.log(contactdata);
localStorage.setItem('contacts',JSON.stringify(contactdata))
yourname.value = '';
youremail.value = '';
yourphone.value = '';
yourage.value = '';
yourpassword.value = '';
reyourpassword.value = '';
yourname.classList.remove('is-valid');
youremail.classList.remove('is-valid');
yourage.classList.remove('is-valid');
yourphone.classList.remove('is-valid');
yourpassword.classList.remove('is-valid');
reyourpassword.classList.remove('is-valid');
alert('Your Contact Information is in our localstorage');
submitbtn.disabled=true;
})  
// yourname
// youremail
// yourphone
// yourage
// yourpassword
// reyourpassword


















