import { ifcDataTypes as d } from "../../utils/ifc-data-types.js";
import { ifcClass } from "../../utils/globalProperties.js";
import { getName, ifcTypes as t } from "../../utils/ifc-types.js";

const IfcCartesianPoint = {
  [ifcClass]: getName(t.IfcCartesianPoint),
  Coordinates: d.numberSet,
};

export { IfcCartesianPoint };