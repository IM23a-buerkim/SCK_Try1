document.addEventListener("DOMContentLoaded", function () {
    const categories = ["club", "aktivitaten", "news_agenda", "mitgliedschaft", "links"];

    categories.forEach(function (category) {
        const categoryElement = document.getElementById(category);
        const uulink = categoryElement.nextElementSibling;

        categoryElement.addEventListener('mouseover', function () {
            uulink.style.display = "block";
        });

        categoryElement.addEventListener('mouseout', function () {
            setTimeout(function () {
                if (!uulink.matches(':hover')) {
                    uulink.style.display = "none";
                }
            }, 300); // 2 Sekunden warten
        });

        uulink.addEventListener('mouseover', function () {
            uulink.style.display = "block";
        });

        uulink.addEventListener('mouseout', function () {
            uulink.style.display = "none";
        });
    });
});


//const test = document.getElementsByClassName("uulink")[0];
//test.style.display = "block";