console.log("Welcome to the main module");

import {createPlan} from './plan.js';

const yearlyPlan = createPlan()


import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant, usePlants } from './field.js';
import { createSunflower } from './seeds/sunflower.js';

const asparagusSeed = createAsparagus() 
console.log(asparagusSeed)

const tempSeed = createSunflower()

addPlant(tempSeed);


const field = usePlants();



