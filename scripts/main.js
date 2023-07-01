import { world, system, MinecraftBlockTypes} from "@minecraft/server"
import * as editor from "@minecraft/server-editor";
import * as smoother from "./modules/smoother";
import * as blendFill from "./modules/blend_fill";
import * as perlin from "./modules/perlin";
import * as sphere from "./modules/sphere";
import * as cylinder from "./modules/cylinder"

sphere.default();
smoother.default();
blendFill.default();
perlin.default();
cylinder.default();