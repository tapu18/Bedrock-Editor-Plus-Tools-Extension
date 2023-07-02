import { world, system, MinecraftBlockTypes} from "@minecraft/server"
import * as editor from "@minecraft/server-editor";
import * as smoother from "./extensions/smoother";
import * as blendFill from "./extensions/blend_fill";
import * as perlin from "./extensions/perlin";
import * as sphere from "./extensions/sphere";
import * as cylinder from "./extensions/cylinder"

sphere.default();
cylinder.default();
smoother.default();
blendFill.default();
perlin.default();
