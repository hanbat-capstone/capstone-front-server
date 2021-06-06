// $(function () {
//     // GET/READ
//     $('#get-button').on('click', function () {
//         $.ajax({
//             url: '/products',
//             contentType: 'application/json',
//             success: function (response) {
//                 var tbodyEl = $('tbody');
//
//                 tbodyEl.html('');
//
//                 response.products.forEach(function (product) {
//                     tbodyEl.append('\
//                         <tr>\
//                             <td class="id">' + product.id + '</td>\
//                             <td><input type="text" class="name" value="' + product.name + '"></td>\
//                             <td>\
//                                 <button class="update-button">UPDATE/PUT</button>\
//                                 <button class="delete-button">DELETE</button>\
//                             </td>\
//                         </tr>\
//                     ');
//                 });
//             }
//         });
//     });
//
//     // CREATE/POST
//     $('#button').on('submit', function (event) {
//         console.log("test1");
//         event.preventDefault();
//         console.log("test2");
//         var id = $('#id');
//         var name = $('#name');
//         var email = $('#email');
//         var password = $('#password');
//         var phoneNumber = $('#phoneNumber');
//         console.log("test3");
//         console.log(id.val(), name.val(), password.val(), phoneNumber.val());
//
//         $.ajax({
//             url: 'http://localhost:8080/api/accounts/',
//             method: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify({
//                 accountId: id.val(),
//                 name: name.val(),
//                 email: email.val(),
//                 password: password.val(),
//                 phoneNumber: phoneNumber.val()
//             }),
//             success: function (response) {
//                 console.log(response);
//             }
//         });
//     });
//
//     // UPDATE/PUT
//     $('table').on('click', '.update-button', function () {
//         var rowEl = $(this).closest('tr');
//         var id = rowEl.find('.id').text();
//         var newName = rowEl.find('.name').val();
//
//         $.ajax({
//             url: '/products/' + id,
//             method: 'PUT',
//             contentType: 'application/json',
//             data: JSON.stringify({newName: newName}),
//             success: function (response) {
//                 console.log(response);
//                 $('#get-button').click();
//             }
//         });
//     });
//
//     // DELETE
//     $('#delete').on('submit', function () {
//         event.preventDefault();
//         var id = rowEl.find('.id').text();
//
//         $.ajax({
//             url: '/products/' + id,
//             method: 'DELETE',
//             contentType: 'application/json',
//             success: function (response) {
//                 console.log(response);
//                 $('#get-button').click();
//             }
//         });
//     });
// });

$(document).ready(function () {
    $("#button_2").click(function (e) {
        e.preventDefault();
        console.log("panel button");
        var no = $('#no');
        var sort = $('#sort');
        var location = $('#location');
        console.log(no.val(), sort.val(), location.val());
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/panels/",
            contentType: 'application/json',
            data: JSON.stringify({
                accountNo: no.val(),
                location: location.val(),
                panelId: sort.val(),
            }),
            success: function (response) {
                console.log(response);
            }
        });
    });
});

$(document).ready(function () {
    $("#button_1").click(function (e) {
        e.preventDefault();
        console.log("member button");
        var id = $('#id');
        var name = $('#name');
        var email = $('#email');
        var password = $('#password');
        var phoneNumber = $('#phoneNumber');
        console.log(id.val(), name.val(), email.val(), password.val(), phoneNumber.val());
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/accounts/",
            contentType: 'application/json',
            data: JSON.stringify({
                accountId: id.val(),
                name: name.val(),
                email: email.val(),
                password: password.val(),
                phoneNumber: phoneNumber.val()
            }),
            success: function (response) {
                console.log(response);
            }
        });
    });
});