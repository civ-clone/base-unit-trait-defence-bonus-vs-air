import UnitTrait from '@civ-clone/core-unit/UnitTrait';

/**
 * Defends at `multiplier` times its strength against an air attacker, and at `vsSingleUse` times against a `SingleUse`
 *  one (a missile): `multiplier` unless given.
 */
export class DefenceBonusVsAir extends UnitTrait {
  readonly multiplier: number;
  readonly vsSingleUse: number;

  constructor(multiplier: number, vsSingleUse: number = multiplier) {
    super();

    this.multiplier = multiplier;
    this.vsSingleUse = vsSingleUse;
  }
}

export default DefenceBonusVsAir;
