var habilidades = [
    { name: "Flutter/Dart", value: 95 },
    { name: "ASP.NET, .Net Core, C#, Basic.", value: 90 },
    { name: "FastApi/Python", value: 85 },
    { name: "React Native/JS", value: 95 },
    { name: "Laravel", value: 99 },
    { name: "NextJs", value: 55 },
    { name: "NestJs", value: 75 },
    { name: "NodeJS", value: 85 },
    { name: "Android Java/Kotlin", value: 89 },
    { name: "PHP", value: 99 },
    { name: "Docker", value: 69 },
    { name: "Git/Github/Gitlab", value: 79 },
    { name: "Mysql, PostgreSQL, MSSQL Server, Firebase, MongoDB", value: 89 },
    { name: "Vercel", value: 90 },
    { name: "Supabase", value: 90 },
    { name: "Figma, Zeplin, Adobe XD", value: 85 },
];

var contenedor = document.getElementById('load_habilidades');
const toastLiveExample = document.getElementById('liveToast')

if (habilidades.length > 0) {
    habilidades.forEach(e => {
        contenedor.innerHTML += `
        <div class="col-lg-12">
        <label for="label" class="fw-bold mt-2">${e.name}</label>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="${e.value}"
        aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-primary" style="width: ${e.value}%">${e.value}%</div>
        </div>
        </div>`;
    });
}

// validation form
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
            if (!form.checkValidity()) {
                event.stopPropagation()
            } else {
                try {
                    const formData = new FormData(form);
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                    toastBootstrap.show()
                    form.reset();
                } catch (error) {
                    console.error(error);
                }
            }

            form.classList.add('was-validated')
        }, false)
    })

})()

// hide menu when use movil
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992) { // Solo en móviles
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});