import $ from './std-js/zq.es6';
import * as Handler from './handlers.es6';
import fieldsetNav from './fieldsetNav.es6';

$(window).load(() => {
	$('form').submit(Handler.forms);

	$('fieldset[id]').each(fieldsetNav);
	$('[data-visibility-target]').click(Handler.visibilityToggle);
});
