'use strict'

import $ from 'jquery'

class API {
    static BASE_URL = 'http://localhost:8080'
    static geolocating = false
    static login(data, done, fail) {
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: data,
            processData: false,
            contentType: false,
        }).done(done).fail(fail);
    }
    static signup(data, done, fail) {
        $.ajax({
            url: '/api/signup',
            method: 'POST',
            data: data,
            processData: false,
            contentType: false,
        }).done(done).fail(fail);
    }
    static isLoggedIn(done, fail) {
        $.ajax({
            url: '/api/login',
            method: 'GET',
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static logout(done, fail) {
        $.ajax({
            url: '/api/logout',
            method: 'POST',
        }).done(done).fail(fail);
    }
    static updateUser(data, done, fail) {
        $.ajax({
            url: '/api/user',
            method: 'PATCH',
            data: data,
            processData: false,
            contentType: false,
        }).done(done).fail(fail);
    }
    static addHoop(data, done, fail) {
        $.ajax({
            url: '/api/hoop',
            method: 'POST',
            data: data,
            processData: false,
            contentType: false,
        }).done(done).fail(fail);
    }
    static addStory(data, done, fail) {
        $.ajax({
            url: '/api/story',
            method: 'POST',
            data: data,
            processData: false,
            contentType: false,
        }).done(done).fail(fail);
    }
    static getHoop(data, done, fail) {
        $.ajax({
            url: '/api/hoop',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getHoops(data, done, fail) {
        $.ajax({
            url: '/api/hoops',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getStory(data, done, fail) {
        $.ajax({
            url: '/api/story',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getStories(data, done, fail) {
        $.ajax({
            url: '/api/stories',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getActivities(done, fail) {
        $.ajax({
            url: '/api/activities',
            method: 'GET',
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static likeHoop(data, done, fail) {
        $.ajax({
            url: '/api/like/hoop',
            method: 'POST',
            data: data,
        }).done(done).fail(fail);
    }
    static likeStory(data, done, fail) {
        $.ajax({
            url: '/api/like/story',
            method: 'POST',
            data: data,
        }).done(done).fail(fail);
    }
    static comment(data, done, fail) {
        $.ajax({
            url: '/api/comment',
            method: 'POST',
            data: data,
        }).done(done).fail(fail);
    }

    // Extra
    static getNearbyHoops(data, done, fail) {
        if (!API.geolocating) {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    API.geolocating = false;

                    $.ajax({
                        url: '/api/hoops/nearby',
                        method: 'GET',
                        data: $.extend({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        }, data),
                        dataType: 'json',
                    }).done(done).fail(fail);
                });

                API.geolocating = true;
            } else {
                alert('Sorry, your device or browser doesn\'t support geolocation!');
            }
        }
    }
    static getPopularHoops(data, done, fail) {
        $.ajax({
            url: '/api/hoops/popular',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getLatestHoops(data, done, fail) {
        $.ajax({
            url: '/api/hoops/latest',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getMostCommentedStories(data, done, fail) {
        $.ajax({
            url: '/api/stories/mostcommented',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getMostLikedStories(data, done, fail) {
        $.ajax({
            url: '/api/stories/mostliked',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getMostViewedStories(data, done, fail) {
        $.ajax({
            url: '/api/stories/mostviewed',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getLatestStories(data, done, fail) {
        $.ajax({
            url: '/api/stories/latest',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getStoryComments(data, done, fail) {
        $.ajax({
            url: '/api/story/comments',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getHoopLikes(data, done, fail) {
        $.ajax({
            url: '/api/hoop/likes',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getStoryLikes(data, done, fail) {
        $.ajax({
            url: '/api/story/likes',
            method: 'GET',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static viewHoop(data, done, fail) {
        $.ajax({
            url: '/api/view/hoop',
            method: 'PATCH',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static viewStory(data, done, fail) {
        $.ajax({
            url: '/api/view/story',
            method: 'PATCH',
            data: data,
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static commentStory(data, done, fail) {
        $.ajax({
            url: '/api/comment/story',
            method: 'PATCH',
            data: data,
        }).done(done).fail(fail);
    }
    static updateUserLastActivityCheckTime(data, done, fail) {
        $.ajax({
            url: '/api/user/lastactivitychecktime',
            method: 'PATCH',
            data: data,
        }).done(done).fail(fail);
    }
    static getMyHoops(done, fail) {
        $.ajax({
            url: '/api/user/myhoops',
            method: 'GET',
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static getOtherHoops(done, fail) {
        $.ajax({
            url: '/api/user/otherhoops',
            method: 'GET',
            dataType: 'json',
        }).done(done).fail(fail);
    }
    static updateUserImage(data, done, fail) {
        $.ajax({
            url: '/api/user/image',
            method: 'POST',
            data: data,
            processData: false,
            contentType: false,
        }).done(done).fail(fail);
    }
}

module.exports = API;
