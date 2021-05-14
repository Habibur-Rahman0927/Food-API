const allFoodData = foodName => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => displayItem(data.meals))
}

const searchBtn = document.getElementById('seacrh-btn');
searchBtn.addEventListener('click', () => {
    const inputValue = document.getElementById('input-value').value;
    document.getElementById('input-value').value =  '';
    if(inputValue<0 || inputValue >0 || inputValue == 0 || inputValue == "" ){
        error();

    }else{
        allFoodData(inputValue)
    }
})

const  error = () =>{
    const divError = document.getElementById('error');
        const getError = `
            <h1 style="color:red">This is not found ... (404)</h1>
        `
        divError.innerHTML = getError;
}

const displayItem = food => {
    const foodContainer = document.getElementById('food-container');   
            if(food == null){
                error();
            }else{
                for (let i = 0; i < food.length; i++) {
                    const allfood = food[i];
                    console.log(allfood);
                const div = document.createElement('div');
            div.className = 'cardcont';
            const foodInfo = `
                    <div onclick="displayFoodDetails('${allfood.idMeal}'),displayNone()" class="cardimg" id="displaynone">
                        <img src="${allfood.strMealThumb}" alt="Card image cap">
                    <div class="cardtitle">
                        <h6 class="card-title font-weight-bold">${allfood.strMeal}</h6>
                    </div>
            `
            div.innerHTML = foodInfo || " Not found 404!!";
            foodContainer.appendChild(div);
            }    
        }
}

const displayFoodDetails = displayFoodDetails => {
    console.log(displayFoodDetails);
    // const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${displayFoodDetails}`;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${displayFoodDetails}`)
    .then(res => res.json())
    .then(foodData => displyAllItem(foodData.meals));
}

const displyAllItem = (foodDisply) => {
    const allIdData = foodDisply[0]
    console.log(allIdData)
    const cardDisplay = document.getElementById('cardfrom');
    const cardInformation = `
        <div class="cardDesgin">
            <img class="imgforcard" src="${allIdData.strMealThumb}" alt="Card image cap">
            <div class="allItems">
            <h4 class="font-weight-bold">${allIdData.strArea}</h4>
            <li>${allIdData.strCategory}</li>
            <li>${allIdData.strIngredient1}</li>
            <li>${allIdData.strIngredient2}</li>
            <li>${allIdData.strIngredient3}</li>
            <li>${allIdData.strIngredient4}</li>
            <li>${allIdData.strIngredient5}</li>
            <li>${allIdData.strMeasure1}</li>
            <li>${allIdData.strMeasure2}</li>
            <li>${allIdData.strMeasure3}</li>
            <li>${allIdData.strMeasure4}</li>
            <li>${allIdData.strMeasure5}</li>
            <li>${allIdData.strMeasure6}</li>
            <button onclick="backButton(), searchBoxtoggol()">Back</button>  
            </div> 
        </div>
         `
    cardDisplay.innerHTML = cardInformation;
}
const displayNone = () =>{
    const newEvent = document.getElementById('disply');
    newEvent.style.display= 'none';
}
const backButton = () => {
    const cardfrom = document.getElementById('cardfrom');
    cardfrom.style.display = 'none';
    const newEvent = document.getElementById('disply');
    newEvent.style.display= 'block';  
}

