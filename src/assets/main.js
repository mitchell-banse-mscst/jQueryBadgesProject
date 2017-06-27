$(function() {

   $.ajax({
		: 'https://www.codeschool.com/users/2603825.json',
		dataType: 'jsonp',
		success: function (response) {
			//handle response
			addCourses('response', response.courses.completed);
		}
	});
	function addCourses (courses) {
			
		var $badges = $('#badges');
			
		courses.forEach(function(course) {
			var course = $('<div />', {
				'class': 'course'
			}).appendTo($badges);
				
			//$('h3')
		})
	}
	
});
