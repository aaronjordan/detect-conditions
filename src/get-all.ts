import { canReach as moduleSync } from "run-conditions/can-reach/module-sync";
import { canReach as nodeAddons } from "run-conditions/can-reach/node-addons";
import { canReach as import_ } from "run-conditions/can-reach/import";
import { canReach as require_ } from "run-conditions/can-reach/require";
import { canReach as development } from "run-conditions/can-reach/development";
import { canReach as production } from "run-conditions/can-reach/production";
import { canReach as module } from "run-conditions/can-reach/module";
import { canReach as browser } from "run-conditions/can-reach/browser";
import { canReach as kiesel } from "run-conditions/can-reach/kiesel";
import { canReach as wasmer } from "run-conditions/can-reach/wasmer";
import { canReach as moddable } from "run-conditions/can-reach/moddable";
import { canReach as lagon } from "run-conditions/can-reach/lagon";
import { canReach as arvancloud } from "run-conditions/can-reach/arvancloud";
import { canReach as azion } from "run-conditions/can-reach/azion";
import { canReach as fastly } from "run-conditions/can-reach/fastly";
import { canReach as edgeRoutine } from "run-conditions/can-reach/edge-routine";
import { canReach as edgeLight } from "run-conditions/can-reach/edge-light";
import { canReach as reactServer } from "run-conditions/can-reach/react-server";
import { canReach as netlify } from "run-conditions/can-reach/netlify";
import { canReach as workerd } from "run-conditions/can-reach/workerd";
import { canReach as reactNative } from "run-conditions/can-reach/react-native";
import { canReach as electron } from "run-conditions/can-reach/electron";
import { canReach as bun } from "run-conditions/can-reach/bun";
import { canReach as deno } from "run-conditions/can-reach/deno";
import { canReach as worklet } from "run-conditions/can-reach/worklet";
import { canReach as worker } from "run-conditions/can-reach/worker";
import { canReach as node } from "run-conditions/can-reach/node";
import { canReach as default_ } from "run-conditions/can-reach/default";

export function getAll() {
  return {
    "module-sync": moduleSync(),
    "node-addons": nodeAddons(),
    "import": import_(),
    "require": require_(),
    "development": development(),
    "production": production(),
    "module": module(),
    "browser": browser(),
    "kiesel": kiesel(),
    "wasmer": wasmer(),
    "moddable": moddable(),
    "lagon": lagon(),
    "arvancloud": arvancloud(),
    "azion": azion(),
    "fastly": fastly(),
    "edge-routine": edgeRoutine(),
    "edge-light": edgeLight(),
    "react-server": reactServer(),
    "netlify": netlify(),
    "workerd": workerd(),
    "react-native": reactNative(),
    "electron": electron(),
    "bun": bun(),
    "deno": deno(),
    "worklet": worklet(),
    "worker": worker(),
    "node": node(),
    "default": default_()
  };
}