const team = [
    {
        nome: "Wayne Barnett",
        ruolo:"Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo:"Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo:"Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo:"Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo:"Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo:"Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]

const cardRow = document.querySelector(".row");

let cards = "";
for (let i = 0; i < team.length; i++) {
    const curTeam = team[i];
    cards += `
    <div class="card mx-auto" style="">
        <img  src="img/${curTeam.foto}" img" alt="...">
        <div class="card-body">
            <h2>${curTeam.nome}</h2>
            <p class="card-text">${curTeam.ruolo}</p>
        </div>
    </div>
    `
}
console.log(cards);
cardRow.innerHTML = cards;