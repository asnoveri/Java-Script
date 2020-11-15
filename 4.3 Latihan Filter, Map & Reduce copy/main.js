function input(param) {
    if (param) {
        // console.log(param);
        const sepatu = Array.from(document.querySelectorAll("[data-hrg]"));

        const data = sepatu.filter(x => x.textContent.includes(param))
            .map(a => a.dataset.hrg)
            // 800000,599000,450000
            .map(b => b /= 2)
            // 400000, 299500, 225000
            .reduce((acmlt, crntvl) => acmlt + crntvl);
        // 924.500

        function angkaAkhir(data) {
            str = data.toString();
            sisa = str.length % 3;
            rp = str.substr(0, sisa);
            ribuan = str.substr(sisa).match(/\d{3}/g);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rp += separator + ribuan.join('.');
                return `Rp ${rp} `;
            }

        }
        let aku = angkaAkhir(data);
        // console.log(aku);

        const totHrg = document.querySelector(".tot_hrg");
        totHrg.innerHTML = aku;

        const jumlh = sepatu.filter(x => x.textContent.includes(param)).length;

        const jmlh_sept = document.querySelector(".jmlh_sept");
        jmlh_sept.innerHTML = `Total Sepatu ${param} = ${jumlh};`
    }
}