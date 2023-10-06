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
        <div className="absolute overflow-hidden oveflow-hidden"
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
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="482.66667" height="365.33334" viewBox="0,0,482.66667,365.33334">
                <g transform="translate(-5.75,-2.75)">
                <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M456.5,3.5h-424.5l-25.5,24.16667v308.5"/>
                <motion.path
                variants={pathVariants}
                d="M487.66667,15.33334h-468v352"/>
                </g></g>
            </motion.svg>
        </div>
    )
}

export function BottomRightDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute overflow-hidden"
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
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="482.66667" height="365.33334" viewBox="0,0,482.66667,365.33334">
                <g transform="translate(-5.75,-2.75)">
                <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M487.66667,34.66667v308.5l-25.5,24.16667h-424.5" data-paper-data="{&quot;index&quot;:null}"/>
                <motion.path
                variants={pathVariants}
                d="M474.5,3.5v352h-468" data-paper-data="{&quot;index&quot;:null}"/>
                </g></g>
            </motion.svg>
        </div>
    )
}

export function RightDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute overflow-hidden"
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
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="13.5" height="269.5" viewBox="0,0,13.5,269.5"><g transform="translate(-239.25,-45.25)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path variants={pathVariants} d="M240,46v268"/>
                <motion.path variants={pathVariants} d="M252,63.93334v96.8l-11.73333,19.2l11.73333,20.4v96"/></g></g>
            </motion.svg>
        </div>
    )
}

export function LeftDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){
    
    return (
        <div className="absolute overflow-hidden"
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
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="13.5" height="269.5" viewBox="0,0,13.5,269.5"><g transform="translate(-239.25,-45.25)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path variants={pathVariants} d="M252,46v268" data-paper-data="{&quot;index&quot;:null}"/>
                <motion.path variants={pathVariants} d="M240,63.93334v96.8l11.73333,19.2l-11.73333,20.4v96" data-paper-data="{&quot;index&quot;:null}"/></g></g>
            </motion.svg>
        </div>
    )
}

export function BottomDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute overflow-hidden"
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

export function TopRightDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute overflow-hidden"
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
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="482.66667" height="365.33334" viewBox="0,0,482.66667,365.33334"><g transform="translate(-5.75,-2.75)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path variants={pathVariants} d="M37.66667,3.5h424.5l25.5,24.16666v308.5" data-paper-data="{&quot;index&quot;:null}"/>
                <motion.path variants={pathVariants} d="M6.5,15.33333h468v352" data-paper-data="{&quot;index&quot;:null}"/></g></g>
            </motion.svg>
        </div>
    )
}

export function BottomLeftDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute overflow-hidden"
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
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="482.66667" height="365.33334" viewBox="0,0,482.66667,365.33334"><g transform="translate(-5.75,-2.75)"><g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path variants={pathVariants} d="M456.5,367.33334h-424.5l-25.5,-24.16666v-308.5" data-paper-data="{&quot;index&quot;:null}"/>
                <motion.path variants={pathVariants} d="M487.66667,355.5h-468v-352" data-paper-data="{&quot;index&quot;:null}"/></g></g>
            </motion.svg>
        </div>
    )
}

export function VerticalDeco(props: {top?: number, left?: number, bottom?: number, right?: number}){

    return (
        <div className="absolute overflow-hidden"
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
            version="1.1" xmlns="http://www.w3.org/2000/svg" width="12.66808" height="269.58333" viewBox="0,0,12.66808,269.58333">
                <g transform="translate(-239.13263,-45.16667)">
                <g data-paper-data="{&quot;isPaintingLayer&quot;:true}" fill="none" fill-rule="nonzero" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" style={{mixBlendMode: 'normal'}}>
                <motion.path
                variants={pathVariants}
                d="M240,46v268"/>
                <motion.path
                variants={pathVariants}
                d="M247.33334,63.93334v96.8l-7.4,19.2l7.4,20.4v96"/>
                <g data-paper-data="{&quot;index&quot;:null}">
                <motion.path
                variants={pathVariants}
                d="M250.93334,45.91667v268"/>
                <motion.path
                variants={pathVariants}
                d="M243.6,63.85v96.8l7.4,19.2l-7.4,20.4v96"/>
                </g></g></g>
            </motion.svg>
        </div>
    )
}