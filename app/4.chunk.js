(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/main/webapp/app/pages/editors/ckeditor/ckeditor.component.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/pages/editors/ckeditor/ckeditor.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\n__webpack_require__(/*! ./ckeditor.loader */ \"./src/main/webapp/app/pages/editors/ckeditor/ckeditor.loader.ts\");\r\n__webpack_require__(/*! ckeditor */ \"./node_modules/ckeditor/ckeditor.js\");\r\nvar CKEditorComponent = /** @class */ (function () {\r\n    function CKEditorComponent() {\r\n    }\r\n    CKEditorComponent = tslib_1.__decorate([\r\n        core_1.Component({\r\n            selector: 'ngx-ckeditor',\r\n            template: \"\\n    <nb-card>\\n      <nb-card-header>\\n        CKEditor\\n      </nb-card-header>\\n      <nb-card-body>\\n        <ckeditor [config]=\\\"{ extraPlugins: 'divarea', height: '320' }\\\"></ckeditor>\\n      </nb-card-body>\\n    </nb-card>\\n  \"\r\n        })\r\n    ], CKEditorComponent);\r\n    return CKEditorComponent;\r\n}());\r\nexports.CKEditorComponent = CKEditorComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvY2tlZGl0b3IvY2tlZGl0b3IuY29tcG9uZW50LnRzPzFiNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0dBQTBDO0FBRTFDLGdIQUEyQjtBQUMzQiwyRUFBa0I7QUFlbEI7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGlCQUFpQjtRQWI3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLDRPQVNYO1NBQ0YsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQTtBQUFwQiw4Q0FBaUIiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvY2tlZGl0b3IvY2tlZGl0b3IuY29tcG9uZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgJy4vY2tlZGl0b3IubG9hZGVyJztcclxuaW1wb3J0ICdja2VkaXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNrZWRpdG9yJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8bmItY2FyZD5cclxuICAgICAgPG5iLWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIENLRWRpdG9yXHJcbiAgICAgIDwvbmItY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxuYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgPGNrZWRpdG9yIFtjb25maWddPVwieyBleHRyYVBsdWdpbnM6ICdkaXZhcmVhJywgaGVpZ2h0OiAnMzIwJyB9XCI+PC9ja2VkaXRvcj5cclxuICAgICAgPC9uYi1jYXJkLWJvZHk+XHJcbiAgICA8L25iLWNhcmQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ0tFZGl0b3JDb21wb25lbnQge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/pages/editors/ckeditor/ckeditor.component.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/pages/editors/ckeditor/ckeditor.loader.ts":
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/pages/editors/ckeditor/ckeditor.loader.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window['CKEDITOR_BASEPATH'] = '//cdn.ckeditor.com/4.6.2/full-all/';\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvY2tlZGl0b3IvY2tlZGl0b3IubG9hZGVyLnRzP2JhYTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvY2tlZGl0b3IvY2tlZGl0b3IubG9hZGVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93WydDS0VESVRPUl9CQVNFUEFUSCddID0gJy8vY2RuLmNrZWRpdG9yLmNvbS80LjYuMi9mdWxsLWFsbC8nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/pages/editors/ckeditor/ckeditor.loader.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/pages/editors/editors-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/pages/editors/editors-routing.module.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar router_1 = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\r\nvar editors_component_1 = __webpack_require__(/*! ./editors.component */ \"./src/main/webapp/app/pages/editors/editors.component.ts\");\r\nvar ckeditor_component_1 = __webpack_require__(/*! ./ckeditor/ckeditor.component */ \"./src/main/webapp/app/pages/editors/ckeditor/ckeditor.component.ts\");\r\nvar routes = [\r\n    {\r\n        path: '',\r\n        component: editors_component_1.EditorsComponent,\r\n        children: [\r\n            {\r\n                path: 'ckeditor',\r\n                component: ckeditor_component_1.CKEditorComponent\r\n            }\r\n        ]\r\n    }\r\n];\r\nvar EditorsRoutingModule = /** @class */ (function () {\r\n    function EditorsRoutingModule() {\r\n    }\r\n    EditorsRoutingModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [router_1.RouterModule.forChild(routes)],\r\n            exports: [router_1.RouterModule]\r\n        })\r\n    ], EditorsRoutingModule);\r\n    return EditorsRoutingModule;\r\n}());\r\nexports.EditorsRoutingModule = EditorsRoutingModule;\r\nexports.routedComponents = [editors_component_1.EditorsComponent, ckeditor_component_1.CKEditorComponent];\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvZWRpdG9ycy1yb3V0aW5nLm1vZHVsZS50cz8wMzU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9HQUF5QztBQUN6Qyw0R0FBdUQ7QUFFdkQscUlBQXVEO0FBQ3ZELDBKQUFrRTtBQUVsRSxJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLG9DQUFnQjtRQUMzQixRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHNDQUFpQjthQUMvQjtTQUNKO0tBQ0o7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG9CQUFvQjtRQUpoQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUE7QUFBdkIsb0RBQW9CO0FBRXBCLHdCQUFnQixHQUFHLENBQUMsb0NBQWdCLEVBQUUsc0NBQWlCLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvcGFnZXMvZWRpdG9ycy9lZGl0b3JzLXJvdXRpbmcubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgRWRpdG9yc0NvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9ycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDS0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2tlZGl0b3IvY2tlZGl0b3IuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogRWRpdG9yc0NvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnY2tlZGl0b3InLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDS0VkaXRvckNvbXBvbmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yc1JvdXRpbmdNb2R1bGUge31cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZWRDb21wb25lbnRzID0gW0VkaXRvcnNDb21wb25lbnQsIENLRWRpdG9yQ29tcG9uZW50XTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/pages/editors/editors-routing.module.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/pages/editors/editors.component.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/pages/editors/editors.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar EditorsComponent = /** @class */ (function () {\r\n    function EditorsComponent() {\r\n    }\r\n    EditorsComponent = tslib_1.__decorate([\r\n        core_1.Component({\r\n            selector: 'ngx-editors',\r\n            template: \"\\n    <router-outlet></router-outlet>\\n  \"\r\n        })\r\n    ], EditorsComponent);\r\n    return EditorsComponent;\r\n}());\r\nexports.EditorsComponent = EditorsComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvZWRpdG9ycy5jb21wb25lbnQudHM/YTkwNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBMEM7QUFRMUM7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLDJDQUVYO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQTtBQUFuQiw0Q0FBZ0IiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvZWRpdG9ycy5jb21wb25lbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ3gtZWRpdG9ycycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvcnNDb21wb25lbnQge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/pages/editors/editors.component.ts\n");

/***/ }),

/***/ "./src/main/webapp/app/pages/editors/editors.module.ts":
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/pages/editors/editors.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar tslib_1 = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\r\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\r\nvar ng2_ckeditor_1 = __webpack_require__(/*! ng2-ckeditor */ \"./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js\");\r\nvar editors_routing_module_1 = __webpack_require__(/*! ./editors-routing.module */ \"./src/main/webapp/app/pages/editors/editors-routing.module.ts\");\r\nvar theme_module_1 = __webpack_require__(/*! ../../layouts/theme.module */ \"./src/main/webapp/app/layouts/theme.module.ts\");\r\nvar EditorsModule = /** @class */ (function () {\r\n    function EditorsModule() {\r\n    }\r\n    EditorsModule = tslib_1.__decorate([\r\n        core_1.NgModule({\r\n            imports: [theme_module_1.ThemeModule, editors_routing_module_1.EditorsRoutingModule, ng2_ckeditor_1.CKEditorModule],\r\n            declarations: editors_routing_module_1.routedComponents.slice()\r\n        })\r\n    ], EditorsModule);\r\n    return EditorsModule;\r\n}());\r\nexports.EditorsModule = EditorsModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3BhZ2VzL2VkaXRvcnMvZWRpdG9ycy5tb2R1bGUudHM/NDBjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvR0FBeUM7QUFDekMsZ0hBQThDO0FBRTlDLG9KQUFrRjtBQUNsRiw0SEFBeUQ7QUFNekQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLGFBQWE7UUFKekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsMEJBQVcsRUFBRSw2Q0FBb0IsRUFBRSw2QkFBYyxDQUFDO1lBQzVELFlBQVksRUFBTSx5Q0FBZ0IsUUFBQztTQUN0QyxDQUFDO09BQ1csYUFBYSxDQUFHO0lBQUQsb0JBQUM7Q0FBQTtBQUFoQixzQ0FBYSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvcGFnZXMvZWRpdG9ycy9lZGl0b3JzLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcclxuXHJcbmltcG9ydCB7IEVkaXRvcnNSb3V0aW5nTW9kdWxlLCByb3V0ZWRDb21wb25lbnRzIH0gZnJvbSAnLi9lZGl0b3JzLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgVGhlbWVNb2R1bGUgfSBmcm9tICcuLi8uLi9sYXlvdXRzL3RoZW1lLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1RoZW1lTW9kdWxlLCBFZGl0b3JzUm91dGluZ01vZHVsZSwgQ0tFZGl0b3JNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbLi4ucm91dGVkQ29tcG9uZW50c11cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvcnNNb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/pages/editors/editors.module.ts\n");

/***/ })

}]);