{% macro active(activePage='home') %}
<nav>
	<a href="/" class="{%if activePage == 'home' %} active {% endif %}">Home</a>
	<a href="/about.html" class="{%if activePage == 'about' %} active {% endif %}">About</a>
	<a href="/articles.html" class="{%if activePage == 'articles' %} active {% endif %}">Articles</a>
	<a href="/portfolio.html" class="{%if activePage == 'portfolio' %} active {% endif %}">Portfolio</a>

</nav>
{% endmacro %}