const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const copyEmailBtn = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");

copyEmailBtn.addEventListener("click", function(e){
    e.preventDefault();

    const email = "hidayaturrohmanwildanwildan@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            copyMessage.textContent = "✓ Email copied successfully";

            setTimeout(() => {
                copyMessage.textContent = "";
            }, 3000);
        })
        .catch(err => {
            console.error("Failed to copy email:", err);
        });
});