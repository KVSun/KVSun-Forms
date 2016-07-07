import {parseResponse as parse, reportError as report} from './std-js/functions.es6';
import handleJSON from './std-js/json_response.es6';
export function forms(submit) {
	submit.preventDefault();

	let url = new URL(submit.target.action, location.origin);
	let headers = new Headers();
	let body = new FormData(submit.target);
	fetch(url, {
		body,
		headers,
		method: 'POST'
	}).then(parse).then(handleJSON).catch(report);
}

export function visibilityToggle() {
	let target = document.querySelector(this.dataset.visibilityTarget);
	this.checked ? target.removeAttribute('hidden') : target.setAttribute('hidden', '');
}
