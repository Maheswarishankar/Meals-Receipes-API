//create the parent container
const parent_container = document.createElement('div');
parent_container.setAttribute('id', 'container-fluid');
document.body.append(parent_container);

// To crete the first row for split img using card

const Row1 = document.createElement('div');
Row1.classList.add('class', 'Row1');
parent_container.append(Row1);

//search data..................................................................................................

document.getElementById('search-btn').addEventListener('click', function (e) {
    e.preventDefault()

})

const getData = async () => {
    try {
        const searchData = document.getElementById('inputName')
        const inputValue = searchData.value.trim();
        // console.log(inputValue)       

        let url1 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`
        let res1 = await fetch(url1)
        console.log(res1);
        let data1 = await res1.json()
        console.log(data1.meals);

        for (let i of data1.meals) {


            // To create the first column

            const Coloumn1 = document.createElement('div');
            Coloumn1.setAttribute('class', 'col-sm-12 col-lg-4', 'p-3');
            Row1.append(Coloumn1);

            // To create the first card
            const card1 = document.createElement('div');
            card1.classList.add('card', 'p-2', 'm-5', 'card-hearder', 'card-body', 'bg-warning', 'bg-gradient', 'cardh');
            Coloumn1.append(card1);

            // To create the  header div element
            const parentDiv = document.createElement('div');
            parentDiv.classList.add('bg-warning', 'text-danger', 'fw-bolder', 'm-2', 'text-center', 'cardName');
            card1.append(parentDiv);

            //To create the meal name

            const meal_name = document.createElement('div');
            meal_name.classList.add('m-0', 'fw-bolder');
            meal_name.innerText = i.strMeal;
            parentDiv.append(meal_name);

            //To create the img tag
            const img_element = document.createElement('img');
            img_element.setAttribute('src', i.strMealThumb);
            img_element.classList.add('class', 'img')
            card1.append(img_element);

            // To create the button
            const button = document.createElement('button');
            button.classList.add('button', 'btn-danger', 'p-2', 'm-2', 'fw-bolder',);
            button.innerText = "Get Recipes";
            card1.append(button);
        }

    }
    catch {
        console.log(err);
    }
}


// //create the default search data.................................................................................

const container = document.getElementById('container-fluid');
window.addEventListener('load', function () {
    defaultData()
})

const defaultData = async () => {
    try {

        const searchData = await document.getElementById('inputName')
        const inputValue = await searchData.value.trim();
         console.log(inputValue)

        let defaultSearch = 'chicken'
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${defaultSearch}`
        let res = await fetch(url)
        // console.log(res);    
        let data = await res.json()

        console.log(data.meals);

        for (let i of data.meals) {

            // To create the first column

            

            const Coloumn1 = document.createElement('div');
            Coloumn1.setAttribute('class', 'col-sm-12 col-lg-4', 'p-3');
            Row1.append(Coloumn1);

            // To create the first card
            const card1 = document.createElement('div');
            card1.classList.add('card', 'p-2', 'm-5', 'card-hearder', 'card-body', 'bg-warning', 'bg-gradient', 'cardh');
            Coloumn1.append(card1);

            // To create the  header div element
            const parentDiv = document.createElement('div');
            parentDiv.classList.add('bg-warning', 'text-danger', 'fw-bolder', 'm-2', 'text-center', 'cardName');
            card1.append(parentDiv);

            //To create the meal name

            const meal_name = document.createElement('div');
            meal_name.classList.add('m-0', 'fw-bolder');
            meal_name.innerText = i.strMeal;
            parentDiv.append(meal_name);

            //To create the img tag
            const img_element = document.createElement('img');
            img_element.setAttribute('src', i.strMealThumb);
            img_element.classList.add('class', 'img')
            card1.append(img_element);

            // To create the button
            const button = document.createElement('button');
            button.classList.add('button', 'btn-danger', 'p-2', 'm-2', 'fw-bolder',);
            button.innerText = "Get Recipes";
            card1.append(button);
        }
    }

    catch {
        console.log(err)
    }
}



