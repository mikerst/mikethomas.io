<!-- Main Layout -->
<html>
<head>
	<meta charset="UTF-8">
	<title>{{ meta_title }}</title>
	<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>

	{% block nav %}
    	{% include "components/nav.tpl" %}
    {% endblock %}

	{% block content %} {% endblock %}

	{% block scripts %}
		{% include "partials/scripts.tpl" %}
	{% endblock %}

</body>
</html>