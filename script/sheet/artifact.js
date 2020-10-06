export class MutantYearZeroArtifactSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["mutant-year-zero", "sheet", "item"],
            template: "systems/mutant-year-zero/model/artifact.html",
            width: 600,
            height: 700,
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
