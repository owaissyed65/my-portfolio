import { useState, useEffect, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from "framer-motion";
function NumInc({ num }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        // const controls = !once
        //     ? animate(count, isInView ? num : 0, {
        //         duration: 2,
        //         onComplete: () => setOnce(true),
        //     })
        //     : null;
       animate(count, isInView ? num : 0, {
            duration: 2,
        });

        // console.log(isInView)
        // return controls?.stop;
    }, [isInView]);
      return <motion.div  ref={ref}>{rounded}</motion.div>;
}

export default NumInc;
