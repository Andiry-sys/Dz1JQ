$(function () {
  function str_rand() {
    var result = '';
    var words =
      '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var max_position = words.length - 1;
    for (let i = 0; i < 5; ++i) {
      position = Math.floor(Math.random() * max_position);
      result = result + words.substring(position, position + 1);
    }
    return result;
  }

  $('#gen').click(function () {
    $('#out').val(str_rand());
  });
});
