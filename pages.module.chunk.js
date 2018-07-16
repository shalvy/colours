webpackJsonp(["pages.module"],{

/***/ "./src/app/pages/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n                <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/overview']\">Paper Dashboard PRO</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page lock-page\" data-color=\"green\" data-image=\"../../assets/img/background/background-5.png\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                <div class=\"card card-lock\">\n                    <div class=\"author\">\n                        <img class=\"avatar\" src=\"../../assets/img/faces/face-2.jpg\" alt=\"...\">\n                    </div>\n                    <h4>Chet Faker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"password\" placeholder=\"Enter Password\" class=\"form-control\">\n                    </div>\n                    <button type=\"button\" class=\"btn btn-wd\">Unlock</button>\n                </div>\n            </form>\n        </div>\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <div class=\"copyright\">\n                    &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockComponent = (function () {
    function LockComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LockComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LockComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return LockComponent;
}());
LockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'lock-cmp',
        template: __webpack_require__("./src/app/pages/lock/lock.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], LockComponent);

var _a;
//# sourceMappingURL=lock.component.js.map

/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".reg_col_info{\r\n\r\n    /* height: 250px; */\r\n    overflow: hidden;\r\n    overflow-y: 500px;\r\n}"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"login-page\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n    <div class=\"content\" style=\"padding-top: 0px;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-2 col-md-offset-1\">\n            <div class=\"logo\" style=\"width: 15px; height: auto; padding-top:1.5em; padding-bottom:1.5em\">\n              <a routerLink=\"/dashboard/overview\" class=\"simple-text logo-mini\">\n                <div class=\"logo-imgn\">\n                  <img src=\"./assets/img/faces/colours_icon2.png\" />\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-md-offset-1 reg_info\">\n            <div class=\"media reg-col btn-magnify\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-danger\">\n                  <p>\n                    <i class=\"ti ti-user\"></i>\n                    <font size=\"5\"> Colours Personal</font>\n                    <br>\n                    <small>\n                      <span>\n                        <font size=\"6\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"5\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"4\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"3\">.</font>\n                      </span>\n                      my true colours</small>\n                  </p>\n                </div>\n              </div>\n              <div class=\"contents\">\n                <div class=\"contents\">\n                  <!--  reg_info -->\n                  <div class=\"media-body\">\n                    <!-- <p class=\"text\">\n                      <span>\n                        <font size=\"2\">\n                          <b>I want to be financially secure. I want to practically increase my financial net worth. I want\n                            to be a more productive person. I want more out of my life. I want my life to achieve more results.\n                            I want to use my time more efficiently. I want to convert my time into more physical, financial\n                            and social results.</b>\n                        </font>\n                      </span> -->\n                      <p>\n                        <span>\n                          <font size=\"2\">\n                          (i) I want financial security - I want a tool that will help me collect my personnel productivity or performance metrics\n                          on a daily basis thus help me to improve my productivity. I want to be able to reflect on these metrics, review them and\n                          make the necessary changes in my life that will make me deliver better results. This way I want to be able to plan, implement\n                          and achieve higher networth on a year to year basis. I want to make the most of my life and my time. Use Colours, your personal\n                          productivity mirror to help you collect your personal productivity metrics, then you use those metrics to continually improve\n                          performance.\n                          </font>\n                        </span>\n                      </p>\n                      <!-- <p>\n                        <span>\n                          <font size=\"2\">\n                            <b>I want to find a job. I want my talent and capabilities to be discovered by good companies.</b>\n                          </font>\n                        </span>\n                      </p> -->\n                      <p>\n                        <span>\n                          <font size=\"2\">\n                            (ii) I want a job - I want a platform where I can publish my productivity performance profile to secure a job and to generally\n                            upscale my career. Colours will help you compile your personal productivity metrics into a performance profile which you\n                            can post and publish on Colours Marketplace for visibility to prospective employers.\n\n                          </font>\n                        </span>\n                      </p>\n                      <p>\n                        <span>\n                          <font size=\"2\">\n                            Open and create a Personal Colours Account. In this account you will be able to keep both personal and work related data.\n                            All the data is yours, secure and private. You will only share the aspects of your data (work data) with your employer or\n                            project and doing this as a function of your Employer to Staff contract or Client to Service Provider. These arrangements\n                            are or Client to Service Provider. These arrangements are already part of our day to day lives and all Colours is doing is\n                            digitize and enhance already existing arrange‐ ments. It is an individual act of free will to comply with such contracts.\n                            If they do not want to share their data they can terminate their employment and keep all their data private. Some may chose\n                            to use colours for personal use and personal development only.\n\n                          </font>\n                        </span>\n                      </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"media reg-col btn-magnify\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-warning\">\n                  <p>\n                    <i class=\"ti-stats-up\"></i>\n                    <font size=\"5\"> Colours Project</font>\n                    <br>\n                    <small>\n                      <span>\n                        <font size=\"6\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"5\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"4\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"3\">.</font>\n                      </span>\n                      putting things in black & white, better than being on the ground\n                    </small>\n                  </p>\n                </div>\n              </div>\n              <div class=\"contents\">\n                <div class=\"contents\">\n                  <!--  reg_info -->\n                  <div class=\"media-body\">\n                    <!-- <p>\n                      <span>\n                        <font size=\"2\">\n                          <b>We want to deliver projects more efficiently. We want to reduce project risk. We want to improve\n                            productivity in projects. We want better project financial results.</b>\n                        </font>\n                      </span>\n                    </p> -->\n                    <p>\n                      <span>\n                        <font size=\"2\">\n                          (i) We want to be able account for the productivity of each workman on a real time basis or at the least on a daily basis.\n                          This means we want to be able to collect productivity metrics for each workman at a project and for all projects in an enterprise\n                          or for an individual. We want to be able to use this project productivity data to review and improve our project processes\n                          and deliver our projects profitably. We want to be able to reduce our projects risk profile. Colours is a tool that will\n                          help you enforce productivity accountability by recording and tracking productivity metrics at individual level in a project\n                          on a real time basis. This will be done across a project and ultimately many projects in an enterprise or within an individual's\n                          portfolio of projects. One cPan see these metrics and monitor project from anywhere in the world better than when on the\n                          ground. People and enterprises can now concieve, plan and implement projects more efficiently. The colours tool has features\n                          that facilitate proactivity by workman and companies that areon a project.\n\n                        </font>\n                      </span>\n                    </p>\n                    <!-- <p>\n                      <span>\n                        <font size=\"2\">\n                          <b>We want to create a competitive edge that will help us procure more project business.</b>\n                        </font>\n                      </span>\n                    </p> -->\n                    <p>\n                      <span>\n                        <font size=\"2\">\n                          (ii) We want to know the true colour or productivity profiles of prospective employees and prospective service providers\n                          when we are resourcing a project.\n                        </font>\n                      </span>\n                    </p>\n                    <!-- <p>\n                      <span>\n                        <font size=\"2\">\n                          <b>We want to know the true performance colours of prospective staff.</b>\n                        </font>\n                      </span>\n                    </p> -->\n                    <p>\n                      <span>\n                        <font size=\"2\">\n                          (iii) We want to be able to create our company productivity profile on a project to project basis and use those profiles\n                          for marketing ourselves. Use Colours productivity metrics to continually improve your enterprise productivity profile.\n                        </font>\n                      </span>\n                    </p>\n                    <p>\n                      <span>\n                        <font size=\"2\">\n                          (iv) We want a international market platform onto which we can post our productivity profiles, to enable us to procure new\n                          business.\n                        </font>\n                      </span>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"media reg-col\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-info\">\n                  <p>\n                    <i class=\"ti-pie-chart\"></i>\n                    <font size=\"5\"> Colours Enterprise</font>\n                    <br>\n                    <small>\n                      <span>\n                        <font size=\"6\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"5\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"4\">.</font>\n                      </span>\n                      <span>\n                        <font size=\"3\">.</font>\n                      </span>\n                      What colour is your bottomline?</small>\n                  </p>\n                </div>\n              </div>\n              <div class=\"contents\">\n                <!--  reg_info -->\n                <div class=\"media-body\">\n                  <!-- <p>\n                    <span>\n                      <font size=\"2\">\n                        <b>We want to be operationally more efficient to improve our bottomline.</b>\n                      </font>\n                    </span>\n                  </p> -->\n                  <p>\n                    <span>\n                      <font size=\"2\">\n                        (i) We want to improve our bottomline by optimising the productivity efficiency of our human capital. We can achieve this\n                        by recording, collecting and tracking productivity data at individual staff member level in real time across the enterprise.\n                        We therefore want a tool that will help us do just that. This level of productivity accountability across the enterprise\n                        will optimise our human capital capacity and thus optimising enterprise process efficiencies. Colours is a tool which will\n                        help your enterpriss to do that. Collecting person centred productivity metrics across the enterprise means high productivity\n                        accountability in the enterpriss thus more productivity. These metrics will be like your productivity mirror and will help\n                        you continually improve your enterprise production efficiencies, translating to an improved bottomline. Colours will help\n                        your enterprise reduce its operational risk.\n                      </font>\n                    </span>\n                  </p>\n                  <!-- <p>\n                    <span>\n                      <font size=\"2\">\n                        <b>We want to create a competitive edge to help us procure new business.</b>\n                      </font>\n                    </span>\n                  </p> -->\n                  <p>\n                    <span>\n                      <font size=\"2\">\n                        (ii) We want to be able to procure more busines. Knowing its real time individual staff enterprise productivity metrics,\n                        means an enterprise has the information for making the right decisions at the right time, about the changes it needs to make,\n                        to improve and get better results. The same data is used to develop an enterprises productivity profile, which enterprise\n                        then broadcasts to advertise itself to secure more business. Colours will help enterprises to procure new business through\n                        the capability to compile this enterprise productivity profile and further the Colours Marketplace platform where enterprises\n                        can publish these profiles to secure new business. All businesses want to be able to have a place where they have access\n                        to market themselves.\n                      </font>\n                    </span>\n                  </p>\n                  <p>\n                    <span>\n                      <font size=\"2\">\n                        (iii) Enterprises want to be able to know the true performance colours of potential service providers and potential employees.\n                        Colours means that potential services providers would have had to collect their own performance data into performance profile,\n                        which they would have posted for viewing by potential Clients. The same capability means potential staff members would have\n                        to over a period of time compiled their own performance profiles. In order to secure new jobs people would have had to publish\n                        these performance profiles on Colours Marketplace. Clients and employers would then be able to view service providers and\n                        potential staff members performance profiles. Naturally persons who want to find jobs would also want to publish their performance\n                        profiles in order to secure employment.\n                      </font>\n                    </span>\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <!-- <div class=\"row\">\n              <div class=\"col-md-2\">\n                <div class=\"logo\" style=\"padding-top:1.5em; padding-bottom:1.5em\">\n                  <a routerLink=\"/dashboard/overview\" class=\"simple-text logo-mini\">\n                    <div class=\"logo-imgn\">\n                      <img src=\"./assets/img/faces/colours_icon2.png\" style=\" width: 96px\" />\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div> -->\n            <form method=\"#\" action=\"#\">\n              <div class=\"card card-plain\">\n                <div class=\"content\">\n                  <form #f=\"ngForm\">\n                    <div class=\"card-content\">\n                      <div class=\"header\">\n                        <h4 class=\"title\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">Login to Colours\n                          <br>\n                          <br>\n                          <small>login using email</small>\n                        </h4>\n                      </div>\n                    </div>\n                    <div class=\"card-content\">\n                      <div class=\"form-group-colours\">\n                        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter email\" [ngModel]=\"email\" required pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                        <!-- #email=\"ngModel\" -->\n                        <!-- <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                          Email is required and format should be\n                          <i>shalvy@ngdevs.com</i>.\n                        </small> -->\n                      </div>\n                      <div class=\"form-group-colours\">\n                        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" [ngModel]=\"password\" required\n                          validateEqual=\"confirmPassword\" reverse=\"true\" required>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"checkbox pull-left\">\n                        <input id=\"checkbox1\" name=\"optionsCheckboxes\" type=\"checkbox\" [ngModel]>\n                        <label for=\"checkbox1\">\n                          Subscribe to newsletter\n                        </label>\n                      </div>\n                      <div class=\"form-group-colours text-right\" style=\"margin-top:8px\">\n                        <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Login</button>\n                      </div>\n                    </div>\n                    <div class=\"link\">\n                      <a class=\"button\" routerLink=\"/pages/register\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">New to Colours, register using email\n                      </a>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"card-content\">\n                  <div class=\"header\">\n                    <h4 class=\"title\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">Social Media\n                      <br>\n                      <small>Login/Register using google, twitter or facebook</small>\n                    </h4>\n                  </div>\n                  <div class=\"content row\">\n                    <div class=\"twitter  col-md-2 btn-magnify\">\n                      <a type=\"button\" (click)=\"loginwtwitter()\" class=\"btn btn-icon btn- btn-twitter\">  <!-- routerLink=\"../../dashboard\" -->\n                        <i class=\"ti-twitter-alt\"></i>\n                      </a>\n                    </div>\n                    <div class=\"facebook  col-md-2 btn-magnify\">\n                      <a type=\"button\"class=\"btn btn-icon btn-facebook \" routerLink=\"../../dashboard\"><!--   (click)=\"loginwfb()\"  -->\n                        <i class=\"ti-facebook\"> </i>\n                      </a>\n                    </div>\n                    <div class=\"google col-md-2 btn-magnify\">\n                      <!-- <a type=\"button\" n class=\"btn btn-icon btn-google\" routerLink=\"/dashboard/overview\">\n                        <i class=\"ti-google\"> </i>\n                      </a> -->\n                      <!-- <ng-template #showLogin> -->\n                      <!-- <p>Please login.</p> -->\n                      <a (click)=\"loginwgoogle()\" class=\"btn btn-icon btn-google\">\n                        <i class=\"ti-google\"> </i>\n                      </a>\n                      <!-- </ng-template> -->\n                    </div>\n                    <div *ngIf=\"afAuth.authState | async as user; else showLogin\">\n                      <!-- <h1>Hello {{ user.displayName }}!</h1> -->\n                      <button (click)=\"logout()\" class=\"btn btn-icon btn-simple\">\n                        <i class=\"ti-export\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from '../../../providers/auth/auth';


var LoginComponent = (function () {
    // constructor(private element: ElementRef, public authService: AuthService, private router: Router
    function LoginComponent(element, router, afAuth) {
        this.element = element;
        this.router = router;
        this.afAuth = afAuth;
        this.test = new Date();
        this.isNewUser = true;
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        this.error = { name: '', message: '' };
        this.resetPassword = false;
        // @Input() text: string;
        // @Input() maxLength: number = 100;
        // currentText: string;
        // hideToggle: boolean = true;
        this.isCollapsed = true;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    // toggleView() {
    //   this.isCollapsed = !this.isCollapsed;
    //   this.determineView();
    // }
    // determineView() {
    //   if (this.text.length <= this.maxLength) {
    //     this.currentText = this.text;
    //     this.isCollapsed = false;
    //     this.hideToggle = true;
    //     return;
    //   }
    //   this.hideToggle = false;
    //   if (this.isCollapsed == true) {
    //     this.currentText = this.text.substring(0, this.maxLength) + "...";
    //   } else if (this.isCollapsed == false) {
    //     this.currentText = this.text;
    //   }
    // }
    // ngOnChanges() {
    //   this.determineView();
    // }
    LoginComponent.prototype.loginwgoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (nav) {
            _this.router.navigateByUrl('dashboard');
        });
    };
    LoginComponent.prototype.loginwfb = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (nav) {
            _this.router.navigateByUrl('dashboard');
        });
    };
    LoginComponent.prototype.loginwtwitter = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider()).then(function (result) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
            // [START_EXCLUDE]
            document.getElementById('quickstart-oauthtoken').textContent = token;
            document.getElementById('quickstart-oauthsecret').textContent = secret;
            this.router.navigateByUrl('dashboard');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // [START_EXCLUDE]
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
                // If you are using multiple auth providers on your app you should handle linking
                // the user's accounts here.
            }
            else {
                console.error(error);
            }
            // [END_EXCLUDE]
        });
    };
    LoginComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LoginComponent.prototype.showLogin = function () {
        this.router.navigateByUrl('./pages/login');
    };
    LoginComponent.prototype.clearErrorMessage = function () {
        this.errorMessage = '';
        this.error = { name: '', message: '' };
    };
    LoginComponent.prototype.changeForm = function () {
        this.isNewUser = !this.isNewUser;
    };
    LoginComponent.prototype.onSignUp = function () {
        this.clearErrorMessage();
        // if (this.validateForm(this.email, this.password)) {
        //   this.authService.signUpWithEmail(this.email, this.password)
        //     .then(() => {
        //       this.router.navigate(['./dashboard/overview'])
        //     }).catch(_error => {
        //       this.error = _error
        //       this.router.navigate(['/'])
        //     })
        // }
    };
    LoginComponent.prototype.onLoginEmail = function () {
        this.clearErrorMessage();
        // if (this.validateForm(this.email, this.password)) {
        //   this.authService.loginWithEmail(this.email, this.password)
        //     .then(() => this.router.navigate(['/user']))
        //     .catch(_error => {
        //       this.error = _error;
        //       this.router.navigate(['/'])
        //     })
        // }
    };
    LoginComponent.prototype.validateForm = function (email, password) {
        if (email.length === 0) {
            this.errorMessage = 'Please enter Email!';
            return false;
        }
        if (password.length === 0) {
            this.errorMessage = 'Please enter Password!';
            return false;
        }
        if (password.length < 6) {
            this.errorMessage = 'Password should be at least 6 characters!';
            return false;
        }
        this.errorMessage = '';
        return true;
    };
    LoginComponent.prototype.isValidMailFormat = function (email) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
            return false;
        }
        return true;
    };
    LoginComponent.prototype.sendResetEmail = function () {
        this.clearErrorMessage();
        // this.authService.resetPassword(this.email)
        //   .then(() => this.resetPassword = true)
        //   .catch(_error => {
        //     this.error = _error
        //   })
    };
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible === false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login-cmp',
        template: __webpack_require__("./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("./src/app/pages/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("./src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__ = __webpack_require__("./src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__lock_lock_component__["a" /* LockComponent */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lock_lock_component__ = __webpack_require__("./src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");



var PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'lock',
                component: __WEBPACK_IMPORTED_MODULE_1__lock_lock_component__["a" /* LockComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */]
            }]
    }];
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"register-page\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-2 col-md-offset-1\">\n            <div class=\"logo\" style=\"width: 15px; height: auto; padding-top:1.5em; padding-bottom:1.5em\">\n              <a routerLink=\"/dashboard/overview\" class=\"simple-text logo-mini\">\n                <div class=\"logo-imgn\">\n                  <img src=\"./assets/img/faces/colours_icon2.png\" />\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n        <br>\n        <style>\n          .reg-col{\n            margin-bottom: 1em\n          }\n        </style>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-md-offset-1 reg_info\">\n            <div class=\"media  reg-col\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-danger\">\n                  <p>\n                    <i class=\"ti ti-user\"></i>\n                    <font size=\"5\"> Colours Personal</font>\n                    <br>\n                    <small>\n                      <span><font size=\"6\">.</font></span>\n                      <span><font size=\"5\">.</font></span>\n                      <span><font size=\"4\">.</font></span>\n                      <span><font size=\"3\">.</font></span>\n                      my true colours</small>\n                  </p>\n                </div>\n              </div>\n              <div class=\"contents\">\n                <div class=\"contents\">\n                  <div class=\"media-body\">\n                      <p class=\"text\"><span><font size=\"2\">\n                        <b>I want to be financially secure. I want to practically increase my financial net worth. I want to be a more productive person.\n                        I want more out of my life. I want my life to achieve more results. I want to use my time more efficiently. I want to convert\n                        my time into more physical, financial and social results.</b>\n                      <br>\n                         Use Colours to conceive, plan and execute your activities more efficiently. Colours will help you collect and produce your\n                        own productivity metrics, which you can use to take necessary corrective action towards better personal results. Colours\n                        will be your personal productivity mirror. Know your own productivity colours and make the necessary changes to improve your\n                        productivity. Use Colours Marketplace to link with friends and mentors to help you to be accountable to yourself. Accept\n                        that accountability to self or others is actual your means of production. Use Colours to be more fruitful. Use Colours\n                        to deliver more practical results. Use Colours to acquire better habits and disciplines.\n                      </font></span></p>\n                      <p><span><font size=\"2\">\n                        <b>I want to find a job. I want my talent and capabilities to be discovered by good companies.</b></font></span></p>\n                      <p><span><font size=\"2\">\n                         Over a period of time, use Colours to compile your productivity metrics into your performance profile. Post your performance\n                        profile on Colours Marketplace so that your talent can be discovered by great companies. Great companies want to know the\n                        true performance colours of prospective staff members.\n                      </font></span></p>     \n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"media reg-col\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-warning\">\n                  <p>\n                    <i class=\"ti-stats-up\"></i>\n                    <font size=\"5\"> Colours Project</font>\n                    <br>\n                    <small>\n                      <span><font size=\"6\">.</font></span>\n                      <span><font size=\"5\">.</font></span>\n                      <span><font size=\"4\">.</font></span>\n                      <span><font size=\"3\">.</font></span>\n                      putting things in black & white, better than being on the ground\n                    </small>\n                  </p>\n                </div>\n              </div>\n              <div class=\"contents\">\n                <div class=\"contents\"> <!--  reg_info -->\n                  <div class=\"media-body\">                    \n                    <p><span><font size=\"2\">\n                      <b>We want to deliver projects more efficiently. We want to reduce project risk. We want to improve productivity in projects.\n                        We want better project financial results.</b>\n                    </font></span></p>\n                    <p><span><font size=\"2\">\n                      Use Colours Project to collect real time individual staff and team, productivity metrics. Use Colours to conceive, plan and\n                      implement projects more efficiently. Colours also has tools to help you implement more efficiently. While offsite, get to\n                      know what’s happening on the ground better than when you are on the ground yourself. This real time accountability leads\n                      to higher productivity by individuals and teams on a project. End result is more financially rewarding projects.\n                    </font></span></p>\n                    <p><span><font size=\"2\">\n                      <b>We want to create a competitive edge that will help us procure more project business.</b></font></span></p>\n                    <p><span><font size=\"2\">\n                      Use Colours to help you operate more efficiently across your enterprise. Compile your improved enterprise performance metrics\n                      and reports into an attractive performance profile. Post your attractive performance profile on Colours Marketplace to secure\n                      more business.\n                    </font></span></p>\n                    <p><span><font size=\"2\">\n                      <b>We want to know the true performance colours of prospective staff.</b></font></span></p>\n                    <p><span><font size=\"2\">\n                      Use Colours Marketplace to procure new staff members. Talent looking for new jobs would have, overtime compiled their own\n                      Colours performance metrics into performance profiles. These Job Seekers would go on to post the same on Colours Marketplace\n                      to look for new jobs.\n                    </font></span></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"media reg-col\">\n              <div class=\"media-left\">\n                <div class=\"icon icon-info\">\n                  <p>\n                    <i class=\"ti-pie-chart\"></i>\n                    <font size=\"5\"> Colours Enterprise</font>\n                    <br>\n                    <small>\n                      <span><font size=\"6\">.</font></span>\n                      <span><font size=\"5\">.</font></span>\n                      <span><font size=\"4\">.</font></span>\n                      <span><font size=\"3\">.</font></span>\n                      What colour is your bottomline?</small>\n                  </p>\n                </div>\n              </div>\n              <div class=\"contents\"> <!--  reg_info -->\n                <div class=\"media-body\">\n                  <p><span><font size=\"2\">\n                      <b>We want to be operationally more efficient to improve our bottomline.</b>\n                    </font></span></p>\n                    <p><span><font size=\"2\">\n                       Use Colours for higher individual staff and team performance accountability across the enterprise. Real time accountability\n                      leads to higher individual staff and team productivity. Real time accountability means management can see real time individual\n                      staff and team productivity reports and metrics across the enterprise.\n                    </font></span></p>\n                    <p><span><font size=\"2\">\n                      <b>We want to create a competitive edge to help us procure new business.</b></font></span></p>\n                    <p><span><font size=\"2\">\n                      Colours Project will help you improve individual and team project performance metrics. Over a period of time, use Colours\n                      to collect your project performance metrics into an attractive projects performance profile. Post your projects performance\n                      profile on Colours Marketplace to procure more projects business.\n                    </font></span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <form method=\"#\" action=\"#\">\n              <div class=\"card card-plain\">\n                <div class=\"content\">\n                  <form #f=\"ngForm\">\n                    <div class=\"card-content\">\n                      <div class=\"header\">\n                        <h4 class=\"title\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">New to Colours, Create account\n                          <br>\n                          <small>Register using email</small>\n                        </h4>\n                      </div>\n                    </div>\n                    <div class=\"card-content\">\n                      <div class=\"form-group-colours\">\n                        <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [ngModel]=\"register.email\" required #email=\"ngModel\"\n                          pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                        <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                          Email is required and format should be\n                          <i>shalvy@ngdevs.com</i>.\n                        </small>\n                      </div>\n                      <div class=\"form-group-colours\">\n                        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [ngModel]=\"register.password\" required\n                          validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                        <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                          Password is required\n                        </small>\n                      </div>\n                      <div class=\"form-group-colours\">\n                        <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Confirm Password\" [ngModel]=\"register.confirmPassword\"\n                          required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n                        <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n                          Password mismatch\n                        </small>\n                      </div>\n                    </div>\n                    <div class=\"card-footer\">\n                      <div class=\"checkbox pull-left\">\n                        <input id=\"checkbox1\" name=\"optionsCheckboxes\" type=\"checkbox\" [ngModel]>\n                        <label for=\"checkbox1\">\n                          Subscribe to newsletter\n                        </label>\n                      </div>\n                      <div class=\"form-group-colours text-right\" style=\"margin-top:8px\">\n                        <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Register</button>\n                      </div>\n                      <!-- <a href=\"./dashboard/overview\"></a> -->\n                    </div>\n                    <div class=\"link\">\n                      <a class=\"button\" routerLink=\"/pages/login\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">Account already exist, login to Colours by email.\n                      </a>\n                    </div>\n                  </form>\n                </div>\n                <div class=\"card-content\">\n                  <div class=\"header\">\n                    <h4 class=\"title\" style=\"margin-top:10px ; margin-bottom :10px; color:#5f9ea0\">Social Media\n                      <br>\n                      <small>Login/Register using google, twitter or facebook</small>\n                    </h4>\n                  </div>\n                  <div class=\"content row col-md-8\">\n                    <a type=\"button\" class=\"btn btn-icon btn-twitter\" routerLink=\"/dashboard/overview\">\n                      <i class=\"ti-twitter-alt\"></i>\n                    </a>\n                    <a type=\"button\" class=\"btn btn-icon btn-facebook\" routerLink=\"/dashboard/overview\">\n                      <i class=\"ti-facebook\"> </i>\n                    </a>\n                    <a type=\"button\"n class=\"btn btn-icon btn-google\" routerLink=\"/dashboard/overview\">\n                      <i class=\"ti-google\"> </i>\n                    </a>\n                  </div>\n                  <!-- <div class=\"content\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div>\n                          <button type=\"submit\" style=\"width: 240px\" class=\"btn btn-warning btn-fill btn-wd\" href=\"dashboard/overview\"><i class=\"ti-google\"></i> Google</button> <!- ng-click=\"signInGoogle()\" ->\n                        </div>\n                      </div>\n                    </div>\n                    <br>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div>\n                          <button type=\"submit\" style=\"width: 240px\" class=\"btn btn-primary btn-fill btn-wd\" ng-click=\"signInTwitter()\"><i class=\"ti-twitter\"></i> Twitter</button>\n                        </div>\n                      </div>\n                    </div>\n                    <br>\n                    <style>\n                      .btn-blue{\n                        background-color: #1e90ff;\n                        border-color:#1e90ff\n                      }\n                    </style>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div>\n                          <button type=\"submit\" style=\"width: 240px\" class=\"btn btn-blue btn-fill btn-wd\" ng-click=\"auth.$signInWithPopup('facebook')\"\n                            disabled=\"\"><i class=\"ti-facebook\"></i> Facebook</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div> -->\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(element, router) {
        this.element = element;
        this.router = router;
        this.test = new Date();
        this.isNewUser = true;
        this.email = '';
        this.password = '';
        this.errorMessage = '';
        this.error = { name: '', message: '' };
        this.resetPassword = false;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    RegisterComponent.prototype.clearErrorMessage = function () {
        this.errorMessage = '';
        this.error = { name: '', message: '' };
    };
    RegisterComponent.prototype.changeForm = function () {
        this.isNewUser = !this.isNewUser;
    };
    // onSignUp(): void {
    //   this.clearErrorMessage()
    //   if (this.validateForm(this.email, this.password)) {
    //     this.authService.signUpWithEmail(this.email, this.password)
    //       .then(() => {
    //         this.router.navigate(['./dashboard/overview'])
    //       }).catch(_error => {
    //         this.error = _error
    //         this.router.navigate(['/'])
    //       })
    //   }
    // }
    // onLoginEmail(): void {
    //   this.clearErrorMessage()
    //   if (this.validateForm(this.email, this.password)) {
    //     this.authService.loginWithEmail(this.email, this.password)
    //       .then(() => this.router.navigate(['/user']))
    //       .catch(_error => {
    //         this.error = _error;
    //         this.router.navigate(['/'])
    //       })
    //   }
    // }
    RegisterComponent.prototype.validateForm = function (email, password) {
        if (email.length === 0) {
            this.errorMessage = 'Please enter Email!';
            return false;
        }
        if (password.length === 0) {
            this.errorMessage = 'Please enter Password!';
            return false;
        }
        if (password.length < 6) {
            this.errorMessage = 'Password should be at least 6 characters!';
            return false;
        }
        this.errorMessage = '';
        return true;
    };
    RegisterComponent.prototype.isValidMailFormat = function (email) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
            return false;
        }
        return true;
    };
    // sendResetEmail() {
    //   this.clearErrorMessage()
    //   this.authService.resetPassword(this.email)
    //     .then(() => this.resetPassword = true)
    //     .catch(_error => {
    //       this.error = _error
    //     })
    // }
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
        this.register = {
            email: '',
            password: '',
            confirmPassword: ''
        };
    };
    RegisterComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'register-cmp',
        template: __webpack_require__("./src/app/pages/register/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map