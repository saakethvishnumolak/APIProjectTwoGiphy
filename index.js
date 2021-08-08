
const searchGif = document.getElementById("searchGif");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("gifImages");

searchGif.addEventListener("submit", function(e)
{
    e.preventDefault();

    const q = searchInput.value;
    search(q)
})



function search(q)
{
    const key = "0Z74eeF4I2RTi7f1MTENyzyWhjK5ocZ1";
    const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}`;


    fetch(baseURL)
        .then(function(response)
        {
            return response.json();
        })
        .then(function(json)
        {
            console.log(json.data[0].images.fixed_width.url);
            let resultHTML = "";

            json.data.forEach(function(gif)
            {
                console.log(gif);

                const imageURL = gif.images.fixed_width.url;
                const alt = gif.title;

                resultHTML += `<img class="singleGif" src="${imageURL}" alt="${alt}">`
            })

            result.innerHTML = resultHTML;
        })
        .catch(function(error)
        {
            console.log(error.message);
        })

}
