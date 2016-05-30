'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = function () {
    function API() {
        _classCallCheck(this, API);
    }

    _createClass(API, null, [{
        key: 'login',
        value: function login(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/login',
                method: 'POST',
                data: data,
                processData: false,
                contentType: false
            }).done(done).fail(fail);
        }
    }, {
        key: 'signup',
        value: function signup(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/signup',
                method: 'POST',
                data: data,
                processData: false,
                contentType: false
            }).done(done).fail(fail);
        }
    }, {
        key: 'isLoggedIn',
        value: function isLoggedIn(done, fail) {
            _jquery2.default.ajax({
                url: '/api/login',
                method: 'GET',
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'logout',
        value: function logout(done, fail) {
            _jquery2.default.ajax({
                url: '/api/logout',
                method: 'POST'
            }).done(done).fail(fail);
        }
    }, {
        key: 'updateUser',
        value: function updateUser(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/user',
                method: 'PATCH',
                data: data,
                processData: false,
                contentType: false
            }).done(done).fail(fail);
        }
    }, {
        key: 'addHoop',
        value: function addHoop(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/hoop',
                method: 'POST',
                data: data,
                processData: false,
                contentType: false
            }).done(done).fail(fail);
        }
    }, {
        key: 'addStory',
        value: function addStory(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/story',
                method: 'POST',
                data: data,
                processData: false,
                contentType: false
            }).done(done).fail(fail);
        }
    }, {
        key: 'getHoop',
        value: function getHoop(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/hoop',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getHoops',
        value: function getHoops(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/hoops',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getStory',
        value: function getStory(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/story',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getStories',
        value: function getStories(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/stories',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getActivities',
        value: function getActivities(done, fail) {
            _jquery2.default.ajax({
                url: '/api/activities',
                method: 'GET',
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'likeHoop',
        value: function likeHoop(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/like/hoop',
                method: 'POST',
                data: data
            }).done(done).fail(fail);
        }
    }, {
        key: 'likeStory',
        value: function likeStory(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/like/story',
                method: 'POST',
                data: data
            }).done(done).fail(fail);
        }
    }, {
        key: 'comment',
        value: function comment(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/comment',
                method: 'POST',
                data: data
            }).done(done).fail(fail);
        }

        // Extra

    }, {
        key: 'getNearbyHoops',
        value: function getNearbyHoops(data, done, fail) {
            if (!API.geolocating) {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        API.geolocating = false;

                        _jquery2.default.ajax({
                            url: '/api/hoops/nearby',
                            method: 'GET',
                            data: _jquery2.default.extend({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            }, data),
                            dataType: 'json'
                        }).done(done).fail(fail);
                    });

                    API.geolocating = true;
                } else {
                    alert('Sorry, your device or browser doesn\'t support geolocation!');
                }
            }
        }
    }, {
        key: 'getPopularHoops',
        value: function getPopularHoops(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/hoops/popular',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getLatestHoops',
        value: function getLatestHoops(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/hoops/latest',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getMostCommentedStories',
        value: function getMostCommentedStories(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/stories/mostcommented',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getMostLikedStories',
        value: function getMostLikedStories(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/stories/mostliked',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getMostViewedStories',
        value: function getMostViewedStories(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/stories/mostviewed',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getLatestStories',
        value: function getLatestStories(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/stories/latest',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getStoryComments',
        value: function getStoryComments(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/story/comments',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getHoopLikes',
        value: function getHoopLikes(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/hoop/likes',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getStoryLikes',
        value: function getStoryLikes(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/story/likes',
                method: 'GET',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'viewHoop',
        value: function viewHoop(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/view/hoop',
                method: 'PATCH',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'viewStory',
        value: function viewStory(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/view/story',
                method: 'PATCH',
                data: data,
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'commentStory',
        value: function commentStory(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/comment/story',
                method: 'PATCH',
                data: data
            }).done(done).fail(fail);
        }
    }, {
        key: 'updateUserLastActivityCheckTime',
        value: function updateUserLastActivityCheckTime(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/user/lastactivitychecktime',
                method: 'PATCH',
                data: data
            }).done(done).fail(fail);
        }
    }, {
        key: 'getMyHoops',
        value: function getMyHoops(done, fail) {
            _jquery2.default.ajax({
                url: '/api/user/myhoops',
                method: 'GET',
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'getOtherHoops',
        value: function getOtherHoops(done, fail) {
            _jquery2.default.ajax({
                url: '/api/user/otherhoops',
                method: 'GET',
                dataType: 'json'
            }).done(done).fail(fail);
        }
    }, {
        key: 'updateUserImage',
        value: function updateUserImage(data, done, fail) {
            _jquery2.default.ajax({
                url: '/api/user/image',
                method: 'POST',
                data: data,
                processData: false,
                contentType: false
            }).done(done).fail(fail);
        }
    }]);

    return API;
}();

API.BASE_URL = 'http://localhost:8080';
API.geolocating = false;


module.exports = API;