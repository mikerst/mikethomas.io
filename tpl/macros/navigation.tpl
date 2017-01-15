{% macro active(activePage='home') %}
<nav>
	<a href="#" class="{%if activePage == 'home' %} active {% endif %}">Home</a>
	<a href="#" class="{%if activePage == 'about' %} active {% endif %}">About</a>
	<a href="#" class="{%if activePage == 'articles' %} active {% endif %}">Articles</a>
	<a href="#" class="{%if activePage == 'portfolio' %} active {% endif %}">Portfolio</a>
	<a href="#" class="{%if activePage == 'contact' %} active {% endif %}">Contact</a>
</nav>
{% endmacro %}