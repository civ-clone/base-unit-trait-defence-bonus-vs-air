# base-unit-trait-defence-bonus-vs-air

The `DefenceBonusVsAir` unit trait: a unit type with it defends better against aircraft.

A unit type with this trait defends at `multiplier` times its strength against an air attacker, and at `vsSingleUse` times against a `SingleUse` one (a missile), which is `multiplier` unless given.

For example: Civ2: flag 13 (AEGIS Cruiser, `new DefenceBonusVsAir(3, 5)`).

A game declares which of its unit classes have the trait with `UnitTraits` rules from `@civ-clone/core-unit`, and its
rules ask `unit.hasTrait(DefenceBonusVsAir)`:

```ts
import DefenceBonusVsAir from '@civ-clone/base-unit-trait-defence-bonus-vs-air/DefenceBonusVsAir';
import { unitTraits } from '@civ-clone/core-unit/Rules/UnitTraits';

ruleRegistry.register(...unitTraits('civ2-unit:unit/trait', AEGISCruiser, new DefenceBonusVsAir(3, 5)));
```

A rule that needs its parameters reads the traits themselves: `unit.traits(DefenceBonusVsAir)` for a unit, or
`traitsOf(UnitClass, DefenceBonusVsAir, ruleRegistry)` (from `@civ-clone/core-unit/traits`) for a class. A type may be declared
with more than one:

```ts
unit.traits(DefenceBonusVsAir).map((trait: DefenceBonusVsAir): number => trait.vsSingleUse);
```

Part of the unit traits design (civ-clone/web-renderer#1008).
