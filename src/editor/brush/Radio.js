import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Radio({check}) {
return (
<div className="radio">
<FontAwesomeIcon icon={faCircle} size="1x" color={check ? "#4269FF" : "#9BC6FF"}/>
</div>
);
}

export default Radio;
