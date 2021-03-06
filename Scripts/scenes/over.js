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
    var Over = /** @class */ (function (_super) {
        __extends(Over, _super);
        // public properties
        // constructor
        function Over() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Over.prototype.Start = function () {
            this._space = new objects.Space();
            this._gameOverLabel = new objects.Label("Game Over", "30px", "PressStart2P", "#FFFFFF", 320, 240, true);
            this._successLabel = new objects.Label("MISSION COMPLETE!", "30px", "PressStart2P", "#FFFFFF", 320, 240, true);
            this._restartButton = new objects.Button("resetButton", 320, 360, true);
            /*
            TODO: victory music plays, but doesn't stop playing after reset.
            if (
              managers.Mission.enemiesDestroyed >=
                managers.Mission.mission1Objective &&
              managers.Game.scoreBoard.Lives != 0
            ) {
              // play victory sound when the level starts
              this._victoryMusic = createjs.Sound.play("victory");
              this._victoryMusic.volume = 0.1;
              this._victoryMusic.loop = -1; // loop forever
            }
            */
            this.Main();
        };
        Over.prototype.Update = function () {
            this._space.Update();
        };
        Over.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Over.prototype.Reset = function () { };
        Over.prototype.Main = function () {
            // adds ocean to the stage
            this.addChild(this._space);
            if (managers.Mission.enemiesDestroyed >=
                managers.Mission.mission1Objective &&
                managers.Game.scoreBoard.Lives != 0) {
                this.addChild(this._successLabel);
            }
            else {
                this.addChild(this._gameOverLabel);
            }
            this.addChild(this._restartButton);
            this._restartButton.on("click", function () {
                managers.Game.currentState = config.Scene.PLAY;
                managers.Mission.Reset();
                managers.Game.scoreBoard.Reset();
            });
            managers.Game.scoreBoard.AddTotalDestroyedLabel(this);
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map