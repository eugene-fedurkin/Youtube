export default class Pager {
    constructor(videoLoader) {
        this.videoLoader = videoLoader;
        this.previousButton = null;
        this.nextButton = null;
        this.pages = document.getElementById('pages');
        this.paging = null;
        this.pagesWidth = '480px';
        this.pageNumber = 1;
        this.lastPlace = 1;
        this.videosOnPage = 1;
        this.swipeBinded = false;
    }

    render() {
        const divWrapperButtons = document.createElement('div');
        divWrapperButtons.setAttribute('id', 'wrapperButton');

        this.previousButton = document.createElement('input');
        this.previousButton.setAttribute('type', 'button');
        this.previousButton.setAttribute('id', 'prevId');
        this.previousButton.setAttribute('disabled', 'disabled');
        this.previousButton.setAttribute('value', 'Prev');

        this.nextButton = document.createElement('input');
        this.nextButton.setAttribute('type', 'button');
        this.nextButton.setAttribute('id', 'nextId');
        this.nextButton.setAttribute('disabled', 'disabled');
        this.nextButton.setAttribute('value', 'Next');

        this.paging = document.createElement('span');
        this.paging.setAttribute('class', 'tooltip');
        this.paging.setAttribute('id', 'paging');

        const tooltip = document.createElement('span');
        tooltip.setAttribute('class', 'tooltiptext');
        tooltip.setAttribute('id', 'tooltiptextId');

        document.body.appendChild(divWrapperButtons);
        document.getElementById('wrapperButton').appendChild(this.previousButton);
        document.getElementById('wrapperButton').appendChild(this.paging);

        for (let i = 1; i <= 5; i++) {
            const pageNumber = document.createElement('input');
            pageNumber.setAttribute('type', 'button');
            pageNumber.setAttribute('value', i);
            pageNumber.setAttribute('disabled', 'disabled');
            pageNumber.addEventListener('mousedown', () => {
                document.getElementById('tooltiptextId').innerHTML = `${pageNumber.value} Page`;
                document.getElementById('tooltiptextId').style.left
                    = `${24 + ((i - 1) * 20)}%`;
                document.getElementById('tooltiptextId').style.opacity = 1;
            });
            this.paging.appendChild(pageNumber);
        }
        document.addEventListener('mouseup', () => {
            document.getElementById('tooltiptextId').style.opacity = 0;
        });

        this.paging.appendChild(tooltip);
        document.getElementById('wrapperButton').appendChild(this.nextButton);

        this.bindPageNumberButtonsHandlers();

        this.previousButton.addEventListener('click', () => this.previous());
        this.nextButton.addEventListener('click', () => this.next());
    }

    bindPageNumberButtonsHandlers() {
        this.paging.addEventListener('click', (e) => {
            for (let i = 0; i <= 4; i++) {
                if (this.paging.children[i].classList.contains('activePage')) {
                    this.paging.children[i].classList.remove('activePage');
                }
            }
            document.getElementById('pages').style.left = `${(-parseInt(e.target.value) + 1) * parseInt(this.pagesWidth)}px`;
            this.pageNumber = (parseInt(document.getElementById('pages').style.left) / -parseInt(this.pagesWidth)) + 1 || 1;
            this.videosOnPage = parseInt(this.pagesWidth) / 480;
            this.lastPlace = (this.videosOnPage * (this.pageNumber - 1)) + 1;
            let currentPageNumber = this.pageNumber - 2;
            for (let j = 0; j <= 4; j++) {
                if (this.pageNumber == e.target.value && this.pageNumber < 4) {
                    currentPageNumber = e.target.value;
                    for (let i = 0; i <= 4; i++) {
                        this.paging
                            .children[i].value = i + 1;
                        this.paging
                            .children[i].classList.remove('activePage');
                        if (currentPageNumber == this.paging
                            .children[i].value) {
                            this.paging.children[i].classList.add('activePage');
                        }
                    }
                }
                if (this.pageNumber >= 3) {
                    this.paging.children[j].value = `${currentPageNumber}`;
                    currentPageNumber++;
                    this.paging.children[2].classList.add('activePage');
                }
            }

            const position = this.pages.style.left;
            this.setPagesWidth();
            const page = (parseInt(position) / -parseInt(this.pagesWidth)) + 1;
            if (this.videoLoader.videos.length - (page * this.videosOnPage) < this.videoLoader.videosToLoad) {
                this.disable();
                const currentLength = this.videoLoader.videos.length;
                this.videoLoader.load(currentLength, () => this.enable());
            }
        });
    }

    enable() {
        this.previousButton.removeAttribute('disabled');
        this.nextButton.removeAttribute('disabled');
        for (let i = 0; i < this.paging.children.length; i++) {
            this.paging.children[i].removeAttribute('disabled');
        }
        this.bindSwipeHandler();
    }

    disable() {
        this.previousButton.setAttribute('disabled', 'disabled');
        this.nextButton.setAttribute('disabled', 'disabled');
        for (let i = 0; i < this.paging.children.length; i++) {
            this.paging.children[i].setAttribute('disabled', 'disabled');
        }
        this.unbindSwipeHandler();
    }

    previous() {
        const position = this.pages.style.left;
        this.setPagesWidth();
        this.videosOnPage = parseInt(this.pagesWidth) / 480;
        if (parseInt(position) < 0) {
            this.pages.style.left = `${parseInt(position)
                + parseInt(this.pagesWidth)}px`;
        }
        this.pageNumber = ((parseInt(this.pages.style.left) / -parseInt(this.pagesWidth)) + 1);
        this.updateButtons('backward');
    }

    next() {
        const position = this.pages.style.left;
        this.setPagesWidth();
        this.videosOnPage = parseInt(this.pagesWidth) / 480;
        if (position === '' || position === '0px') {
            this.pages.style.left = `-${this.pagesWidth}`;
        } else {
            this.pages.style.left = `${parseInt(position)
                - parseInt(this.pagesWidth)}px`;
        }
        this.pageNumber = ((parseInt(this.pages.style.left) / -parseInt(this.pagesWidth)) + 1);
        this.updateButtons('forward');
    }

    setPagesWidth() {
        const currentWidth = document.documentElement.clientWidth;
        if (currentWidth < 2880 && currentWidth >= 2400) {
            document.getElementById('search-container').style.width = '2400px';
            this.pagesWidth = '2400px';
        } else if (currentWidth < 2400 && currentWidth >= 1920) {
            document.getElementById('search-container').style.width = '1920px';
            this.pagesWidth = '1920px';
        } else if (currentWidth < 1920 && currentWidth >= 1440) {
            document.getElementById('search-container').style.width = '1440px';
            this.pagesWidth = '1440px';
        } else if (currentWidth < 1440 && currentWidth >= 960) {
            document.getElementById('search-container').style.width = '960px';
            this.pagesWidth = '960px';
        } else {
            document.getElementById('search-container').style.width = '480px';
            this.pagesWidth = '480px';
        }

        document.getElementById('search-container').style.width = this.pagesWidth;
    }

    resetButtons() {
        for (let i = 0; i < 5; i++) {
            this.paging.children[i].classList.remove('activePage');
            this.paging.children[i].value = i + 1;
        }
        this.paging.children[0].classList.add('activePage');
    }

    updateButtons(direction) {
        this.lastPlace = (this.videosOnPage * (this.pageNumber - 1)) + 1;
        switch (direction) {
        case 'forward': {
            for (let i = 0; i < 5; i++) {
                if (this.paging.children[i].value == this.pageNumber) {
                    if (this.pageNumber <= 3) {
                        this.paging.children[i].classList.add('activePage');
                        this.paging.children[i - 1].classList.remove('activePage'); // --???
                    } else {
                        this.paging.children[i - 1].classList.add('activePage');
                        this.paging.children[i - 2].classList.remove('activePage');
                        this.paging.children[i - 3].classList.remove('activePage');
                        this.paging.children[i].classList.remove('activePage');
                        this.paging.children[i + 1].classList.remove('activePage');
                    }
                }
                if (this.pageNumber > 3) {
                    this.paging.children[i].value
                        = `${parseInt(this.paging.children[i].value) + 1}`;
                }
            }
            const position = this.pages.style.left;
            this.setPagesWidth();
            this.videosOnPage = parseInt(this.pagesWidth) / 480;
            const page = (parseInt(position) / -parseInt(this.pagesWidth)) + 1;
            if (this.videoLoader.videos.length - (page * this.videosOnPage) < this.videoLoader.videosToLoad) {
                this.disable();
                const currentLength = this.videoLoader.videos.length;
                this.videoLoader.load(currentLength, () => this.enable.call(this));
            }
            break;
        }
        case 'backward': {
            if (this.pageNumber > 2) {
                for (let i = 0; i < 5; i++) {
                    this.paging.children[i].value
                        = `${parseInt(this.paging.children[i].value) - 1}`;
                }
            } else {
                for (let i = 1; i >= 0; i--) {
                    if (parseInt(this.paging
                        .children[i].value) === this.pageNumber) {
                        this.paging.children[i].classList.add('activePage');
                        this.paging.children[i + 1].classList.remove('activePage');
                    }
                }
            }
            break;
        }
        default: break;
        }
    }

    bindResizeHandler() {
        window.onresize = () => {
            this.setPagesWidth();
            this.lastPlace = (this.videosOnPage * (this.pageNumber - 1)) + 1;
            this.videosOnPage = parseInt(this.pagesWidth) / 480;
            this.pageNumber = Math.ceil(this.lastPlace / this.videosOnPage);
            let currentPageNumber;
            document.getElementById('pages').style.left = `${-480 * this.videosOnPage * (this.pageNumber - 1)}px`;
            if (this.pageNumber > 2) {
                currentPageNumber = this.pageNumber - 2;
                for (let i = 0; i < 5; i++) {
                    this.paging.children[i].value = currentPageNumber;
                    currentPageNumber++;
                }
            } else {
                currentPageNumber = 1;
                for (let i = 0; i < 5; i++) {
                    this.paging.children[i].value = currentPageNumber;
                    currentPageNumber++;
                }
            }
            for (let i = 0; i < 5; i++) {
                if (this.paging.children[i].value == this.pageNumber) {
                    this.paging.children[i].classList.add('activePage');
                } else {
                    this.paging.children[i].classList.remove('activePage');
                }
            }
        };
    }

    bindSwipeHandler() {
        if (this.swipeBinded) {
            return;
        }
        this.swipeBinded = true;
        const wrapper = document.getElementsByTagName('html')[0];

        wrapper.onmousedown = (e) => {
            this.pages.style.transition = '';
            const clientXStart = e.clientX;
            const left = wrapper.getBoundingClientRect().left + pageXOffset;
            const shiftX = e.pageX - left;
            const pageLeft = parseInt(this.pages.style.left) || 0;
            this.pages.style.left = `${(pageLeft + e.pageX) - shiftX}px`;
            document.onmousemove = (event) => {
                this.pages.style.left = `${(pageLeft + event.pageX) - shiftX}px`;
            };
            wrapper.onmouseup = (event) => {
                this.pages.style.transition = 'left 0.5s ease-in-out';
                if (clientXStart > (event.clientX + 50)) {
                    this.pages.style.left = `${pageLeft - parseInt(this.pagesWidth)}px`;
                    this.pageNumber++;
                    this.updateButtons('forward');
                } else if ((clientXStart + 50) < event.clientX && this.pageNumber > 1) {
                    this.pages.style.left = `${pageLeft + parseInt(this.pagesWidth)}px`;
                    this.pageNumber--;
                    this.updateButtons('backward');
                } else {
                    this.pages.style.left = `${pageLeft}px`;
                }
                document.onmousemove = null;
                wrapper.onmouseup = null;
            };
        };
    }

    unbindSwipeHandler() {
        document.getElementsByTagName('html')[0].onmousedown = null;
        this.swipeBinded = false;
    }
}
