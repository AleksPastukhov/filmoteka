!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=n.parcelRequired76b;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){i[e]=n},n.parcelRequired76b=s),s("go4aK"),s("kvC6y"),s("x2KWZ");var l=s("8Mjv6"),o=s("7MS5A"),a=s("1VFfL"),r=s("kvC6y"),c=s("x2KWZ"),d=s("4Ro6a");const m=new(0,r.Spinner)(".spinner"),u=document.querySelector("#pagination"),g=new(0,l.default),h=document.querySelector(".form__input"),v=document.querySelector(".search__error-text");h.addEventListener("submit",(function(n){n.preventDefault();let t=1;const i=n.currentTarget.searchQuery.value;m.addSpinner(),g.getFilms("search",t,i).then((n=>{if(0===n.results.length)return v.classList.remove("visually-hidden"),setTimeout((()=>{v.classList.add("visually-hidden")}),4500),void m.removeSpinner();(0,c.saveDataToLocalStorage)(d.FILMS_DATA,n.results),(0,o.renderFilmsToGallery)(n.results),m.removeSpinner();const s=new(e(a))(u,{totalItems:`${n.total_results}`,itemsPerPage:20,visiblePages:5,centerAlign:!0});s.reset(n.total_results),s.on("beforeMove",(e=>{m.addSpinner(),t=e.page,g.getFilms("search",t,i).then((e=>{e.results&&((0,o.renderFilmsToGallery)(e.results),(0,c.saveDataToLocalStorage)(d.FILMS_DATA,e.results),window.scrollTo({behavior:"smooth",top:0}),m.removeSpinner())}))}))})).catch((e=>console.log(e))).finally(h.reset())})),s("4Ro6a");({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>800?this.show():this.hide()})),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();const f=[{name:"Aleks Pastukhov",text:"1",img:"./images/team/1.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Nikita Osokin",text:"2",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"# "},{name:"Anastasia Knihnitska",text:"3",img:"./images/team/3.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Oleh Buhaichuk",text:"4",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Ivan Chmil",text:"5",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Oleksandr Filippov",text:"6",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Andrey Telnov",text:"7",img:"./images/team/7.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Mykhaylo Yervachov",text:"8",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Mykhailo Vasyliuk",text:"9",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Slava Antolyk",text:"10",img:"./images/team/10.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Bohdan Hromchak",text:"11",img:"./images/team/11.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Egor",text:"12",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"#"},{name:"Kostya",text:"13",img:"./images/team/0.jpg",ml:"#",tg:"#",ln:"#",git:"#"}],_={openModalBtn:document.querySelector(".footer__but"),closeModalBtn:document.querySelector("[data-modal-students-close]"),modal:document.querySelector("[data-modal-students]"),tumb:document.querySelector(".inverted_tumb"),btnLeft:document.querySelector(".modal_students_slide_left"),btnRight:document.querySelector(".modal_students_slide_right")};_.openModalBtn.addEventListener("click",(function(){_.modal.classList.remove("visually-hidden"),_.tumb.innerHTML=(e=f,` <img class="modal_foto" src="${e[0].img}" alt="" width="200" height="200" />\n      <div>\n        <h3 class="modal_students_name">${e[0].name}</h3>\n        <ul class="modal_list">\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[0].ml}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-envelope"></use>\n                </svg>\n              </div>\n              <span class="modal_list_text" >      \n                 E-mail\n              </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[0].tg}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-send"></use>\n                </svg>\n              </div>\n                <span class="modal_list_text">\n                 Telegram    \n             </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[0].ln}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-linkedin"></use>\n                </svg>\n              </div>\n                <span class="modal_list_text">\n                 Linkedin    \n              </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[0].git}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-github"></use>\n                </svg>\n              </div>\n                <span class="modal_list_text">\n                 GitHub    \n             </span></a>\n          </li>\n        </ul>\n      </div>`);var e})),_.closeModalBtn.addEventListener("click",(function(){_.modal.classList.add("visually-hidden"),p=0})),_.btnRight.addEventListener("click",(function(){p+=1,_.tumb.innerHTML=b(f,p),console.log(p),p>=1&&_.btnLeft.classList.remove("visually-hidden");p>=12&&_.btnRight.classList.add("visually-hidden")})),_.btnLeft.addEventListener("click",(function(){p-=1,_.tumb.innerHTML=b(f,p),p>=1&&_.btnRight.classList.remove("visually-hidden");p<=0&&_.btnLeft.classList.add("visually-hidden")}));let p=0;function b(e,n){return` <img src="${e[n].img}" alt="" width="200" height="200" />\n      <div>\n        <h3 class="modal_students_name">${e[n].name}</h3>\n        <ul class="modal_list">\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[n].ml}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-envelope"></use>\n                </svg>\n              </div>\n              E-mail</a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[n].tg}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-send"></use>\n                </svg>\n              </div>\n                Telegram</a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[n].ln}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-linkedin"></use>\n                </svg>\n              </div>\n                Linkedin</a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${e[n].git}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="./images/icons.svg#icon-github"></use>\n                </svg>\n              </div>\n                GitHub</a>\n          </li>\n        </ul>\n      </div>`}(function e(n,t,i){function s(o,a){if(!t[o]){if(!n[o]){var r=void 0;if(!a&&r)return r(o,!0);if(l)return l(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[o]={exports:{}};n[o][0].call(d.exports,(function(e){return s(n[o][1][e]||e)}),d,d.exports,e,n,t,i)}return t[o].exports}for(var l=void 0,o=0;o<i.length;o++)s(i[o]);return s})({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var i=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},s=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},l=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=l,t.create=function(e,n){var t=function(e,n){var t=i('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),l=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return l.appendChild(e)}));var o=s(l,"IMG"),a=s(l,"VIDEO"),r=s(l,"IFRAME");return!0===o&&t.classList.add("basicLightbox--img"),!0===a&&t.classList.add("basicLightbox--video"),!0===r&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),o=function(e){return!1!==n.onClose(a)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===l(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(a)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&o()}));var a={element:function(){return t},visible:function(){return l(t)},show:function(e){return!1!==n.onShow(a)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1),s("8Mjv6"),s("5xtVg"),s("civ12"),s("aH2sr")}();
//# sourceMappingURL=index.c56a9e0c.js.map
