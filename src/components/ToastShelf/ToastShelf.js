import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts = [], dismissToast }) {
    console.log(toasts);
    if (toasts.length === 0) return null;

    return (
        <ol
            className={styles.wrapper}
            role="region"
            aria-live="assertive"
            aria-label="Notification"
        >
            {toasts.map((toast) => (
                <li key={toast.id} className={styles.toastWrapper}>
                    <Toast
                        variant={toast.variant}
                        onDismiss={() => dismissToast(toast.id)}
                    >
                        {toast.message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default React.memo(ToastShelf);
