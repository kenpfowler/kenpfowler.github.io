var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Asteroid = /** @class */ (function (_super) {
        __extends(Asteroid, _super);
        // public properties
        // constructor
        function Asteroid() {
            var _this = _super.call(this, "asteroid") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Asteroid.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        };
        Asteroid.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Asteroid.prototype.Reset = function () {
            this._verticalSpeed = Math.floor(Math.random() * 5 + 5);
            this._horizontalSpeed = Math.floor(Math.random() * 4 - 4);
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
            this.IsColliding = false;
        };
        Asteroid.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Asteroid.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Asteroid.prototype.Destroy = function () { };
        return Asteroid;
    }(objects.SpriteGameObject));
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteriod.js.map