import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import RadioButton from '../RadioButton';

import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const { addToast } = React.useContext(ToastContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addToast(message, variant);
        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className={styles.controlsWrapper}>
                    <div className={styles.row}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                            style={{ alignSelf: 'baseline' }}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                            <textarea
                                id="message"
                                className={styles.messageInput}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <RadioButton
                                id="variant-notice"
                                name="variant"
                                value="notice"
                                isChecked={variant === VARIANT_OPTIONS[0]}
                                onChange={(e) => setVariant(e.target.value)}
                            >
                                notice
                            </RadioButton>
                            <RadioButton
                                id="variant-warning"
                                name="variant"
                                value="warning"
                                isChecked={variant === VARIANT_OPTIONS[1]}
                                onChange={(e) => setVariant(e.target.value)}
                            >
                                warning
                            </RadioButton>

                            <RadioButton
                                id="variant-success"
                                name="variant"
                                value="success"
                                isChecked={variant === VARIANT_OPTIONS[2]}
                                onChange={(e) => setVariant(e.target.value)}
                            >
                                success
                            </RadioButton>

                            <RadioButton
                                id="variant-error"
                                name="variant"
                                value="error"
                                isChecked={variant === VARIANT_OPTIONS[3]}
                                onChange={(e) => setVariant(e.target.value)}
                            >
                                error
                            </RadioButton>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label} />
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button>Pop Toast!</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
