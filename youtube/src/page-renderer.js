export default class PageRenderer {
    constructor() {
        this.searchButton = null;
    }

    render() {
        const div = document.createElement('div');
        div.setAttribute('id', 'buttons');

        const input = document.createElement('input');
        input.setAttribute('id', 'query');
        input.setAttribute('placeholder', 'Search');

        this.searchButton = document.createElement('button');
        this.searchButton.setAttribute('id', 'search-button');
        this.searchButton.setAttribute('disabled', 'disabled');
        this.searchButton.innerHTML = 'Search';

        const divContainer = document.createElement('div');
        divContainer.setAttribute('id', 'search-container');

        const divPages = document.createElement('div');
        divPages.setAttribute('id', 'pages');

        document.body.appendChild(div);
        document.getElementById('buttons').appendChild(input);
        document.getElementById('buttons').appendChild(this.searchButton);
        document.body.appendChild(divContainer);
        document.getElementById('search-container').appendChild(divPages);
    }

    enableSearch() {
        this.searchButton.removeAttribute('disabled');
    }

    disableSearch() {
        this.searchButton.setAttribute('disabled', 'disabled');
    }

    bindSearchHandler(callback) {
        this.searchButton.addEventListener('click', callback);
    }
}
