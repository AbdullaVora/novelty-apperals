let t_shirtData = [
    {name:'t-shirt', code: 1234, size: '2y-10y', price: 235, img:'../asset/img/Produkt_2_1800x1800.png'},
    {name:'t-shirt', code: 1234, size: '2y-10y', price: 235, img:'../asset/img/Produkt_2_1800x1800.png'},
    {name:'t-shirt', code: 1234, size: '2y-10y', price: 235, img:'../asset/img/Produkt_2_1800x1800.png'},
    {name:'t-shirt', code: 1234, size: '2y-10y', price: 235, img:'../asset/img/Produkt_2_1800x1800.png'}
]
// var t_shirt = JSON.parse(localStorage.getItem('t-shirt'));
// t_shirt = t_shirt.length;

let cardGroup = document.getElementById('card_group');
cardGroup.innerHTML = '';

for (let i = 0; i < t_shirtData.length; i++) {
    cardGroup.innerHTML += `
    <div class="col-xxl-3 col-xl-4 col-md-6 mt-5">
    <div class="card border-0 p-2">
        <div class="c-img border-3 border rounded-2">
            <img src="${t_shirtData[i].img}" alt="" class="img-fluid object-fit-cover">
        </div>
        <div class="card-body">
        <h5 class="card-title">NAME: ${t_shirtData[i].name}</h5>
        <h5 class="card-title">CODE: ${t_shirtData[i].code}</h5>
        <h5 class="card-title">SIZE: ${t_shirtData[i].size}</h5>
        <h5 class="card-title">PRICE: ${t_shirtData[i].price}</h5>
        </div>
    </div>
</div>`
}
