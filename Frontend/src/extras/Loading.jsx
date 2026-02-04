import "../css/Loading.scss";
export function Loading() {
    return (
        <>
            <div className="background-1 loadingScreen"></div>
            <section className="loading-data">
                <h2 className="loading-text text-center text-uppercase high2">
                    <span className="char">L</span>
                    <span className="char">o</span>
                    <span className="char">a</span>
                    <span className="char">d</span>
                    <span className="char">i</span>
                    <span className="char">n</span>
                    <span className="char">g</span>
                </h2>
            </section>
        </>
    );
}

export function Logo() {
    return (
        <>
            <div class="logo-container">
              <h1 id="page-logo">RedFolderGames</h1>
            </div>
        </>
    )
}

