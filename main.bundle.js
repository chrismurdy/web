webpackJsonp(["main"],{

/***/ "../../../../../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/ts/AppModule.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var http_2 = __webpack_require__("../../../http/esm5/http.js");
var CoreController_1 = __webpack_require__("../../../../../src/ts/modules/core/CoreController.ts");
var HeaderComponent_1 = __webpack_require__("../../../../../src/ts/modules/layout/HeaderComponent.ts");
var ClickOutside_1 = __webpack_require__("../../../../../src/ts/modules/ClickOutside.ts");
var ModalHolder_1 = __webpack_require__("../../../../../src/ts/modules/ModalHolder.ts");
var ImageDimensions_1 = __webpack_require__("../../../../../src/ts/modules/ImageDimensions.ts");
var DeleteModalComponent_1 = __webpack_require__("../../../../../src/ts/modules/util/DeleteModalComponent.ts");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var NotificationsManager_1 = __webpack_require__("../../../../../src/ts/services/NotificationsManager.ts");
var Helper_1 = __webpack_require__("../../../../../src/ts/services/Helper.ts");
var MediaManager_1 = __webpack_require__("../../../../../src/ts/services/MediaManager/MediaManager.ts");
var UMediaManager_1 = __webpack_require__("../../../../../src/ts/services/MediaManager/UMediaManager.ts");
var SessionService_1 = __webpack_require__("../../../../../src/ts/services/SessionService.ts");
var ConfigService_1 = __webpack_require__("../../../../../src/ts/services/ConfigService.ts");
var MediaValidation_1 = __webpack_require__("../../../../../src/ts/services/MediaValidation.ts");
var AppRoutesModule_1 = __webpack_require__("../../../../../src/ts/AppRoutesModule.ts");
var appInitializerFn = function (appConfig) {
    return function () {
        return appConfig.loadAppConfig();
    };
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                http_2.HttpModule,
                http_1.HttpClientModule,
                http_2.JsonpModule,
                AppRoutesModule_1.AppRoutesModule
            ],
            declarations: [
                CoreController_1.CoreController,
                HeaderComponent_1.HeaderComponent,
                ClickOutside_1.ClickOutsideDirective,
                ModalHolder_1.DynamicDirective,
                DeleteModalComponent_1.DeleteModalComponent,
                ImageDimensions_1.ImageDimensionDirective,
            ],
            providers: [
                ConfigService_1.ConfigService,
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: appInitializerFn,
                    multi: true,
                    deps: [ConfigService_1.ConfigService]
                },
                UserManager_1.UserManager,
                NotificationsManager_1.NotificationsManager,
                Helper_1.Helper,
                SessionService_1.SessionService,
                MediaValidation_1.MediaValidationService,
                { provide: MediaManager_1.MediaManager, useClass: UMediaManager_1.UMediaManager }
            ],
            entryComponents: [DeleteModalComponent_1.DeleteModalComponent],
            bootstrap: [
                CoreController_1.CoreController
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/ts/AppRoutesModule.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var LoginComponent_1 = __webpack_require__("../../../../../src/ts/modules/login/LoginComponent.ts");
var HomeComponent_1 = __webpack_require__("../../../../../src/ts/modules/home/HomeComponent.ts");
var DonorsComponent_1 = __webpack_require__("../../../../../src/ts/modules/donors/DonorsComponent.ts");
var DonorsList_1 = __webpack_require__("../../../../../src/ts/modules/donors/DonorsList.ts");
var PlaylistComponent_1 = __webpack_require__("../../../../../src/ts/modules/playlist/PlaylistComponent.ts");
var PlaylistDetailsComponent_1 = __webpack_require__("../../../../../src/ts/modules/playlist/PlaylistDetailsComponent.ts");
var UserListComponent_1 = __webpack_require__("../../../../../src/ts/modules/users/UserListComponent.ts");
var RegisterUserComponent_1 = __webpack_require__("../../../../../src/ts/modules/users/RegisterUserComponent.ts");
var MediaComponent_1 = __webpack_require__("../../../../../src/ts/modules/media/MediaComponent.ts");
var MediaUploadModal_1 = __webpack_require__("../../../../../src/ts/modules/media/MediaUploadModal.ts");
var MediaGridComponent_1 = __webpack_require__("../../../../../src/ts/modules/media/MediaGridComponent.ts");
var MediaGridItemComponent_1 = __webpack_require__("../../../../../src/ts/modules/media/MediaGridItemComponent.ts");
var MediaGridItemDescComponent_1 = __webpack_require__("../../../../../src/ts/modules/media/MediaGridItemDescComponent.ts");
var TakeOverComponent_1 = __webpack_require__("../../../../../src/ts/modules/takeover/TakeOverComponent.ts");
var VideoProcessingDirective_1 = __webpack_require__("../../../../../src/ts/modules/VideoProcessingDirective.ts");
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'login',
                        component: LoginComponent_1.LoginComponent
                    },
                    {
                        path: 'home',
                        component: HomeComponent_1.HomeComponent
                    },
                    {
                        path: 'users',
                        component: UserListComponent_1.UserListComponent,
                        data: { name: "users" }
                    },
                    {
                        path: 'users/register',
                        component: RegisterUserComponent_1.RegisterUserComponent
                    },
                    {
                        path: 'donors',
                        component: DonorsList_1.DonorsList,
                        data: { name: "donors-list" }
                    },
                    {
                        path: 'donors/:id',
                        component: DonorsComponent_1.DonorsComponent,
                        data: { name: "donors" }
                    },
                    {
                        path: 'playlist',
                        component: PlaylistComponent_1.PlaylistComponent,
                        data: { name: "playlist" }
                    },
                    {
                        path: 'playlist/:id',
                        component: PlaylistDetailsComponent_1.PlaylistDetailsComponent,
                        data: { name: "playlist-details" }
                    },
                    {
                        path: 'media',
                        component: MediaComponent_1.MediaComponent,
                        data: { name: "media" }
                    },
                    {
                        path: "takeover",
                        component: TakeOverComponent_1.TakeOverComponent,
                        data: { name: "takeover" }
                    }
                ])
            ],
            declarations: [
                LoginComponent_1.LoginComponent,
                HomeComponent_1.HomeComponent,
                DonorsComponent_1.DonorsComponent,
                DonorsList_1.DonorsList,
                PlaylistComponent_1.PlaylistComponent,
                PlaylistDetailsComponent_1.PlaylistDetailsComponent,
                UserListComponent_1.UserListComponent,
                RegisterUserComponent_1.RegisterUserComponent,
                MediaComponent_1.MediaComponent,
                MediaUploadModal_1.MediaUploadModal,
                MediaGridComponent_1.MediaGridComponent,
                MediaGridItemComponent_1.MediaGridItemComponent,
                MediaGridItemDescComponent_1.MediaGridItemDescComponent,
                TakeOverComponent_1.TakeOverComponent,
                VideoProcessingDirective_1.VideoProcessingDirective
            ],
            exports: [
                router_1.RouterModule
            ],
            entryComponents: [VideoProcessingDirective_1.VideoProcessingDirective]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());
exports.AppRoutesModule = AppRoutesModule;


/***/ }),

/***/ "../../../../../src/ts/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var AppModule_1 = __webpack_require__("../../../../../src/ts/AppModule.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule_1.AppModule);


/***/ }),

/***/ "../../../../../src/ts/models/User.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
        this.id = "";
        this.admin = 0;
        this.email = "";
        this.first_name = "";
        this.last_name = "";
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/ts/modules/ClickOutside.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new core_1.EventEmitter();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        core_1.Directive({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());
exports.ClickOutsideDirective = ClickOutsideDirective;


/***/ }),

/***/ "../../../../../src/ts/modules/ImageDimensions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ImageDimensionDirective = (function () {
    function ImageDimensionDirective(el) {
        this.el = el;
        this.dimensions = new core_1.EventEmitter();
    }
    ImageDimensionDirective.prototype.getDimensions = function () {
        console.log('here');
        this.dimensions.emit({ "height": this.el.nativeElement.offsetHeight, "width": this.el.nativeElement.offsetWidth });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ImageDimensionDirective.prototype, "dimensions", void 0);
    ImageDimensionDirective = __decorate([
        core_1.Directive({
            selector: "[image-dimensions]",
            host: {
                '(load)': 'getDimensions()'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ImageDimensionDirective);
    return ImageDimensionDirective;
}());
exports.ImageDimensionDirective = ImageDimensionDirective;


/***/ }),

/***/ "../../../../../src/ts/modules/ModalHolder.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DynamicDirective = (function () {
    function DynamicDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    DynamicDirective = __decorate([
        core_1.Directive({
            selector: "[modal-holder]",
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef])
    ], DynamicDirective);
    return DynamicDirective;
}());
exports.DynamicDirective = DynamicDirective;


/***/ }),

/***/ "../../../../../src/ts/modules/VideoProcessingDirective.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var util_1 = __webpack_require__("../../../../../src/ts/modules/media/util.ts");
var VideoProcessingDirective = (function () {
    function VideoProcessingDirective(elementRef, renderer, document) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.document = document;
        this.dimensions = new core_1.EventEmitter();
    }
    VideoProcessingDirective.prototype.processVideoDimensions = function (src) {
        var _this = this;
        var videoTagRef = this.document.createElement('video');
        this.renderer.appendChild(this.elementRef.nativeElement, videoTagRef);
        videoTagRef.id = "video-processing-el-" + util_1.makeid(3);
        videoTagRef.src = src;
        videoTagRef.style.display = "none";
        videoTagRef.addEventListener('loadedmetadata', function (e) {
            console.log(videoTagRef.videoWidth, videoTagRef.videoHeight);
            _this.dimensions.emit({
                width: videoTagRef.videoWidth,
                height: videoTagRef.videoHeight
            });
            _this.renderer.removeChild(_this.elementRef.nativeElement, videoTagRef);
        });
    };
    VideoProcessingDirective.prototype.ngOnChanges = function (changes) {
        if (changes.src.currentValue && changes.src.currentValue !== '') {
            this.processVideoDimensions(this.src);
        }
    };
    VideoProcessingDirective.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input('videoSrc'),
        __metadata("design:type", String)
    ], VideoProcessingDirective.prototype, "src", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], VideoProcessingDirective.prototype, "dimensions", void 0);
    VideoProcessingDirective = __decorate([
        core_1.Component({
            selector: 'video-processing',
            template: ""
        }),
        __param(2, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2, Object])
    ], VideoProcessingDirective);
    return VideoProcessingDirective;
}());
exports.VideoProcessingDirective = VideoProcessingDirective;


/***/ }),

/***/ "../../../../../src/ts/modules/core/CoreController.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var LoginComponent_1 = __webpack_require__("../../../../../src/ts/modules/login/LoginComponent.ts");
var CoreController = (function () {
    function CoreController(router, route, userManager, _location) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.userManager = userManager;
        this._location = _location;
        this.mainDisplayClass = "centered";
        this.initialDestination = "";
        this.isHome = true;
        this.loginComponent = false;
        var sc = this;
        this.routerSub = this.router.events.pipe(operators_1.filter(function (e) { return e instanceof router_1.NavigationStart; }), operators_1.map(function (v) { return v.url === "/home"; })).subscribe(function (v) {
            _this.isHome = v;
        });
        this.router.events.pipe(operators_1.filter(function (e) { return e instanceof router_1.ActivationEnd; })).subscribe(function (v) {
            _this.pageName = v.snapshot.data.name;
        });
    }
    CoreController.prototype.ngOnInit = function () {
        var _this = this;
        this.userManager.sendRequest("./data/config.json", {}, "GET")
            .then(function (result) {
            _this.userManager.setAPIPath(result);
            var _session = localStorage.getItem('session');
            if (_session && _session !== '') {
                _this.userManager.sendRequest(_this.userManager.getAPIPath() + "/api/index.php/cms/handshake", {}, "POST")
                    .then(function (result) {
                    if (result && result.id) {
                        _this.userManager.parseUser(result);
                        _this.userManager.sendRequest(_this.userManager.getAPIPath() + "/api/index.php/cms/playlists", {}, "GET")
                            .then(function (result) {
                            _this.userManager.parsePlaylists(result);
                            _this.userManager.sendRequest(_this.userManager.getAPIPath() + "/api/index.php/cms/donors", {}, "GET")
                                .then(function (result) {
                                _this.userManager.parseDonorList(result);
                            })
                                .catch(function (error) {
                                console.warn(error);
                            });
                        })
                            .catch(function (error) {
                            console.warn(error);
                        });
                        _this.router.navigate(["/home"]);
                    }
                    else {
                        localStorage.setItem("session", "");
                        if (!_this.userManager.getUser()) {
                            _this.router.navigate(["/login"]);
                        }
                    }
                })
                    .catch(function (error) {
                    console.warn(error);
                });
            }
            else {
                if (!_this.userManager.getUser()) {
                    _this.router.navigate(["/login"]);
                }
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    CoreController.prototype.ngOnDestroy = function () {
        this.routerSub.unsubscribe();
    };
    CoreController.prototype.gotoEmail = function () {
    };
    CoreController.prototype.onActivate = function (event) {
        this.loginComponent = event instanceof LoginComponent_1.LoginComponent;
    };
    CoreController = __decorate([
        core_1.Component({
            selector: 'core-app',
            template: __webpack_require__("../../../../../src/ts/modules/core/_templates/core.html")
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            UserManager_1.UserManager,
            common_1.Location])
    ], CoreController);
    return CoreController;
}());
exports.CoreController = CoreController;


/***/ }),

/***/ "../../../../../src/ts/modules/core/_templates/core.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userManager.getUser() && !isHome && !loginComponent\">\n\t<div class=\"flex_container_column\">\n\t\t<header-bar></header-bar>\n\t\t<div class=\"main-view flex_container_row\">\n\t\t\t<div class=\"left-bar flex_container_column\">\n\t\t\t\t<div class=\"sunnybrook-logo\">\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex_container_row left-bar-description-container\">\n\t\t\t\t\t<ng-container [ngSwitch]=\"pageName\">\n\t\t\t\t\t\t<p class=\"left-bar-description\" *ngSwitchCase=\"'donors'\">\n\t\t\t\t\t\t\tIn this menu you can change your donor names within the desired giving level. Click the Pencil icon to the right of the\n\t\t\t\t\t\t\tDonor Name to edit that name and/or sort letter, and then click the green disk icon to save the change, or the red back\n\t\t\t\t\t\t\tarrow to discard the change. A user can also delete a Donor Name by clicking the red garbage bin icon to the left of\n\t\t\t\t\t\t\tthe edit button. To add a new Donor Name, use the Donor Name and Sort Letter fields above the donor listing and click\n\t\t\t\t\t\t\tthe green Add New Donor button. Please note that due to complexities in sorting the donor names, a new donor will\n\t\t\t\t\t\t\talways appear at the bottom of the list. We are working to make this more logical for phase 2, but currently due to\n\t\t\t\t\t\t\tsorting individuals seperately from organizations, it must be this way. The sort of the Donor Name can be altered by\n\t\t\t\t\t\t\tusing the Up and/or Down arrows to the left of the Donor Name. The placement in the web portal reflects which order\n\t\t\t\t\t\t\tthey will appear on the screens.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"left-bar-description\" *ngSwitchCase=\"'donors-list'\">\n\t\t\t\t\t\t\tThis is your list of donors, organized by giving level beginning with invdividual donors and followed by organizational\n\t\t\t\t\t\t\tdonors. To edit a donor, click the Pencil icon to the right of the donor giving level to enter that group. You can also\n\t\t\t\t\t\t\tmass add donor names in a full group by downloading the CSV template at the top of this page. Currently this feature is\n\t\t\t\t\t\t\tworking but requires pretty exact data, so\n\t\t\t\t\t\t\tplease reach out to our support staff at <a href=\"support@envision.design\">support@envision.design</a> to get\n\t\t\t\t\t\t\tsome help if you would like to add a new full group of donors.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"left-bar-description\" *ngSwitchCase=\"'users'\">\n\t\t\t\t\t\t\tThis is the page where you define the users of your CMS system. To add a new user, click the Add User button on the top\n\t\t\t\t\t\t\tright of the screen then fill in the details and remember to check the Administrator checkbox if you want that user to\n\t\t\t\t\t\t\tbe able to create other users.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"left-bar-description\" *ngSwitchCase=\"'playlist'\">\n\t\t\t\t\t\t\tHere is where we build the playlist. Currently it is inactive until we more succintly define exactly what the best\n\t\t\t\t\t\t\tprocess for your team to update the playlists will be. It can be a very powerful tool with the ability to update the\n\t\t\t\t\t\t\tcurrent playlist immediately, or we can build out 'scenes' or 'scenearios' for you to apply media assets to. This will\n\t\t\t\t\t\t\tbe more well defined in Phase 2.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"left-bar-description\" *ngSwitchCase=\"'playlist-details'\">\n\t\t\t\t\t\t\tThis is where the individual media elements that build out the full playlists are defined. Prior to this screen you\n\t\t\t\t\t\t\tchose either the left or right playlist, the elements you add or delete here will be added or deleted to the playlist\n\t\t\t\t\t\t\ton the video wall. This is powerful tool and since much time and effort were spent balancing and timing the playlist,\n\t\t\t\t\t\t\twe would like to have an ongoing dialogue with the Sunnybrook Foundation about what shape they would like this feature\n\t\t\t\t\t\t\tto take. Currently changes to this page will NOT be reflected on the video wall, until we totally define how much of\n\t\t\t\t\t\t\tthe content scope the Foundation is comfortable taking on. It may be preferable to build out pre-defined scenes or\n\t\t\t\t\t\t\tscenarios that the foundation can select and add media to instead of full on scheduling.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"left-bar-description\" *ngSwitchCase=\"'media'\">\n\t\t\t\t\t\t\tThis is the media page.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"left-bar-description\" *ngSwitchCase=\"'takeover'\">\n\t\t\t\t\t\t\tOn this page a user can attach media elements that they would like Envision to book for a temporary takeover of the\n\t\t\t\t\t\t\tscreens, similar to the Cipriani and Helipad events in the past. You can attach images for both the left and right of\n\t\t\t\t\t\t\tthe screen which will then be analyzed by our support team for suitability and programmed. Please allow at least 24\n\t\t\t\t\t\t\thours notice for scheduling at this time. This is a temporary solutiuon until we full realize the scheduling feature.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"core__copyrights flex_container_column\">\n\t\t\t\t\t<p>Copyright 2018 &copy;</p>\n\t\t\t\t\t<p>All Rights Reserved, Envision</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n\t\t</div>\n\t</div>\n</div>\n\n<div style=\"height: 100%\" *ngIf=\"!(userManager.getUser() && !isHome)\">\n\t\t<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</div>\n\n<ng-template #template>\n\t\t<router-outlet (activate)='onActivate($event)'>\n\t\t</router-outlet>\n</ng-template>\n<!-- <router-outlet *ngIf=\"!(userManager.getUser() && !isHome)\"></router-outlet> -->\n"

/***/ }),

/***/ "../../../../../src/ts/modules/donors/DonorsComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var Helper_1 = __webpack_require__("../../../../../src/ts/services/Helper.ts");
var DeleteModalComponent_1 = __webpack_require__("../../../../../src/ts/modules/util/DeleteModalComponent.ts");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var DonorsComponent = (function () {
    function DonorsComponent(userManager, router, route, helper, viewContainerRef, componentFactoryResolver) {
        this.userManager = userManager;
        this.router = router;
        this.route = route;
        this.helper = helper;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.scrollBarWidth = 0;
        this.onDeleteSub = rxjs_1.Subscription.EMPTY;
        this.selectedKey = "";
        this.selectedTitle = "";
    }
    DonorsComponent.prototype.ngOnInit = function () {
        this.newDonor = { name: "", letter: "" };
        this.editTitle = false;
        var id = "";
        this.route.params.forEach(function (params) {
            id = params['id'];
        });
        if (id !== "") {
            this.selectedKey = id;
            for (var i = 0; i < this.userManager.getDonorList().length; i++) {
                if (this.selectedKey == this.userManager.getDonorList()[i].key) {
                    this.selectedTitle = this.userManager.getDonorList()[i].title;
                    this.selectedList = this.userManager.getDonorList()[i].donors;
                }
            }
        }
        var scrollBarProps = this.helper.getWidthWithScrollbar("90%");
        this.scrollBarWidthStr = scrollBarProps.style;
        this.scrollBarWidth = scrollBarProps.width;
    };
    DonorsComponent.prototype.ngAfterViewInit = function () {
    };
    DonorsComponent.prototype.ngOnDestroy = function () {
    };
    DonorsComponent.prototype.selectDonorListKey = function () {
    };
    DonorsComponent.prototype.editListTitle = function () {
        this.editTitle = true;
    };
    DonorsComponent.prototype.saveListTitle = function () {
        var _this = this;
        this.editTitle = false;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/updateDonorListTitle", { title: this.selectedTitle, key: this.selectedKey }, "POST")
            .then(function (result) {
            _this.userManager.parseDonorList(result);
            for (var i = 0; i < _this.userManager.getDonorList().length; i++) {
                if (_this.selectedKey == _this.userManager.getDonorList()[i].key) {
                    _this.selectedTitle = _this.userManager.getDonorList()[i].title;
                    _this.selectedList = _this.userManager.getDonorList()[i].donors;
                }
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsComponent.prototype.deleteDonorCategory = function (key) {
        var _this = this;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/donorCategory/" + this.selectedKey, {}, "DELETE")
            .then(function (result) {
            _this.userManager.parseDonorList(result);
            _this.router.navigate(["/donors"]);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsComponent.prototype.moveDonorUp = function (donorID) {
        var _this = this;
        var data = {};
        data.donor_key = this.selectedKey;
        data.donor_id = donorID;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/moveDonorOrderUp", data, "POST")
            .then(function (result) {
            _this.userManager.parseDonorList(result);
            for (var i = 0; i < _this.userManager.getDonorList().length; i++) {
                if (_this.selectedKey == _this.userManager.getDonorList()[i].key) {
                    _this.selectedTitle = _this.userManager.getDonorList()[i].title;
                    _this.selectedList = _this.userManager.getDonorList()[i].donors;
                }
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsComponent.prototype.moveDonorDown = function (donorID) {
        var _this = this;
        var data = {};
        data.donor_key = this.selectedKey;
        data.donor_id = donorID;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/moveDonorOrderDown", data, "POST")
            .then(function (result) {
            _this.userManager.parseDonorList(result);
            for (var i = 0; i < _this.userManager.getDonorList().length; i++) {
                if (_this.selectedKey == _this.userManager.getDonorList()[i].key) {
                    _this.selectedTitle = _this.userManager.getDonorList()[i].title;
                    _this.selectedList = _this.userManager.getDonorList()[i].donors;
                }
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsComponent.prototype.editRow = function (index) {
        this.selectedList[index].inEditMode = true;
    };
    DonorsComponent.prototype.cancelEdit = function (index) {
        this.selectedList[index].inEditMode = false;
    };
    DonorsComponent.prototype.deleteRow = function (index) {
        var _this = this;
        this.selectedList[index].inEditMode = false;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/donor/" + this.selectedList[index].id, {}, "DELETE")
            .then(function (result) {
            _this.userManager.parseDonorList(result);
            for (var i = 0; i < _this.userManager.getDonorList().length; i++) {
                if (_this.selectedKey == _this.userManager.getDonorList()[i].key) {
                    _this.selectedTitle = _this.userManager.getDonorList()[i].title;
                    _this.selectedList = _this.userManager.getDonorList()[i].donors;
                }
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsComponent.prototype.saveRow = function (index) {
        var _this = this;
        this.selectedList[index].inEditMode = false;
        var donor = {};
        donor.id = this.selectedList[index].id;
        donor.donorKey = this.selectedKey;
        donor.donorName = this.selectedList[index].name;
        donor.letter = this.selectedList[index].letter;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/donor/", donor, "PUT")
            .then(function (result) {
            _this.userManager.parseDonorList(result);
            for (var i = 0; i < _this.userManager.getDonorList().length; i++) {
                if (_this.selectedKey == _this.userManager.getDonorList()[i].key) {
                    _this.selectedTitle = _this.userManager.getDonorList()[i].title;
                    _this.selectedList = _this.userManager.getDonorList()[i].donors;
                }
            }
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsComponent.prototype.addRow = function () {
        var _this = this;
        var donor = {};
        donor.donorKey = this.selectedKey;
        donor.donorName = this.newDonor.name;
        donor.letter = this.newDonor.letter;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/donor/", donor, "POST")
            .then(function (result) {
            _this.userManager.parseDonorList(result);
            for (var i = 0; i < _this.userManager.getDonorList().length; i++) {
                if (_this.selectedKey == _this.userManager.getDonorList()[i].key) {
                    _this.selectedTitle = _this.userManager.getDonorList()[i].title;
                    _this.selectedList = _this.userManager.getDonorList()[i].donors;
                }
            }
            _this.newDonor = { name: "", letter: "" };
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsComponent.prototype.resolveTextAndHandlerForDeleteModal = function (type, index) {
        var _this = this;
        var deleteRow = function () {
            _this.deleteRow(index);
        };
        var deleteSection = function () {
            _this.deleteDonorCategory(_this.selectedKey);
        };
        return {
            text: type === "section" ? "Do you want to delete this section?" : "Do you want to delete row?",
            onDelete: type === "section" ? deleteSection : deleteRow
        };
    };
    DonorsComponent.prototype.openDeleteModal = function (type, index) {
        var viewContainerRef = this.dynamicDirective;
        this.onDeleteSub.unsubscribe();
        viewContainerRef.clear();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(DeleteModalComponent_1.DeleteModalComponent);
        var componentRef = viewContainerRef.createComponent(componentFactory);
        var _a = this.resolveTextAndHandlerForDeleteModal(type, index), text = _a.text, onDelete = _a.onDelete;
        componentRef.instance.text = text;
        this.onDeleteSub = componentRef.instance.onDelete.subscribe(onDelete);
    };
    __decorate([
        core_1.ViewChild('dynamicDirective', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], DonorsComponent.prototype, "dynamicDirective", void 0);
    DonorsComponent = __decorate([
        core_1.Component({
            selector: 'donors',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/donors/_templates/donors.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager,
            router_1.Router,
            router_1.ActivatedRoute,
            Helper_1.Helper,
            core_1.ViewContainerRef,
            core_1.ComponentFactoryResolver])
    ], DonorsComponent);
    return DonorsComponent;
}());
exports.DonorsComponent = DonorsComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/donors/DonorsList.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var Helper_1 = __webpack_require__("../../../../../src/ts/services/Helper.ts");
var DonorsList = (function () {
    function DonorsList(userManager, router, helper) {
        this.userManager = userManager;
        this.router = router;
        this.helper = helper;
        this.selectedKey = "";
    }
    DonorsList.prototype.ngOnInit = function () {
        this.selectedKey = "";
        this.scrollBarProps = this.helper.getWidthWithScrollbar(this.helper.defaultViewWidth);
    };
    DonorsList.prototype.ngOnDestroy = function () {
    };
    DonorsList.prototype.seeDonorList = function (key) {
        this.router.navigate(["/donors/" + key]);
    };
    DonorsList.prototype.handleFileInput = function (files) {
        var _this = this;
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
        var formData = new FormData();
        formData.append('csvFile', this.fileToUpload, this.fileToUpload.name);
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/uploadDonorCSV", formData, "POST", false)
            .then(function (result) {
            console.log(result);
            _this.userManager.parseDonorList(result);
            _this.fileToUpload = undefined;
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    DonorsList = __decorate([
        core_1.Component({
            selector: 'donor-list',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/donors/_templates/donors_list.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router, Helper_1.Helper])
    ], DonorsList);
    return DonorsList;
}());
exports.DonorsList = DonorsList;


/***/ }),

/***/ "../../../../../src/ts/modules/donors/_templates/donors.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container flex_container_column\">\n    <div class=\"donors__edit__list-title flex_container_row no-shrink\">\n        <div class=\"donors__edit__title-box\">\n            <ng-container *ngIf=\"!editTitle\">\n                {{selectedTitle}}\n            </ng-container>\n            <ng-container *ngIf=\"editTitle\">\n                <input type=\"text\" [(ngModel)]=\"selectedTitle\">\n            </ng-container>\n        </div>\n        <button *ngIf=\"!editTitle\" (click)=\"editListTitle()\" ></button>\n        <button class=\"save\" *ngIf=\"editTitle\" (click)=\"saveListTitle()\" ></button>\n        <!-- <button class=\"delete\" (click)=\"deleteDonorCategory(selectedKey)\" ></button> -->\n        <button class=\"delete\" (click)=\"openDeleteModal('section')\"></button>\n    </div>\n    <div class=\"part-screen__with-refresh flex_container_row no-shrink\">\n        <div class=\"part-screen__refresh-button-container flex_container_row\">\n            <!-- To remove button from layout just comment out next 4 lines -->\n            <div class=\"part-screen__refresh-button flex_container_row\">\n                    <div class=\"icon\"></div>\n                    <p>Refresh Donors</p>\n            </div>\n        </div>\n        <div class=\"donors__edit__add-donor flex_container_row no-shrink\">\n            <input class=\"donors__edit__add-name\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"newDonor.name\">\n            <input class=\"donors__edit__add-letter\" type=\"text\" placeholder=\"Letter\" [(ngModel)]=\"newDonor.letter\">\n            <button (click)=\"addRow()\">Add New Donor</button>\n        </div>\n    </div>\n    <ng-container *ngIf=\"selectedList && selectedList.length > 0\">\n            <div class=\"donors__edit__table-header flex_container_row no-shrink\">\n                <div class=\"donors__edit__table-item center flex-3\">\n                    <span><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></span>\n                </div>\n                <div class=\"donors__edit__table-item flex-4\">\n                    <span><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span>\n                </div>\n                <div class=\"donors__edit__table-item flex-5\">\n                    Name\n                </div>\n                <div class=\"donors__edit__table-item center flex-3\">\n                    Letter\n                </div>\n                <div class=\"donors__edit__table-item flex-1\">\n                    Delete\n                </div>\n                <div class=\"donors__edit__table-item flex-1\">\n                    Edit\n                </div>\n            </div>\n            <div [style.width]=\"scrollBarWidthStr\" [style.margin-left]=\"scrollBarWidth + 'px'\" class=\"donors__edit__table-body flex_container_column\">\n                <div class=\"donors__edit__table-row flex_container_row\" *ngFor=\"let entry of selectedList; let i = index\" [style.background-color]=\"i%2 == 0 ? '#EFEFEF' : '#FFFFFF'\">\n                        <div class=\"donors__edit__table-item center flex-3\">\n                            <span *ngIf=\"i > 0\" (click)=\"moveDonorUp(entry.id)\" ><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></span>\n                        </div>\n                        <div class=\"donors__edit__table-item flex-4\">\n                            <span *ngIf=\"i < selectedList.length-1\" (click)=\"moveDonorDown(entry.id)\" ><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span>\n                        </div>\n                        <div class=\"donors__edit__table-item flex-5\">\n                            <ng-container *ngIf=\"!entry.inEditMode\">\n                                    {{entry.name}}\n                            </ng-container>\n                            <ng-container *ngIf=\"entry.inEditMode\">\n                                <input type=\"text\" [(ngModel)]=\"entry.name\">\n                            </ng-container>\n                        </div>\n                        <div class=\"donors__edit__table-item center flex-3\">\n                                <ng-container *ngIf=\"!entry.inEditMode\">\n                                    {{entry.letter}}\n                                </ng-container>\n                                <ng-container *ngIf=\"entry.inEditMode\">\n                                    <input type=\"text\" [(ngModel)]=\"entry.letter\">\n                                </ng-container>\n                        </div>\n                        <div class=\"donors__edit__table-item flex-1\">\n                                <ng-container *ngIf=\"!entry.inEditMode\">\n                                        <div class=\"btn deleteBtn\" (click)=\"openDeleteModal('row', i)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></div>\n                                </ng-container>\n                                <ng-container *ngIf=\"entry.inEditMode\">\n                                    <div class=\"btn saveBtn\" (click)=\"saveRow(i)\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></div>\n                                </ng-container>\n                        </div>\n                        <div class=\"donors__edit__table-item flex-1\">\n                                <ng-container *ngIf=\"!entry.inEditMode\">\n                                    <div class=\"btn editBtn\" (click)=\"editRow(i)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></div>\n                                </ng-container>\n                                <ng-container *ngIf=\"entry.inEditMode\">\n                                    <div class=\"btn cancelBtn\" (click)=\"cancelEdit(i)\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i></div>\n                                </ng-container>\n                        </div>\n                </div>\n            </div>\n    </ng-container>\n</div>\n\n\n<ng-template #dynamicDirective></ng-template>"

/***/ }),

/***/ "../../../../../src/ts/modules/donors/_templates/donors_list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container flex_container_column\">\n    <div class=\"donors__CSV-upload flex_container_row\">\n            <div class=\"donors__CSV-button download-button flex_container_row\">\n                <div class=\"icon\"></div>\n                <p>Download a CSV file</p>\n            </div>\n        <div class=\"donors__CSV-button flex_container_row\" (click)=\"file.click()\">\n            <div class=\"icon\"></div>\n            <p>Upload a CSV file</p>\n        </div>\n        <input style=\"display: none\" type=\"file\" (change)=\"handleFileInput($event.target.files)\" #file>\n    </div>\n    <div [style.width]=\"scrollBarProps.style\" [style.margin-left]=\"scrollBarProps.width + 'px'\" class=\"donors__list flex_container_column\">\n            <div class=\"donors__list-item flex_container_column\" *ngFor=\"let group of userManager.getDonorList()\">\n                <div class=\"donors__list-item-header flex_container_row\">\n                    <p class=\"donors__list-item-title\">{{group.title}}</p>\n                    <button (click)=\"seeDonorList(group.key)\"></button>\n                </div>\n                <div class=\"donors__list-item-info flex_container_column\">\n                    <p># of Entries: {{group.donors.length}}</p>\n                    <p>Last edited: {{group.date}}</p>\n                    <p>Edited By: {{group.author}}</p>\n                </div>\n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/home/HomeComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var Helper_1 = __webpack_require__("../../../../../src/ts/services/Helper.ts");
var HomeComponent = (function () {
    function HomeComponent(userManager, router, helper) {
        this.userManager = userManager;
        this.router = router;
        this.helper = helper;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.playlistLinkActive = this.helper.isPlaylistLinkActive();
        this.takeoverPage = this.helper.isTakeoverPageShown();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent.prototype.gotoPage = function (location) {
        this.router.navigate(["/" + location]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/home/_templates/home.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router, Helper_1.Helper])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/home/_templates/home.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home__container flex_container_column\">\n    <div class=\"home__logo-container flex_container_row\">\n            <div class=\"home__logo flex_container_column\">\n                <img src=\"./images/white_logo.png\" alt=\"\">\n                <h3>cms system</h3>\n            </div>\n    </div>\n    <div class=\"home__buttons-container flex_container_column\">\n        <div class=\"home__button-row flex_container_row\">\n            <button class=\"home__button home__donors-color\"  (click)=\"gotoPage('donors')\">Donors</button>\n            <button *ngIf=\"playlistLinkActive\" class=\"home__button home__playlist-color\" (click)=\"gotoPage('playlist')\">Playlist</button>\n            <button *ngIf=\"!playlistLinkActive\" class=\"home__button home__playlist-color\">Playlist</button>\n        </div>\n        <div class=\"home__button-row flex_container_row\">\n            <button *ngIf=\"!takeoverPage\" class=\"home__button home__media-color\" (click)=\"gotoPage('media')\">Media</button>\n            <button *ngIf=\"takeoverPage\" class=\"home__button home__media-color\" (click)=\"gotoPage('takeover')\">TakeOver</button>\n            <button class=\"home__button home__users-color\" (click)=\"gotoPage('users')\">Users</button>\n        </div>\n    </div>\n    <div class=\"login__copyrights flex_container_column\">\n            <p>Copyright 2018 &copy;</p>\n            <p>All Rights Reserved, Envision</p>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/layout/HeaderComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var Helper_1 = __webpack_require__("../../../../../src/ts/services/Helper.ts");
var HeaderComponent = (function () {
    function HeaderComponent(userManager, router, helper) {
        this.userManager = userManager;
        this.router = router;
        this.helper = helper;
        this.dropdownShow = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.playlistLinkActive = this.helper.isPlaylistLinkActive();
        this.takeoverPage = this.helper.isTakeoverPageShown();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    HeaderComponent.prototype.closeDropdown = function () {
        this.dropdownShow = false;
    };
    HeaderComponent.prototype.toggleDropdown = function () {
        this.dropdownShow = !this.dropdownShow;
    };
    HeaderComponent.prototype.showDropdown = function () {
        this.dropdownShow = true;
    };
    HeaderComponent.prototype.gotoPage = function (location) {
        this.router.navigate(["/" + location]);
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/logout", {}, "POST")
            .then(function (result) {
            _this.userManager.deleteUser();
            _this.router.navigate(["/login"]);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-bar',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/layout/_templates/header.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router, Helper_1.Helper])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/layout/_templates/header.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header__container flex_container_row\">\n    <div class=\"header__logo-container flex_container_row\">\n            <div class=\"header__logo flex_container_column\">\n                <img src=\"./images/white_logo.png\" alt=\"\">\n                <h3>cms system</h3>\n            </div>\n    </div>\n    <div class=\"header__button-row flex_container_row\">\n        <div class=\"header__nav-buttons flex_container_row\">\n            <div class=\"header__button\" [class.active]=\"router.url=='/home'\" (click)=\"gotoPage('home')\">Home</div>\n            <div class=\"header__button\" [class.active]=\"router.url=='/donors'\" (click)=\"gotoPage('donors')\">Donors</div>\n            <div *ngIf=\"playlistLinkActive\" class=\"header__button\" [class.active]=\"router.url=='/playlist'\" (click)=\"gotoPage('playlist')\">Playlist</div>\n            <div *ngIf=\"!playlistLinkActive\" class=\"header__button\" [class.active]=\"router.url=='/playlist'\">Playlist</div>\n            <div *ngIf=\"!takeoverPage\" class=\"header__button\" [class.active]=\"router.url=='/media'\" (click)=\"gotoPage('media')\">Media</div>\n            <div *ngIf=\"takeoverPage\" class=\"header__button\" [class.active]=\"router.url=='/takeover'\" (click)=\"gotoPage('takeover')\">TakeOver</div>\n            <div class=\"header__button\" [class.active]=\"router.url=='/users'\" (click)=\"gotoPage('users')\">Users</div>\n        </div>\n        <div (clickOutside)=\"closeDropdown()\" class=\"header__user-button flex_container_row\">\n            <button (click)=\"toggleDropdown()\"></button>\n            <div class=\"header__logout-dropdown\" [class.show]=\"dropdownShow\" (click)=\"logout()\" >\n                Log Out\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/login/LoginComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var LoginComponent = (function () {
    function LoginComponent(userManager, _router) {
        this.userManager = userManager;
        this._router = _router;
        this.authenticationError = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.showPreloader = false;
        this.loginIsCorrect = 0;
        this.model = { email: "", password: "" };
        this.logo_class = "itemFadeIn";
        this.loginbox_class = "itemSlideUp";
        this.errorMessage_class = "accountErrorCollapsed";
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.authenticationError = "";
        this.errorMessage_class = "accountErrorCollapsed";
        this.showPreloader = true;
        var result;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/login", this.model, "POST")
            .then(function (result) {
            _this.onLoginComplete(result);
            _this.logo_class = "itemFadeOut";
            _this.loginbox_class = "itemFadeOut";
            _this.userManager.sendRequest(_this.userManager.getAPIPath() + "/api/index.php/cms/playlists", {}, "GET")
                .then(function (result) {
                _this.userManager.parsePlaylists(result);
                _this.userManager.sendRequest(_this.userManager.getAPIPath() + "/api/index.php/cms/donors", {}, "GET")
                    .then(function (result2) {
                    _this.userManager.parseDonorList(result2);
                    var _reload = false;
                    _this.showPreloader = false;
                    _this.loginIsCorrect = 1;
                    _this._router.navigate(["/home"]);
                })
                    .catch(function (error) {
                    console.warn(error);
                });
            })
                .catch(function (error) {
                console.warn(error);
            });
        })
            .catch(function (error) {
            _this.onLoginError(error);
        });
    };
    LoginComponent.prototype.onLoginError = function (error) {
        this.showPreloader = false;
        this.loginIsCorrect = -1;
        this.authenticationError = error.error;
        this.errorMessage_class = "accountErrorExpanded";
    };
    LoginComponent.prototype.onLoginComplete = function (result) {
        console.log(result);
        this.userManager.parseUser(result);
        localStorage.setItem('session', result.session);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/login/_templates/login.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/login/_templates/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login__container flex_container_column\">\n\t<div class=\"login__logo-container flex_container_row\">\n\t\t<div class=\"login__logo flex_container_column\">\n\t\t\t<img src=\"./images/white_logo.png\" alt=\"\">\n\t\t\t<h3>cms system</h3>\n\t\t</div>\n\t</div>\n\t<div class=\"login__credentials-container flex_container_column\">\n\t\t<div class=\"login__form-error\" [style.visibility]=\"loginIsCorrect == -1 ? 'visible' : 'none'\">\n\t\t\t{{authenticationError}}\n\t\t</div>\n\t\t<form class=\"flex_container_column\" (ngSubmit)=\"doLogin()\" role=\"form\" #loginForm=\"ngForm\">\n\t\t\t<div class=\"login__form flex_container_column\">\n\t\t\t\t<div class=\"login__input-row flex_container_row\">\n\t\t\t\t\t\t<div class=\"login__icon user\"></div>\n\t\t\t\t\t\t<input \n\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\tplaceholder=\"Email Address\" \n\t\t\t\t\t\t\t#email=\"ngModel\" \n\t\t\t\t\t\t\t[(ngModel)]=\"model.email\" \n\t\t\t\t\t\t\tngControl=\"email\"\n\t\t\t\t\t\t\tname = \"email\" \n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"login__input-row flex_container_row\">\n\t\t\t\t\t\t\t<div class=\"login__icon password\"></div>\n\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\ttype=\"password\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\tautocomplete=\"off\"  \n\t\t\t\t\t\t\tplaceholder=\"Password\" \n\t\t\t\t\t\t\t#password=\"ngModel\" \n\t\t\t\t\t\t\t[(ngModel)]=\"model.password\" \n\t\t\t\t\t\t\tngControl=\"password\"\n\t\t\t\t\t\t\tname = \"password\" \n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t<button class=\"login__login-button\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">Login</button>\n\t\t</form>\n\t</div>\n\t<div class=\"login__copyrights flex_container_column\">\n\t\t<p>Copyright 2018 &copy;</p>\n\t\t<p>All Rights Reserved, Envision</p>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/media/GridItem.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__("../../../../../src/ts/modules/media/util.ts");
function createEmptyItem() {
    return {
        type: 'empty',
        ref: util_1.makeid(6),
        url: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        params: {
            aspectRatio: "0x0",
            resolution: "0x0",
            extension: "none"
        },
        orientation: "hoz",
        width: "auto",
        height: "auto",
        visibility: "hidden",
        rendered: false
    };
}
exports.createEmptyItem = createEmptyItem;
function getEmptyItemsIDs(arr) {
    return arr.reduce(function (acc, cur, i) {
        if (cur.type === 'empty') {
            acc.push(i);
        }
        return acc;
    }, []);
}
exports.getEmptyItemsIDs = getEmptyItemsIDs;
function createFromMediaFile(m) {
    return __assign({}, m, { orientation: "hoz", width: "auto", height: "auto", visibility: "hidden", rendered: false });
}
exports.createFromMediaFile = createFromMediaFile;


/***/ }),

/***/ "../../../../../src/ts/modules/media/MediaComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Helper_1 = __webpack_require__("../../../../../src/ts/services/Helper.ts");
var MediaManager_1 = __webpack_require__("../../../../../src/ts/services/MediaManager/MediaManager.ts");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var MediaValidation_1 = __webpack_require__("../../../../../src/ts/services/MediaValidation.ts");
var util_1 = __webpack_require__("../../../../../src/ts/modules/media/util.ts");
var MediaEvents_1 = __webpack_require__("../../../../../src/ts/modules/media/MediaEvents.ts");
var VideoProcessingDirective_1 = __webpack_require__("../../../../../src/ts/modules/VideoProcessingDirective.ts");
var MimeUtils_1 = __webpack_require__("../../../../../src/ts/modules/util/MimeUtils.ts");
var MediaComponent = (function () {
    function MediaComponent(helper, mediaManager, mediaValidation, componentFactoryResolver) {
        this.helper = helper;
        this.mediaManager = mediaManager;
        this.mediaValidation = mediaValidation;
        this.componentFactoryResolver = componentFactoryResolver;
        this._viewType = new rxjs_1.BehaviorSubject("columns");
        this.uploaded$ = new rxjs_1.Subject();
        this.deleted$ = new rxjs_1.Subject();
        this.uploadError = null;
        this.uploadDialogShow = new rxjs_1.BehaviorSubject(false);
        this.showObservable = this.uploadDialogShow.asObservable();
        this.mediaFiles = rxjs_1.Observable.merge(this.mediaManager.getMediaFiles(), this.uploaded$);
        var addEvents$ = this.mediaFiles.pipe(operators_1.map(MediaEvents_1.createAddEvent));
        var deleteEvents$ = this.deleted$.pipe(operators_1.map(MediaEvents_1.createDeleteEvent));
        this.mediaEvents$ = rxjs_1.Observable.merge(addEvents$, deleteEvents$);
        this.viewType = this._viewType.asObservable();
    }
    MediaComponent.prototype.openUploadDialog = function () {
        this.uploadDialogShow.next(true);
    };
    MediaComponent.prototype.onDialogClose = function () {
        this.uploadDialogShow.next(false);
    };
    MediaComponent.prototype.changeViewType = function (val) {
        this._viewType.next(val);
    };
    MediaComponent.prototype.onGridLoading = function (loading) {
        this.isGridLoading = loading;
    };
    MediaComponent.prototype.onItemDelete = function (item) {
        var _this = this;
        this.mediaManager.deleteMediaFile(item).subscribe(function (data) {
            if (data.success) {
                _this.deleted$.next({
                    type: item.type,
                    ref: item.ref,
                    url: item.url,
                    params: __assign({}, item.params)
                });
            }
        });
    };
    MediaComponent.prototype.loadVideoProcessingComponent = function (src) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(VideoProcessingDirective_1.VideoProcessingDirective);
        var componentRef = this.videoProcess.createComponent(componentFactory);
        componentRef.instance.src = src;
        componentRef.instance.processVideoDimensions(src);
        return componentRef.instance.dimensions;
    };
    MediaComponent.prototype.widthHeightValidator = function (_a) {
        var width = _a.width, height = _a.height;
        var aspectValidation = this.mediaValidation.verifyAspectRatio(util_1.aspectRatio(width, height));
        if (aspectValidation !== null) {
            return aspectValidation.msg;
        }
        var resolutionValidation = this.mediaValidation.verifyResolution({ width: width, height: height });
        if (resolutionValidation !== null) {
            return resolutionValidation.msg;
        }
        return null;
    };
    MediaComponent.prototype.uploadFactory = function (data) {
        var _this = this;
        var typeValidation = this.mediaValidation.verifyType(data.type);
        if (typeValidation !== null) {
            return rxjs_1.Observable.of([typeValidation.msg, { width: 0, height: 0 }]);
        }
        return rxjs_1.Observable.if(function () { return data.type.replace(/\/.*/, '') === "image"; }, util_1.loadImageWidthHeight(data), util_1.loadVideo(data).pipe(operators_1.mergeMap(function (e) { return _this.loadVideoProcessingComponent(e); }))).pipe(operators_1.map(function (el) { return [_this.widthHeightValidator(el), el]; }));
    };
    MediaComponent.prototype.onUploadData = function (data) {
        var _this = this;
        this.uploadFactory(data).pipe(operators_1.mergeMap(function (_a) {
            var v = _a[0], params = _a[1];
            if (v === null) {
                var _b = util_1.aspectRatio(params.width, params.height), hoz = _b[0], vert = _b[1];
                return _this.uploadMedia({
                    file: data,
                    params: {
                        extension: MimeUtils_1.mimeToExtension(data.type),
                        aspectRatio: hoz + "x" + vert,
                        resolution: params.width + "x" + params.height
                    }
                });
            }
            else {
                return rxjs_1.Observable.of(new MediaManager_1.UploadError(v));
            }
        })).subscribe(function (err) {
            if (err instanceof MediaManager_1.UploadError) {
                _this.uploadError = err.msg;
            }
            else {
                _this.uploadError = null;
                _this.onDialogClose();
            }
        });
    };
    MediaComponent.prototype.uploadMedia = function (data) {
        var _this = this;
        return this.mediaManager.uploadFile(data).pipe(operators_1.tap(function (file) { return _this.uploaded$.next(file); }), operators_1.catchError(function (e) {
            console.log(e);
            return rxjs_1.Observable.of(new MediaManager_1.UploadError("Something went wrong! Not all files were uploaded"));
        }));
    };
    MediaComponent.prototype.ngOnInit = function () {
        this.scrollBarProps = this.helper.getWidthWithScrollbar(this.helper.defaultViewWidth);
    };
    __decorate([
        core_1.ViewChild('videoProcess', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], MediaComponent.prototype, "videoProcess", void 0);
    MediaComponent = __decorate([
        core_1.Component({
            selector: 'media',
            template: __webpack_require__("../../../../../src/ts/modules/media/_templates/media.html")
        }),
        __metadata("design:paramtypes", [Helper_1.Helper,
            MediaManager_1.MediaManager,
            MediaValidation_1.MediaValidationService,
            core_1.ComponentFactoryResolver])
    ], MediaComponent);
    return MediaComponent;
}());
exports.MediaComponent = MediaComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/media/MediaEvents.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = function (type) { return function (media) { return ({
    type: type,
    payload: media
}); }; };
exports.createAddEvent = exports.createEvent("add");
exports.createDeleteEvent = exports.createEvent("delete");
exports.createHandler = function (handlers) { return function (event) {
    return handlers[event.type](event.payload);
}; };


/***/ }),

/***/ "../../../../../src/ts/modules/media/MediaGridComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var util_1 = __webpack_require__("../../../../../src/ts/modules/media/util.ts");
var GridItem_1 = __webpack_require__("../../../../../src/ts/modules/media/GridItem.ts");
var MediaEvents_1 = __webpack_require__("../../../../../src/ts/modules/media/MediaEvents.ts");
var MediaGridComponent = (function () {
    function MediaGridComponent() {
        var _this = this;
        this.loadingRefs = [];
        this.rowLoaded = new rxjs_1.Subject();
        this.loaded = new rxjs_1.Subject();
        this.renderedRows = [];
        this.viewItems = [];
        this.subs = {};
        this.delete = new core_1.EventEmitter();
        this.loading = new core_1.EventEmitter();
        this.subs.loaded = this.loaded.pipe(operators_1.tap(function (el) { return _this.checkLoading(el.ref); }), operators_1.map(function (el) { return util_1.arrayObjectIndexOf(_this.viewItems, el.ref, "ref"); }), operators_1.scan(function (acc, val) {
            var position = Math.trunc(val / 2);
            var subPosition = Number.isInteger(val / 2) ? 0 : 1;
            if (!acc[position]) {
                acc[position] = [];
            }
            acc[position][subPosition] = val;
            return acc;
        }, [])).subscribe(function (rows) {
            var _loop_1 = function (row) {
                if (row && !util_1.isNullable(row[0]) && row.length === 2 && _this.renderedRows.every(function (cmp) { return !util_1.isRowTheSame(row, cmp); })) {
                    _this.renderedRows.push(row);
                    _this.rowLoaded.next([_this.viewItems[row[0]], _this.viewItems[row[1]]]);
                }
            };
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                _loop_1(row);
            }
        });
        this.subs.rowLoaded = this.rowLoaded.subscribe(function (row) {
            var width = _this.getContainerOffsets().width;
            var halfWidth = width / 2;
            var ratioForEach = row.map(function (el) {
                return halfWidth / util_1.pixelsToNumber(el.width);
            });
            row.forEach(function (el, i) {
                el.rendered = true;
                el.visibility = "visible";
                el.width = util_1.pixelsToNumber(el.width) * ratioForEach[i] - 3 + "px";
                el.height = "auto";
            });
        });
    }
    MediaGridComponent.prototype.onDelete = function (item) {
        this.delete.emit(__assign({}, item));
    };
    MediaGridComponent.prototype.getContainerOffsets = function () {
        return { width: this.container.nativeElement.offsetWidth, height: this.container.nativeElement.offsetHeight };
    };
    MediaGridComponent.prototype.getOrientation = function (_a) {
        var width = _a.width, height = _a.height;
        return (width - height > 0) ? "hoz" : "vert";
    };
    MediaGridComponent.prototype.onDimensions = function (event, item) {
        item.visibility = "visible";
        item.width = event.width + 'px';
        this.loaded.next(item);
    };
    MediaGridComponent.prototype.checkLoading = function (ref) {
        var index = this.loadingRefs.indexOf(ref);
        if (index !== -1) {
            this.loadingRefs.splice(index, 1);
            this.loading.emit(this.loadingRefs.length !== 0);
        }
    };
    MediaGridComponent.prototype.trackByRef = function (index, item) {
        return item.ref;
    };
    MediaGridComponent.prototype.addItem = function (item) {
        this.viewItems.push(item);
        this.loadingRefs.push(item.ref);
        this.loading.emit(true);
    };
    MediaGridComponent.prototype.deleteItem = function (item) {
        var index = util_1.arrayObjectIndexOf(this.viewItems, item.ref, "ref");
        if (index !== -1) {
            this.viewItems.splice(index, 1);
        }
    };
    MediaGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.events = this.events.pipe(operators_1.map(function (el) { return (__assign({}, el, { payload: GridItem_1.createFromMediaFile(el.payload) })); }), operators_1.tap(function (_) {
            var emptyArr = GridItem_1.getEmptyItemsIDs(_this.viewItems);
            for (var _i = 0, emptyArr_1 = emptyArr; _i < emptyArr_1.length; _i++) {
                var emptyId = emptyArr_1[_i];
                _this.viewItems.splice(emptyId, 1);
            }
        }), operators_1.tap(MediaEvents_1.createHandler({
            add: this.addItem.bind(this),
            delete: this.deleteItem.bind(this)
        })), operators_1.tap(function (_) {
            if (_this.viewItems.length % 2 !== 0) {
                _this.viewItems.unshift(GridItem_1.createEmptyItem());
            }
        })).subscribe(function () { });
        this.subs.view$ = this.view$.subscribe(function () {
            _this.viewItems = _this.viewItems.map(function (el) { return (__assign({}, el)); });
        });
    };
    MediaGridComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = Object.keys(this.subs); _i < _a.length; _i++) {
            var key = _a[_i];
            this.subs[key].unsubscribe();
        }
    };
    __decorate([
        core_1.ViewChild('container'),
        __metadata("design:type", core_1.ElementRef)
    ], MediaGridComponent.prototype, "container", void 0);
    __decorate([
        core_1.Input('view'),
        __metadata("design:type", rxjs_1.Observable)
    ], MediaGridComponent.prototype, "view$", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], MediaGridComponent.prototype, "events", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MediaGridComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MediaGridComponent.prototype, "loading", void 0);
    MediaGridComponent = __decorate([
        core_1.Component({
            selector: "media-grid",
            template: __webpack_require__("../../../../../src/ts/modules/media/_templates/media-grid.html")
        }),
        __metadata("design:paramtypes", [])
    ], MediaGridComponent);
    return MediaGridComponent;
}());
exports.MediaGridComponent = MediaGridComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/media/MediaGridItemComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var buttonStates = [
    { text: "Delete", class: "" },
    { text: "Are you sure?", class: "confirm" },
    { text: "Deleted", class: "done" }
];
var MediaGridItemComponent = (function () {
    function MediaGridItemComponent() {
        this.delete = new core_1.EventEmitter();
        this.origDimensions = new core_1.EventEmitter();
        this.deleteButtonState = buttonStates[0];
    }
    MediaGridItemComponent.prototype.onDelete = function (item) {
        this.delete.emit(__assign({}, item));
    };
    MediaGridItemComponent.prototype.deleteBtnClick = function () {
        var btnClass = this.deleteButtonState.class;
        switch (btnClass) {
            case "":
                this.deleteButtonState = buttonStates[1];
                break;
            case "confirm":
                this.onDelete(this.item);
                this.deleteButtonState = buttonStates[2];
                break;
        }
    };
    MediaGridItemComponent.prototype.deleteBtnMouseout = function () {
        var _this = this;
        if (this.deleteButtonState.class === "confirm") {
            setTimeout(function () {
                _this.deleteButtonState = buttonStates[0];
            }, 1500);
        }
    };
    MediaGridItemComponent.prototype.onDimensions = function (dimensions) {
        this.origDimensions.emit(dimensions);
    };
    MediaGridItemComponent.prototype.onImgLoad = function () {
        this.onDimensions({
            width: this.img.nativeElement.offsetWidth,
            height: this.img.nativeElement.offsetHeight
        });
    };
    MediaGridItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('img'),
        __metadata("design:type", core_1.ElementRef)
    ], MediaGridItemComponent.prototype, "img", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MediaGridItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MediaGridItemComponent.prototype, "calcedDimensions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MediaGridItemComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MediaGridItemComponent.prototype, "origDimensions", void 0);
    MediaGridItemComponent = __decorate([
        core_1.Component({
            selector: "media-grid-item",
            template: __webpack_require__("../../../../../src/ts/modules/media/_templates/media-grid-item.html")
        }),
        __metadata("design:paramtypes", [])
    ], MediaGridItemComponent);
    return MediaGridItemComponent;
}());
exports.MediaGridItemComponent = MediaGridItemComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/media/MediaGridItemDescComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MediaGridItemDescComponent = (function () {
    function MediaGridItemDescComponent() {
    }
    MediaGridItemDescComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MediaGridItemDescComponent.prototype, "params", void 0);
    MediaGridItemDescComponent = __decorate([
        core_1.Component({
            selector: 'media-grid-item-desc',
            template: __webpack_require__("../../../../../src/ts/modules/media/_templates/media-grid-item-desc.html")
        }),
        __metadata("design:paramtypes", [])
    ], MediaGridItemDescComponent);
    return MediaGridItemDescComponent;
}());
exports.MediaGridItemDescComponent = MediaGridItemDescComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/media/MediaUploadModal.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var MediaUploadModal = (function () {
    function MediaUploadModal() {
        this.error = null;
        this.data = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.showSub = rxjs_1.Subscription.EMPTY;
        this.dataModel = {
            name: ""
        };
    }
    MediaUploadModal.prototype.openModal = function () {
        $("#upload-modal").modal('show');
    };
    MediaUploadModal.prototype.closeModal = function () {
        $("#upload-modal").modal('hide');
    };
    MediaUploadModal.prototype.ngOnInit = function () {
        var _this = this;
        this.showSub = this.show.subscribe(function (v) {
            if (v) {
                _this.openModal();
            }
            else {
                _this.closeModal();
            }
        });
    };
    MediaUploadModal.prototype.onClose = function () {
        this.close.emit();
    };
    MediaUploadModal.prototype.handleFileInput = function (event) {
        event.preventDefault();
        for (var _i = 0, _a = Array.from(event.target.files); _i < _a.length; _i++) {
            var file = _a[_i];
            this.data.emit(file);
        }
    };
    MediaUploadModal.prototype.onSubmit = function () {
        console.log(this.dataModel);
        this.data.emit();
    };
    MediaUploadModal.prototype.ngOnDestroy = function () {
        this.showSub.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", core_1.ElementRef)
    ], MediaUploadModal.prototype, "modal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], MediaUploadModal.prototype, "show", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MediaUploadModal.prototype, "error", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MediaUploadModal.prototype, "data", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MediaUploadModal.prototype, "close", void 0);
    MediaUploadModal = __decorate([
        core_1.Component({
            selector: 'media-upload-modal',
            template: __webpack_require__("../../../../../src/ts/modules/media/_templates/media-upload-modal.html")
        })
    ], MediaUploadModal);
    return MediaUploadModal;
}());
exports.MediaUploadModal = MediaUploadModal;


/***/ }),

/***/ "../../../../../src/ts/modules/media/_templates/media-grid-item-desc.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex_container_column media-item-description\">\n    <p><span>Resolution:</span> {{params.resolution}}</p>\n    <p><span>Aspect ratio:</span> {{params.aspectRatio}}</p>\n    <p><span>Extension:</span> {{params.extension.toUpperCase()}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/media/_templates/media-grid-item.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media-grid-item-container\">\n    <img #img *ngIf=\"item.type === 'image'\" class=\"media-grid-item\" [style.width]=\"calcedDimensions.width\" [style.height]=\"calcedDimensions.height\" [src]=\"item.url\" alt=\"\" (load)=\"onImgLoad()\">\n    <video #img class=\"media-grid-item\" [style.width]=\"calcedDimensions.width\" [style.height]=\"calcedDimensions.height\" *ngIf=\"item.type === 'video'\" [src]=\"item.url\" controls (loadstart)=\"onImgLoad()\"></video>\n    <img #img *ngIf=\"item.type === 'empty'\" style=\"max-width: 100%\" [style.width]=\"calcedDimensions.width\" [style.height]=\"calcedDimensions.height\" [src]=\"item.url\" alt=\"\" (load)=\"onImgLoad()\">\n    <div *ngIf=\"item.type !== 'empty'\" class=\"media-grid-item-delete\">\n            <button [ngClass]=\"['grid-delete-btn', deleteButtonState.class]\" (click)=\"deleteBtnClick()\" (mouseout)=\"deleteBtnMouseout()\">\n                <div class='icon'>\n                    <i class='fa fa-trash-o'></i>\n                    <i class='fa fa-question'></i>\n                    <i class='fa fa-check'></i>\n                </div>\n                <div class='text'>\n                    <span>{{deleteButtonState.text}}</span>\n                </div>\n            </button>\n    </div>        \n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/media/_templates/media-grid.html":
/***/ (function(module, exports) {

module.exports = "<div #container class=\"media-grid\">\n    <ng-container [ngSwitch]=\"(view$ | async)\">\n        <ng-container *ngSwitchCase=\"'columns'\">\n            <div class=\"media-grid-column flex_container_column flex-1\">\n                <media-grid-item \n                    *ngFor=\"let item of viewItems.slice().reverse() | slice:0:viewItems.length / 2; trackBy: trackByRef \"\n                    [item]=\"item\"\n                    [calcedDimensions]=\"{width: item.width, height: 'auto'}\"\n                    (delete)=\"onDelete($event)\"\n                    (origDimensions)=\"onDimensions($event, item)\" \n                    [style.visibility]=\"item.visibility\">\n                </media-grid-item>\n            </div>\n            <div class=\"media-grid-column flex_container_column flex-1\">\n                <media-grid-item \n                    *ngFor=\"let item of viewItems.slice().reverse() | slice:viewItems.length / 2; trackBy: trackByRef\"\n                    [item]=\"item\"\n                    [calcedDimensions]=\"{width: item.width, height: 'auto'}\"\n                    (delete)=\"onDelete($event)\"\n                    (origDimensions)=\"onDimensions($event, item)\" \n                    [style.visibility]=\"item.visibility\">\n                </media-grid-item>\n            </div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'side-by-side'\">\n            <media-grid-item \n                *ngFor=\"let item of viewItems.slice().reverse(); trackBy: trackByRef\"\n                [item]=\"item\"\n                [calcedDimensions]=\"{width: item.width, height: item.height}\"\n                (delete)=\"onDelete($event)\"\n                (origDimensions)=\"onDimensions($event, item)\" \n                [style.visibility]=\"item.visibility\">\n            </media-grid-item>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'list'\">\n            <div class=\"media-grid-column flex_container_column flex-1\">\n                <div *ngFor=\"let item of viewItems.slice().reverse(); trackBy: trackByRef\" class=\"flex_container_row\">\n                    <media-grid-item \n                        class=\"flex-1\"\n                        [item]=\"item\"\n                        [calcedDimensions]=\"{width: item.width, height: 'auto'}\"\n                        (delete)=\"onDelete($event)\"\n                        (origDimensions)=\"onDimensions($event, item)\" \n                        [style.visibility]=\"item.visibility\">\n                    </media-grid-item>\n                    <div class=\"flex-1\">\n                        <media-grid-item-desc *ngIf=\"item.type !== 'empty'\" [params]=\"item.params\"></media-grid-item-desc>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n    </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/media/_templates/media-upload-modal.html":
/***/ (function(module, exports) {

module.exports = "<div #modal id=\"upload-modal\" class=\"modal fade\" style=\"z-index: 10000\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\" (clickOutside)=\"onClose()\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">New media</h5>\n                <button type=\"button\" class=\"close\" (click)=\"onClose()\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div *ngIf=\"error\" class=\"media__upload-error\">\n                    <p>{{error}}</p>\n                </div>\n                <input type=\"file\" (change)=\"handleFileInput($event)\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/media/_templates/media.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container flex_container_column\">\n    <div class=\"donors__CSV-upload flex_container_row\">\n        <div class=\"media__view-type-selector flex_container_row flex-1\">\n            <button [class.active]=\"(viewType | async) === 'side-by-side'\" (click)=\"changeViewType('side-by-side')\">side-by-side</button>\n            <button [class.active]=\"(viewType | async) === 'columns'\" (click)=\"changeViewType('columns')\">columns</button>\n            <button [class.active]=\"(viewType | async) === 'list'\" (click)=\"changeViewType('list')\">list</button>\n            <div class=\"help-tip\">\n                <p>\"Side-by-side\" shows images in their chronological order. \"Columns\" shows content nicely but not preserving order</p>\n            </div>\n        </div>\n        <div *ngIf=\"isGridLoading\" class=\"media__loader-container flex_container_row\">\n            <div class=\"loader\"></div>\n        </div>\n        <div class=\"donors__CSV-button flex_container_row\" (click)=\"openUploadDialog()\">\n            <div class=\"icon\"></div>\n            <p>Upload a file</p>\n        </div>\n        <input style=\"display: none\" type=\"file\" (change)=\"handleFileInput($event.target.files)\" #file>\n    </div>\n    <div style=\"overflow-x:hidden\" [style.width]=\"scrollBarProps.style\" [style.margin-left]=\"scrollBarProps.width + 'px'\" class=\"donors__list flex_container_column\">\n            <media-grid [events]=\"mediaEvents$\" [view]=\"viewType\" (loading)=\"onGridLoading($event)\" (delete)=\"onItemDelete($event)\"></media-grid>\n    </div>\n</div>\n\n<div style=\"max-height: 0; max-width: 0\">\n    <ng-container #videoProcess ></ng-container>\n</div>\n\n<media-upload-modal [show]=\"showObservable\" [error]=\"uploadError\" (data)=\"onUploadData($event)\" (close)=\"onDialogClose()\"></media-upload-modal>"

/***/ }),

/***/ "../../../../../src/ts/modules/media/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
function arrayObjectIndexOf(arr, search, prop) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === search) {
            return i;
        }
    }
    return -1;
}
exports.arrayObjectIndexOf = arrayObjectIndexOf;
function isNullable(val) {
    return val === undefined || val === null;
}
exports.isNullable = isNullable;
function countNumOfItems(arr) {
    return arr.reduce(function (acc, cur) {
        if (Array.isArray(cur)) {
            acc += countNumOfItems(cur);
        }
        else {
            acc += 1;
        }
        return acc;
    }, 0);
}
exports.countNumOfItems = countNumOfItems;
function isRowTheSame(r, cmp) {
    return r[0] === cmp[0] && r[1] === cmp[1];
}
exports.isRowTheSame = isRowTheSame;
function getAspectRatio(width, height) {
    return width / height;
}
exports.getAspectRatio = getAspectRatio;
function pixelsToNumber(pixels) {
    return parseInt(pixels.slice(0, -2), 10);
}
exports.pixelsToNumber = pixelsToNumber;
function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
exports.makeid = makeid;
function loadImageWidthHeight(file) {
    return rxjs_1.Observable.create(function (observer) {
        var img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onload = function () {
            observer.next({
                width: img.naturalWidth,
                height: img.naturalHeight
            });
            window.URL.revokeObjectURL(img.src);
            observer.complete();
        };
        img.onerror = function (err) {
            observer.error(err);
        };
    });
}
exports.loadImageWidthHeight = loadImageWidthHeight;
function loadVideo(file) {
    return rxjs_1.Observable.create(function (observer) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            observer.next(reader.result);
            observer.complete();
        });
        reader.addEventListener("error", function (err) {
            observer.error(err);
        });
        reader.readAsDataURL(file);
    });
}
exports.loadVideo = loadVideo;
var gcd = function (a, b) {
    return b
        ? gcd(b, a % b)
        : a;
};
exports.aspectRatio = function (width, height) {
    var divisor = gcd(width, height);
    return [width / divisor, height / divisor];
};


/***/ }),

/***/ "../../../../../src/ts/modules/playlist/PlaylistComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var PlaylistComponent = (function () {
    function PlaylistComponent(userManager, router) {
        this.userManager = userManager;
        this.router = router;
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        console.log("from playlist component");
    };
    PlaylistComponent.prototype.ngOnDestroy = function () {
    };
    PlaylistComponent.prototype.seePlaylistDetails = function (id) {
        this.router.navigate(["/playlist/" + id]);
    };
    PlaylistComponent.prototype.deletePlaylist = function (id) {
    };
    PlaylistComponent.prototype.editPlaylist = function (id) {
        this.userManager.togglePlaylistEditModeByID(id);
    };
    PlaylistComponent = __decorate([
        core_1.Component({
            selector: 'playlist',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/playlist/_templates/playlist.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router])
    ], PlaylistComponent);
    return PlaylistComponent;
}());
exports.PlaylistComponent = PlaylistComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/playlist/PlaylistDetailsComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var Helper_1 = __webpack_require__("../../../../../src/ts/services/Helper.ts");
var PlaylistDetailsComponent = (function () {
    function PlaylistDetailsComponent(userManager, router, route, helper) {
        this.userManager = userManager;
        this.router = router;
        this.route = route;
        this.helper = helper;
        this._idToDelete = "";
    }
    PlaylistDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userManager.resetPlaylistDetails();
        var id = "";
        this.route.params.forEach(function (params) {
            id = params['id'];
        });
        if (id !== "") {
            this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/playlist/key/" + id, {}, "GET")
                .then(function (result) {
                _this.userManager.parsePlaylistDetails(result);
                _this.userManager.sendRequest(_this.userManager.getAPIPath() + "/api/index.php/cms/layouts/placement/" + result.placement, {}, "GET")
                    .then(function (result2) {
                    _this.userManager.parseAvailableLayouts(result2);
                    _this.layouts = [];
                    for (var key in result2) {
                        _this.layouts.push(key);
                    }
                });
            })
                .catch(function (error) {
                console.warn(error);
            });
        }
        this.scrollBarProps = this.helper.getWidthWithScrollbar("90%");
    };
    PlaylistDetailsComponent.prototype.ngOnDestroy = function () {
    };
    PlaylistDetailsComponent.prototype.backToPlaylistSelection = function () {
        this.router.navigate(["/playlist"]);
    };
    PlaylistDetailsComponent.prototype.createBlankPlaylistSequence = function () {
        this.userManager.createEmptyPlaylistEntryModel();
    };
    PlaylistDetailsComponent.prototype.editPlaylistSequence = function (id) {
        this.userManager.createEmptyPlaylistEntryModel();
        this.userManager.togglePlaylistSequenceEditModeByID(id);
    };
    PlaylistDetailsComponent.prototype.savePlaylistSequence = function () {
        this.userManager.addNewPlaylistSequence();
    };
    PlaylistDetailsComponent.prototype.setDeleteData = function (id) {
        this._idToDelete = id;
    };
    PlaylistDetailsComponent.prototype.resetDeleteData = function () {
        this._idToDelete = "";
    };
    PlaylistDetailsComponent.prototype.deletePlaylistSequence = function () {
        if (this._idToDelete !== "") {
            this.userManager.deletePlaylistSequenceByID(this._idToDelete);
            this._idToDelete = "";
        }
    };
    PlaylistDetailsComponent.prototype.setDeleteLayout = function (id) {
        this._idToDelete = id;
    };
    PlaylistDetailsComponent.prototype.resetDeleteLayoutData = function () {
        this._idToDelete = "";
    };
    PlaylistDetailsComponent.prototype.deletePlaylistLayout = function () {
        if (this._idToDelete !== "") {
            this.userManager.deletePlaylistLayoutByID(this._idToDelete);
            this._idToDelete = "";
        }
    };
    PlaylistDetailsComponent.prototype.createPlaylistSequenceLayout = function (currentSequenceID) {
        this.userManager.setCurrentSequenceID(currentSequenceID);
        this.userManager.setCurrentLayoutAttributes();
    };
    PlaylistDetailsComponent.prototype.selectDonorListKey = function () {
    };
    PlaylistDetailsComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
        var formData = new FormData();
        formData.append('files', this.fileToUpload, this.fileToUpload.name);
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/uploadImage", formData, "POST", false)
            .then(function (result) {
            _this.fileToUpload = undefined;
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    __decorate([
        core_1.ViewChild('closeModalButton'),
        __metadata("design:type", core_1.ElementRef)
    ], PlaylistDetailsComponent.prototype, "closeModalButton", void 0);
    PlaylistDetailsComponent = __decorate([
        core_1.Component({
            selector: 'playlist',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/playlist/_templates/playlist_details.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router, router_1.ActivatedRoute, Helper_1.Helper])
    ], PlaylistDetailsComponent);
    return PlaylistDetailsComponent;
}());
exports.PlaylistDetailsComponent = PlaylistDetailsComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/playlist/_templates/playlist.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container flex_container_column\">\n    <div style=\"margin-top: 40px\" class=\"donors__list flex_container_column\">\n        <div class=\"donors__list-item flex_container_column\" *ngFor=\"let entry of userManager.getPlaylists()\">\n            <div class=\"donors__list-item-header flex_container_row\">\n                <p class=\"donors__list-item-title\">{{entry.name}}</p>\n                <button (click)=\"seePlaylistDetails(entry.playlist_key)\"></button>\n            </div>\n            <div class=\"donors__list-item-info flex_container_column\">\n                <p>Placement: {{entry.placement}}</p>\n                <p>Author: {{entry.author}}</p>\n                <p>Last edited: {{entry.date}}</p>\n                <p>Start date: {{entry.startDate}}</p>\n                <p>End date: {{entry.endDate}}</p>\n                <p>Start time: {{entry.startTime}}</p>\n                <p>End time: {{entry.endTime}}</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/playlist/_templates/playlist_details.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container flex_container_column\">\n    <div class=\"donors__edit__list-title flex_container_row no-shrink\">\n        <div class=\"donors__edit__title-box\">\n            {{userManager._playlistName}}\n        </div>\n    </div>\n\n    <div class=\"part-screen__with-refresh flex_container_row no-shrink\">\n            <div class=\"part-screen__refresh-button-container flex_container_row\">\n                <!-- To remove button from layout just comment out next 4 lines -->\n                <div class=\"part-screen__refresh-button flex_container_row\">\n                        <div class=\"icon\"></div>\n                        <p>Refresh Playlist</p>\n                </div>\n            </div>\n            <div class=\"donors__edit__add-donor only-button flex_container_row no-shrink\">\n                    <button (click)=\"createBlankPlaylistSequence()\" data-toggle=\"modal\" data-target=\"#playlistEntryWindow\" >Add New Entry</button>\n            </div>\n    </div>\n\n    <ng-container *ngIf=\"userManager.getPlaylists().length > 0\">\n        <div [style.width]=\"scrollBarProps.style\" [style.margin-left]=\"scrollBarProps.width + 'px'\" class=\"donors__list flex_container_column\">\n            <div class=\"donors__list-item flex_container_column\" *ngFor=\"let entry of userManager.getCurrentPlaylistDetails(); let i = index\">\n                <div class=\"donors__list-item-header playlist__list-item-header flex_container_row\">\n                    <p class=\"playlist__item-header-label\">Layout</p>\n                    <p class=\"playlist__item-header-label\">Actions</p>\n                </div>\n                <div class=\"playlist__item-body flex_container_row\">\n                    <div class=\"playlist__body-layout-type flex_container_column flex-3\">\n                        <p>Layout type</p>\n                        <div class=\"playlist__image-box flex-1\">\n                            <img [src]=\"'./images/' + entry.layout + '.png'\" />\n                        </div>\n                    </div>\n                    <div class=\"playlist__body-description flex_container_column flex-5\">\n                        <div class=\"flex_container_row\">\n                            <p class=\"playlist__text\">Duration</p>\n                            <p class=\"playlist__value\">{{entry.duration}}</p>\n                        </div>\n                        <div class=\"flex_container_row\">\n                            <p class=\"playlist__text\">Sole</p>\n                            <label class=\"playlist__checkbox\">\n                                <input type=\"checkbox\" name=\"test\" [checked]=\"entry.solo\" disabled />\n                                <span></span>\n                            </label>\n                        </div>\n                        <div class=\"flex_container_row\">\n                            <p class=\"playlist__text\">Layout title</p>\n                            <p class=\"playlist__value\">{{entry.layoutTitle}}</p>\n                        </div>\n                        <div class=\"flex_container_row\">\n                            <p class=\"playlist__text\">BG Movie</p>\n                            <p class=\"playlist__value\">{{entry.bgMovie}}</p>\n                        </div>\n                        <div class=\"flex_container_row\">\n                            <p class=\"playlist__text\">Transition</p>\n                            <p class=\"playlist__value\">{{entry.transition.Type}}</p>\n                        </div>\n                        <div class=\"flex_container_row\">\n                            <p class=\"playlist__text\">Transition Time(secs)</p>\n                            <p class=\"playlist__value\">{{entry.transition.duration}}</p>\n                        </div>\n                    </div>\n                    <div class=\"playlist__body-buttons flex_container_row\">\n                        <div class=\"playlist__action-buttons flex_container_column flex-1\">\n                            <img src=\"./images/edit.png\" alt=\"\" (click)=\"createPlaylistSequenceLayout(entry.id)\" data-toggle=\"modal\"  data-target=\"#layoutDetailsModal\">\n                            <img src=\"./images/delete.png\" (click)=\"setDeleteLayout(entry.id)\" data-toggle=\"modal\"  data-target=\"#confirmDeleteLayoutModal\">\n                        </div>\n                        <div class=\"playlist__action-buttons flex_container_column flex-1\">\n                            <img src=\"./images/edit.png\" (click)=\"editPlaylistSequence(entry.id)\"  data-toggle=\"modal\" data-target=\"#playlistEntryWindow\">\n                            <img src=\"./images/delete.png\"  (click)=\"setDeleteData(entry.id)\" data-toggle=\"modal\"  data-target=\"#confirmDeleteModal\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n\n<!-- New Paylist Modal -->\n<div class=\"modal fade\" id=\"playlistEntryWindow\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"playlistEntryWindow\" aria-hidden=\"true\" *ngIf=\"userManager.getPlaylistBlankEntry()\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <div>\n                        Create New Playlist Entry\n                    </div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body create_playlist_sequence\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">Duration</div>\n                        <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"userManager.getPlaylistBlankEntry().duration\" /></div>\n                    </div>\n                    \n                    <div class=\"row\">\n                        <div class=\"col-md-4\">Layout</div>\n                        <div class=\"col-md-8\">\n                            <ng-container *ngIf=\"userManager.getPlaylistBlankEntry().layout == ''\">\n                                <select [(ngModel)]=\"userManager.getPlaylistBlankEntry().layout\">\n                                    <option value=\"\"></option>\n                                    <option *ngFor=\"let layout of layouts\" [value]=\"layout\">{{layout}}</option>\n                                </select>\n                            </ng-container>\n                            <ng-container *ngIf=\"userManager.getPlaylistBlankEntry().layout != ''\">\n                                {{userManager.getPlaylistBlankEntry().layout}}\n                            </ng-container>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">Title</div>\n                        <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"userManager.getPlaylistBlankEntry().layoutTitle\" /></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">BG Movie</div>\n                        <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"userManager.getPlaylistBlankEntry().bgMovie\" /></div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"userManager.getCurrentPlaylistPlacement() == 'left'\">\n                        <div class=\"col-md-4\">Solo</div>\n                        <div class=\"col-md-8\"><input type=\"checkbox\" [(ngModel)]=\"userManager.getPlaylistBlankEntry().solo\" /></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">Transition Type</div>\n                        <div class=\"col-md-8\">\n                            <select [(ngModel)]=\"userManager.getPlaylistBlankEntry().transition.Type\">\n                                <option value=\"none\">None</option>\n                                <option value=\"fade\">Fade</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">Transition Time</div>\n                        <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"userManager.getPlaylistBlankEntry().transition.duration\" /></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">Transition Asset</div>\n                        <div class=\"col-md-8\"><input type=\"text\" [(ngModel)]=\"userManager.getPlaylistBlankEntry().transition.Asset\" /></div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"offset-3 col-6\">\n                            <div class=\"playlist_save_entry\" (click)=\"savePlaylistSequence()\" data-dismiss=\"modal\">Save</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Playlist layout -->\n    <div class=\"modal fade\" id=\"layoutDetailsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"layoutDetailsModal\" aria-hidden=\"true\" *ngIf=\"userManager.getCurrentSequenceID() !== ''\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content sequence_layout_panel\">\n                    <div class=\"modal-body\">\n                        <div style=\"margin:10px;\">\n                            <ng-container *ngFor=\"let elementEntry of userManager.currentLayouts; let i = index;\" >\n                                <div class=\"row\" style=\"background-color: #CCCCCC\">\n                                    <div class=\"col-12\" style=\"font-weight:600; padding:0px 5px; font-size:14px;\">{{elementEntry.element}}</div>\n                                </div>\n                                <div class=\"row\" *ngFor=\"let attribute of elementEntry.attributes;\" style=\"background-color : #EFEFEF\">\n                                    <div class=\"col-2\" style=\"padding-top:8px;\">{{attribute}}</div>\n                                    <ng-container *ngIf=\"attribute == 'Donorlevel'\">\n                                        <select [(ngModel)]=\"userManager.getcurrentSelectedLayout()[i][attribute]\" (change)=\"selectDonorListKey()\">\n                                            <option value=\"\"></option>\n                                            <option [value]=\"group.key\" *ngFor=\"let group of userManager.getDonorList()\">\n                                                {{group.title}}\n                                            </option>\n                                        </select>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"attribute != 'Donorlevel'\">\n                                        <div class=\"col-10\">\n                                            <input type=\"text\" [(ngModel)]=\"userManager.getcurrentSelectedLayout()[i][attribute]\" />\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-12\" style=\"height:2px;\"></div>\n                                </div>\n                            </ng-container>\n\n                            <div class=\"row\">\n                                <div class=\"offset-3 col-6\">\n                                    <div class=\"playlist_save_entry\" (click)=\"userManager.savePlaylistLayout()\" data-dismiss=\"modal\">Save</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!-- Confirm Delete Sequence Modal -->\n    <div class=\"modal fade\" id=\"confirmDeleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"playlistEntryWindow\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-body\">\n                        <div class=\"row\">\n                            <div class=\"offset-2 col-8\"> Are you sure you want to delete this sequence?</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"offset-3 col-6\">\n                                <div class=\"playlist_save_entry\" (click)=\"deletePlaylistSequence()\" data-dismiss=\"modal\">Delete</div>\n                            </div>\n                            <div class=\"offset-3 col-6\">\n                                <div class=\"playlist_save_entry\" (click)=\"resetDeleteData()\" data-dismiss=\"modal\">Cancel</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <!-- Confirm Delete Layout Modal -->\n    <div class=\"modal fade\" id=\"confirmDeleteLayoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"confirmDeleteLayoutModal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-body\">\n                        <div class=\"row\">\n                            <div class=\"offset-2 col-8\"> Are you sure you want to delete this layout?</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"offset-3 col-6\">\n                                <div class=\"playlist_save_entry\" (click)=\"deletePlaylistLayout()\" data-dismiss=\"modal\">Delete</div>\n                            </div>\n                            <div class=\"offset-3 col-6\">\n                                <div class=\"playlist_save_entry\" (click)=\"resetDeleteLayoutData()\" data-dismiss=\"modal\">Cancel</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/ts/modules/takeover/TakeOverComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TakeOverComponent = (function () {
    function TakeOverComponent() {
    }
    TakeOverComponent = __decorate([
        core_1.Component({
            selector: "takeover",
            template: __webpack_require__("../../../../../src/ts/modules/takeover/_templates/takeover.html")
        }),
        __metadata("design:paramtypes", [])
    ], TakeOverComponent);
    return TakeOverComponent;
}());
exports.TakeOverComponent = TakeOverComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/takeover/_templates/takeover.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container flex_container_column relative\">\n    <div class=\"takeover__overflow\">\n        <div class=\"flex_container_row takeover__container flex-3 no-shrink\">\n                <div class=\"flex_container_column flex-1 align-items-center\">\n                    <p class=\"takeover__label\">Left canvas</p>\n                    <img style=\"margin-left: -9%\" class=\"takeover__image\" src=\"./images/takeover-left.png\" alt=\"\">\n                    <div class=\"takeover__text\">\n                        <span><b>Note: </b></span>\n                        <p>For best results, please upload an image that is the same aspect ratio as the above <b>5760 x 4320</b> pixel canvas. This <b>4:3 aspect ratio,</b> which is very common, however please also consider the missing display at the bottom right of the canvas when considering an image for use.</p>\n                    </div>\n                </div>\n                <div class=\"flex_container_column flex-1 align-items-center\">\n                    <p class=\"takeover__label\">Right canvas</p>\n                    <img class=\"takeover__image\" src=\"./images/takeover-right.png\" alt=\"\">\n                    <div class=\"takeover__text\">\n                        <span><b>Note: </b></span>\n                        <p>For best results, please upload an image that is the same aspect ratio as the above <b>3840 x 3240</b> pixel canvas. This <b>32:27 aspect ratio,</b> which is not common, but should be easy to format by a graphic designer or web designer based on the above pixel dimensions.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"takeover__button-container flex_container_column flex-2 align-items-center no-shrink\">\n                <div class=\"takeover__button-text-container flex_container_column\">\n                    <p><b>Please click the Send with WeTransfer button below to attached and send your desired assets to us for review and we will respond to confirm the timing of your request.</b></p>\n                    <p><b>Please also add the required date and time to the Message field on the WeTransfer page when you are ready to upload your assets. A member of the Envision support team will be in contact to confirm details.</b></p>\n                    <img class=\"takeover__screenshot\" src=\"./images/takeover-screenshot.png\" alt=\"\">\n                    <p><b>If you are submitting multiple assets per side (i.e 3 left and 3 right assets please name them accordingly as left_1.tif, left_2.tif, left_3.tif, right_1.tif, right_2.tif, right_3.tif etc...)</b></p>\n                    <p><b>For best results, please use only the .TIF, .PNG image formats as they maintain the Alpha channel for transparency, i.e using the right canvas for the text with the background shown.</b></p>        \n                </div>\n                <div style=\"height: 70px\">\n\n                </div>\n            </div>\n    </div>\n    <div class=\"takeover__submit flex_container_row\">\n        <iframe src=\"https://we.tl/send/en/envisionsales\" width=\"275\" height=\"50\" frameborder=\"0\"></iframe>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/users/RegisterUserComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var RegisterUserComponent = (function () {
    function RegisterUserComponent(userManager, router) {
        this.userManager = userManager;
        this.router = router;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.userModel = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPasswrod: "",
            admin: 0
        };
        this.errorMessage = "";
    };
    RegisterUserComponent.prototype.ngOnDestroy = function () {
    };
    RegisterUserComponent.prototype.gotoPage = function (location) {
        this.router.navigate(["/" + location]);
    };
    RegisterUserComponent.prototype.registerUser = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.userModel.first_name == "" ||
            this.userModel.last_name == "" ||
            this.userModel.email == "" ||
            this.userModel.password == "" ||
            this.userModel.confirmPassword == "") {
            this.errorMessage = "Please fill all the form fields";
        }
        else {
            if (this.userModel.password !== this.userModel.confirmPassword) {
                this.errorMessage = "Your password and confirmation don't match";
            }
            else {
                this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/register", this.userModel, "POST")
                    .then(function (result) {
                    _this.router.navigate(["/users"]);
                })
                    .catch(function (error) {
                    if (error.error) {
                        _this.errorMessage = error.error;
                    }
                    else {
                        _this.errorMessage = "There was an error in our system, please contact the system admin";
                    }
                });
            }
        }
    };
    RegisterUserComponent = __decorate([
        core_1.Component({
            selector: 'register-user',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/users/_templates/register_user.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());
exports.RegisterUserComponent = RegisterUserComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/users/UserListComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserManager_1 = __webpack_require__("../../../../../src/ts/services/UserManager.ts");
var UserListComponent = (function () {
    function UserListComponent(userManager, router) {
        this.userManager = userManager;
        this.router = router;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/users", {}, "GET")
            .then(function (result) {
            _this.userManager.parseUserList(result);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userManager.sendRequest(this.userManager.getAPIPath() + "/api/index.php/cms/user/" + id, {}, "DELETE")
            .then(function (result) {
            _this.userManager.parseUserList(result);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserListComponent.prototype.registerUser = function () {
        this.router.navigate(["/users/register"]);
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'users',
            providers: [],
            template: __webpack_require__("../../../../../src/ts/modules/users/_templates/user_list.html")
        }),
        __metadata("design:paramtypes", [UserManager_1.UserManager, router_1.Router])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/users/_templates/register_user.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container users__registration-container flex_container_column\">\n    <input type=\"text\" placeholder=\"First Name\" class=\"textInput\" [(ngModel)]=\"userModel.first_name\" >\n    <input type=\"text\" placeholder=\"Last Name\" class=\"textInput\" [(ngModel)]=\"userModel.last_name\">\n    <input type=\"text\" placeholder=\"Email Address\" class=\"textInput\" [(ngModel)]=\"userModel.email\">\n    <input type=\"password\" placeholder=\"Password\" class=\"textInput\" [(ngModel)]=\"userModel.password\">\n    <input type=\"password\" placeholder=\"Confirm Password\" class=\"textInput\" [(ngModel)]=\"userModel.confirmPassword\">\n    <input type=\"checkbox\" id=\"admin\" name=\"admin\" value=\"admin\" [(ngModel)]=\"userModel.admin\">\n    <label for=\"admin\">Administrator</label>\n    <div class=\"playlist_add_entry\" (click)=\"registerUser()\">Save</div>\n</div>"

/***/ }),

/***/ "../../../../../src/ts/modules/users/_templates/user_list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-screen__container flex_container_column\">\n    <div class=\"donors__edit__add-donor only-button flex_container_row no-shrink\">\n        <button (click)=\"registerUser()\">Add New User</button>\n    </div>\n    <ng-container *ngIf=\"userManager.getUserList().length > 0\">\n            <div class=\"donors__edit__table-header flex_container_row no-shrink\">\n                <div style=\"padding-left: 15px;\" class=\"donors__edit__table-item flex-2\">\n                    First name\n                </div>\n                <div class=\"donors__edit__table-item flex-2\">\n                    Last name\n                </div>\n                <div class=\"donors__edit__table-item flex-4\">\n                    Email\n                </div>\n                <div class=\"donors__edit__table-item flex-1\">\n                    Delete\n                </div>\n            </div>\n            <div [style.width]=\"'calc(90% + ' + scrollBarWidth +')'\" class=\"donors__edit__table-body flex_container_column\">\n                <div class=\"donors__edit__table-row flex_container_row\" *ngFor=\"let user of userManager.getUserList(); let i = index\" [style.background-color]=\"i%2 == 0 ? '#EFEFEF' : '#FFFFFF'\">\n                    <div style=\"padding-left: 15px;\" class=\"donors__edit__table-item flex-2\">\n                        {{user.first_name}}\n                    </div>\n                    <div class=\"donors__edit__table-item flex-2\">\n                        {{user.last_name}}\n                    </div>\n                    <div class=\"donors__edit__table-item flex-4\">\n                        {{user.email}}\n                    </div>\n                    <div class=\"donors__edit__table-item flex-1\">\n                        <img class=\"img-button\" style=\"margin-left: 8px;\" src=\"./images/delete.png\" alt=\"\" (click)=\"deleteUser(user.id)\" >\n                    </div>\n                </div>\n            </div>\n    </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/ts/modules/util/DeleteModalComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DeleteModalComponent = (function () {
    function DeleteModalComponent() {
        this.onDelete = new core_1.EventEmitter();
    }
    DeleteModalComponent.prototype.ngAfterViewInit = function () {
        $('#confirmDeleteModal').modal('show');
    };
    DeleteModalComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DeleteModalComponent.prototype, "text", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DeleteModalComponent.prototype, "onDelete", void 0);
    DeleteModalComponent = __decorate([
        core_1.Component({
            selector: 'delete-modal',
            template: "<div class=\"modal fade\" id=\"confirmDeleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"confirmDeleteModal\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-body\">\n                                <div class=\"row\">\n                                    <div class=\"offset-2 col-8\">{{text}}</div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"offset-3 col-6\">\n                                        <div class=\"playlist_save_entry\" (click)=\"onDelete.emit()\" data-dismiss=\"modal\">Delete</div>\n                                    </div>\n                                    <div class=\"offset-3 col-6\">\n                                        <div class=\"playlist_save_entry\" data-dismiss=\"modal\">Cancel</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>"
        })
    ], DeleteModalComponent);
    return DeleteModalComponent;
}());
exports.DeleteModalComponent = DeleteModalComponent;


/***/ }),

/***/ "../../../../../src/ts/modules/util/MimeUtils.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mimeToExtension(str) {
    var index = str.indexOf('/');
    if (index === -1) {
        throw new Error('Invalid type');
    }
    return str.slice(index + 1);
}
exports.mimeToExtension = mimeToExtension;
function mimeToType(str) {
    var index = str.indexOf('/');
    if (index === -1) {
        throw new Error('Invalid type');
    }
    return str.slice(0, index);
}
exports.mimeToType = mimeToType;


/***/ }),

/***/ "../../../../../src/ts/services/ConfigService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.loadAppConfig = function () {
        var _this = this;
        return Promise.all([
            this.http.get('./data/appConfig.json').toPromise(),
            this.http.get('./data/config.json').toPromise()
        ]).then(function (_a) {
            var conf = _a[0], _b = _a[1], apiPath = _b.apiPath, mediaValidation = _b.mediaValidation;
            _this.config = conf;
            _this.baseUrl = apiPath;
            _this.mediaValidation = mediaValidation;
        });
    };
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    ConfigService.prototype.getMediaValidationRules = function () {
        return this.mediaValidation;
    };
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;


/***/ }),

/***/ "../../../../../src/ts/services/Helper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var ConfigService_1 = __webpack_require__("../../../../../src/ts/services/ConfigService.ts");
var Helper = (function () {
    function Helper(sanitizer, configService) {
        this.sanitizer = sanitizer;
        this.configService = configService;
        this.defaultViewWidth = "90%";
    }
    Helper.prototype.isPlaylistLinkActive = function () {
        return true;
    };
    Helper.prototype.isTakeoverPageShown = function () {
        return this.configService.getConfig().takeover;
    };
    Helper.prototype.getWidthWithScrollbar = function (viewWidth) {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return {
            width: scrollbarWidth,
            style: this.sanitizer.bypassSecurityTrustStyle("calc(" + viewWidth + " + " + scrollbarWidth + "px)")
        };
    };
    Helper = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, ConfigService_1.ConfigService])
    ], Helper);
    return Helper;
}());
exports.Helper = Helper;


/***/ }),

/***/ "../../../../../src/ts/services/MediaManager/MediaManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UploadError = (function () {
    function UploadError(msg) {
        this.msg = msg;
    }
    return UploadError;
}());
exports.UploadError = UploadError;
var MediaManager = (function () {
    function MediaManager() {
    }
    MediaManager = __decorate([
        core_1.Injectable()
    ], MediaManager);
    return MediaManager;
}());
exports.MediaManager = MediaManager;


/***/ }),

/***/ "../../../../../src/ts/services/MediaManager/UMediaManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var MediaManager_1 = __webpack_require__("../../../../../src/ts/services/MediaManager/MediaManager.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var SessionService_1 = __webpack_require__("../../../../../src/ts/services/SessionService.ts");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var ConfigService_1 = __webpack_require__("../../../../../src/ts/services/ConfigService.ts");
var MimeUtils_1 = __webpack_require__("../../../../../src/ts/modules/util/MimeUtils.ts");
var transform = function (baseUrl) { return rxjs_1.pipe(operators_1.mergeMap(function (data) { return rxjs_1.Observable.from(data); }), operators_1.map(function (_a) {
    var type = _a.type, id = _a.id, path = _a.path, resolution = _a.resolution, aspectRatio = _a.aspectRatio;
    return ({
        type: MimeUtils_1.mimeToType(type),
        ref: id.toString(),
        url: baseUrl + "/api/media/" + path,
        params: {
            resolution: resolution,
            aspectRatio: aspectRatio,
            extension: MimeUtils_1.mimeToExtension(type)
        }
    });
})); };
var UMediaManager = (function (_super) {
    __extends(UMediaManager, _super);
    function UMediaManager(http, configService, sessionService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.sessionService = sessionService;
        return _this;
    }
    UMediaManager.prototype.uploadFile = function (_a) {
        var file = _a.file, params = _a.params;
        console.log(file, params);
        var apiPath = this.configService.getBaseUrl();
        var formData = new FormData();
        formData.append('file', file);
        formData.append('aspectRatio', params.aspectRatio);
        formData.append('resolution', params.resolution);
        return this.http.post(apiPath + "/api/index.php/cms/mediaFiles", formData, {
            headers: this.sessionService.appendSessionInfo(new http_1.HttpHeaders())
        }).pipe(transform(apiPath));
    };
    UMediaManager.prototype.getMediaFiles = function () {
        var apiPath = this.configService.getBaseUrl();
        return this.http.get(apiPath + "/api/index.php/cms/mediaFiles", {
            headers: this.sessionService.appendSessionInfo(new http_1.HttpHeaders())
        }).pipe(transform(apiPath));
    };
    UMediaManager.prototype.deleteMediaFile = function (_a) {
        var ref = _a.ref;
        var apiPath = this.configService.getBaseUrl();
        return this.http.post(apiPath + "/api/index.php/cms/deleteMediaFile", { id: ref }, {
            headers: this.sessionService.appendSessionInfo(new http_1.HttpHeaders())
        });
    };
    UMediaManager = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            ConfigService_1.ConfigService,
            SessionService_1.SessionService])
    ], UMediaManager);
    return UMediaManager;
}(MediaManager_1.MediaManager));
exports.UMediaManager = UMediaManager;


/***/ }),

/***/ "../../../../../src/ts/services/MediaValidation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ConfigService_1 = __webpack_require__("../../../../../src/ts/services/ConfigService.ts");
function parseWidthHeight(str) {
    var indexOfX = str.indexOf('x');
    if (indexOfX === -1) {
        throw new Error('No x in string');
    }
    return [parseInt(str.slice(0, indexOfX), 10), parseInt(str.slice(indexOfX + 1), 10)];
}
function prettyPrintMimeType(mimeType) {
    var capitalizedFirstLetter = mimeType.charAt(0).toUpperCase() + mimeType.substr(1);
    var words = capitalizedFirstLetter.split('/');
    words[1] = words[1].toUpperCase();
    return words.join(' ');
}
function isWildCardMime(str) {
    return RegExp('\/\*').test(str);
}
function replaceWildCardResolution(res) {
    return "0x10000";
}
var MediaValidationService = (function () {
    function MediaValidationService(configService) {
        this.configService = configService;
        this.rules = this.trimValues(this.configService.getMediaValidationRules());
    }
    MediaValidationService.prototype.trimValues = function (data) {
        var trimFn = function (el) { return el.trim(); };
        return {
            types: data.types.map(trimFn),
            aspectRatios: data.aspectRatios.map(trimFn),
            resolutionLimit: {
                min: data.resolutionLimit.min.trim(),
                max: data.resolutionLimit.max.trim()
            },
            resolutionList: data.resolutionList.map(trimFn)
        };
    };
    MediaValidationService.prototype.verifyAspectRatio = function (aspectRatio) {
        if (this.rules.types.includes('*')) {
            return null;
        }
        for (var _i = 0, _a = this.rules.aspectRatios; _i < _a.length; _i++) {
            var item = _a[_i];
            var _b = parseWidthHeight(item), x = _b[0], y = _b[1];
            if (aspectRatio[0] === x && aspectRatio[1] === y) {
                return null;
            }
        }
        return {
            msg: aspectRatio[0] + "x" + aspectRatio[1] + " is not valid aspect ratio"
        };
    };
    MediaValidationService.prototype.verifyResolution = function (_a) {
        var width = _a.width, height = _a.height;
        var resolutionError = {
            msg: width + "x" + height + " is not valid resolution"
        };
        var _b = Object.entries(this.rules.resolutionLimit).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value === '*') {
                acc[key] = replaceWildCardResolution(value);
            }
            else {
                acc[key] = value;
            }
            return acc;
        }, {}), min = _b.min, max = _b.max;
        var _c = parseWidthHeight(min), minWidth = _c[0], minHeight = _c[1];
        var _d = parseWidthHeight(max), maxWidth = _d[0], maxHeight = _d[1];
        if (width < minWidth || width > maxWidth) {
            return resolutionError;
        }
        if (height < minHeight || height > maxHeight) {
            return resolutionError;
        }
        var listValidation = this.rules.resolutionList.some(function (v) {
            if (v === '*') {
                return true;
            }
            var _a = parseWidthHeight(v), pWidth = _a[0], pHeight = _a[1];
            return pWidth === width && pHeight === height;
        });
        return listValidation ? null : resolutionError;
    };
    MediaValidationService.prototype.verifyType = function (mimeType) {
        var _this = this;
        var verifyError = {
            msg: prettyPrintMimeType(mimeType) + " is not supported type"
        };
        if (this.rules.types.includes('*')) {
            return null;
        }
        var strictCheck = function () { return _this.rules.types.includes(mimeType) ? null : verifyError; };
        var origStriped = mimeType.replace(/\/.*/, '');
        var wildCardMimes = this.rules.types.reduce(function (acc, cur) {
            if (isWildCardMime(cur)) {
                acc.push(cur);
            }
            return acc;
        }, []);
        return wildCardMimes.some(function (el) { return el === origStriped; }) ? null : strictCheck();
    };
    MediaValidationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ConfigService_1.ConfigService])
    ], MediaValidationService);
    return MediaValidationService;
}());
exports.MediaValidationService = MediaValidationService;


/***/ }),

/***/ "../../../../../src/ts/services/NotificationsManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NotificationsManager = (function () {
    function NotificationsManager() {
        this.emitter = new core_1.EventEmitter();
    }
    NotificationsManager.prototype.getEventEmitter = function () {
        return this.emitter;
    };
    NotificationsManager.prototype.sendEvent = function (data) {
        this.emitter.next(data);
    };
    NotificationsManager = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NotificationsManager);
    return NotificationsManager;
}());
exports.NotificationsManager = NotificationsManager;


/***/ }),

/***/ "../../../../../src/ts/services/SessionService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SessionError = (function (_super) {
    __extends(SessionError, _super);
    function SessionError() {
        return _super.call(this, 'Session is not set') || this;
    }
    return SessionError;
}(Error));
var SessionService = (function () {
    function SessionService() {
    }
    SessionService.prototype.appendSessionInfo = function (headers) {
        var session = localStorage.getItem('session');
        if (session && session !== "") {
            return headers.append('Session-Info', session);
        }
        throw new SessionError();
    };
    SessionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;


/***/ }),

/***/ "../../../../../src/ts/services/UserManager.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var NotificationsManager_1 = __webpack_require__("../../../../../src/ts/services/NotificationsManager.ts");
var User_1 = __webpack_require__("../../../../../src/ts/models/User.ts");
var UserManager = (function () {
    function UserManager(http, _notificationManager, _router, location) {
        var _this = this;
        this.http = http;
        this._notificationManager = _notificationManager;
        this._router = _router;
        this.location = location;
        this._playlistName = "";
        this._playlistKey = "";
        this._playlistID = "";
        this._playlistPlacement = "";
        this._apiPath = "";
        this._currentSequenceID = "";
        this._users = [];
        this._donorList = [];
        this._playLists = [];
        this._playListDetails = [];
        this.createEmptyPlaylistEntryModel();
        this.myEventListener = _notificationManager.getEventEmitter().subscribe(function (data) { return _this.onEventsReceived(data); });
    }
    UserManager.prototype.onEventsReceived = function (eventData) {
        switch (eventData.type) {
            case "sockets_connected":
                break;
        }
    };
    UserManager.prototype.createEmptyPlaylistEntryModel = function () {
        this._playlistBlankEntry = {};
        this._playlistBlankEntry.id = "";
        this._playlistBlankEntry.play_order = 0;
        this._playlistBlankEntry.layout = "";
        this._playlistBlankEntry.layoutTitle = "";
        this._playlistBlankEntry.bgMovie = "";
        this._playlistBlankEntry.solo = 0;
        this._playlistBlankEntry.duration = 0;
        this._playlistBlankEntry.layouts = [];
        this._playlistBlankEntry.transition = {};
        this._playlistBlankEntry.transition.Type = "none";
        this._playlistBlankEntry.transition.duration = 0;
        this._playlistBlankEntry.transition.Asset = "";
    };
    UserManager.prototype.setAPIPath = function (obj) {
        this._apiPath = obj.apiPath;
    };
    UserManager.prototype.getAPIPath = function () {
        return this._apiPath;
    };
    UserManager.prototype.sendRequest = function (url, data, type, specifyContentType) {
        if (specifyContentType === void 0) { specifyContentType = true; }
        var _session = localStorage.getItem('session');
        var headers;
        if (specifyContentType)
            headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        else
            headers = new http_1.Headers();
        if (_session && _session !== "") {
            headers.append('Session-Info', _session);
        }
        var options = new http_1.RequestOptions({ headers: headers });
        var request;
        if (type == "POST") {
            request = this.http.post(url, data, options);
        }
        else if (type == "PUT") {
            request = this.http.put(url, data, options);
        }
        else if (type == "GET") {
            request = this.http.get(url, options);
        }
        else if (type == "DELETE") {
            request = this.http.delete(url, options);
        }
        return request.toPromise().then(this.extractData).catch(this.handleErrorPromise);
    };
    UserManager.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserManager.prototype.handleErrorPromise = function (error) {
        console.log(error);
        var errorBody = error.json();
        return Promise.reject(errorBody || error);
    };
    UserManager.prototype.parseUser = function (data) {
        this._user = new User_1.User();
        this._user.id = data.id;
        this._user.first_name = data.first_name;
        this._user.last_name = data.last_name;
        this._user.email = data.email;
        this._user.admin = data.admin;
    };
    UserManager.prototype.getUser = function () {
        return this._user;
    };
    UserManager.prototype.deleteUser = function () {
        this._user = undefined;
    };
    UserManager.prototype.parseUserList = function (data) {
        this._users = [];
        for (var i = 0; i < data.length; i++) {
            var u = new User_1.User();
            u.id = data[i].id;
            u.first_name = data[i].first_name;
            u.last_name = data[i].last_name;
            u.email = data[i].email;
            u.admin = data[i].admin;
            this._users.push(u);
        }
    };
    UserManager.prototype.getUserList = function () {
        return this._users;
    };
    UserManager.prototype.parseDonorList = function (data) {
        var _this = this;
        this._donorList = [];
        data.forEach(function (donorCategory) {
            _this._donorList.push(donorCategory);
        });
    };
    UserManager.prototype.getDonorList = function () {
        return this._donorList;
    };
    UserManager.prototype.parsePlaylistDetails = function (data) {
        data.playlist.forEach(function (entry) {
            entry.inEditMode = false;
        });
        this._playlistName = data.name;
        this._playlistKey = data.meta.playlist_key;
        this._playlistID = data.meta.id;
        this._playlistPlacement = data.placement;
        this._playListDetails = data.playlist;
    };
    UserManager.prototype.parseAvailableLayouts = function (data) {
        this._availableLayouts = data;
    };
    UserManager.prototype.getAvailableLayouts = function () {
        return this._availableLayouts;
    };
    UserManager.prototype.getCurrentPlaylistDetails = function () {
        return this._playListDetails;
    };
    UserManager.prototype.getCurrentPlaylistPlacement = function () {
        return this._playlistPlacement;
    };
    UserManager.prototype.getCurrentPlaylistKey = function () {
        return this._playlistKey;
    };
    UserManager.prototype.getCurrentPlaylistID = function () {
        return this._playlistID;
    };
    UserManager.prototype.addNewPlaylistSequence = function () {
        var _this = this;
        var data = {};
        data.playlist_id = this._playlistID;
        if (this._playlistBlankEntry.id !== "")
            data.id = this._playlistBlankEntry.id;
        data.layout = this._playlistBlankEntry.layout;
        data.layoutTitle = this._playlistBlankEntry.layoutTitle;
        data.bgMovie = this._playlistBlankEntry.bgMovie;
        data.solo = this._playlistBlankEntry.solo;
        data.duration = this._playlistBlankEntry.duration;
        data.transition_type = this._playlistBlankEntry.transition.Type;
        data.transition_time = this._playlistBlankEntry.transition.duration;
        data.transition_asset = this._playlistBlankEntry.transition.Asset;
        data.playlist_key = this._playlistKey;
        this.sendRequest(this._apiPath + "/api/index.php/cms/" + (this._playlistBlankEntry.id !== "" ? "update" : "add") + "PlaylistEntry", data, "POST")
            .then(function (result) {
            _this._playlistBlankEntry = undefined;
            _this.parsePlaylistDetails(result);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserManager.prototype.deletePlaylistSequenceByID = function (id) {
        var _this = this;
        var data = {};
        data.sequence_id = id;
        data.playlist_id = this._playlistID;
        data.playlist_key = this._playlistKey;
        this.sendRequest(this._apiPath + "/api/index.php/cms/deletePlaylistEntry", data, "POST")
            .then(function (result) {
            _this.parsePlaylistDetails(result);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserManager.prototype.resetPlaylistDetails = function () {
        this._playListDetails = undefined;
    };
    UserManager.prototype.getPlaylistBlankEntry = function () {
        return this._playlistBlankEntry;
    };
    UserManager.prototype.getcurrentSelectedLayout = function () {
        return this._layoutBlankEntry;
    };
    UserManager.prototype.parsePlaylists = function (data) {
        var _this = this;
        data.forEach(function (playlist) {
            playlist.inEditMode = false;
            _this._playLists.push(playlist);
        });
    };
    UserManager.prototype.getPlaylists = function () {
        return this._playLists;
    };
    UserManager.prototype.togglePlaylistEditModeByID = function (id) {
        for (var i = 0; i < this._playLists.length; i++) {
            if (this._playLists[i].id == id) {
                if (this._playLists[i].inEditMode) {
                    this.sendRequest("http://envision.morscad.com/api/index.php/cms/playlist/" + id, { playlist: this._playLists[i] }, "PUT")
                        .then(function (result) {
                    })
                        .catch(function (error) {
                        console.warn(error);
                    });
                }
                this._playLists[i].inEditMode = !this._playLists[i].inEditMode;
            }
        }
    };
    UserManager.prototype.togglePlaylistSequenceEditModeByID = function (id) {
        for (var i = 0; i < this._playListDetails.length; i++) {
            if (this._playListDetails[i].id == id) {
                this._playlistBlankEntry.id = this._playListDetails[i].id;
                this._playlistBlankEntry.layout = this._playListDetails[i].layout;
                this._playlistBlankEntry.layoutTitle = this._playListDetails[i].layoutTitle;
                this._playlistBlankEntry.bgMovie = this._playListDetails[i].bgMovie;
                this._playlistBlankEntry.solo = this._playListDetails[i].solo;
                this._playlistBlankEntry.duration = this._playListDetails[i].duration;
                this._playlistBlankEntry.transition.Type = this._playListDetails[i].transition.Type;
                this._playlistBlankEntry.transition.duration = this._playListDetails[i].transition.duration;
                this._playlistBlankEntry.transition.Asset = this._playListDetails[i].transition.Asset;
            }
        }
    };
    UserManager.prototype.setCurrentSequenceID = function (id) {
        this._currentSequenceID = id;
    };
    UserManager.prototype.getCurrentSequenceID = function () {
        return this._currentSequenceID;
    };
    UserManager.prototype.movePlaylistSequenceUp = function (sequenceID) {
        var _this = this;
        var data = {};
        data.playlist_id = this._playlistID;
        data.playlist_key = this._playlistKey;
        data.sequence_id = sequenceID;
        this.sendRequest(this._apiPath + "/api/index.php/cms/movePlaylistSequenceUp", data, "POST")
            .then(function (result) {
            _this.parsePlaylistDetails(result);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserManager.prototype.movePlaylistSequenceDown = function (sequenceID) {
        var _this = this;
        var data = {};
        data.playlist_id = this._playlistID;
        data.playlist_key = this._playlistKey;
        data.sequence_id = sequenceID;
        this.sendRequest(this._apiPath + "/api/index.php/cms/movePlaylistSequenceDown", data, "POST")
            .then(function (result) {
            _this.parsePlaylistDetails(result);
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserManager.prototype.setCurrentLayoutAttributes = function () {
        this._layoutBlankEntry = [];
        for (var i = 0; i < this._playListDetails.length; i++) {
            if (this._playListDetails[i].id == this._currentSequenceID) {
                this.currentLayouts = [];
                for (var key in this._availableLayouts[this._playListDetails[i].layout]) {
                    var obj = {};
                    obj.element = key;
                    obj.attributes = this._availableLayouts[this._playListDetails[i].layout][key];
                    this.currentLayouts.push(obj);
                    var _attributes = this._availableLayouts[this._playListDetails[i].layout][key];
                    var entry = {};
                    entry.id = "";
                    entry.layout = key;
                    entry.Caption = "";
                    entry.Cta = "";
                    entry.Title = "";
                    entry.Text = "";
                    entry.Quote = "";
                    entry.Asset = "";
                    entry.Donorlevel = "";
                    this._layoutBlankEntry.push(entry);
                }
                if (this._playListDetails[i].layouts.length > 0) {
                    for (var j = 0; j < this._playListDetails[i].layouts.length; j++) {
                        for (var q = 0; q < this._layoutBlankEntry.length; q++) {
                            if (this._layoutBlankEntry[q].layout == this._playListDetails[i].layouts[j].layout) {
                                this._layoutBlankEntry[q].id = this._playListDetails[i].layouts[j].id;
                                this._layoutBlankEntry[q].Caption = this._playListDetails[i].layouts[j].Caption || "";
                                this._layoutBlankEntry[q].Cta = this._playListDetails[i].layouts[j].Cta || "";
                                this._layoutBlankEntry[q].Title = this._playListDetails[i].layouts[j].Title || "";
                                this._layoutBlankEntry[q].Text = this._playListDetails[i].layouts[j].Text || "";
                                this._layoutBlankEntry[q].Quote = this._playListDetails[i].layouts[j].Quote || "";
                                this._layoutBlankEntry[q].Asset = this._playListDetails[i].layouts[j].Asset || "";
                                this._layoutBlankEntry[q].Donorlevel = this._playListDetails[i].layouts[j].Donorlevel || "";
                            }
                        }
                    }
                }
            }
        }
        console.log(this._layoutBlankEntry);
    };
    UserManager.prototype.setCurrentPlaylistSequenceLayout = function (layout) {
        this._layoutBlankEntry = layout;
    };
    UserManager.prototype.savePlaylistLayout = function () {
        var _this = this;
        console.log(this._layoutBlankEntry);
        var data = {};
        data.playlist_id = this._playlistID;
        data.playlist_key = this._playlistKey;
        data.sequence_id = this._currentSequenceID;
        data.layouts = this._layoutBlankEntry;
        this.sendRequest(this._apiPath + "/api/index.php/cms/PlaylistLayout", data, "POST")
            .then(function (result) {
            _this.parsePlaylistDetails(result);
            _this._layoutBlankEntry = undefined;
            _this._currentSequenceID = "";
            _this.currentLayouts = [];
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserManager.prototype.deletePlaylistLayoutByID = function (id) {
        var _this = this;
        var data = {};
        data.layout_id = id;
        data.playlist_id = this._playlistID;
        data.playlist_key = this._playlistKey;
        this.sendRequest(this._apiPath + "/api/index.php/cms/deletePlaylistLayout", data, "POST")
            .then(function (result) {
            _this.parsePlaylistDetails(result);
            _this._layoutBlankEntry = undefined;
            _this._currentSequenceID = "";
            _this.currentLayouts = [];
        })
            .catch(function (error) {
            console.warn(error);
        });
    };
    UserManager = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            NotificationsManager_1.NotificationsManager,
            router_1.Router,
            common_1.Location])
    ], UserManager);
    return UserManager;
}());
exports.UserManager = UserManager;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/ts/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map