import React from 'react';
import ToastShelf from '../ToastShelf/ToastShelf';
import useEscapeKey from '../Hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    useEscapeKey(() => {
        if (toasts.length > 0) {
            setToasts([]);
        }
    });

    const addToast = (message, variant) => {
        setToasts((currentToasts) => {
            return [
                ...currentToasts,
                {
                    id: Math.random(),
                    message,
                    variant,
                },
            ];
        });
    };

    const dismissToast = React.useCallback((id) => {
        setToasts((currentToasts) => {
            return currentToasts.filter((toast) => toast.id !== id);
        });
    }, []);

    const value = React.useMemo(() => {
        return {
            toasts,
            addToast,
        };
    }, [toasts]);

    return (
        <ToastContext.Provider value={value}>
            <ToastShelf toasts={toasts} dismissToast={dismissToast} />
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
