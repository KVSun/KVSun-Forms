export default function $(sel) {
	return Array.from(document.querySelectorAll(sel));
}
