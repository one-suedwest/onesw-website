import { useEffect, useState } from 'react';

interface Props {
    prefixValue: string;
    suffixValue: string;
}

const CountdownComponent = ({ prefixValue, suffixValue }: Props) => {
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
        <span className={counter > 0 ? 'text-orange-500' : ''}>
            {getContent()}
        </span>
    );
}

export default CountdownComponent;
