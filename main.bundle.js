webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=lato:400,700);\n/* *, *:before, *:after {\n  box-sizing: border-box;\n} */\n/* #manipulate{\n  position:absolute;\n  width:300px;\n  height:300px;\n  margin-left:-150px;\n  background:#063;\n  bottom:0px;\n  left:50%;\n} */\n/* body {\n  background: #C5DDEB;\n  font: 14px/20px \"Lato\", Arial, sans-serif;\n  padding: 40px 0;\n  color: white;\n}\n*/\n.name{\n  color: white;\n}\nli{\n  list-style: none;\n}\n.container {\n  margin: 0 auto;\n  width: 750px;\n  background: #444753;\n  border-radius: 5px;\n}\nbody {\n  background: #76b852; /* fallback for old browsers */\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;      \n}\n.people-list {\n  width: 260px;\n  float: left;\n}\n.people-list .search {\n  padding: 20px;\n}\n.people-list input {\n  border-radius: 3px;\n  border: none;\n  padding: 14px;\n  color: white;\n  background: #6A6C75;\n  width: 90%;\n  font-size: 14px;\n}\n.people-list .fa-search {\n  position: relative;\n  left: -25px;\n}\n.people-list ul {\n  padding: 20px;\n  height: 770px;\n}\n.people-list ul li {\n  padding-bottom: 20px;\n}\n.people-list img {\n  float: left;\n}\n.people-list .about {\n  float: left;\n  margin-top: 8px;\n}\n.people-list .about {\n  padding-left: 8px;\n}\n.people-list .status {\n  color: #92959E;\n}\n.people-list .status {\n  color: #92959E;\n  height: 9px;\n  width: 9px;\n}\n.chat {\n  width: 490px;\n  float: left;\n  background: #F2F5F8;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: #434651;\n}\n.chat .chat-header {\n  padding: 20px;\n  border-bottom: 2px solid white;\n}\n.chat .chat-header img {\n  float: left;\n}\n.chat .chat-header .chat-about {\n  float: left;\n  padding-left: 10px;\n  margin-top: 6px;\n}\n.chat .chat-header .chat-with {\n  font-weight: bold;\n  font-size: 16px;\n}\n.chat .chat-header .chat-num-messages {\n  color: #92959E;\n}\n.chat .chat-header .fa-star {\n  float: right;\n  color: #D8DADF;\n  font-size: 20px;\n  margin-top: 12px;\n}\n.chat .chat-history {\n  padding: 30px 30px 20px;\n  border-bottom: 2px solid white;\n  overflow-y: scroll;\n  height: 575px;\n}\n.chat .chat-history .message-data {\n  margin-bottom: 15px;\n}\n.chat .chat-history .message-data-time {\n  color: #a8aab1;\n  padding-left: 6px;\n}\n.chat .chat-history .message {\n  color: white;\n  padding: 18px 20px;\n  line-height: 26px;\n  font-size: 16px;\n  border-radius: 7px;\n  margin-bottom: 30px;\n  width: 90%;\n  position: relative;\n}\n.chat .chat-history .message:after {\n  bottom: 100%;\n  left: 7%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #86BB71;\n  border-width: 10px;\n  margin-left: -10px;\n}\n.chat .chat-history .my-message {\n  background: #86BB71;\n}\n.chat .chat-history .other-message {\n  background: #94C2ED;\n}\n.chat .chat-history .other-message:after {\n  border-bottom-color: #94C2ED;\n  left: 93%;\n}\n.chat .chat-message {\n  padding: 30px;\n}\n.chat .chat-message textarea {\n  width: 100%;\n  border: none;\n  padding: 10px 20px;\n  font: 14px/22px \"Lato\", Arial, sans-serif;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  resize: none;\n}\n.chat .chat-message .fa-file-o, .chat .chat-message .fa-file-image-o {\n  font-size: 16px;\n  color: gray;\n  cursor: pointer;\n}\n.chat .chat-message button {\n  float: right;\n  color: #94C2ED;\n  font-size: 16px;\n  text-transform: uppercase;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  background: #F2F5F8;\n}\n.chat .chat-message button:hover {\n  color: #75b1e8;\n}\n.online, .offline, .me {\n  margin-right: 3px;\n  font-size: 10px;\n}\n.online {\n  color: #86BB71;\n}\n.offline {\n  color: #E38968;\n}\n.me {\n  color: #94C2ED;\n}\n.align-left {\n  text-align: left;\n}\n.align-right {\n  text-align: right;\n}\n.float-right {\n  float: right;\n}\n.clearfix:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0;\n}\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n}\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #4CAF50;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover,.form button:active,.form button:focus {\n  background: #43A047;\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n.form .register-form {\n  display: none;\n}\n/* .container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #EF3B3A;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div [hidden]=\"isLogined\">\n  <div class=\"login-page\">\n    <div class=\"form\">\n      <form class=\"register-form\">\n        <input type=\"text\" placeholder=\"name\"/>\n        <input type=\"password\" placeholder=\"password\"/>\n        <input type=\"text\" placeholder=\"email address\"/>\n        <button>create</button>\n        <p class=\"message\">Already registered? <a href=\"#\">Sign In</a></p>\n      </form>\n      <form class=\"login-form\">\n          \n          <input [(ngModel)]=\"username\" type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n          placeholder=\"you@example.com\" autofocus>\n          <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n          placeholder=\"Password\" >\n        <!-- <input [(ngModel)]=\"username\" type=\"text\" placeholder=\"Tài khoản\"/>\n        <input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Mật khẩu\"/> -->\n        <button (click)=\"login()\">Đăng nhập</button>\n        <p class=\"message\">Chưa có tài khoản? <a href=\"#\">Tạo tài khoản</a></p>\n      </form>\n    </div>\n  </div>\n</div>\n<div [hidden]=\"!isLogined\">\n<!-- <input type=\"text\" [(ngModel)]=\"anotherid\">\n<h1>My id - {{mypeerid}}</h1>\n<button (click)=\"connect()\">Connect</button>\n<button (click)=\"videoconnect()\">VideoChat</button> -->\n<video [hidden]=\"startCall\" width=\"100px\" #myvideo></video>\n<a href=\"javascript:void(0)\"><img (click)=\"disconnect()\" style=\" position:absolute;\nwidth:50px;\nheight:50px;\nmargin-left:-350px;\nbottom:20px;\nleft:50%;\" src=\"../assets/image/endCall.png\" alt=\"\" *ngIf=\"startTimeCall\" > </a>\n<video style=\"position: fixed; right: 0; bottom: 0;\nmin-width: 100%; min-height: 100%;\nwidth: auto; height: auto; z-index: -100;\n\nbackground-size: cover;\" [hidden]=\"startCall\" width=\"800px\" #revideo></video>\n<div class=\"container clearfix\" *ngIf=\"!startTimeCall\">\n  <div class=\"people-list\" id=\"people-list\" style=\"float:left\">\n    <div class=\"search\">\n      <input type=\"text\" placeholder=\"search\" />\n      <i class=\"fa fa-search\"></i>\n    </div>\n    <!-- <p *ngIf=\"userL?.length === 0\">Chưa có người online</p> -->\n    <ul  *ngIf=\"userL?.length > 0\" class=\"list\">\n      <li class=\"clearfix\"  *ngFor=\"let user of userL\" (click)=\"currUser=user;\"> \n        <a href=\"javascript:void(0)\">\n        <img [src]=\"(user)?user.avatar:''\" alt=\"avatar\" />\n        <div class=\"about\">\n          <div class=\"name\">{{(user)?user.username:\"\"}}</div>\n          <div class=\"status\">\n           <img src=\"../assets/image/online.svg\" width=\"9px\" alt=\"\"> \n          </div>\n        </div>\n      </a>\n      </li>         \n\n    </ul>\n  </div>\n  \n  <div class=\"chat\" style=\"float:left; width: 430px;\">\n    <div class=\"chat-header clearfix\" >\n      <img [src]=\"(currUser)?currUser.avatar:''\" alt=\"avatar\" />\n      \n      <div class=\"chat-about\">\n        <div class=\"chat-with\">{{(currUser)?currUser.username:''}}</div>\n        <div class=\"chat-num-messages\">already 50 messages</div>\n      </div>\n      <i class=\"fa fa-star\"></i>\n     \n     <a   href=\"javascript:void(0)\"><img  style=\"margin-left:60px\" (click)=\"connect()\" src=\"../assets/image/image.png\" width=\"50px\" alt=\"\"></a>\n     <!-- <a *ngIf=\"Oncalled\"  href=\"javascript:void(0)\"><img  style=\"margin-left:60px\" height=\"50px\" width=\"50px\" (click)=\"startRecord()\" src=\"../assets/image/calling.gif\" width=\"50px\" alt=\"\"></a> -->\n     <a *ngIf=\"Oncalled\"  href=\"javascript:void(0)\"><img (click)=\"startRecord()\"  src=\"../assets/image/calling.gif\" alt=\"\"></a>\n    </div> <!-- end chat-header -->\n    <!-- <p *ngIf=\"userL?.length === 0\">Chưa có thông tin</p> -->\n    <div class=\"chat-history\" >\n    \n     \n      \n    </div> <!-- end chat-history -->\n    \n    <div class=\"chat-message clearfix\">\n      <textarea name=\"message-to-send\" id=\"message-to-send\" placeholder =\"Type your message\" rows=\"3\"></textarea>\n              \n      <i class=\"fa fa-file-o\"></i> &nbsp;&nbsp;&nbsp;\n      <i class=\"fa fa-file-image-o\"></i>\n      \n      <button>Send</button>\n\n    </div> <!-- end chat-message -->\n    \n  </div> <!-- end chat -->\n\n</div> <!-- end container -->\n\n<script id=\"message-template\" type=\"text/x-handlebars-template\">\n<li class=\"clearfix\">\n  <div class=\"message-data align-right\">\n    <span class=\"message-data-time\" >{{time}}, Today</span> &nbsp; &nbsp;\n    <span class=\"message-data-name\" >Olia</span> <i class=\"fa fa-circle me\"></i>\n  </div>\n  <div class=\"message other-message float-right\">\n    {{messageOutput}}\n  </div>\n</li>\n</script>\n\n<script id=\"message-response-template\" type=\"text/x-handlebars-template\">\n<li>\n  <div class=\"message-data\">\n    <span class=\"message-data-name\"><i class=\"fa fa-circle online\"></i> Vincent</span>\n    <span class=\"message-data-time\">{{time}}, Today</span>\n  </div>\n  <div class=\"message my-message\">\n    {{response}}\n  </div>\n</li>\n</script>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(chatservice) {
        this.chatservice = chatservice;
        this.title = 'app';
        this.startCall = true;
        this.Oncalled = false;
        this.stRecord = false;
        this.audio = new Audio();
        this.streams = [];
        this.startTimeCall = false;
        this.isCalling = false;
        this.audio.src = "../assets/music/nhacchuong.mp3";
        this.audio.load();
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(chatservice.getUrl());
        this.peer = new Peer({ key: 'peerjs', host: "skipye.herokuapp.com", secure: true, port: 443 });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mypeerid = _this.peer.id;
        }, 2500);
        this.peer.on('connection', function (conn) {
            alert(conn);
            conn.on('data', function (data) {
                console.log(data);
            });
        });
        //  this.chatservice.connect().then((userList:any)=>{
        //   this.userL=userList;
        //   this.currUser=userList[0]
        //  })
        this.peer.on('call', function (call) {
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            _this.audio.play();
            // this.peer.on('data', function(data) {
            // 	console.log('Received', data);
            // });
            _this.Oncalled = true;
            _this.waiting().then(function (res) {
                _this.audio.pause();
                if (res === 1) {
                    _this.Oncalled = false;
                    var videor = _this.myVideo.nativeElement;
                    openStream().then(function (stream) {
                        // var track = stream.getTracks();  // if only one media track
                        // for( var i=0;i<track.length;i++)
                        // track[i].stop();
                        var videor = _this.myVideo.nativeElement;
                        _this.streams.push(stream);
                        call.answer(stream);
                        videor.src = URL.createObjectURL(stream);
                        _this.startCall = false;
                        _this.startTimeCall = true;
                        videor.play();
                        call.on("stream", function (remoteStream) {
                            _this.streams.push(remoteStream);
                            var video = _this.reVideo.nativeElement;
                            video.src = URL.createObjectURL(remoteStream);
                            video.play();
                        });
                    });
                }
            });
        });
        this.socket.on('userList', function (data) {
            console.log(data);
            console.log(data);
            _this.userL = data;
        });
    };
    AppComponent.prototype.getPeerID = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.mypeerid) {
                resolve(1);
            }
            else {
                return setTimeout(function () {
                    resolve(_this.getPeerID());
                }, 500);
            }
        });
    };
    AppComponent.prototype.startRecord = function () {
        this.stRecord = true;
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this.getPeerID().then(function (resu) {
            if (resu === 1) {
                console.log(_this.username + "   " + _this.password);
                _this.chatservice.login({ username: _this.username, password: _this.password, peerID: _this.mypeerid }).then(function (res) {
                    if (res.err === 0)
                        _this.user = res.data.data;
                    console.log("this.user" + _this.userL);
                    console.log("this.mypeerid" + _this.user.peerID);
                    _this.isLogined = true;
                    _this.socket.on('userList', function (data) {
                        _this.userL = data;
                        if (_this.userL.length > 0) {
                            for (var i = 0; i < _this.userL.length; i++)
                                if (_this.user.username === _this.userL[i].username)
                                    _this.userL.splice(i, 1);
                            _this.currUser = data[0];
                            console.log(_this.currUser);
                        }
                    });
                });
            }
        });
    };
    AppComponent.prototype.disconnect = function () {
        for (var _i = 0, _a = this.streams; _i < _a.length; _i++) {
            var st = _a[_i];
            var tr = st.getTracks();
            for (var _b = 0, tr_1 = tr; _b < tr_1.length; _b++) {
                var t = tr_1[_b];
                t.stop();
            }
        }
        this.startTimeCall = false;
        this.stRecord = false;
        this.Oncalled = false;
        this.startCall = true;
        // })
    };
    AppComponent.prototype.connect = function () {
        var _this = this;
        console.log(this.currUser.peerID);
        this.anotherid = this.currUser.peerID;
        console.log(this.anotherid);
        this.stRecord = true;
        this.startCall = false;
        // var conn = this.peer.connect(this.anotherid);
        // conn.on('open', function () {
        //   conn.send('Message from that id');
        // });
        var video = this.reVideo.nativeElement;
        openStream().then(function (stream) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(stream);
                this.streams.push(stream);
                video.src = URL.createObjectURL(stream);
                video.play();
                this.Oncalled = true;
                // this.peer.send(this.user);
                // var call= this.peer.call(this.anotherid,stream);
                // console.log(this.anotherid)
                // console.log(call)
                this.calling(stream).then(function (call) {
                    _this.Oncalled = false;
                    _this.startTimeCall = true;
                    call.on("stream", function (remoteStream) {
                        _this.streams.push(remoteStream);
                        var videor = _this.myVideo.nativeElement;
                        console.log(JSON.stringify(remoteStream));
                        videor.src = URL.createObjectURL(remoteStream);
                        videor.play();
                    });
                });
                return [2 /*return*/];
            });
        }); });
    };
    AppComponent.prototype.calling = function (stream) {
        var _this = this;
        var call = this.peer.call(this.anotherid, stream);
        return new Promise(function (resolve, reject) {
            if (call) {
                resolve(call);
            }
            else {
                setTimeout(function () {
                    resolve(_this.calling(stream));
                }, 300);
            }
        });
    };
    AppComponent.prototype.waiting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.stRecord === true) {
                resolve(1);
            }
            else {
                setTimeout(function () {
                    resolve(_this.waiting());
                }, 2000);
            }
        });
    };
    AppComponent.prototype.ckeckCkickAs = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('myvideo'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "myVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('revideo'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "reVideo", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], AppComponent);
    return AppComponent;
}());

function stopStreamedVideo() {
    navigator.getUserMedia({ audio: true, video: true }, function (stream) {
        // can also use getAudioTracks() or getVideoTracks()
        var track = stream.getTracks()[0]; // if only one media track
        console.log(track);
        // ...
        track.stop();
    }, function (error) {
        console.log('getUserMedia() error', error);
    });
}
function openStream() {
    var config = {
        audio: true,
        video: true
    };
    return navigator.mediaDevices.getUserMedia(config);
}
function closeStream() {
    openStream().then(function (stream) {
        if (stream) {
            stream.getTracks().forEach(function (track) { track.stop(); });
        }
    });
    //   openStream().then(stream=>{
    //   function stopStream (stream) {
    //     console.log(stream)
    //     for (let track of stream.getTracks()) { 
    //         track.stop()
    //     }
    // }
    // stopStream(stream)
    // })
}


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatService = /** @class */ (function () {
    function ChatService() {
        this.url = "https://whispering-sands-20004.herokuapp.com/";
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
    }
    ChatService.prototype.getUrl = function () {
        return this.url;
    };
    ChatService.prototype.connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // If you aren't familiar with environment variables then
            // you can hard code `environment.ws_url` as `http://localhost:5000`
            // We define our observable which will observe any incoming messages
            // from our socket.io server.
            _this.socket.on('userList', function (data) {
                console.log(data);
                console.log("Received message from Websocket Server");
                resolve(data);
            });
        });
    };
    ChatService.prototype.login = function (userLogin) {
        var _this = this;
        console.log(userLogin);
        this.socket.emit("login", userLogin);
        return new Promise(function (resolve, reject) {
            _this.socket.on("isLogin", function (data) {
                console.log(data);
                if (data.err === 0) {
                    resolve({
                        err: 0,
                        data: data
                    });
                }
                else {
                    resolve({
                        err: 1,
                        data: "Error"
                    });
                }
            });
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
///<reference path="typings.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map