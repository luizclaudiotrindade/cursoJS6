"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lista =
/*#__PURE__*/
function () {
  function Lista() {
    _classCallCheck(this, Lista);

    this.lista = [];
  }

  _createClass(Lista, [{
    key: "addItem",
    value: function addItem() {
      this.lista.push('Item');
      console.log(this.lista);
    }
  }]);

  return Lista;
}();

var lista1 = new Lista();
lista1.addItem();

document.getElementById('item').onclick = function () {
  lista1.addItem();
}; //vetores
