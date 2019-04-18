import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function useHeroku({ url }) {
    const [isHerokuLoading, setHerokuLoading] = useState(true);

    const wakeUpHeroku = async () => {
        const request = await fetch(url);
        if (request.ok) setHerokuLoading(false);
    };

    useEffect(() => {
        wakeUpHeroku();
    }, []);

    return isHerokuLoading;
}

useHeroku.propTypes = {
    url: PropTypes.string.isRequired
}