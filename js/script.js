const team = [
    {
        nome: "Wayne Barnett",
        ruolo:"Founder & CEO",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo:"Chief Editor",
        foto: "aaa"
    },
    {
        nome: "Walter Gordon",
        ruolo:"Office Manager",
        foto: "path/to/image.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo:"Social Media Manager",
        foto: "aaa"
    },
    {
        nome: "Scott Estrada",
        ruolo:"Developer",
        foto: "aaa"
    },
    {
        nome: "Barbara Ramos",
        ruolo:"Graphic Designer",
        foto: "aaa"
    }
]

const cardRow = document.querySelector(".row");

let cards = "";
for (let i = 0; i < team.length; i++) {
    const curTeam = team[i];
    cards += `
    <div class="card" style="">
        <img ${curTeam.foto} src="img/angela-caroll-chief-editor.jpg" class="card-img-top, img" alt="...">
        <div class="card-body">
            <h2>${curTeam.nome}</h2>
            <p class="card-text">${curTeam.ruolo}</p>
        </div>
    </div>
    `
}
console.log(cards);
cardRow.innerHTML = cards;