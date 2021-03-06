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
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // public properties
        // constructor
        function Enemy() {
            var _this = _super.call(this, "enemy") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Enemy.prototype._move = function () {
            this.y += this._verticalSpeed;
            this._updatePosition();
        };
        Enemy.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
            if (createjs.Ticker.getTicks() % 20 == 0 && this.y > 0) {
                managers.Game.phaserManager.FirePhaser(util.Vector2.Add(this.Position, this._phaserSpawn), util.Vector2.down());
            }
        };
        // public methods
        Enemy.prototype.Reset = function () {
            this._verticalSpeed = Math.floor(Math.random() * 2 + 4);
            this.y = -this.Height * 20; // Math.floor((Math.random() * 10) + 5);
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
            this.IsColliding = false;
        };
        Enemy.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this._phaserSpawn = new util.Vector2(0, 5 + this.HalfHeight);
            this.Reset();
        };
        Enemy.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Enemy.prototype.Destroy = function () { };
        return Enemy;
    }(objects.SpriteGameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map