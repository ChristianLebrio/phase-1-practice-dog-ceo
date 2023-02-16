console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function (response) {
    return response.json();})
    .then(function (data) {
       //console.log(data)
       data.message.forEach(element => {
        let image = document.createElement('div');
        let placeToPut = document.getElementById('dog-image-container');

        image.innerHTML = `<img src= ${element}>`;
        placeToPut.append(image);
       });
    });

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let placeToPutBreed = document.querySelector('ul')
        //console.log(data.message)
        for (let element of Object.keys(data.message)){
            console.log(element)
            let breedname = document.createElement('li')
            breedname.innerHTML= `<li>${element}</li>`;
            placeToPutBreed.append(breedname)
            breedname.addEventListener("click", event => event.target.style.color = 'red')
        }
        const selectForm = document.querySelector("select")
        //console.log(selectForm)
        selectForm.addEventListener('change', event => {
           let choice = event.target.value
           console.log(choice)
           if (choice === "a") {
            placeToPutBreed.innerHTML = `<ul></ul>`
            for (let element of Object.keys(data.message)){
                //console.log(element)
                if (element[0] === "a") {let breedname = document.createElement('li')
                breedname.innerHTML= `<li>${element}</li>`;
                placeToPutBreed.append(breedname)
                breedname.addEventListener("click", event => event.target.style.color = 'red')
            }
            }
           } else if (choice === "b") {
            placeToPutBreed.innerHTML = `<ul></ul>`
            for (let element of Object.keys(data.message)){
                //console.log(element)
                if (element[0] === "b") {let breedname = document.createElement('li')
                breedname.innerHTML= `<li>${element}</li>`;
                placeToPutBreed.append(breedname)
                breedname.addEventListener("click", event => event.target.style.color = 'red')
            }
            }
           } else if (choice === "c") {
            placeToPutBreed.innerHTML = `<ul></ul>`
            for (let element of Object.keys(data.message)){
                //console.log(element)
                if (element[0] === "c") {let breedname = document.createElement('li')
                breedname.innerHTML= `<li>${element}</li>`;
                placeToPutBreed.append(breedname)
                breedname.addEventListener("click", event => event.target.style.color = 'red')
            }
            }

           } else {
            placeToPutBreed.innerHTML = `<ul></ul>`
            for (let element of Object.keys(data.message)){
                //console.log(element)
                if (element[0] === "d") {let breedname = document.createElement('li')
                breedname.innerHTML= `<li>${element}</li>`;
                placeToPutBreed.append(breedname)
                breedname.addEventListener("click", event => event.target.style.color = 'red')
            }
            }
           }
        })
        


        
    })
})