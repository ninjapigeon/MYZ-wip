export class MutantYearZeroBuildingSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["mutant-year-zero", "sheet", "item"],
            template: "systems/mutant-year-zero/model/building.html",
            width: 400,
            height: 485,
            resizable: false
        });
    }

    getData() {
        const data = super.getData();
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);
    }
}
