(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 100%; box-sizing: border-box;\">\n\n    <file-manager [fileElements]=\"fileElements | async\" [path]=\"currentPath\" [canNavigateUp]=\"canNavigateUp\" (folderAdded)=\"addFolder($event)\" (elementRemoved)=\"removeElement($event)\" (navigatedDown)=\"navigateToFolder($event)\" (navigatedUp)=\"navigateUp()\"\n        (elementRenamed)=\"renameElement($event)\" (elementMoved)=\"moveElement($event)\"></file-manager>\n    <!-- <mat-card style=\"height: 100%; box-sizing: border-box; padding:0\">\n  </mat-card> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/file-manager.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/file-manager.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <mat-icon *ngIf=\"canNavigateUp\" class=\"pointer\" (click)=\"navigateUp()\">arrow_back</mat-icon>\n  <span style=\"margin-left: 8px\">{{path || 'Files'}}</span>\n  <span class=\"spacer\"></span>\n  <mat-icon class=\"pointer\" (click)=\"openNewFolderDialog()\">create_new_folder</mat-icon>\n</mat-toolbar>\n\n<div class=\"container\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n  <div class=\"content\" fxFlex fxLayout=\"row\">\n    <mat-grid-list cols=\"4\" rowHeight=\"100px\" fxFlex>\n      <mat-grid-tile *ngFor=\"let element of fileElements\" class=file-or-folder>\n        <span [matMenuTriggerFor]=\"rootMenu\" [matMenuTriggerData]=\"{element: element}\" #menuTrigger=\"matMenuTrigger\"></span>\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" (click)=\"navigate(element)\" (contextmenu)=\"openMenu($event,element, menuTrigger)\">\n          <mat-icon color=\"primary\" class=\"file-or-folder-icon pointer\" *ngIf=\"element.isFolder\">folder</mat-icon>\n          <mat-icon color=\"primary\" class=\"file-or-folder-icon pointer\" *ngIf=\"!element.isFolder\">insert_drive_file</mat-icon>\n          <span>{{element.name}}</span>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</div>\n\n\n<mat-menu #rootMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template matMenuContent let-element=\"element\">\n    <button mat-menu-item [matMenuTriggerFor]=\"moveToMenu\" [matMenuTriggerData]=\"{self: element}\">\n      <mat-icon>open_with</mat-icon>\n      <span>Move To</span>\n    </button>\n    <button mat-menu-item (click)=\"openRenameDialog(element)\">\n      <mat-icon>edit</mat-icon>\n      <span>Rename</span>\n    </button>\n    <button mat-menu-item (click)=\"deleteElement(element)\">\n      <mat-icon>delete</mat-icon>\n      <span>Delete</span>\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #moveToMenu=\"matMenu\">\n  <ng-template matMenuContent let-self=\"self\">\n    <ng-container *ngFor=\"let element of fileElements\">\n      <button *ngIf=\"element.isFolder && element.id !== self.id\" mat-menu-item (click)=\"moveElement(self, element)\">{{element.name}}</button>\n    </ng-container>\n  </ng-template>\n</mat-menu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Create a new folder</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Folder Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/modals/renameDialog/renameDialog.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/modals/renameDialog/renameDialog.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Rename Element</h1>\n\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Folder Name\" [(ngModel)]=\"folderName\">\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button mat-dialog-close>Cancel</button>\n  <button mat-raised-button [mat-dialog-close]=\"folderName\" color=\"primary\">OK</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/file.service */ "./src/app/service/file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fileService) {
        this.fileService = fileService;
        this.canNavigateUp = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var folderA = this.fileService.add({ name: 'Folder A', isFolder: true, parent: 'root' });
        this.fileService.add({ name: 'Folder B', isFolder: true, parent: 'root' });
        this.fileService.add({ name: 'Folder C', isFolder: true, parent: folderA.id });
        this.fileService.add({ name: 'File A', isFolder: false, parent: 'root' });
        this.fileService.add({ name: 'File B', isFolder: false, parent: 'root' });
        this.updateFileElementQuery();
    };
    AppComponent.prototype.addFolder = function (folder) {
        this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
        this.updateFileElementQuery();
    };
    AppComponent.prototype.removeElement = function (element) {
        this.fileService.delete(element.id);
        this.updateFileElementQuery();
    };
    AppComponent.prototype.navigateToFolder = function (element) {
        this.currentRoot = element;
        this.updateFileElementQuery();
        this.currentPath = this.pushToPath(this.currentPath, element.name);
        this.canNavigateUp = true;
    };
    AppComponent.prototype.navigateUp = function () {
        if (this.currentRoot && this.currentRoot.parent === 'root') {
            this.currentRoot = null;
            this.canNavigateUp = false;
            this.updateFileElementQuery();
        }
        else {
            this.currentRoot = this.fileService.get(this.currentRoot.parent);
            this.updateFileElementQuery();
        }
        this.currentPath = this.popFromPath(this.currentPath);
    };
    AppComponent.prototype.moveElement = function (event) {
        this.fileService.update(event.element.id, { parent: event.moveTo.id });
        this.updateFileElementQuery();
    };
    AppComponent.prototype.renameElement = function (element) {
        console.log(element);
        this.fileService.update(element.id, { name: element.name });
        this.updateFileElementQuery();
    };
    AppComponent.prototype.updateFileElementQuery = function () {
        this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
    };
    AppComponent.prototype.pushToPath = function (path, folderName) {
        var p = path ? path : '';
        p += folderName + "/";
        return p;
    };
    AppComponent.prototype.popFromPath = function (path) {
        var p = path ? path : '';
        var split = p.split('/');
        split.splice(split.length - 2, 1);
        p = split.join('/');
        return p;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _service_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _file_manager_file_manager_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-manager/file-manager.module */ "./src/app/file-manager/file-manager.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/file.service */ "./src/app/service/file.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _file_manager_file_manager_module__WEBPACK_IMPORTED_MODULE_3__["FileManagerModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]],
            providers: [_service_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file-manager/file-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/file-manager/file-manager.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.file-or-folder {\n  padding: 8px;\n  overflow: hidden;\n}\n\n.container{\n  overflow: hidden;\n}\n\n.file-or-folder-icon {\n  width: 50px;\n  height: 50px;\n  font-size: 50px;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1tYW5hZ2VyL2ZpbGUtbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUV6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtbWFuYWdlci9maWxlLW1hbmFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZpbGUtb3ItZm9sZGVyIHtcbiAgcGFkZGluZzogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVye1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmlsZS1vci1mb2xkZXItaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/file-manager/file-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/file-manager/file-manager.component.ts ***!
  \********************************************************/
/*! exports provided: FileManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerComponent", function() { return FileManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/newFolderDialog/newFolderDialog.component */ "./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.ts");
/* harmony import */ var _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/renameDialog/renameDialog.component */ "./src/app/file-manager/modals/renameDialog/renameDialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var FileManagerComponent = /** @class */ (function () {
    function FileManagerComponent(dialog) {
        this.dialog = dialog;
        this.folderAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigatedDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.navigatedUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileManagerComponent.prototype.ngOnChanges = function (changes) { };
    FileManagerComponent.prototype.deleteElement = function (element) {
        this.elementRemoved.emit(element);
    };
    FileManagerComponent.prototype.navigate = function (element) {
        if (element.isFolder) {
            this.navigatedDown.emit(element);
        }
    };
    FileManagerComponent.prototype.navigateUp = function () {
        this.navigatedUp.emit();
    };
    FileManagerComponent.prototype.moveElement = function (element, moveTo) {
        this.elementMoved.emit({ element: element, moveTo: moveTo });
    };
    FileManagerComponent.prototype.openNewFolderDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_2__["NewFolderDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.folderAdded.emit({ name: res });
            }
        });
    };
    FileManagerComponent.prototype.openRenameDialog = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_3__["RenameDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                element.name = res;
                _this.elementRenamed.emit(element);
            }
        });
    };
    FileManagerComponent.prototype.openMenu = function (event, element, viewChild) {
        event.preventDefault();
        viewChild.openMenu();
    };
    FileManagerComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FileManagerComponent.prototype, "fileElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileManagerComponent.prototype, "canNavigateUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileManagerComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileManagerComponent.prototype, "folderAdded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileManagerComponent.prototype, "elementRemoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileManagerComponent.prototype, "elementRenamed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileManagerComponent.prototype, "navigatedDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileManagerComponent.prototype, "elementMoved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileManagerComponent.prototype, "navigatedUp", void 0);
    FileManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file-manager',
            template: __importDefault(__webpack_require__(/*! raw-loader!./file-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/file-manager.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./file-manager.component.css */ "./src/app/file-manager/file-manager.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FileManagerComponent);
    return FileManagerComponent;
}());



/***/ }),

/***/ "./src/app/file-manager/file-manager.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/file-manager/file-manager.module.ts ***!
  \*****************************************************/
/*! exports provided: FileManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerModule", function() { return FileManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _file_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-manager.component */ "./src/app/file-manager/file-manager.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/newFolderDialog/newFolderDialog.component */ "./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/renameDialog/renameDialog.component */ "./src/app/file-manager/modals/renameDialog/renameDialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















var FileManagerModule = /** @class */ (function () {
    function FileManagerModule() {
    }
    FileManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
            ],
            declarations: [_file_manager_component__WEBPACK_IMPORTED_MODULE_2__["FileManagerComponent"], _modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_11__["NewFolderDialogComponent"], _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_14__["RenameDialogComponent"]],
            exports: [_file_manager_component__WEBPACK_IMPORTED_MODULE_2__["FileManagerComponent"]],
            entryComponents: [_modals_newFolderDialog_newFolderDialog_component__WEBPACK_IMPORTED_MODULE_11__["NewFolderDialogComponent"], _modals_renameDialog_renameDialog_component__WEBPACK_IMPORTED_MODULE_14__["RenameDialogComponent"]]
        })
    ], FileManagerModule);
    return FileManagerModule;
}());



/***/ }),

/***/ "./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-button-raised{\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1tYW5hZ2VyL21vZGFscy9uZXdGb2xkZXJEaWFsb2cvbmV3Rm9sZGVyRGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9maWxlLW1hbmFnZXIvbW9kYWxzL25ld0ZvbGRlckRpYWxvZy9uZXdGb2xkZXJEaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLXJhaXNlZHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewFolderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFolderDialogComponent", function() { return NewFolderDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NewFolderDialogComponent = /** @class */ (function () {
    function NewFolderDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NewFolderDialogComponent.prototype.ngOnInit = function () { };
    NewFolderDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    NewFolderDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newFolderDialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./newFolderDialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./newFolderDialog.component.css */ "./src/app/file-manager/modals/newFolderDialog/newFolderDialog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], NewFolderDialogComponent);
    return NewFolderDialogComponent;
}());



/***/ }),

/***/ "./src/app/file-manager/modals/renameDialog/renameDialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/file-manager/modals/renameDialog/renameDialog.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtbWFuYWdlci9tb2RhbHMvcmVuYW1lRGlhbG9nL3JlbmFtZURpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/file-manager/modals/renameDialog/renameDialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/file-manager/modals/renameDialog/renameDialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: RenameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameDialogComponent", function() { return RenameDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RenameDialogComponent = /** @class */ (function () {
    function RenameDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    RenameDialogComponent.prototype.ngOnInit = function () { };
    RenameDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    RenameDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renameDialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./renameDialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-manager/modals/renameDialog/renameDialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./renameDialog.component.css */ "./src/app/file-manager/modals/renameDialog/renameDialog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], RenameDialogComponent);
    return RenameDialogComponent;
}());



/***/ }),

/***/ "./src/app/service/file.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/file.service.ts ***!
  \*****************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var FileService = /** @class */ (function () {
    function FileService() {
        this.map = new Map();
    }
    FileService.prototype.add = function (fileElement) {
        fileElement.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.map.set(fileElement.id, this.clone(fileElement));
        return fileElement;
    };
    FileService.prototype.delete = function (id) {
        this.map.delete(id);
    };
    FileService.prototype.update = function (id, update) {
        var element = this.map.get(id);
        element = Object.assign(element, update);
        this.map.set(element.id, element);
    };
    FileService.prototype.queryInFolder = function (folderId) {
        var _this = this;
        var result = [];
        this.map.forEach(function (element) {
            if (element.parent === folderId) {
                result.push(_this.clone(element));
            }
        });
        if (!this.querySubject) {
            this.querySubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](result);
        }
        else {
            this.querySubject.next(result);
        }
        return this.querySubject.asObservable();
    };
    FileService.prototype.get = function (id) {
        return this.map.get(id);
    };
    FileService.prototype.clone = function (element) {
        return JSON.parse(JSON.stringify(element));
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBJ5Ppe6ItEUS4ogiteg_eDErWUmrPdvPI',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        projectId: 'file-explorer-a303e',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohdiskandarbinsamsuddin/Documents/learning/angulario/cms2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map