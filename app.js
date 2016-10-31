$(document).ready(function() {

	// 1. declare single state object to store all data 
	var state = {
		items: []
	};

	// 2. write functions that modify state object / application state
	var addItemToList = function(state, item) {
		state.items.push(item);
	}; 

	// 3. add render (?) functions that will modify the HTML into the DOM 
	var renderElements = function(state, element) {
		var itemsHtml = state.items.map(function(item,itemIndex) {
			return '<li id="'+itemIndex+'">' + '<span class="shopping-item">' + item + '</span>' + '<div class="shopping-item-controls">' +
	        '<button class="shopping-item-toggle">' + '<span class="button-label">check</span>' + '</button>' +
	        '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' +
	        '</div>' + '</li>';	
		});
		element.html(itemsHtml);
	};

	//4. add event listeners so when event fires, one or more of the state functions fires to update state
	$('#js-shopping-list-form').submit(function(event) {
		addItemToList(state, $('#shopping-list-entry').val());
		renderElements(state, $('.shopping-list'));
		event.preventDefault();
	});

	$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
	    var itemSpanElement = $(this).closest('li').children('span');
	    itemSpanElement.toggleClass('shopping-item__checked');
	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
	  	var itemIndex = $(this).closest('li').attr('id');
	  	state.items.splice(itemIndex, 1);
	  	renderElements(state, $('.shopping-list'));
	});

}); 

