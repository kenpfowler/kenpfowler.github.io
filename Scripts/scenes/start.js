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
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // public properties
        // constructor
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._space = new objects.Space();
            this._welcomeLabel = new objects.Label("Sentinel", "30px", "PressStart2P", "#FFFFFF", 255, 240, true);
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this.Main();
        };
        Start.prototype.Update = function () {
            this._space.Update();
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Reset = function () { };
        Start.prototype.Main = function () {
            // adds ocean to the stage
            this.addChild(this._space);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                managers.Game.currentState = config.Scene.BRIEFING;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map