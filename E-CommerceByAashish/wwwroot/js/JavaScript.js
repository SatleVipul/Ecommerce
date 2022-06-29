
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

        }, error: function (XMLHttpRequest, textStatus, errorThrown) { }
    });


}
function showproduct(categoryid) {

    $('.' + categoryid).toggle();
}

function showCart() {




    $.get("https://localhost:7298/ECom/getProduct?categoryid=" + categoryid,
        function (data) {
            product = data;
            debugger;
            var a;
            for (a = 0; a < product.length; a++) {
                var obj = '<div class="row"><div id="card1" margin-top:10px;style="display:none;" class="col-md-6 offset-md-2">';
                obj += '<div class="card"><div class="card-header">' + product[a].productName + '</div><div class="card-body"><img src="~/js/samsung1.png" alt="img">';
                obj += product[a].mrp + '<br>' + product[a].decription + '</div><div class="card-footer">footer';
                obj += '<button class="btn btn-success float-right" onclick="#myModal">Add to card</button>';
                obj += '</div></div></div></div>';

                $('#products').append(obj);
            }
        });
}


