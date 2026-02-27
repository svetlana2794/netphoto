import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare,
faCheckSquare} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Checkbox({check}) {
return (
<div className="checkbox">
<FontAwesomeIcon icon={check ? faCheckSquare : faSquare} size="1x" color={check ? "#4269FF" : "#9BC6FF"}/>
</div>
);
}

export default Checkbox;
