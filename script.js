    //https://www.youtube.com/watch?v=2lt4HmLm8LE
    //ici je met fetch = va chercher ! 
    //fetch me sert ici pour envoyer une promess d'ailleurs nous recupérons tous par 
    //le get ce qui nous sert a aller chercher des données et les affichés sur notre navigateur.
    //fetch("https://api.github.com/users/Mika73100")
    //then va nous récupérer la réponse de notre requet :
    //ici dans le console log je vois un OK, ce qui signifie que je récupere bien les données du serveur.
    //grace a response.json je vais transformer mon affichage en 
    //un objet JASON qui sera interpreté par mon navigateur.
    //.then(reponse => reponse.json())
    //a ce stade je reçois une promess mais en pending ce qui sginifie (en attente).
    //.then(reponse => reponse.json())
    //graçe a mon deuxieme then je recupère quelque chose d'exploitable.
    //je modifie mon console log par table afin de rendre l'affichage plus lisible.
    //.then(reponse2 => console.table(reponse2))


    btn.onclick = () => {
        fetch("https://api.github.com/users/" + champ.value)
        .then(reponse => reponse.json())
        .then(data => {
            //ici je met output avec un text content vide 
            //pour qu'il ce vide a chaque fois que je fais une requet.
            //console.log(data);
            output.textContent = "";
            outputName.textContent = `Compte de ${data.name}`;

            output2.textContent = `Blog : ${data.blog}`;
            output3.textContent = `Followers : ${data.followers}`;
            output4.textContent = `Repository : ${data.public_repos}`;
            
            const img = document.createElement("img");
            img.src = data.avatar_url;
            img.width = "100";
            outputImg.appendChild(img);

        })

    //     let repo = 0;

    //     while (repo < 30) {
    //         //console.log(data);
    //         data.forEach(repo => {
    //             console.log(repo);
    //             //repozip.textContent = repo.html_url
    //             //language.textContent = repo.language
    //             repozip.textContent = `Repository : ${repo.html_url}`;
    //             language.textContent = `Langage : ${repo.language}`;
    //             description.textContent = `description : ${repo.description}`;
    //     });
    // };

        fetch("https://api.github.com/users/"+ champ.value +"/repos" )
        .then(reponse2 => reponse2.json())
        .then(data => {
            //console.log(data);
            data.forEach(repo => {
                console.log(repo);
                //repozip.textContent = repo.html_url
                //language.textContent = repo.language
                repozip.textContent = `Repository : ${repo.html_url}`;
                language.textContent = `Langage : ${repo.language}`;
                description.textContent = `description : ${repo.description}`;
            })
    });



}    

