const $ = document.querySelector.bind(document);

class List {
    constructor(){
        this._serverURL = "http://localhost:3000";
        this.candidates = [
            {
                name: "Marina Cristina",
                age: 21,
                gender: "female",
                location: "Diadema",
                state: "São Paulo",
                skills: "HTML, CSS, JS, React"
            },
        ];
    }

    init(){
        this.getInitialData();
    }
    
    getInitialData(){
        // Implemente seu Código de Busca Aqui
        // Comente, Exclua ou Edite essa Linha quando tudo estiver pronto;
        this.renderCards(this.candidates); 
    }

    renderCards(candidates){
        const wrapper = $(".list-container");
        wrapper.innerHTML = "";
        candidates.forEach(candidate => {
            wrapper.appendChild(this.createCard(candidate));
        })
    }

    createCard(candidate){
        // Cria a div mãe do item da lista
        const container = document.createElement("div");
        container.classList.add("list-item");
        if(candidate.gender && ["female", "male"].includes(candidate.gender))
        container.classList.add(candidate.gender); 

        // Adiciona Circulo com Iniciais
        const initials = document.createElement("div");
        initials.classList.add("list-initials");
        initials.textContent = this.getInitials(candidate.name);
        container.appendChild(initials);

        // Cria e Adiciona as informações do meio: Nome, Idade e Habilidades
        const info = document.createElement("div");
        info.classList.add("list-info");

        const username = document.createElement("span");
        username.classList.add("list-name");
        username.textContent = candidate.name;

        const age = document.createElement("span");
        age.classList.add("list-age");
        age.textContent = candidate.age + " anos";

        const skills = document.createElement("div");
        skills.classList.add("list-skills");
        candidate.skills.replace(/\ /g, "").split(",").forEach(skill => {
            const s = document.createElement("div");
            s.textContent = skill;
            skills.appendChild(s);
        })

        info.appendChild(username);
        info.appendChild(age);
        info.appendChild(skills);

        container.appendChild(info);

        // Cria e Adiciona as Informações de Localização: Cidade e Estado
        const location = document.createElement("div");
        location.classList.add("list-location");

        const locationIcon = document.createElement("img");
        locationIcon.src = "./images/location.svg";

        const city = document.createElement("span");
        city.classList.add("list-city")
        city.textContent = candidate.location;

        const state = document.createElement("span");
        state.classList.add("list-state");
        state.textContent = candidate.state;

        location.appendChild(locationIcon);
        location.appendChild(city);
        location.appendChild(state);

        container.appendChild(location);

        // Retorna o item com todos os elementos
        return container;
    }

    getInitials(name){
        return name.split(" ")
            .filter(word => word.length > 3)
            .map(word => word.charAt(0))
            .slice(0, 2)
            .join("");
    }
}

new List().init();