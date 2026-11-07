let selectCountries = document.getElementById("country")
let selectCity = document.getElementById('city')
let cityObj = {
    Iran: ['Tehran', 'Esfahan', 'Mashhad'],
    AFG: ['Kabul', 'Herat', 'Kandahar'],
    USA: ['Los Angles', 'San Diego', 'Chicago'],
    Pakistan: ['Islam Abad', 'Karachi', 'Kovith']    
}
selectCountries.addEventListener("change", function(){
    if(selectCountries.value === 'Please Select country'){
        selectCity.innerHTML = ""
        selectCity.innerHTML = '<option> Please Select the city... </option>'
    }else{
        let countryName = selectCountries.value
        let countryCitys = cityObj[countryName] // citys of the country which selected
        selectCity.innerHTML = ''
        countryCitys.forEach(function(item){
            selectCity.innerHTML += '<option>' + item + '</option'
        }) 
    }

})