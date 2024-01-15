const LoaderWrap = () => (
    <div className="loader-wrap">
        <div className="preloader">
            <div className="preloader-close">x</div>
            <div id="handle-preloader" className="handle-preloader">
                <div className="animation-preloader">
                    <div className="spinner"></div>
                    <div className="txt-loading">
                        {
                            "CARNÍ".split('').map(letter => (
                                <span key={letter} data-text-preloader={letter} className="letters-loading"> {letter} </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export { LoaderWrap }