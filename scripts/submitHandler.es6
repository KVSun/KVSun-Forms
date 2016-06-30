export function forms(form) {
	form.addEventListener('submit', submit => {
		submit.preventDefault();
		let url = new URL(submit.target.action, location.origin);
		let body = new FormData(submit.target);
		let headers = new Headers();

		fetch(url, {
			body,
			headers
		}).then(resp => {
			if (resp.ok) {
				return resp.json();
			} else {
				throw new Error(`<${resp.url}> ${resp.statusText}`);
			}
		}).then(json => {
			console.info(json);
		}).error(error => {
			console.error(error);
		});
	});
}
