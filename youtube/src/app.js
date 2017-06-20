import VideoLoader from './video-loader';
import PageRenderer from './page-renderer';
import Pager from './pager';

function start() {
    const videoLoader = new VideoLoader(25);

    const pageRenderer = new PageRenderer();
    pageRenderer.render();

    const pager = new Pager(videoLoader);
    pager.render();
    pager.bindResizeHandler();
    pager.setPagesWidth();

    pageRenderer.bindSearchHandler(() => {
        pageRenderer.disableSearch();
        videoLoader.videos = [];
        videoLoader.search(() => pageRenderer.enableSearch());
        pager.pageNumber = 1;
        pager.resetButtons();
        pager.enable();
    });
    pageRenderer.enableSearch();
}

gapi.load('client', () => gapi.client.init({
    apiKey: 'AIzaSyBQPFBBxSjc2bEXzF9RI8PxfzzxSqnskE8',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
}).then(() => start(), error => console.error('Error: ', error)));
