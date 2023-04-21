import React, { useState } from 'react';
import styles from '@/components/button/button.module.scss';
import Spinner from '../spinner/spinner';

interface Props {
    text: string;
    onClick?: () => void | Promise<void>;
    fill?: boolean
    outline?: boolean
    underline?: boolean
    disabled?: boolean
}

const Button: React.FC<Props> = ({ text, onClick, fill = true, outline = false, underline = false, disabled = false }) => {
    const [isSpinning, setIsSpinning] = useState<boolean>(false);

    const wrapperClasses = [
        styles.wrapper,
        'totally-center',
        fill && styles.fill,
        outline && styles.outline,
        underline && styles.underline,
        (disabled || isSpinning) && styles.disabled,
    ].filter(Boolean).join(' ');

    const handleOnClickFunction = async () => {
        if (!onClick) return;
        setIsSpinning(true);
        await onClick();
        setIsSpinning(false);
    }


    return (
        <button className={wrapperClasses} onClick={handleOnClickFunction} disabled={disabled || isSpinning}>
            {isSpinning ? <Spinner color={fill ? "white" : "black"} /> : text}
        </button>
    );
};

export default Button;
