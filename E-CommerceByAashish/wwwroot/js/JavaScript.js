
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
            alert("Product added to cart");
        }, error: function (XMLHttpRequest, textStatus, errorThrown) { }
    });


}
function showproduct(categoryid) {

    $('.' + categoryid).toggle();
}

function showCart() {




    $.get("https://localhost:7298/ECom/GetAllCartProducts",
        function (data) {
            product = data;
            var a;
            $('#tbodyid').empty();
            for (a = 0; a < product.length; a++) {
                var obj = '<tr><th>' + product[a].productName + '</th>';
                obj += '<th>' + product[a].quantity + '</th><th><span onclick="deletes('+product[a].cartId+')"><i class="fa fa-trash" aria-hidden="true"></i></span></th></tr>';

                $('#tbodyid').append(obj);
            }
        });
}

function deletes(cartid)
{
    debugger;
    $.get("https://localhost:7298/ECom/Delete?cart=" + cartid,
        function (data) {
            
        }
    );
    
    $('#exampleModal').modal('hide');
    
}
