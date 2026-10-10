const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const music = document.getElementById("birthdayMusic");
const envelope = document.getElementById("envelope");

let heartsStarted = false;


/* ================================= */
/* OPEN BIRTHDAY GIFT */
/* ================================= */

function openGift() {

    opening.style.display = "none";

    birthday.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createHearts();

    // Try to start music
    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });
}


/* ================================= */
/* ENVELOPE OPEN */
/* ================================= */

if (envelope) {

    envelope.addEventListener("click", function () {

        if (!envelope.classList.contains("open")) {

            envelope.classList.add("open");

            const tapText =
                document.querySelector(".tap-text");

            if (tapText) {
                tapText.innerHTML =
                    "Your special surprise is here ❤️";
            }

            // Confetti when envelope opens
            launchConfetti();
        }

    });

}


/* ================================= */
/* MUSIC */
/* ================================= */

function toggleMusic() {

    if (music.paused) {

        music.play();

        const button =
            document.querySelector(".music-btn");

        if (button) {
            button.innerHTML =
                "🔊 Music Playing";
        }

    } else {

        music.pause();

        const button =
            document.querySelector(".music-btn");

        if (button) {
            button.innerHTML =
                "🎵 Play Music";
        }
    }
}


/* ================================= */
/* FLOATING HEARTS */
/* ================================= */

function createHearts() {

    // Prevent multiple heart timers
    if (heartsStarted) {
        return;
    }

    heartsStarted = true;

    const container =
        document.querySelector(".hearts");

    if (!container) {
        return;
    }

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            ["❤️", "💗", "💕", "💖", "🦋", "🌸"]
            [Math.floor(Math.random() * 6)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "999";

        container.appendChild(heart);


        heart.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        "translateY(-110vh) rotate(360deg)",

                    opacity: 0
                }
            ],

            {
                duration:
                    Math.random() * 4000 + 5000,

                easing: "linear"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 9000);


    }, 500);
}


/* ================================= */
/* CONFETTI */
/* ================================= */

function launchConfetti() {

    const emojis = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "🦋",
        "🌸",
        "🌷",
        "✨",
        "🎉",
        "💛"
    ];


    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            Math.random() * 20 + 12 + "px";

        confetti.style.zIndex =
            "9999";

        confetti.style.pointerEvents =
            "none";

        document.body.appendChild(confetti);


        const animation =
            confetti.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh)
                             rotate(720deg)`,

                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 2500 + 2500,

                    easing:
                        "cubic-bezier(.2,.7,.3,1)"
                }

            );


        animation.onfinish = () => {

            confetti.remove();

        };

    }
}