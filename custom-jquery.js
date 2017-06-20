/*window.$ = function(selector) {
    if (!selector) {
        return;
    }

    let elements;
    if (selector.startsWith('.')) {
        elements = document.getElementsByClassName(selector.slice(1));
    }
    
    elements.addClass = function(param) {
        for (let i = 0; i < this.length; i++) {
            let classString = typeof param === 'function'
                ? param(i, this[i].className)
                : param;
            if (!classString) {
                continue;
            }
            let classNames = classString.split(' ');
            for (let className of classNames.filter(cn => cn)) {
                this[i].classList.add(className);
            }
        }
    };
    elements.append = function(node) {
        if (node[0] === '<' && node[node.length - 1] === '>') {
            let elem = document.createElement(node.slice(1,2));
            elem.innerHTML = node.slice(3, node.length - 4);
            for (let i = 0; i < this.length; i++) {
                if (this[i]) {
                    this[i].appendChild(elem)
                };
            }
        } else {
            for (let i = 0; i < this.length; i++) {
                this[i].appendChild(node);
            }
        }
    };
    elements.html = function(textNode) {
        if (!textNode) {
            return this[0].innerHTML
        }
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = textNode;
        }
    }

    elements.children = function() {
        return this.children
    }

    elements.attr = function(...args) {
        if (args.length === 1) {
            return this[0].getAttribute('class');
        }
        if (args.length === 2) {
            for (let i = 0; i < this.length; i++) {
                this[i].setAttribute(args[0], args[1])
            }
        }
    }

    elements.css = function(...args) {
        if (typeof args[0] === 'object') {
            
            for (let cssAtribute in args[0]) {
                for (let i = 0; i < this.length; i++) {
                    this[i].style[cssAtribute] = args[0][cssAtribute]
                }
            }
        }
        if (typeof args[0] === 'string') {
            return this[0].style[args[0]];
        }
    }

    elements.on = function(...args) {
        console.log(this[0].children.length)
        if (args.length === 2) {
            this[0].addEventListener(args[0], args[1], false);
        }
        if (args.length === 3) {
            for (let i = 0; i < this[0].children; i++) {
                if (this[0].children[i].getAttribute('class') === args[2].slice(1)) {
                    this[0].addEventListener(args[0], args[2], false);
                }
            }
        }
    }

    elements.one = function(event, handler) {
        this[0].addEventListener(event, handler);
        this[0].addEventListener(event, function(e) {
            e.target.removeEventListener(e.type, arguments.callee);
        })
    }

    elements.each = function(callback) {
        console.log(this.length);
        for (let i = 0; i < this.length; i++) {
            
        }
    }

    elements.data = function(property) {
        console.log(arguments.length)
        if (typeof arguments === 'object') {
            for (let i = 0; i < this.length; i++) {
                for (let prop in arguments[0]) {
                    this[i].dataset[prop] = arguments[0][prop];
                }
            }
        }
        if (arguments.length === 0) {
            return this[0].dataset;
        }
        if (arguments.length === 2) {
            for (let i = 0; i < this.length; i++) {
                this[i].dataset[arguments[0]] = arguments[1];
            }
        }
        return this[0].dataset[property];
    }

    return elements;
};*/
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.$ = function (selector) {
    if (!selector) {
        return;
    }

    var elements = void 0;
    if (selector.startsWith('.')) {
        elements = document.getElementsByClassName(selector.slice(1));
    }

    elements.addClass = function (param) {
        for (var i = 0; i < this.length; i++) {
            var classString = typeof param === 'function' ? param(i, this[i].className) : param;
            if (!classString) {
                continue;
            }
            var classNames = classString.split(' ');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = classNames.filter(function (cn) {
                    return cn;
                })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var className = _step.value;

                    this[i].classList.add(className);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    };
    elements.append = function (node) {
        if (node[0] === '<' && node[node.length - 1] === '>') {
            var elem = document.createElement(node.slice(1, 2));
            elem.innerHTML = node.slice(3, node.length - 4);
            for (var i = 0; i < this.length; i++) {
                if (this[i]) {
                    this[i].appendChild(elem);
                };
            }
        } else {
            for (var _i = 0; _i < this.length; _i++) {
                this[_i].appendChild(node);
            }
        }
    };
    elements.html = function (textNode) {
        if (!textNode) {
            return this[0].innerHTML;
        }
        for (var i = 0; i < this.length; i++) {
            this[i].innerHTML = textNode;
        }
    };

    elements.children = function () {
        return this.children;
    };

    elements.attr = function () {
        if (arguments.length === 1) {
            return this[0].getAttribute('class');
        }
        if (arguments.length === 2) {
            for (var i = 0; i < this.length; i++) {
                this[i].setAttribute(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
            }
        }
    };

    elements.css = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (_typeof(args[0]) === 'object') {

            for (var cssAtribute in args[0]) {
                for (var i = 0; i < this.length; i++) {
                    this[i].style[cssAtribute] = args[0][cssAtribute];
                }
            }
        }
        if (typeof args[0] === 'string') {
            return this[0].style[args[0]];
        }
    };

    elements.on = function () {
        console.log(this[0].children.length);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        if (args.length === 2) {
            this[0].addEventListener(args[0], args[1], false);
        }
        if (args.length === 3) {
            for (var i = 0; i < this[0].children; i++) {
                if (this[0].children[i].getAttribute('class') === args[2].slice(1)) {
                    this[0].addEventListener(args[0], args[2], false);
                }
            }
        }
    };

    elements.one = function (event, handler) {
        this[0].addEventListener(event, handler);
        this[0].addEventListener(event, function (e) {
            e.target.removeEventListener(e.type, arguments.callee);
        });
    };

    elements.each = function (callback) {
        console.log(this.length);
        for (var i = 0; i < this.length; i++) {}
    };

    elements.data = function (property) {
        console.log(arguments.length);
        if ((typeof arguments === 'undefined' ? 'undefined' : _typeof(arguments)) === 'object') {
            for (var i = 0; i < this.length; i++) {
                for (var prop in arguments[0]) {
                    this[i].dataset[prop] = arguments[0][prop];
                }
            }
        }
        if (arguments.length === 0) {
            return this[0].dataset;
        }
        if (arguments.length === 2) {
            for (var _i2 = 0; _i2 < this.length; _i2++) {
                this[_i2].dataset[arguments[0]] = arguments[1];
            }
        }
        return this[0].dataset[property];
    };

    return elements;
};