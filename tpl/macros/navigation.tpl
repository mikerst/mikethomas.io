{% macro active(activePage='home') %}
<nav>
	<a href="/" class="{%if activePage == 'home' %} active {% endif %}">Home</a>
	<a href="/work.html" class="{%if activePage == 'work' %} active {% endif %}">Design Work</a>
	<a href="/articles.html" class="{%if activePage == 'articles' %} active {% endif %}">Writing</a>
	<a href="/about.html" class="{%if activePage == 'about' %} active {% endif %}">About</a>
</nav>
{% endmacro %}