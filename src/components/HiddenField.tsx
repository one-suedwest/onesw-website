import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface Props {
    prefixValue: string;
    suffixValue: string;
    spacingRight?: boolean;
}

const HiddenField = ({ prefixValue, suffixValue, spacingRight }: Props) => {
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        if (counter > 0) {
            const timer = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [counter]);

    const getContent = () => {
        if (counter > 0) {
            return `Wird angezeigt in ${counter} Sekunden.`;
        }
        return `${prefixValue}${suffixValue}`.split('').map((char, index) => <span key={index}>{char}</span>);
    };

    return (
        <span className={cn('pl-1', spacingRight && 'pr-1', counter > 0 && 'text-cyan-300')}>
            {getContent()}
        </span>
    );
}

export default HiddenField;
