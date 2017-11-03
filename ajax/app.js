/**
 * Created by Administrator on 2017/8/21.
 */
(function(){
    function people(name){

        var _this={}
        _this._name = name;
        _this.sayhello = function () {
            alert("hello"+_this._name);
        }
        return _this;
    }
    window.people = people;
}());
function man(name){

    var _this = people(name);
    _this._name = name;
    var supersay = _this.sayhello;
    _this.sayhello = function(){
        supersay.call(_this);
        alert("mansayhello"+_this._name);
    }
    return _this;
}
var s = new man("tail");
s.sayhello();