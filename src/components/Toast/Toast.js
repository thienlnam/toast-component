import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ variant, onDismiss, children }) {
    const ToastIcon = ICONS_BY_VARIANT[variant];
    const toastClassName = `${styles.toast} ${styles[variant]}`;
    return (
        <div className={toastClassName}>
            <div className={styles.iconContainer}>
                <ToastIcon size={24} />
            </div>
            <p className={styles.content}>{children}</p>
            <button
                className={styles.closeButton}
                onClick={onDismiss}
                aria-label="Dismiss message"
                aria-live="off"
            >
                <X size={24} />
            </button>
        </div>
    );
}

export default React.memo(Toast);
