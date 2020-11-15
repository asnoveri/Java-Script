const sel_pil = document.querySelector("#sel_pil");
sel_pil.addEventListener('change', pil_data);

function pil_data() {
    const amblnmPil = document.querySelector("#mn_pilih");
    const listMenu = Array.from(document.querySelectorAll("[data-harga]"));
    const data = listMenu.filter(x => x.textContent.includes(this.value))
        .map(x => x.dataset.harga)
        .map(b => b *= 1)
        .reduce((acmlt, crntvl) => acmlt + crntvl);

    const str = data.toString();
    const lgt = str.length % 3;
    const rp = str.substr(0, lgt);
    const ak = str.substr(lgt).match(/\d{3}/g);
    const ak1 = str.substr(lgt);
    const tot_hrg = document.querySelector("#tot_hrg");
    tot_hrg.innerHTML = `Rp.${rp}.${ak1}`;

    const jum = listMenu.filter(x => x.textContent.includes(this.value)).length;
    amblnmPil.innerHTML = `Menu ${this.value} sebanyak ${jum} buah`;
}