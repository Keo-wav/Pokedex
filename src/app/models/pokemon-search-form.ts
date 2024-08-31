export class PokemonSearchForm {
    name: string = "";

    constructor(name: string) {
        this.name = name;
    }

    setNom(name: string) {
        this.name = name;
    }
}
