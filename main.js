console.log("JS connected!")
let name = "Kaeden";

let planes = [
{
        name: "Airbus A350",
        img: "Images/A350.jpg",
        desc: "The Airbus A350 is a state-of-the-art, long-range commercial airliner that entered service in the 2010s. It features advanced aerodynamics, composite materials to reduce weight, and highly efficient engines, making it one of the most fuel-efficient large aircraft. Passengers benefit from a quieter cabin, larger windows, and improved air quality, making it popular for long-haul international flights."
    },
    {
        name: "Boeing 777",
        img: "Images/b777.jpeg",
        desc: "The Boeing 777 is a long-range, wide-body twin-engine jetliner introduced in the 1990s. Known for its reliability and impressive range, it is capable of carrying hundreds of passengers over intercontinental distances. Its large size and twin-engine design make it more economical than four-engine jets like the 747, while still offering high comfort levels in modern configurations."
    },
    {
        name: "F-16 Fighting Falcon",
        img: "Images/f-16.webp",
        desc: "The General Dynamics (now Lockheed Martin) F-16 Fighting Falcon is a lightweight, single-engine multirole fighter jet. Introduced in the late 1970s, it is designed for air superiority and precision ground attack. Its agility, advanced avionics, and versatility have made it one of the most widely used fighter aircraft in the world, serving in dozens of air forces."
    },
    {
        name: "Boeing 747",
        img: "Images/b747.webp",
        desc: "The Boeing 747, nicknamed the “Jumbo Jet,” revolutionized air travel when it debuted in 1970. It is a four-engine, wide-body long-haul airliner with a distinctive upper deck “hump” that originally housed a lounge. The 747 can carry hundreds of passengers and large amounts of cargo, making it a favorite for international flights and cargo operations. Its size and range set new standards for commercial aviation."
    },
    {
        name: "Airbus A330",
        img: "Images/a330neo.jpg",
        desc: "The Airbus A330 is a versatile, twin-engine wide-body airliner introduced in the 1990s. It is used for medium to long-haul flights and is valued for its fuel efficiency, reliability, and passenger comfort. Many airlines operate it in various versions, including passenger, cargo, and even military tanker variants, making it one of Airbus’s most flexible aircraft platforms."
    }
];

document.addEventListener("DOMContentLoaded", function () {

    let randomPlaneBtn = document.getElementById("randomPlaneBtn");

    if (randomPlaneBtn) {
        randomPlaneBtn.onclick = function () {

            let randomIndex = Math.floor(Math.random() * planes.length);
            let randomPlane = planes[randomIndex];

            document.getElementById("randomPlaneResult").innerHTML = `
                <h3>${randomPlane.name}</h3>
                <img src="${randomPlane.img}" class="img">
                <p>${randomPlane.desc}</p>
            `;
        };
    }

let games = [
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
    let randomGameBtn = document.getElementById("randomGameBtn");

    if (randomGameBtn) {
        randomGameBtn.onclick = function () {

            let randomIndex = Math.floor(Math.random() * games.length);
            let randomGame = games[randomIndex];

            document.getElementById("randomGameResult").innerHTML = `
                <h3>${randomGame.name}</h3>
                <img src="${randomGame.img}" class="img">
                <p>${randomGame.desc}</p>
            `;
        };
    }

    let themeToggle = document.getElementById("themeToggle")

    if (themeToggle) {
        themeToggle.onclick = function () {

            document.body.classList.toggle("light-mode")

         if (document.body.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }

        }
    }

    let savedTheme =localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode")
    }
});
