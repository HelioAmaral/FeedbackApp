import { checkPropTypes } from "prop-types";

function Button({children, version, type, isDisabled}){
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>

    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.checkPropTypes = {
    children: checkPropTypes.node,
    version: checkPropTypes.string,
    type: checkPropTypes.string,
    isDisabled: checkPropTypes.bool,
}

export default Button;