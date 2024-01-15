import { useEffect } from 'react';

const useScript = (urls: string[]) => {
    useEffect(() => {
        urls.forEach(url => {
            if (document.querySelector('#dependenciesjs')) return
            const script = document.createElement('script');
            script.id = "dependenciesjs"
            script.src = url;
            script.async = true;
            document.body.appendChild(script);

            return () => { }
        })
    }, [urls]);
};

export default useScript;