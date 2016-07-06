<?php
namespace Index;
\set_include_path(dirname(__DIR__));
\spl_autoload_register('spl_autoload');
\error_reporting(E_ALL);

const EXT = '.html';

function list_forms(\DOMElement $list, $form)
{
	$form = \basename($form, '.html');
	$url = new \shgysk8zer0\Core\URL();
	$url->query = ['form' => $form];
	$li = $list->append('li');
	$a = $li->append('a', $form, ['href' => $url]);
	return $list;
}

function get_forms($path = __DIR__, $ext = EXT)
{
	$path = '/' . \trim($path, '/');
	return \glob("{$path}/*{$ext}");
}

$dom = new \shgysk8zer0\DOM\HTML();
$url = new \shgysk8zer0\Core\URL();
unset($url->query);

$dom->head->append('meta', null, ['name' => 'viewport', 'content' => 'width=device-width']);
$url->path = 'scripts/custom.js';
$dom->head->append('script', null, ['src' => $url]);
$url->path = 'stylesheets/styles/import.css';
$dom->head->append('link', null, ['rel' => 'stylesheet', 'href' => $url]);
$url->path = 'images/sun-icons/any.svg';
$dom->head->append('link', null, ['rel' => 'icon', 'href' => $url, 'type' => 'image/svg+xml', 'sizes' => 'any']);
if (\array_key_exists('form', $_GET)) {
	if (! \file_exists($_GET['form'] . EXT)) {
		\http_response_code(404);
		$dom->head->append('title', "{$_GET['form']} not found");
		$dom->body->append('h1', "{$_GET['form']} not found");
		\array_reduce(get_forms(), __NAMESPACE__ . '\list_forms', $dom->body->append('ul'));
	} else {
		$dom->head->append('title', $_GET['form']);
		$dom->body->append('nav', null, ['id' => 'nav']);
		$form_dom = new \DOMDocument();
		$form_dom->loadHTMLFile($_GET['form'] . EXT);
		// exit($form_dom->saveHTML());
		$form = $form_dom->getElementsByTagName('form')->item(0);
		$dom->body->appendChild($dom->importNode($form, true));
	}
} else {
	$dom->head->append('title', \basename(__FILE__));
	\array_reduce(get_forms(), __NAMESPACE__ . '\list_forms', $dom->body->append('ul'));
}

exit($dom);
