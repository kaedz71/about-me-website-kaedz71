const randomGameBtn = document.getElementById("randomGameBtn");
const gameResult = document.getElementById("randomGameResult");

if (randomGameBtn && gameResult) {

const gameLoading = gameResult.querySelector(".loading")
const gameContent = gameResult.querySelector(".content")

const games = [
{
        name: "Microsoft Flight Simulator",
        img: "Images/msfs2020.jpg",
        desc: "Microsoft Flight Simulator 2020 is a highly realistic flight simulation game that allows players to pilot a wide variety of aircraft, from small Cessnas to large airliners like the Boeing 747. It features incredibly detailed global scenery based on satellite imagery, real-time weather, and accurate flight physics, giving players an immersive experience of flying anywhere in the world. The game appeals to both casual players who enjoy sightseeing from the cockpit and serious aviation enthusiasts who practice real-world flight procedures."
    },
    {
        name: "Roblox",
        img: "Images/roblox.jpg",
        desc: "Roblox is a massively popular online platform where users can create, share, and play games made by other users. It offers a huge variety of experiences, from role-playing and racing games to obstacle courses and simulators, all built using Roblox Studio. Its social features, like chat and collaboration, make it a community-driven platform, allowing players to interact, create together, and explore virtually limitless content. The platform is especially popular with younger audiences and aspiring game developers."
    },
    {
        name: "Clash Royale",
        img: "Images/clash_royale.jpg",
        desc: "Clash Royale is a real-time strategy game for mobile devices that combines card collecting, tower defense, and multiplayer battles. Players build a deck of cards representing troops, spells, and buildings, and then use them to attack their opponent’s towers while defending their own. The game is fast-paced, requiring strategic thinking, timing, and adaptation to opponents’ moves. Its mix of competitive ladder play, seasonal challenges, and clan features makes it highly engaging for players of all skill levels."
    },
    {
        name: "Coding",
        img: "Images/coding.jpg",
        desc: "Coding, or computer programming, is the process of writing instructions that tell a computer or software how to perform tasks. It involves using programming languages like Python, JavaScript, or HTML to create websites, apps, games, and even simulations. Learning to code develops problem-solving skills, logical thinking, and creativity, as programmers must design efficient solutions and troubleshoot errors. It’s a highly valuable skill with applications in almost every field, from technology and entertainment to science and engineering."
    },
    {
        name: "Taekwondo",
        img: "Images/tkd.jpg",
        desc: "Taekwondo is a Korean martial art that emphasizes high, fast kicks, jumping and spinning techniques, and disciplined hand strikes. Beyond physical skills, it teaches self-discipline, respect, focus, and mental resilience. Practitioners advance through a belt system, learning increasingly complex patterns (poomsae) and sparring techniques. Taekwondo is also an Olympic sport, making it a practice that combines self-defense, fitness, and competitive athletics."
    },
    {
        name: "Plane papercraft",
        img: "Images/737_papercraft.jpg",
        desc: "Plane papercraft making is the art of creating detailed paper models of airplanes, often scaled-down replicas of real aircraft. It requires precision cutting, folding, and gluing, and can range from simple designs for beginners to highly complex models for enthusiasts. This hobby combines creativity, patience, and attention to detail, and is popular among aviation fans who enjoy hands-on crafting and building miniature versions of their favorite planes."
    },
];

function getRandomGame() {
    return games[Math.floor(Math.random() * games.length)];
}

randomGameBtn.addEventListener("click", () => {
    gameLoading.style.opacity = 1;
    gameContent.style.display = "none";
    gameContent.style.opacity = 0;

    setTimeout(() => {
        gameLoading.style.opacity = 0;

        const game = getRandomGame();

        gameContent.innerHTML = `
        <h2>${game.name}</h2>
        <img src="${game.img}" alt="${game.name}">
        <p class="desc">${game.desc}</p>
        `;

        gameContent.style.display = "block";
        setTimeout(() => {
            gameContent.style.opacity = 1;
        }, 50);
    }, 800);
});
}