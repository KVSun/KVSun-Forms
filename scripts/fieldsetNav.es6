const NAV = document.querySelector('#nav');

export default function(fieldset) {
	let url = new URL(location.href);
	let link = document.createElement('a');
	link.setAttribute('role', 'button');
	url.hash = fieldset.id;
	link.href = url;
	link.innerHTML = fieldset.querySelector('legend').textContent;
	NAV.appendChild(link);
}
