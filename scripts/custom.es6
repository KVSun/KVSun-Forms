import $ from './NodeArray.es6';
import * as Handler from './handlers.es6';
import fieldsetNav from './fieldsetNav.es6';

window.addEventListener('load', () => {
	$('form').forEach(form => {
		form.addEventListener('submit', Handler.forms);
	});

	$('fieldset[id]').forEach(fieldsetNav);
	$('[data-visibility-target]').forEach(input => input.addEventListener('click', Handler.visibilityToggle));
});
