/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        connectButton.addEventListener('touchend', this.connect, false);
        listenButton.addEventListener('touchend', this.listen, false);
        sendButton.addEventListener('touchend', this.send, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    connect: function() {
            bluetoothSerial.connect(
                "18:21:95:5A:A3:80",  // device to connect to
                function () {
                console.log("Success")
                },    // start listening if you succeed
                function () {
                                            console.log("Not success")
                                            }    // show the error if you fail
            );
    },
    listen: function() {
            bluetoothSerial.listen(
                function () {
                console.log("Success")
                },    // start listening if you succeed
                function () {
                                            console.log("Not success")
                                            }    // show the error if you fail
            );
    },
    send: function() {
            bluetoothSerial.send("moops",
                function () {
                console.log("Success")
                },    // start listening if you succeed
                function () {
                                            console.log("Not success")
                                            }    // show the error if you fail
            );
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();