document.addEventListener("DOMContentLoaded", () => {
    setupFontChange();
    setupColorChange();
    setupFontSizeChange();
});
// function to change fonts
function setupFontChange() {
    const fonts = document.getElementById("fonts");
    const all = document.querySelectorAll("*");

    if (localStorage.getItem("font")) {
        let savedFont = localStorage.getItem("font");
        fonts.value = savedFont;
        all.forEach(el => el.style.fontFamily = savedFont);
    }

    fonts.addEventListener("change", (e) => {
        let fontValue = e.target.value;
        localStorage.setItem("font", fontValue);
        all.forEach(el => el.style.fontFamily = fontValue);
    });
}

// function to change colors
function setupColorChange() {
    const colors = document.getElementById("colors");
    const selects = document.querySelectorAll("select");

    if (localStorage.getItem("color")) {
        let savedColor = localStorage.getItem("color");
        colors.value = savedColor;
        document.body.style.color = savedColor;
        selects.forEach(select => {
            select.onfocus = () => {
                select.style.borderColor = savedColor;
            };
            select.onblur = () => {
                select.style.borderColor = "#ccc";
            };
        });
    }

    colors.addEventListener("change", (e) => {
        let colorValue = e.target.value;
        localStorage.setItem("color", colorValue);
        document.body.style.color = colorValue;
        selects.forEach(select => {
            select.onfocus = () => {
                select.style.borderColor = colorValue;
            };
            select.onblur = () => {
                select.style.borderColor = "#ccc";
            };
        });
    });
}


// function to change size of fonts
function setupFontSizeChange() {
    const fontSize = document.getElementById("font-size");

    if (localStorage.getItem("fontSize")) {
        let savedSize = localStorage.getItem("fontSize");
        fontSize.value = savedSize;
        document.body.style.fontSize = savedSize + "px";
    }

    fontSize.addEventListener("change", (e) => {
        let sizeValue = e.target.value;
        localStorage.setItem("fontSize", sizeValue);
        document.body.style.fontSize = sizeValue + "px";
    });
}
