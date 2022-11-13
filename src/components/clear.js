import React from "react";

const Clear = (props) => {
    return (
        <div className="button-clear" onClick={props.manejarClear} >
            Clear
        </div>
    );
}
export default Clear;