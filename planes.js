document.addEventListener("DOMContentLoaded", () => {

const randomPlaneBtn = document.getElementById("randomPlaneBtn");
const result = document.getElementById("randomPlaneResult")
const loading = result.querySelector(".loading")
const content = result.querySelector(".content")

const planes = [
    {
        name:"A350",
        desc:"The Airbus A350 is a state-of-the-art, long-range commercial airliner that entered service in the 2010s. It features advanced aerodynamics, composite materials to reduce weight, and highly efficient engines, making it one of the most fuel-efficient large aircraft. Passengers benefit from a quieter cabin, larger windows, and improved air quality, making it popular for long-haul international flights.",
        img: "Images/A350.jpg"
    },

    {
        name:"B777",
        desc:"The Boeing 777 is a long-range, wide-body twin-engine jetliner introduced in the 1990s. Known for its reliability and impressive range, it is capable of carrying hundreds of passengers over intercontinental distances. Its large size and twin-engine design make it more economical than four-engine jets like the 747, while still offering high comfort levels in modern configurations.",
        img: "Images/b777.jpeg"
    },

    {
        name:"F-16",
        desc:"The General Dynamics (now Lockheed Martin) F-16 Fighting Falcon is a lightweight, single-engine multirole fighter jet. Introduced in the late 1970s, it is designed for air superiority and precision ground attack. Its agility, advanced avionics, and versatility have made it one of the most widely used fighter aircraft in the world, serving in dozens of air forces.",
        img: "Images/f-16.webp"
    },

    {
        name:"B747",
        desc:"The Boeing 747, nicknamed the “Jumbo Jet,” revolutionized air travel when it debuted in 1970. It is a four-engine, wide-body long-haul airliner with a distinctive upper deck “hump” that originally housed a lounge. The 747 can carry hundreds of passengers and large amounts of cargo, making it a favorite for international flights and cargo operations. Its size and range set new standards for commercial aviation.",
        img: "Images/b747.webp"
    },

    {
        name:"A330",
        desc:"The Airbus A330 is a versatile, twin-engine wide-body airliner introduced in the 1990s. It is used for medium to long-haul flights and is valued for its fuel efficiency, reliability, and passenger comfort. Many airlines operate it in various versions, including passenger, cargo, and even military tanker variants, making it one of Airbus’s most flexible aircraft platforms.",
        img: "Images/a330neo.jpg"
    },
]

function getRandomPlane() {
    return planes[Math.floor(Math.random() * planes.length)];
}

randomPlaneBtn.addEventListener("click", () => {
    loading.style.opacity = 1;
    content.style.display = "none";
    content.style.opacity = 0;

    setTimeout(() => {
        loading.style.opacity = 0;

        const plane = getRandomPlane();

        content.innerHTML = `
        <h2>${plane.name}</h2>
        <img src="${plane.img}" alt="${plane.name}">
        <p class="desc">${plane.desc}</p>
        `;

        content.style.display = "block";
        setTimeout(() => {
            content.style.opacity = 1;
        }, 50);
    }, 800);
});
});