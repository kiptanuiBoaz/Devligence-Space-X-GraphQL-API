import { DangerBtnPropTypes } from '../../types/types';
import "./action-btn.scss";

export const ActionBtn = ({ children, clickHandler }: DangerBtnPropTypes) => {
    return (
        <button
            className="danger-btn"
            onClick={(e) => {
                e.preventDefault();
                clickHandler();
            }}
        >
            {children}
        </button>
    )
} 