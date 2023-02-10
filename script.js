
btn.onclick = () => {
    fetch("https://api.github.com/users/" + champ.value)
    .then(reponse => reponse.json())
    .then(data => {
        //ici je met output avec un text content vide 
        //pour qu'il ce vide a chaque fois que je fais une requet.
        //console.log(data);
        output.textContent = "";
        outputName.textContent = `Compte de ${data.name}`;
        
        output2.innerHTML = `<p>Blog : <a href="${data.blog}" target="_blank"  rel="window.object">${data.blog}</a></p>`;
        output3.textContent = `Followers : ${data.followers}`;
        output4.textContent = `Repository : ${data.public_repos}`;
        output5.textContent = `Login : ${data.login}`;
        
        
        //https://api.github.com/users/Mika73100/repos?page=5&per_page=5;rel=%22next%22
        //https://api.github.com/users/Mika73100/repos?page=5&per_page=5;rel=%22next%22
        //outputLeft.innerHTML = `<a href="https://github.com/users/${champ.value}/repos?page=5&per_page=5;rel=next">Click</a>`;
        //page404
        //outputLeft.innerHTML = `<a href="https://api.github.com/users/${champ.value}/repos?page=5&per_page=5;rel=next">Click</a>`;

        
        const img = document.createElement("img");
        img.src = data.avatar_url;
        img.width = "100";
        outputImg.appendChild(img);
    })

    fetch("https://api.github.com/users/"+ champ.value +"/repos?page=5&per_page=5")
    .then(reponse2 => reponse2.json())
    .then(data => {
        data.forEach(repo => {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = 
            `<div  class="projet">
                <a href="${repo.html_url}" target="_blank"  rel="window.object">${repo.html_url}</a>
                <p>Language: ${repo.language}</p>
                <p>Description: ${repo.description}</p>
            </div>
            `;
            document.querySelector('.col-sm-9').appendChild(newDiv);
            
        })
    }); 
}    





