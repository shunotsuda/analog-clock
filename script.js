setInterval(() => {
    const now = new Date;

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    console.log(h,m)

    const degH = h * (360 / 12) + m * (360 / 12 / 60);
    const degM = m * (360 / 60);
    const degS = s * (360 / 60);

    const elementH = document.querySelector(".hr");
    const elementM = document.querySelector(".mn");
    const elementS = document.querySelector(".sc");

    elementH.style.transform = `rotate(${degH}deg)`
    elementM.style.transform = `rotate(${degM}deg)`
    elementS.style.transform = `rotate(${degS}deg)`
},50)