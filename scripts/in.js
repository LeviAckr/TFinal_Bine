 function pid(){
    fetch('https://api.ipify.org/?format=json')
.then(results => results.json())
fetch('https://api.ipify.org/?format=json')
.then (results => results.json())
.then (data => console.log(data.ip));
};

pid();
console.log("xx.xxx.xx.xxx")