(function (angular) {

angular
	.module('app.books')
	.factory('booksService',booksService);

booksServic.$inject = [
	'$http'
];	

function booksService($http) {
	var urlRoot = 'https://fakerestapi.azurewebsites.net/api/';

	var service = {
		getBook : getBook,
		getBooks : getBooks,

	}
	return service;

	function getBooks(){
		return $http.get(urlRoot + 'Books/')
        .then(complete)
        .catch(failed);
	}

	function getBook(bookId) {
            return $http.get(urlRoot + 'Books/' + bookId)
                .then(complete)
                .catch(failed);
        }

    function failed(error) {
      console.error(error.data);
    }
}


})(window.angular);