const form = document.querySelector("form");

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const results = document.getElementById('results');

    if(height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `Enter valid Height { ${height} }` ;
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `Enter valid weight { ${weight} }`;
    }
    else{
                
       const bmi = (weight / ((height * height)/10000)).toFixed(2);
       results.innerHTML = `<span><u>Your bmi is <strong>${bmi}</strong></u></span>`

       if(bmi < 18.6)
       {
            results.innerHTML += `<p id="low"> you are under weight </p>` 
       }
       else if(bmi > 24.9)
       {
            results.innerHTML += `<p id="over"> you are Over weight </p>` 
       }
       else
       {
            results.innerHTML += `<p id="normal"> you are Normal </p>` 
       }
    }

} )