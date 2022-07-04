
function AddToCart(ProductId) {

    var model = {
        "ProductId": ProductId,


    };

    $.ajax({

        type: 'POST',
        dataType: 'json',
        url: '/Ecom/add',
        data: model,


        success: function (data) {
            alert(data, "submited");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { }
    });


}
function showproduct(categoryid) {
    
    var i = 0;
    for (i = 0; i < 5;i++)
    {
        $('.' + i).hide();
    }
    $('.' + categoryid).show();
}
function showCart() {




    $.get("https://localhost:7298/ECom/GetAllCartProducts",
        function (data) {
            product = data;
            var a;
            $('#tbodyid').empty();
            for (a = 0; a < product.length; a++) {
                var obj = '<tr><th>' + product[a].productName + '</th>';
                obj += '<th><button type="button" class="quantity-left-minus btn btn-danger btn-number" onclick="decreaseQuantity(' + product[a].cartId + ')" data-type="minus" data-field="">-</button ><span id="' + product[a].cartId + '">' + product[a].quantity + '</span><button type="button" class="quantity-right-plus btn btn-success btn-number" onclick="IncreaseQuantity(' + product[a].cartId + ')" data-type="plus" data-field="">+</button></span></th><th><span onclick="deletes(' + product[a].cartId + ');" data-dismiss="modal"><i class="fa fa-trash" aria-hidden="true"></i></span></th></tr>';

                $('#tbodyid').append(obj);
            }
        });
}
function decreaseQuantity(id) {
    var a = $('#' + id).html();
    var b = parseInt(a);
    if (b > 1) {
        b = b - 1;
    }
    $('#' + id).html(b);
    $.ajax({

        type: 'POST',
        dataType: 'json',
        url: '/Ecom/SaveQuantityofProduct',
        data: { "cartid": id, "quntity": b },


        success: function (data) {
            alert(data, "submited");
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { }
    });

}
function IncreaseQuantity(id) {
    var a = $('#' + id).html();
    var b = parseInt(a);
    b = b + 1;
    $('#' + id).html(b);
    $.ajax({

        type: 'POST',
        dataType: 'json',
        url: '/Ecom/SaveQuantityofProduct',
        data: { "cartid": id, "quntity": b },


        success: function (data) {

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { }
    });
}
function deletes(cartid) {

    $.get("https://localhost:7298/ECom/Delete?cart=" + cartid,
        function (data) {

        }
    );



}

