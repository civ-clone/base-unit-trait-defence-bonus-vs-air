"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefenceBonusVsAir = void 0;
const UnitTrait_1 = require("@civ-clone/core-unit/UnitTrait");
/**
 * Defends at `multiplier` times its strength against an air attacker, and at `vsSingleUse` times against a `SingleUse`
 *  one (a missile): `multiplier` unless given.
 */
class DefenceBonusVsAir extends UnitTrait_1.default {
    constructor(multiplier, vsSingleUse = multiplier) {
        super();
        this.multiplier = multiplier;
        this.vsSingleUse = vsSingleUse;
    }
}
exports.DefenceBonusVsAir = DefenceBonusVsAir;
exports.default = DefenceBonusVsAir;
//# sourceMappingURL=DefenceBonusVsAir.js.map