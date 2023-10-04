$(function () {
  $('#contactForm1').on('submit', function (e) {

    e.preventDefault();
    $('#submit').prop('disabled', true);
    $('#sbmt1').html('Please wait...').show()
    $('#submit').hide()
    $.ajax({
      type: 'post',
      url: 'contact.php',
      data: $(this).serialize(),
      success: function (response) {
        var response = JSON.parse(response);
        $('#submit').show()
        $('#submit').prop('disabled', false);
        $('#sbmt1').hide()

        if (response.type == "error") {
          if (typeof response.errors !== "undefined") {
            $.each(response.errors, function (index, value) {
              console.log(index + ": " + value);
              
                if ($('.form-group').find('input[name=' + index + ']').length > 0)
                  $('.form-group').find('input[name=' + index + ']').after('<span class="invalid-msg" style="color:red;display:block;font-size: 14px;clear: both;margin-top: 0px;">' + value + '</span>');
                else if ($('textarea[name=' + index + ']').length > 0)
                  $('.form-group').find('textarea[name=' + index + ']').after('<span class="invalid-msg" style="color:red;display:block;font-size: 14px;clear: both;margin-top: 0px;">' + value + '</span>');

              
            });

          }
          // $('#message').html('<span style="color:red">'+response.text+'</span>');
          
          setTimeout(function () {
              $('#message1').html("");
              $('.form-group').find('span.invalid-msg').remove();
            }, 10000);
          
        } else {
          $('#message1').html('<span style="color:#f26722">' + response.text + '</span>');
          $('#contactForm1')[0].reset();
          
          setTimeout(function () {
              $('#message1').html("");
              $('.form-group').find('span.invalid-msg').remove();
            }, 30000);
        }

        

      },
      error: function (error) {
        $('#submit').show()
        $('#submit').prop('disabled', false);
        $('#sbmt1').hide()
        $('#message1').html('<span style="color:red">' + "Something went wrong, Please try again" + '</span>');
        setTimeout(function () {
          $('#message1').html("");
          $('.form-group').find('span.invalid-msg').remove();
        }, 10000);
      }
    });

  });

});