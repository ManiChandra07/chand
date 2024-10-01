document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "Biztoc.com" },
                author: "news.google.com",
                title: "Tesla catches fire in garage after flooding from Hurricane Helene",
                description: "Tesla catches fire in garage after flooding from Hurricane Helene CNN\nTesla catches fire in flooded garage during Helene BBC.com\nFlorida officials warn of fires after electric vehicles’ exposure to saltwater during Hurricane Helene Fox Weather \nOfficials warn…",
                url: "https://biztoc.com/x/6dfe60711ebf700a",
                urlToImage: "https://biztoc.com/cdn/802/og.png",
                publishedAt: "2024-10-01T11:13:32Z",
                content: "Tesla catches fire in garage after flooding from Hurricane Helene CNNTesla catches fire in flooded garage during Helene BBC.comFlorida officials warn of fires after electric vehicles exposure to salt… [+137 chars]"
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
