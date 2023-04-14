import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <div className='button-container'>
            <Button
                variant="info"
                size='lg'
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Loading…' : 'Convert'}
            </Button>
        </div>
    );
}

export default LoadingButton;