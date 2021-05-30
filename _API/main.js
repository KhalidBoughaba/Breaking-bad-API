const api = "https://www.breakingbadapi.com/api/characters";

async function getData() {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);

    document.querySelector("#content h1").textContent = data[0].name;
    document.querySelector("#content h5").textContent = data[0].birthday;
    document.querySelector("#content img").src = data[0].img;

    document.querySelector("#actor").innerHTML = `
    <select>
    ${data.map(actor => `<option>${actor.name}</option>`)}
    </select>
    `

    document.querySelector("#content").addEventListener("change", changeInfo);

    function changeInfo() {

        for(var i=0; i<data.length; i++){

            document.querySelector("#content h1").textContent = data[i].name;
            document.querySelector("#content h5").textContent = data[i].birthday;
            document.querySelector("#content img").src = data[i].img;

        }

    }
    console.log(data.length)

}
getData()
