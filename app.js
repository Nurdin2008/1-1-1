function generateGreeting() {
    const relation = document.getElementById("relation").value; // value алуу
    const name = document.getElementById("name").value.trim();
    const output = document.getElementById("output");

    if (!name) {
        output.textContent = "Сураныч, атынызды жазыңыз!";
        output.style.color = "red";
        return;
    }

    output.style.color = "#2c3e50";
    output.innerHTML = `Саламатсызбы, <strong>${name}</strong>!<br>
        Сиздин ${relation}, келе жаткан Жаңы жылыңыз менен куттуктайм!<br>
        Эч качан оорубаңыз, жүзүңүздөн жылмаюу кетпесин!`;

    // Сүрөттүн URL'ин тастыктоо
    document.getElementById("image").src = "https://gdb.rferl.org/47b38ab7-a15f-432a-b9ae-5fc0c237babb_cx0_cy13_cw0_w408_r1_s.jpg";
    document.getElementById("image").style.display = "block"; // Сүрөттү көрсөтүү
}
