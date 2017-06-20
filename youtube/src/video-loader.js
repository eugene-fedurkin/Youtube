export default class VideoLoader {
    constructor(videosToLoad) {
        this.videos = [];
        this.videosToLoad = videosToLoad;
        this.nextPageToken = null;
    }

    search(callback) {
        const pages = document.getElementById('pages');
        pages.innerHTML = '';
        pages.style.left = 0;
        this.nextPageToken = null;
        this.load(0, callback);
    }

    load(startFrom, callback) {
        const request = this.createRequest();
        request.execute((response) => {
            this.videos = this.videos.concat(response.result.items);
            this.nextPageToken = response.nextPageToken;
            this.render(startFrom);
            if (callback) {
                callback();
            }
        });
    }

    render(startFrom) {
        for (let i = startFrom || 0; i < this.videos.length; i++) {
            let div = document.createElement('div');
            const a = document.createElement('a');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const h2 = document.createElement('h2');
            let span = document.createElement('span');
            const icon = document.createElement('i');
            const dateInfo = this.videos[i].snippet.publishedAt.slice(0, 10);
            icon.className = 'fa fa-video-camera badge';
            icon.setAttribute('aria-hidden', 'true');
            document.getElementById('pages').appendChild(div);
            div.className = 'video';
            h2.innerHTML = this.videos[i].snippet.title;
            p.innerHTML = this.videos[i].snippet.description;
            img.src = this.videos[i].snippet.thumbnails.medium.url;
            span.innerHTML = this.videos[i].snippet.channelTitle;
            div = document.createElement('div');
            div.className = 'name-video';
            img.className = 'picture';
            a.href = `https://www.youtube.com/watch?v=${this.videos[i].id.videoId}`;
            document.getElementById('pages').children[i].appendChild(a);
            document.getElementById('pages').children[i].children[0].appendChild(img);
            const title = document.createElement('a');
            title.href = `https://www.youtube.com/watch?v=${this.videos[i].id.videoId}`;
            document.getElementById('pages').children[i].appendChild(title);
            document.getElementById('pages').children[i].children[1].appendChild(div);
            document.getElementById('pages').children[i].children[1].children[0].appendChild(h2);
            const channel = document.createElement('a');
            channel.href = `https://www.youtube.com/channel/${this.videos[i].snippet.channelId}`;
            document.getElementById('pages').children[i].appendChild(channel);
            document.getElementById('pages').children[i].children[2].appendChild(span);
            document.getElementById('pages').children[i].appendChild(p);
            span = document.createElement('span');
            span.innerHTML = dateInfo;
            document.getElementById('pages').children[i].appendChild(span);
            document.getElementById('pages').children[i].appendChild(icon);
        }
    }

    createRequest() {
        const query = document.getElementById('query').value;
        const request = gapi.client.youtube.search.list({
            q: query,
            part: 'snippet',
            maxResults: this.videosToLoad,
            pageToken: this.nextPageToken,
        });

        return request;
    }
}
