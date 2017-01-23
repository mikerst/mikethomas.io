<!-- Main Layout -->
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{ meta_title }}</title>
	<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
	
	<div class="menu">
		{% block header %}
    		{% include "components/header.tpl" %}
	    {% endblock %}

		{% import 'macros/navigation.tpl' as nav %}
		{{nav.active('about')}}
	</div>
	
	
	<main>
		{% block content %} {% endblock %}
	</main>
	
	{% block scripts %}
		{% include "partials/scripts.tpl" %}
	{% endblock %}

</body>
</html>