import {MutantYearZeroActor} from "./actor/mutant-year-zero.js";
import {MutantYearZeroCharacterSheet} from "./sheet/character.js";
import {MutantYearZeroMonsterSheet} from "./sheet/monster.js";
import {MutantYearZeroStrongholdSheet} from "./sheet/stronghold.js";
import {MutantYearZeroWeaponSheet} from "./sheet/weapon.js";
import {MutantYearZeroArmorSheet} from "./sheet/armor.js";
import {MutantYearZeroArtifactSheet} from "./sheet/artifact.js";
import {MutantYearZeroGearSheet} from "./sheet/gear.js";
import {MutantYearZeroRawMaterialSheet} from "./sheet/raw-material.js";
import {MutantYearZeroSpellSheet} from "./sheet/spell.js";
import {MutantYearZeroTalentSheet} from "./sheet/talent.js";
import {MutantYearZeroCriticalInjurySheet} from "./sheet/critical-injury.js";
import {MutantYearZeroMonsterTalentSheet} from "./sheet/monster-talent.js";
import {MutantYearZeroMonsterAttackSheet} from "./sheet/monster-attack.js";
import {MutantYearZeroBuildingSheet} from "./sheet/building.js";
import {MutantYearZeroHirelingSheet} from "./sheet/hireling.js";

Hooks.once("init", async function () {
    CONFIG.Combat.initiative = {formula: "1d6", decimals: 0};
    CONFIG.Actor.entityClass = MutantYearZeroActor;
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("mutant-year-zero", MutantYearZeroCharacterSheet, {types: ["character"], makeDefault: true});
    Actors.registerSheet("mutant-year-zero", MutantYearZeroMonsterSheet, {types: ["monster"], makeDefault: true});
    Actors.registerSheet("mutant-year-zero", MutantYearZeroStrongholdSheet, {types: ["stronghold"], makeDefault: true});
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mutant-year-zero", MutantYearZeroWeaponSheet, {types: ["weapon"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroArmorSheet, {types: ["armor"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroArtifactSheet, {types: ["artifact"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroGearSheet, {types: ["gear"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroRawMaterialSheet, {types: ["rawMaterial"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroSpellSheet, {types: ["spell"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroTalentSheet, {types: ["talent"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroCriticalInjurySheet, {types: ["criticalInjury"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroMonsterTalentSheet, {types: ["monsterTalent"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroMonsterAttackSheet, {types: ["monsterAttack"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroBuildingSheet, {types: ["building"], makeDefault: true});
    Items.registerSheet("mutant-year-zero", MutantYearZeroHirelingSheet, {types: ["hireling"], makeDefault: true});
    preloadHandlebarsTemplates()
});

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/mutant-year-zero/model/character.html",
        "systems/mutant-year-zero/model/monster.html",
        "systems/mutant-year-zero/model/stronghold.html",
        "systems/mutant-year-zero/model/weapon.html",
        "systems/mutant-year-zero/model/armor.html",
        "systems/mutant-year-zero/model/monster-talent.html",
        "systems/mutant-year-zero/model/monster-attack.html",
        "systems/mutant-year-zero/model/artifact.html",
        "systems/mutant-year-zero/model/gear.html",
        "systems/mutant-year-zero/model/raw-material.html",
        "systems/mutant-year-zero/model/talent.html",
        "systems/mutant-year-zero/model/spell.html",
        "systems/mutant-year-zero/model/critical-injury.html",
        "systems/mutant-year-zero/model/building.html",
        "systems/mutant-year-zero/model/hireling.html",
        "systems/mutant-year-zero/model/tab/main.html",
        "systems/mutant-year-zero/model/tab/combat.html",
        "systems/mutant-year-zero/model/tab/combat-monster.html",
        "systems/mutant-year-zero/model/tab/talent.html",
        "systems/mutant-year-zero/model/tab/spell.html",
        "systems/mutant-year-zero/model/tab/gear.html",
        "systems/mutant-year-zero/model/tab/gear-monster.html",
        "systems/mutant-year-zero/model/tab/bio.html",
        "systems/mutant-year-zero/model/tab/building-stronghold.html",
        "systems/mutant-year-zero/model/tab/hireling-stronghold.html",
        "systems/mutant-year-zero/model/tab/gear-stronghold.html"
    ];
    return loadTemplates(templatePaths);
}
