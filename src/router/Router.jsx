import React, {useState, Suspense} from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import useEffectLocation from "../hooks/useEffectLocation";

import './style.scss';


const Demo2 = React.lazy(() => import("../views/home/Demo2"));



const Router = () => {

    const [transPage, setTransPage] = useState("in");
    const scrollbar: React.MutableRefObject<null | Scrollbar> = useSelector(state => state.scrollbar);

    const location = useEffectLocation((l) => {
        setTransPage("out");
    })

    const onAnimateEnd = () => {
        if (transPage !== "out") return;
        scrollbar.current?.scrollTo(0, 0, 0);
        window.scrollTo({left: 0, top: 0});
        setTransPage("in");
    }


    return (

        <div id="dsn-content" className={`dsn-transition-page dsn-animate-${transPage}`}
             onAnimationEnd={onAnimateEnd}
        >
            <Suspense fallback={<div className="background-main h-100-v" />}>
                <Routes location={location}>

                    <Route path="/" element={<Demo2/>}/>
                    <Route exact path="*" element={<h1>Not Found</h1>}/>
                </Routes>
            </Suspense>
        </div>


    );
}

export default React.memo(Router);