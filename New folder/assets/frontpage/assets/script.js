$("#Banner_slideshow > div:gt(0)").hide();
setInterval(function() { 
$('#Banner_slideshow > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#Banner_slideshow');
}, 4000);


  if ($('.ty-compact-list').length > 5) {
  $('.ty-compact-list:gt(4)').hide();
  $('.show-more').show();
}

$('.show-more').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.ty-compact-list:gt(4)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show more' ? $(this).text('Show less') : $(this).text('Show more');
});




if ($('.ty-compact-list1').length > 5) {
  $('.ty-compact-list1:gt(4)').hide();
  $('.show-more1').show();
}

$('.show-more1').on('click', function() {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  $('.ty-compact-list1:gt(4)').toggle();
  //change text of show more element just for demonstration purposes to this demo
  $(this).text() === 'Show more' ? $(this).text('Show less') : $(this).text('Show more');
});

/*****************show and hide id *******************/

// Use event delegation to listen to events from the buttons
$(document).on('click', 'button', handleClick)

function handleClick() {

  // Grab the id from the button
  const id = $(this).data('id');

  // Remove all the `show` classes from the details elements
  $('.details').removeClass('show');

  // And then add that class back on to the details element
  // that corresponds to the id
  $(`.details[data-id=${id}]`).addClass('show');
  
}