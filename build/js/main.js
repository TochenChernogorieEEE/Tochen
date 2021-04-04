$(function(){
  $('.toch-js').slick({
    dots: true,
    speed: 1500,
    infinite: true,
    fade: true,
  });
});

// $(function(){
//   $('.rose-faq--title').on('click', function(){
//     $('.rose-faq--text').removeClass('is-active')
//     $(this).next().addClass('is-active');
//     $('.rose-faq--title').removeClass('is-active')
//     $(this).addClass('is-active');
//   });


  // modal
  $('.js-buttom').on('click', function(){
    $('.show-modal, .modal').addClass('modal-js');
    $('body').css('overflow-y', 'hidden');
  });
  $('.show-modal, .modal-close').on('click', function(){
    $('.show-modal, .modal').removeClass('modal-js');
    $('body').css('overflow-y', 'scroll');
  });
  // modal

  //form
  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
  //form
