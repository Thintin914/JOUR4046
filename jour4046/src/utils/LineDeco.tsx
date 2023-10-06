import { motion } from "framer-motion"


const pathVariants = {
    hidden: { 
        pathLength: 0,
        stroke: '#ffffff'
    },
    visible: {
        pathLength: 1,
        stroke: '#e5d19b',
        transition: {
            duration: 4,
            ease: "easeIn"
        }
    }
}

export function TopLeftDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){


    return (
        <div className="absolute"
        style={{
            top: props.top,
            left: props.left,
            bottom: props.bottom,
            right: props.right
        }}>
            <motion.svg
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                version="1.1" xmlns="http://www.w3.org/2000/svg" width="474.19561" height="350.59776" viewBox="0,0,474.19561,350.59776"><g transform="translate(-1.16471,-2.70952)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M474.61032,3.45953h-472.69561l0,349.09776"/>
                </g></g>
            </motion.svg>
        </div>
    )
}

export function BottomRightDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute"
            style={{
                top: props.top,
                left: props.left,
                bottom: props.bottom,
                right: props.right
            }}>
            <motion.svg
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                version="1.1" xmlns="http://www.w3.org/2000/svg" width="474.19561" height="350.59776" viewBox="0,0,474.19561,350.59776">
                <g transform="translate(-1.16471,-2.70953)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M474.61032,3.45953v349.09776h-472.69561" data-paper-data="{&quot;index&quot;:null}"/>
                </g></g>
            </motion.svg>
        </div>
    )
}

export function RightDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute"
            style={{
                top: props.top,
                left: props.left,
                bottom: props.bottom,
                right: props.right
            }}>
            <motion.svg
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="1.5" height="350.59776" viewBox="0,0,1.5,350.59776"><g transform="translate(-473.86032,-2.70953)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M474.61032,3.45953v349.09776" data-paper-data="{&quot;index&quot;:null}"/></g></g>
            </motion.svg >
        </div>
    )
}

export function LeftDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute"
            style={{
                top: props.top,
                left: props.left,
                bottom: props.bottom,
                right: props.right
            }}>
            <motion.svg
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="1.5" height="350.59776" viewBox="0,0,1.5,350.59776"><g transform="translate(-1.16471,-2.70952)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M1.91471,352.55729v-349.09776" data-paper-data="{&quot;index&quot;:null}"/></g></g>
            </motion.svg>
        </div>
    )
}

export function BottomDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute"
            style={{
                top: props.top,
                left: props.left,
                bottom: props.bottom,
                right: props.right
            }}>
            <motion.svg
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="474.19561" height="18.07381" viewBox="0,0,474.19561,18.07381"><g transform="translate(-1.16471,-351.53292)">
                <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M474.61032,352.55729l-214.51919,0.22746l-19.67642,15.85587l-19.99166,-16.35737l-218.50834,0.27403" data-paper-data="{&quot;index&quot;:null}"/></g></g>
            </motion.svg>
        </div>
    )
}