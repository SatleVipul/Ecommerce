
function AddToCart(ProductId) {
    debugger;
    var model = {
        "ProductId": 1,
        "Quantity": 0,
        "CartId": 0
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




