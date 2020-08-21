import { createCorn } from "./seeds/corn.js";

const plantsGrowing=[];

export const addPlant = (seed) => {
    plantsGrowing.push(seed)
}
export const usePlants =() => {
    return plantsGrowing
}