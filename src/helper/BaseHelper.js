/*
 * Generate error message label for each input
 */
export function showErrorMessage(message) {
	
	//clear existing object of error message
	var errorMessage = document.getElementsByClassName('error-message');
    Object.keys(errorMessage).forEach(function(key) {
    	errorMessage[key].innerHTML = '';
    });
    
    //generate error message
    Object.keys(message).forEach(function(key) {
    	var errorId = 'error-'+key;
    	var errorObj = document.getElementById(errorId);
    	if(!errorObj) {
	    	const dom = document.getElementById(key);
	    	var infoObj = document.createElement('span');
	    	infoObj.id = errorId;
	    	infoObj.className = 'text-danger error-message';
	    	infoObj.innerHTML = message[key];
	    	dom.parentNode.insertBefore(infoObj, dom.nextSibling);
    	} else {
    		errorObj.className = 'text-danger error-message';
    		errorObj.innerHTML = message[key];
    	}
    });
}