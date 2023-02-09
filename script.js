
btn.onclick = () => {
    fetch("https://api.github.com/users/" + champ.value)
    .then(reponse => reponse.json())
    .then(data => {
        //ici je met output avec un text content vide 
        //pour qu'il ce vide a chaque fois que je fais une requet.
        //console.log(data);
        output.textContent = "";
        outputName.textContent = `Compte de ${data.name}`;
        
        output2.innerHTML = `<p>Blog : <a href="">${data.blog}</a></p>`;
        output3.textContent = `Followers : ${data.followers}`;
        output4.textContent = `Repository : ${data.public_repos}`;

        const img = document.createElement("img");
        img.src = data.avatar_url;
        img.width = "100";
        outputImg.appendChild(img);
    })

    fetch("https://api.github.com/users/"+ champ.value +"/repos" )
    .then(reponse2 => reponse2.json())
    .then(data => {
        data.forEach(repo => {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <div  class="projet">
                <a href="">${repo.html_url}</a>
                <p>Language: ${repo.language}</p>
                <p>Description: ${repo.description}</p>
            </div>
            `;
            document.querySelector('.col-sm-9').appendChild(newDiv);
        })
    }); 
}    


