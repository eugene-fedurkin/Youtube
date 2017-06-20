/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageRenderer = function () {
    function PageRenderer() {
        _classCallCheck(this, PageRenderer);

        this.searchButton = null;
    }

    _createClass(PageRenderer, [{
        key: 'render',
        value: function render() {
            var div = document.createElement('div');
            div.setAttribute('id', 'buttons');

            var input = document.createElement('input');
            input.setAttribute('id', 'query');
            input.setAttribute('placeholder', 'Search');

            this.searchButton = document.createElement('button');
            this.searchButton.setAttribute('id', 'search-button');
            this.searchButton.setAttribute('disabled', 'disabled');
            this.searchButton.innerHTML = 'Search';

            var divContainer = document.createElement('div');
            divContainer.setAttribute('id', 'search-container');

            var divPages = document.createElement('div');
            divPages.setAttribute('id', 'pages');

            document.body.appendChild(div);
            document.getElementById('buttons').appendChild(input);
            document.getElementById('buttons').appendChild(this.searchButton);
            document.body.appendChild(divContainer);
            document.getElementById('search-container').appendChild(divPages);
        }
    }, {
        key: 'enableSearch',
        value: function enableSearch() {
            this.searchButton.removeAttribute('disabled');
        }
    }, {
        key: 'disableSearch',
        value: function disableSearch() {
            this.searchButton.setAttribute('disabled', 'disabled');
        }
    }, {
        key: 'bindSearchHandler',
        value: function bindSearchHandler(callback) {
            this.searchButton.addEventListener('click', callback);
        }
    }]);

    return PageRenderer;
}();

exports.default = PageRenderer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pager = function () {
    function Pager(videoLoader) {
        _classCallCheck(this, Pager);

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

    _createClass(Pager, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var divWrapperButtons = document.createElement('div');
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

            var tooltip = document.createElement('span');
            tooltip.setAttribute('class', 'tooltiptext');
            tooltip.setAttribute('id', 'tooltiptextId');

            document.body.appendChild(divWrapperButtons);
            document.getElementById('wrapperButton').appendChild(this.previousButton);
            document.getElementById('wrapperButton').appendChild(this.paging);

            var _loop = function _loop(i) {
                var pageNumber = document.createElement('input');
                pageNumber.setAttribute('type', 'button');
                pageNumber.setAttribute('value', i);
                pageNumber.setAttribute('disabled', 'disabled');
                pageNumber.addEventListener('mousedown', function () {
                    document.getElementById('tooltiptextId').innerHTML = pageNumber.value + ' Page';
                    document.getElementById('tooltiptextId').style.left = 24 + (i - 1) * 20 + '%';
                    document.getElementById('tooltiptextId').style.opacity = 1;
                });
                _this.paging.appendChild(pageNumber);
            };

            for (var i = 1; i <= 5; i++) {
                _loop(i);
            }
            document.addEventListener('mouseup', function () {
                document.getElementById('tooltiptextId').style.opacity = 0;
            });

            this.paging.appendChild(tooltip);
            document.getElementById('wrapperButton').appendChild(this.nextButton);

            this.bindPageNumberButtonsHandlers();

            this.previousButton.addEventListener('click', function () {
                return _this.previous();
            });
            this.nextButton.addEventListener('click', function () {
                return _this.next();
            });
        }
    }, {
        key: 'bindPageNumberButtonsHandlers',
        value: function bindPageNumberButtonsHandlers() {
            var _this2 = this;

            this.paging.addEventListener('click', function (e) {
                for (var i = 0; i <= 4; i++) {
                    if (_this2.paging.children[i].classList.contains('activePage')) {
                        _this2.paging.children[i].classList.remove('activePage');
                    }
                }
                document.getElementById('pages').style.left = (-parseInt(e.target.value) + 1) * parseInt(_this2.pagesWidth) + 'px';
                _this2.pageNumber = parseInt(document.getElementById('pages').style.left) / -parseInt(_this2.pagesWidth) + 1 || 1;
                _this2.videosOnPage = parseInt(_this2.pagesWidth) / 480;
                _this2.lastPlace = _this2.videosOnPage * (_this2.pageNumber - 1) + 1;
                var currentPageNumber = _this2.pageNumber - 2;
                for (var j = 0; j <= 4; j++) {
                    if (_this2.pageNumber == e.target.value && _this2.pageNumber < 4) {
                        currentPageNumber = e.target.value;
                        for (var _i = 0; _i <= 4; _i++) {
                            _this2.paging.children[_i].value = _i + 1;
                            _this2.paging.children[_i].classList.remove('activePage');
                            if (currentPageNumber == _this2.paging.children[_i].value) {
                                _this2.paging.children[_i].classList.add('activePage');
                            }
                        }
                    }
                    if (_this2.pageNumber >= 3) {
                        _this2.paging.children[j].value = '' + currentPageNumber;
                        currentPageNumber++;
                        _this2.paging.children[2].classList.add('activePage');
                    }
                }

                var position = _this2.pages.style.left;
                _this2.setPagesWidth();
                var page = parseInt(position) / -parseInt(_this2.pagesWidth) + 1;
                if (_this2.videoLoader.videos.length - page * _this2.videosOnPage < _this2.videoLoader.videosToLoad) {
                    _this2.disable();
                    var currentLength = _this2.videoLoader.videos.length;
                    _this2.videoLoader.load(currentLength, function () {
                        return _this2.enable();
                    });
                }
            });
        }
    }, {
        key: 'enable',
        value: function enable() {
            this.previousButton.removeAttribute('disabled');
            this.nextButton.removeAttribute('disabled');
            for (var i = 0; i < this.paging.children.length; i++) {
                this.paging.children[i].removeAttribute('disabled');
            }
            this.bindSwipeHandler();
        }
    }, {
        key: 'disable',
        value: function disable() {
            this.previousButton.setAttribute('disabled', 'disabled');
            this.nextButton.setAttribute('disabled', 'disabled');
            for (var i = 0; i < this.paging.children.length; i++) {
                this.paging.children[i].setAttribute('disabled', 'disabled');
            }
            this.unbindSwipeHandler();
        }
    }, {
        key: 'previous',
        value: function previous() {
            var position = this.pages.style.left;
            this.setPagesWidth();
            this.videosOnPage = parseInt(this.pagesWidth) / 480;
            if (parseInt(position) < 0) {
                this.pages.style.left = parseInt(position) + parseInt(this.pagesWidth) + 'px';
            }
            this.pageNumber = parseInt(this.pages.style.left) / -parseInt(this.pagesWidth) + 1;
            this.updateButtons('backward');
        }
    }, {
        key: 'next',
        value: function next() {
            var position = this.pages.style.left;
            this.setPagesWidth();
            this.videosOnPage = parseInt(this.pagesWidth) / 480;
            if (position === '' || position === '0px') {
                this.pages.style.left = '-' + this.pagesWidth;
            } else {
                this.pages.style.left = parseInt(position) - parseInt(this.pagesWidth) + 'px';
            }
            this.pageNumber = parseInt(this.pages.style.left) / -parseInt(this.pagesWidth) + 1;
            this.updateButtons('forward');
        }
    }, {
        key: 'setPagesWidth',
        value: function setPagesWidth() {
            var currentWidth = document.documentElement.clientWidth;
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
    }, {
        key: 'resetButtons',
        value: function resetButtons() {
            for (var i = 0; i < 5; i++) {
                this.paging.children[i].classList.remove('activePage');
                this.paging.children[i].value = i + 1;
            }
            this.paging.children[0].classList.add('activePage');
        }
    }, {
        key: 'updateButtons',
        value: function updateButtons(direction) {
            var _this3 = this;

            this.lastPlace = this.videosOnPage * (this.pageNumber - 1) + 1;
            switch (direction) {
                case 'forward':
                    {
                        for (var i = 0; i < 5; i++) {
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
                                this.paging.children[i].value = '' + (parseInt(this.paging.children[i].value) + 1);
                            }
                        }
                        var position = this.pages.style.left;
                        this.setPagesWidth();
                        this.videosOnPage = parseInt(this.pagesWidth) / 480;
                        var page = parseInt(position) / -parseInt(this.pagesWidth) + 1;
                        if (this.videoLoader.videos.length - page * this.videosOnPage < this.videoLoader.videosToLoad) {
                            this.disable();
                            var currentLength = this.videoLoader.videos.length;
                            this.videoLoader.load(currentLength, function () {
                                return _this3.enable.call(_this3);
                            });
                        }
                        break;
                    }
                case 'backward':
                    {
                        if (this.pageNumber > 2) {
                            for (var _i2 = 0; _i2 < 5; _i2++) {
                                this.paging.children[_i2].value = '' + (parseInt(this.paging.children[_i2].value) - 1);
                            }
                        } else {
                            for (var _i3 = 1; _i3 >= 0; _i3--) {
                                if (parseInt(this.paging.children[_i3].value) === this.pageNumber) {
                                    this.paging.children[_i3].classList.add('activePage');
                                    this.paging.children[_i3 + 1].classList.remove('activePage');
                                }
                            }
                        }
                        break;
                    }
                default:
                    break;
            }
        }
    }, {
        key: 'bindResizeHandler',
        value: function bindResizeHandler() {
            var _this4 = this;

            window.onresize = function () {
                _this4.setPagesWidth();
                _this4.lastPlace = _this4.videosOnPage * (_this4.pageNumber - 1) + 1;
                _this4.videosOnPage = parseInt(_this4.pagesWidth) / 480;
                _this4.pageNumber = Math.ceil(_this4.lastPlace / _this4.videosOnPage);
                var currentPageNumber = void 0;
                document.getElementById('pages').style.left = -480 * _this4.videosOnPage * (_this4.pageNumber - 1) + 'px';
                if (_this4.pageNumber > 2) {
                    currentPageNumber = _this4.pageNumber - 2;
                    for (var i = 0; i < 5; i++) {
                        _this4.paging.children[i].value = currentPageNumber;
                        currentPageNumber++;
                    }
                } else {
                    currentPageNumber = 1;
                    for (var _i4 = 0; _i4 < 5; _i4++) {
                        _this4.paging.children[_i4].value = currentPageNumber;
                        currentPageNumber++;
                    }
                }
                for (var _i5 = 0; _i5 < 5; _i5++) {
                    if (_this4.paging.children[_i5].value == _this4.pageNumber) {
                        _this4.paging.children[_i5].classList.add('activePage');
                    } else {
                        _this4.paging.children[_i5].classList.remove('activePage');
                    }
                }
            };
        }
    }, {
        key: 'bindSwipeHandler',
        value: function bindSwipeHandler() {
            var _this5 = this;

            if (this.swipeBinded) {
                return;
            }
            this.swipeBinded = true;
            var wrapper = document.getElementsByTagName('html')[0];

            wrapper.onmousedown = function (e) {
                _this5.pages.style.transition = '';
                var clientXStart = e.clientX;
                var left = wrapper.getBoundingClientRect().left + pageXOffset;
                var shiftX = e.pageX - left;
                var pageLeft = parseInt(_this5.pages.style.left) || 0;
                _this5.pages.style.left = pageLeft + e.pageX - shiftX + 'px';
                document.onmousemove = function (event) {
                    _this5.pages.style.left = pageLeft + event.pageX - shiftX + 'px';
                };
                wrapper.onmouseup = function (event) {
                    _this5.pages.style.transition = 'left 0.5s ease-in-out';
                    if (clientXStart > event.clientX + 50) {
                        _this5.pages.style.left = pageLeft - parseInt(_this5.pagesWidth) + 'px';
                        _this5.pageNumber++;
                        _this5.updateButtons('forward');
                    } else if (clientXStart + 50 < event.clientX && _this5.pageNumber > 1) {
                        _this5.pages.style.left = pageLeft + parseInt(_this5.pagesWidth) + 'px';
                        _this5.pageNumber--;
                        _this5.updateButtons('backward');
                    } else {
                        _this5.pages.style.left = pageLeft + 'px';
                    }
                    document.onmousemove = null;
                    wrapper.onmouseup = null;
                };
            };
        }
    }, {
        key: 'unbindSwipeHandler',
        value: function unbindSwipeHandler() {
            document.getElementsByTagName('html')[0].onmousedown = null;
            this.swipeBinded = false;
        }
    }]);

    return Pager;
}();

exports.default = Pager;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoLoader = function () {
    function VideoLoader(videosToLoad) {
        _classCallCheck(this, VideoLoader);

        this.videos = [];
        this.videosToLoad = videosToLoad;
        this.nextPageToken = null;
    }

    _createClass(VideoLoader, [{
        key: 'search',
        value: function search(callback) {
            var pages = document.getElementById('pages');
            pages.innerHTML = '';
            pages.style.left = 0;
            this.nextPageToken = null;
            this.load(0, callback);
        }
    }, {
        key: 'load',
        value: function load(startFrom, callback) {
            var _this = this;

            var request = this.createRequest();
            request.execute(function (response) {
                _this.videos = _this.videos.concat(response.result.items);
                _this.nextPageToken = response.nextPageToken;
                _this.render(startFrom);
                if (callback) {
                    callback();
                }
            });
        }
    }, {
        key: 'render',
        value: function render(startFrom) {
            for (var i = startFrom || 0; i < this.videos.length; i++) {
                var div = document.createElement('div');
                var a = document.createElement('a');
                var img = document.createElement('img');
                var p = document.createElement('p');
                var h2 = document.createElement('h2');
                var span = document.createElement('span');
                var icon = document.createElement('i');
                var dateInfo = this.videos[i].snippet.publishedAt.slice(0, 10);
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
                a.href = 'https://www.youtube.com/watch?v=' + this.videos[i].id.videoId;
                document.getElementById('pages').children[i].appendChild(a);
                document.getElementById('pages').children[i].children[0].appendChild(img);
                var title = document.createElement('a');
                title.href = 'https://www.youtube.com/watch?v=' + this.videos[i].id.videoId;
                document.getElementById('pages').children[i].appendChild(title);
                document.getElementById('pages').children[i].children[1].appendChild(div);
                document.getElementById('pages').children[i].children[1].children[0].appendChild(h2);
                var channel = document.createElement('a');
                channel.href = 'https://www.youtube.com/channel/' + this.videos[i].snippet.channelId;
                document.getElementById('pages').children[i].appendChild(channel);
                document.getElementById('pages').children[i].children[2].appendChild(span);
                document.getElementById('pages').children[i].appendChild(p);
                span = document.createElement('span');
                span.innerHTML = dateInfo;
                document.getElementById('pages').children[i].appendChild(span);
                document.getElementById('pages').children[i].appendChild(icon);
            }
        }
    }, {
        key: 'createRequest',
        value: function createRequest() {
            var query = document.getElementById('query').value;
            var request = gapi.client.youtube.search.list({
                q: query,
                part: 'snippet',
                maxResults: this.videosToLoad,
                pageToken: this.nextPageToken
            });

            return request;
        }
    }]);

    return VideoLoader;
}();

exports.default = VideoLoader;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _videoLoader = __webpack_require__(2);

var _videoLoader2 = _interopRequireDefault(_videoLoader);

var _pageRenderer = __webpack_require__(0);

var _pageRenderer2 = _interopRequireDefault(_pageRenderer);

var _pager = __webpack_require__(1);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start() {
    var videoLoader = new _videoLoader2.default(25);

    var pageRenderer = new _pageRenderer2.default();
    pageRenderer.render();

    var pager = new _pager2.default(videoLoader);
    pager.render();
    pager.bindResizeHandler();
    pager.setPagesWidth();

    pageRenderer.bindSearchHandler(function () {
        pageRenderer.disableSearch();
        videoLoader.videos = [];
        videoLoader.search(function () {
            return pageRenderer.enableSearch();
        });
        pager.pageNumber = 1;
        pager.resetButtons();
        pager.enable();
    });
    pageRenderer.enableSearch();
}

gapi.load('client', function () {
    return gapi.client.init({
        apiKey: 'AIzaSyBQPFBBxSjc2bEXzF9RI8PxfzzxSqnskE8',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    }).then(function () {
        return start();
    }, function (error) {
        return console.error('Error: ', error);
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2QxZTZjYmNjM2I4NjQ1YTlkYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UtcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWRlby1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyJdLCJuYW1lcyI6WyJQYWdlUmVuZGVyZXIiLCJzZWFyY2hCdXR0b24iLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbnB1dCIsImlubmVySFRNTCIsImRpdkNvbnRhaW5lciIsImRpdlBhZ2VzIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJQYWdlciIsInZpZGVvTG9hZGVyIiwicHJldmlvdXNCdXR0b24iLCJuZXh0QnV0dG9uIiwicGFnZXMiLCJwYWdpbmciLCJwYWdlc1dpZHRoIiwicGFnZU51bWJlciIsImxhc3RQbGFjZSIsInZpZGVvc09uUGFnZSIsInN3aXBlQmluZGVkIiwiZGl2V3JhcHBlckJ1dHRvbnMiLCJ0b29sdGlwIiwiaSIsInZhbHVlIiwic3R5bGUiLCJsZWZ0Iiwib3BhY2l0eSIsImJpbmRQYWdlTnVtYmVyQnV0dG9uc0hhbmRsZXJzIiwicHJldmlvdXMiLCJuZXh0IiwiZSIsImNoaWxkcmVuIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJwYXJzZUludCIsInRhcmdldCIsImN1cnJlbnRQYWdlTnVtYmVyIiwiaiIsImFkZCIsInBvc2l0aW9uIiwic2V0UGFnZXNXaWR0aCIsInBhZ2UiLCJ2aWRlb3MiLCJsZW5ndGgiLCJ2aWRlb3NUb0xvYWQiLCJkaXNhYmxlIiwiY3VycmVudExlbmd0aCIsImxvYWQiLCJlbmFibGUiLCJiaW5kU3dpcGVIYW5kbGVyIiwidW5iaW5kU3dpcGVIYW5kbGVyIiwidXBkYXRlQnV0dG9ucyIsImN1cnJlbnRXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2lkdGgiLCJkaXJlY3Rpb24iLCJjYWxsIiwid2luZG93Iiwib25yZXNpemUiLCJNYXRoIiwiY2VpbCIsIndyYXBwZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm9ubW91c2Vkb3duIiwidHJhbnNpdGlvbiIsImNsaWVudFhTdGFydCIsImNsaWVudFgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYWdlWE9mZnNldCIsInNoaWZ0WCIsInBhZ2VYIiwicGFnZUxlZnQiLCJvbm1vdXNlbW92ZSIsImV2ZW50Iiwib25tb3VzZXVwIiwiVmlkZW9Mb2FkZXIiLCJuZXh0UGFnZVRva2VuIiwic3RhcnRGcm9tIiwicmVxdWVzdCIsImNyZWF0ZVJlcXVlc3QiLCJleGVjdXRlIiwicmVzcG9uc2UiLCJjb25jYXQiLCJyZXN1bHQiLCJpdGVtcyIsInJlbmRlciIsImEiLCJpbWciLCJwIiwiaDIiLCJzcGFuIiwiaWNvbiIsImRhdGVJbmZvIiwic25pcHBldCIsInB1Ymxpc2hlZEF0Iiwic2xpY2UiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3JjIiwidGh1bWJuYWlscyIsIm1lZGl1bSIsInVybCIsImNoYW5uZWxUaXRsZSIsImhyZWYiLCJpZCIsInZpZGVvSWQiLCJjaGFubmVsIiwiY2hhbm5lbElkIiwicXVlcnkiLCJnYXBpIiwiY2xpZW50IiwieW91dHViZSIsInNlYXJjaCIsImxpc3QiLCJxIiwicGFydCIsIm1heFJlc3VsdHMiLCJwYWdlVG9rZW4iLCJzdGFydCIsInBhZ2VSZW5kZXJlciIsInBhZ2VyIiwiYmluZFJlc2l6ZUhhbmRsZXIiLCJiaW5kU2VhcmNoSGFuZGxlciIsImRpc2FibGVTZWFyY2giLCJlbmFibGVTZWFyY2giLCJyZXNldEJ1dHRvbnMiLCJpbml0IiwiYXBpS2V5IiwiZGlzY292ZXJ5RG9jcyIsInRoZW4iLCJj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IjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZDFlNmNiY2MzYjg2NDVhOWRhMiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VSZW5kZXJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J1dHRvbnMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlcnknKTtcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCcpO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5pbm5lckhUTUwgPSAnU2VhcmNoJztcclxuXHJcbiAgICAgICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXZQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdlBhZ2VzLnNldEF0dHJpYnV0ZSgnaWQnLCAncGFnZXMnKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25zJykuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25zJykuYXBwZW5kQ2hpbGQodGhpcy5zZWFyY2hCdXR0b24pO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdlBhZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVTZWFyY2goKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTZWFyY2hIYW5kbGVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2UtcmVuZGVyZXIuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWRlb0xvYWRlcikge1xyXG4gICAgICAgIHRoaXMudmlkZW9Mb2FkZXIgPSB2aWRlb0xvYWRlcjtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKTtcclxuICAgICAgICB0aGlzLnBhZ2luZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYWdlc1dpZHRoID0gJzQ4MHB4JztcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgIHRoaXMubGFzdFBsYWNlID0gMTtcclxuICAgICAgICB0aGlzLnZpZGVvc09uUGFnZSA9IDE7XHJcbiAgICAgICAgdGhpcy5zd2lwZUJpbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBkaXZXcmFwcGVyQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdldyYXBwZXJCdXR0b25zLnNldEF0dHJpYnV0ZSgnaWQnLCAnd3JhcHBlckJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJldklkJyk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1ByZXYnKTtcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHRJZCcpO1xyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTmV4dCcpO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICB0aGlzLnBhZ2luZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rvb2x0aXAnKTtcclxuICAgICAgICB0aGlzLnBhZ2luZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhZ2luZycpO1xyXG5cclxuICAgICAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b29sdGlwdGV4dCcpO1xyXG4gICAgICAgIHRvb2x0aXAuc2V0QXR0cmlidXRlKCdpZCcsICd0b29sdGlwdGV4dElkJyk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2V3JhcHBlckJ1dHRvbnMpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyQnV0dG9uJykuYXBwZW5kQ2hpbGQodGhpcy5wcmV2aW91c0J1dHRvbik7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXJCdXR0b24nKS5hcHBlbmRDaGlsZCh0aGlzLnBhZ2luZyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgcGFnZU51bWJlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGkpO1xyXG4gICAgICAgICAgICBwYWdlTnVtYmVyLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgcGFnZU51bWJlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbHRpcHRleHRJZCcpLmlubmVySFRNTCA9IGAke3BhZ2VOdW1iZXIudmFsdWV9IFBhZ2VgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2x0aXB0ZXh0SWQnKS5zdHlsZS5sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgPSBgJHsyNCArICgoaSAtIDEpICogMjApfSVgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2x0aXB0ZXh0SWQnKS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5nLmFwcGVuZENoaWxkKHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9vbHRpcHRleHRJZCcpLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2luZy5hcHBlbmRDaGlsZCh0b29sdGlwKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlckJ1dHRvbicpLmFwcGVuZENoaWxkKHRoaXMubmV4dEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZFBhZ2VOdW1iZXJCdXR0b25zSGFuZGxlcnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucHJldmlvdXMoKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5uZXh0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRQYWdlTnVtYmVyQnV0dG9uc0hhbmRsZXJzKCkge1xyXG4gICAgICAgIHRoaXMucGFnaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdpbmcuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVQYWdlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luZy5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVQYWdlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VzJykuc3R5bGUubGVmdCA9IGAkeygtcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpICsgMSkgKiBwYXJzZUludCh0aGlzLnBhZ2VzV2lkdGgpfXB4YDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gKHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLnN0eWxlLmxlZnQpIC8gLXBhcnNlSW50KHRoaXMucGFnZXNXaWR0aCkpICsgMSB8fCAxO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvc09uUGFnZSA9IHBhcnNlSW50KHRoaXMucGFnZXNXaWR0aCkgLyA0ODA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBsYWNlID0gKHRoaXMudmlkZW9zT25QYWdlICogKHRoaXMucGFnZU51bWJlciAtIDEpKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlciAtIDI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZU51bWJlciA9PSBlLnRhcmdldC52YWx1ZSAmJiB0aGlzLnBhZ2VOdW1iZXIgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2VOdW1iZXIgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbltpXS52YWx1ZSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZVBhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlTnVtYmVyID09IHRoaXMucGFnaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5baV0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVBhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VOdW1iZXIgPj0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2pdLnZhbHVlID0gYCR7Y3VycmVudFBhZ2VOdW1iZXJ9YDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZU51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVBhZ2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBhZ2VzLnN0eWxlLmxlZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnZXNXaWR0aCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gKHBhcnNlSW50KHBvc2l0aW9uKSAvIC1wYXJzZUludCh0aGlzLnBhZ2VzV2lkdGgpKSArIDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvTG9hZGVyLnZpZGVvcy5sZW5ndGggLSAocGFnZSAqIHRoaXMudmlkZW9zT25QYWdlKSA8IHRoaXMudmlkZW9Mb2FkZXIudmlkZW9zVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSB0aGlzLnZpZGVvTG9hZGVyLnZpZGVvcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvTG9hZGVyLmxvYWQoY3VycmVudExlbmd0aCwgKCkgPT4gdGhpcy5lbmFibGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnaW5nLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iaW5kU3dpcGVIYW5kbGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYWdpbmcuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmcuY2hpbGRyZW5baV0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVuYmluZFN3aXBlSGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzKCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wYWdlcy5zdHlsZS5sZWZ0O1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZXNXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMudmlkZW9zT25QYWdlID0gcGFyc2VJbnQodGhpcy5wYWdlc1dpZHRoKSAvIDQ4MDtcclxuICAgICAgICBpZiAocGFyc2VJbnQocG9zaXRpb24pIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnN0eWxlLmxlZnQgPSBgJHtwYXJzZUludChwb3NpdGlvbilcclxuICAgICAgICAgICAgICAgICsgcGFyc2VJbnQodGhpcy5wYWdlc1dpZHRoKX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9ICgocGFyc2VJbnQodGhpcy5wYWdlcy5zdHlsZS5sZWZ0KSAvIC1wYXJzZUludCh0aGlzLnBhZ2VzV2lkdGgpKSArIDEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucygnYmFja3dhcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wYWdlcy5zdHlsZS5sZWZ0O1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZXNXaWR0aCgpO1xyXG4gICAgICAgIHRoaXMudmlkZW9zT25QYWdlID0gcGFyc2VJbnQodGhpcy5wYWdlc1dpZHRoKSAvIDQ4MDtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09ICcnIHx8IHBvc2l0aW9uID09PSAnMHB4Jykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnN0eWxlLmxlZnQgPSBgLSR7dGhpcy5wYWdlc1dpZHRofWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5zdHlsZS5sZWZ0ID0gYCR7cGFyc2VJbnQocG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICAtIHBhcnNlSW50KHRoaXMucGFnZXNXaWR0aCl9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAoKHBhcnNlSW50KHRoaXMucGFnZXMuc3R5bGUubGVmdCkgLyAtcGFyc2VJbnQodGhpcy5wYWdlc1dpZHRoKSkgKyAxKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoJ2ZvcndhcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlc1dpZHRoKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBpZiAoY3VycmVudFdpZHRoIDwgMjg4MCAmJiBjdXJyZW50V2lkdGggPj0gMjQwMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvbnRhaW5lcicpLnN0eWxlLndpZHRoID0gJzI0MDBweCc7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNXaWR0aCA9ICcyNDAwcHgnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFdpZHRoIDwgMjQwMCAmJiBjdXJyZW50V2lkdGggPj0gMTkyMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvbnRhaW5lcicpLnN0eWxlLndpZHRoID0gJzE5MjBweCc7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNXaWR0aCA9ICcxOTIwcHgnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFdpZHRoIDwgMTkyMCAmJiBjdXJyZW50V2lkdGggPj0gMTQ0MCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWNvbnRhaW5lcicpLnN0eWxlLndpZHRoID0gJzE0NDBweCc7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNXaWR0aCA9ICcxNDQwcHgnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFdpZHRoIDwgMTQ0MCAmJiBjdXJyZW50V2lkdGggPj0gOTYwKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY29udGFpbmVyJykuc3R5bGUud2lkdGggPSAnOTYwcHgnO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzV2lkdGggPSAnOTYwcHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY29udGFpbmVyJykuc3R5bGUud2lkdGggPSAnNDgwcHgnO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzV2lkdGggPSAnNDgwcHgnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jb250YWluZXInKS5zdHlsZS53aWR0aCA9IHRoaXMucGFnZXNXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmcuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlUGFnZScpO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luZy5jaGlsZHJlbltpXS52YWx1ZSA9IGkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2luZy5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVQYWdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQnV0dG9ucyhkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmxhc3RQbGFjZSA9ICh0aGlzLnZpZGVvc09uUGFnZSAqICh0aGlzLnBhZ2VOdW1iZXIgLSAxKSkgKyAxO1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnZm9yd2FyZCc6IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2luZy5jaGlsZHJlbltpXS52YWx1ZSA9PSB0aGlzLnBhZ2VOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyIDw9IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmcuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlUGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luZy5jaGlsZHJlbltpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlUGFnZScpOyAvLyAtLT8/P1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2kgLSAxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVQYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2kgLSAyXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVQYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2kgLSAzXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVQYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZVBhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmcuY2hpbGRyZW5baSArIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZVBhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID0gYCR7cGFyc2VJbnQodGhpcy5wYWdpbmcuY2hpbGRyZW5baV0udmFsdWUpICsgMX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wYWdlcy5zdHlsZS5sZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLnNldFBhZ2VzV2lkdGgoKTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb3NPblBhZ2UgPSBwYXJzZUludCh0aGlzLnBhZ2VzV2lkdGgpIC8gNDgwO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlID0gKHBhcnNlSW50KHBvc2l0aW9uKSAvIC1wYXJzZUludCh0aGlzLnBhZ2VzV2lkdGgpKSArIDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVvTG9hZGVyLnZpZGVvcy5sZW5ndGggLSAocGFnZSAqIHRoaXMudmlkZW9zT25QYWdlKSA8IHRoaXMudmlkZW9Mb2FkZXIudmlkZW9zVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSB0aGlzLnZpZGVvTG9hZGVyLnZpZGVvcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvTG9hZGVyLmxvYWQoY3VycmVudExlbmd0aCwgKCkgPT4gdGhpcy5lbmFibGUuY2FsbCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2JhY2t3YXJkJzoge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyID4gMikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luZy5jaGlsZHJlbltpXS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA9IGAke3BhcnNlSW50KHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLnZhbHVlKSAtIDF9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLnBhZ2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5baV0udmFsdWUpID09PSB0aGlzLnBhZ2VOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmcuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlUGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luZy5jaGlsZHJlbltpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlUGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRSZXNpemVIYW5kbGVyKCkge1xyXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYWdlc1dpZHRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFBsYWNlID0gKHRoaXMudmlkZW9zT25QYWdlICogKHRoaXMucGFnZU51bWJlciAtIDEpKSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9zT25QYWdlID0gcGFyc2VJbnQodGhpcy5wYWdlc1dpZHRoKSAvIDQ4MDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gTWF0aC5jZWlsKHRoaXMubGFzdFBsYWNlIC8gdGhpcy52aWRlb3NPblBhZ2UpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLnN0eWxlLmxlZnQgPSBgJHstNDgwICogdGhpcy52aWRlb3NPblBhZ2UgKiAodGhpcy5wYWdlTnVtYmVyIC0gMSl9cHhgO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlTnVtYmVyID4gMikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VOdW1iZXIgPSB0aGlzLnBhZ2VOdW1iZXIgLSAyO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luZy5jaGlsZHJlbltpXS52YWx1ZSA9IGN1cnJlbnRQYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlTnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLnZhbHVlID0gY3VycmVudFBhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2VOdW1iZXIrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLnZhbHVlID09IHRoaXMucGFnZU51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5nLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVBhZ2UnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmcuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlUGFnZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU3dpcGVIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN3aXBlQmluZGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zd2lwZUJpbmRlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XHJcblxyXG4gICAgICAgIHdyYXBwZXIub25tb3VzZWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50WFN0YXJ0ID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgcGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0WCA9IGUucGFnZVggLSBsZWZ0O1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlTGVmdCA9IHBhcnNlSW50KHRoaXMucGFnZXMuc3R5bGUubGVmdCkgfHwgMDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5zdHlsZS5sZWZ0ID0gYCR7KHBhZ2VMZWZ0ICsgZS5wYWdlWCkgLSBzaGlmdFh9cHhgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlcy5zdHlsZS5sZWZ0ID0gYCR7KHBhZ2VMZWZ0ICsgZXZlbnQucGFnZVgpIC0gc2hpZnRYfXB4YDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd3JhcHBlci5vbm1vdXNldXAgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZXMuc3R5bGUudHJhbnNpdGlvbiA9ICdsZWZ0IDAuNXMgZWFzZS1pbi1vdXQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudFhTdGFydCA+IChldmVudC5jbGllbnRYICsgNTApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlcy5zdHlsZS5sZWZ0ID0gYCR7cGFnZUxlZnQgLSBwYXJzZUludCh0aGlzLnBhZ2VzV2lkdGgpfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoJ2ZvcndhcmQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNsaWVudFhTdGFydCArIDUwKSA8IGV2ZW50LmNsaWVudFggJiYgdGhpcy5wYWdlTnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZXMuc3R5bGUubGVmdCA9IGAke3BhZ2VMZWZ0ICsgcGFyc2VJbnQodGhpcy5wYWdlc1dpZHRoKX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKCdiYWNrd2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzLnN0eWxlLmxlZnQgPSBgJHtwYWdlTGVmdH1weGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRTd2lwZUhhbmRsZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5vbm1vdXNlZG93biA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zd2lwZUJpbmRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZGVvc1RvTG9hZCkge1xyXG4gICAgICAgIHRoaXMudmlkZW9zID0gW107XHJcbiAgICAgICAgdGhpcy52aWRlb3NUb0xvYWQgPSB2aWRlb3NUb0xvYWQ7XHJcbiAgICAgICAgdGhpcy5uZXh0UGFnZVRva2VuID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2goY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpO1xyXG4gICAgICAgIHBhZ2VzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHBhZ2VzLnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dFBhZ2VUb2tlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sb2FkKDAsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKHN0YXJ0RnJvbSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5jcmVhdGVSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5leGVjdXRlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvcyA9IHRoaXMudmlkZW9zLmNvbmNhdChyZXNwb25zZS5yZXN1bHQuaXRlbXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRQYWdlVG9rZW4gPSByZXNwb25zZS5uZXh0UGFnZVRva2VuO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcihzdGFydEZyb20pO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc3RhcnRGcm9tKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0RnJvbSB8fCAwOyBpIDwgdGhpcy52aWRlb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZUluZm8gPSB0aGlzLnZpZGVvc1tpXS5zbmlwcGV0LnB1Ymxpc2hlZEF0LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtdmlkZW8tY2FtZXJhIGJhZGdlJztcclxuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VzJykuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICd2aWRlbyc7XHJcbiAgICAgICAgICAgIGgyLmlubmVySFRNTCA9IHRoaXMudmlkZW9zW2ldLnNuaXBwZXQudGl0bGU7XHJcbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gdGhpcy52aWRlb3NbaV0uc25pcHBldC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHRoaXMudmlkZW9zW2ldLnNuaXBwZXQudGh1bWJuYWlscy5tZWRpdW0udXJsO1xyXG4gICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMudmlkZW9zW2ldLnNuaXBwZXQuY2hhbm5lbFRpdGxlO1xyXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICduYW1lLXZpZGVvJztcclxuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9ICdwaWN0dXJlJztcclxuICAgICAgICAgICAgYS5ocmVmID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHt0aGlzLnZpZGVvc1tpXS5pZC52aWRlb0lkfWA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLmNoaWxkcmVuW2ldLmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS5jaGlsZHJlbltpXS5jaGlsZHJlblswXS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgdGl0bGUuaHJlZiA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7dGhpcy52aWRlb3NbaV0uaWQudmlkZW9JZH1gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS5jaGlsZHJlbltpXS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKGgyKTtcclxuICAgICAgICAgICAgY29uc3QgY2hhbm5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgY2hhbm5lbC5ocmVmID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvJHt0aGlzLnZpZGVvc1tpXS5zbmlwcGV0LmNoYW5uZWxJZH1gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS5jaGlsZHJlbltpXS5hcHBlbmRDaGlsZChjaGFubmVsKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VzJykuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlcycpLmNoaWxkcmVuW2ldLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgICAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IGRhdGVJbmZvO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS5jaGlsZHJlbltpXS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VzJykuY2hpbGRyZW5baV0uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVJlcXVlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlcnknKS52YWx1ZTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gZ2FwaS5jbGllbnQueW91dHViZS5zZWFyY2gubGlzdCh7XHJcbiAgICAgICAgICAgIHE6IHF1ZXJ5LFxyXG4gICAgICAgICAgICBwYXJ0OiAnc25pcHBldCcsXHJcbiAgICAgICAgICAgIG1heFJlc3VsdHM6IHRoaXMudmlkZW9zVG9Mb2FkLFxyXG4gICAgICAgICAgICBwYWdlVG9rZW46IHRoaXMubmV4dFBhZ2VUb2tlbixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZGVvLWxvYWRlci5qcyIsImltcG9ydCBWaWRlb0xvYWRlciBmcm9tICcuL3ZpZGVvLWxvYWRlcic7XHJcbmltcG9ydCBQYWdlUmVuZGVyZXIgZnJvbSAnLi9wYWdlLXJlbmRlcmVyJztcclxuaW1wb3J0IFBhZ2VyIGZyb20gJy4vcGFnZXInO1xyXG5cclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICBjb25zdCB2aWRlb0xvYWRlciA9IG5ldyBWaWRlb0xvYWRlcigyNSk7XHJcblxyXG4gICAgY29uc3QgcGFnZVJlbmRlcmVyID0gbmV3IFBhZ2VSZW5kZXJlcigpO1xyXG4gICAgcGFnZVJlbmRlcmVyLnJlbmRlcigpO1xyXG5cclxuICAgIGNvbnN0IHBhZ2VyID0gbmV3IFBhZ2VyKHZpZGVvTG9hZGVyKTtcclxuICAgIHBhZ2VyLnJlbmRlcigpO1xyXG4gICAgcGFnZXIuYmluZFJlc2l6ZUhhbmRsZXIoKTtcclxuICAgIHBhZ2VyLnNldFBhZ2VzV2lkdGgoKTtcclxuXHJcbiAgICBwYWdlUmVuZGVyZXIuYmluZFNlYXJjaEhhbmRsZXIoKCkgPT4ge1xyXG4gICAgICAgIHBhZ2VSZW5kZXJlci5kaXNhYmxlU2VhcmNoKCk7XHJcbiAgICAgICAgdmlkZW9Mb2FkZXIudmlkZW9zID0gW107XHJcbiAgICAgICAgdmlkZW9Mb2FkZXIuc2VhcmNoKCgpID0+IHBhZ2VSZW5kZXJlci5lbmFibGVTZWFyY2goKSk7XHJcbiAgICAgICAgcGFnZXIucGFnZU51bWJlciA9IDE7XHJcbiAgICAgICAgcGFnZXIucmVzZXRCdXR0b25zKCk7XHJcbiAgICAgICAgcGFnZXIuZW5hYmxlKCk7XHJcbiAgICB9KTtcclxuICAgIHBhZ2VSZW5kZXJlci5lbmFibGVTZWFyY2goKTtcclxufVxyXG5cclxuZ2FwaS5sb2FkKCdjbGllbnQnLCAoKSA9PiBnYXBpLmNsaWVudC5pbml0KHtcclxuICAgIGFwaUtleTogJ0FJemFTeUJRUEZCQnhTamMyYkVYekY5Ukk4UHhmenp4U3Fuc2tFOCcsXHJcbiAgICBkaXNjb3ZlcnlEb2NzOiBbJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL3lvdXR1YmUvdjMvcmVzdCddLFxyXG59KS50aGVuKCgpID0+IHN0YXJ0KCksIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnJvcikpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=