var shirt;
var shirtData;
var index;

var btn = document.getElementById('store');

btn.addEventListener('click', function () {

    var category = document.getElementById('category').value;
    console.log(category);

    // var id = JSON.parse(localStorage.getItem('id'))

    var name = document.getElementById('name');
    name = name.value;

    var prdNo = document.getElementById('product')
    prdNo = prdNo.value;

    var size = document.getElementById('size');
    size = size.value;

    var qty = document.getElementById('qty');
    qty = qty.value;

    var price = document.getElementById('price');
    price = price.value;

    const input = document.getElementById('imageInput');


    let shirtdata = JSON.parse(localStorage.getItem('shirt'));
    let paintdata = JSON.parse(localStorage.getItem('paint'));
    let t_shirtdata = JSON.parse(localStorage.getItem('t-shirt'));
    console.log(t_shirtdata);

    if (shirtdata == null) {
        shirtdata = [];
        // alert('shirt HII')
        id = 0;
    }
    else if(paintdata == null){
        paintdata = [];
        // alert('paint hii')
    }
    else if(t_shirtdata == null){
        t_shirtdata = [];
        alert('tshirt hii')
    }

    if (input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            let imageDataUrl = e.target.result;
            let addData = {
                // id: id + 1,
                category: category,
                name: name,
                product: prdNo,
                size: size,
                qty: qty,
                price: price,
                image: imageDataUrl
            }
            // index++;

            // console.log('Image stored in local storage.');
            // let index = data.findIndex(items => items.prdNo == prdNo);

            // if (index != -1) {
            //     data[index].qty * 2;
            //     localStorage.setItem('storeData', JSON.stringify(data))
            // } else {
            // localStorage.setItem('id', JSON.stringify(id + 1))
            // }

            if (category == 'Shirt' || category == 'shirt') {
                alert('shirt')
                shirtdata.push(addData)
                localStorage.setItem('shirt', JSON.stringify(shirtdata))

            }
            else if (category == 'Paint' || category == 'paint') {
                alert('paint')
                paintdata.push(addData)
                localStorage.setItem('paint', JSON.stringify(paintdata))
            }
            else if (category == 'T-shirt' || category == 't-shirt') {
                alert('tshirt')
                t_shirtdata.push(addData);
                localStorage.setItem('t-shirt', JSON.stringify(t_shirtdata))
            }
            else {
                alert('please select category!!!')
            }

        };
        reader.readAsDataURL(file);

        alert('Data Submited')
    } else {
        console.log('No file selected.');
    }

})






