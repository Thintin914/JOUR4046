import { useEffect } from "react"
import { CanvasBlock } from "./utils/glsl/CanvasBlock";
import { motion } from "framer-motion";
import { createCityscapeShader } from "./utils/glsl/cityscapeShader";
import {AiFillCaretDown} from 'react-icons/ai';
import { delay } from "./utils/delay";
import { HouseSellingBarChart } from "./HouseSellingBarChart";
import { HousePricePreSquareChart } from "./HousePricePreSquareChart";

export function Introduction(){

    const goToCaption = (name: string) =>{
        let t = document.getElementById(name);
        if (!t) return;

        let y = t.getBoundingClientRect().y - 50;
        window.scrollTo({top: y, left: 0, behavior: "smooth"})
    }

    useEffect(() =>{
        createCityscapeShader('intro-gl', ['./images/cityscape.jpg'], 0.001);

        const f = async() =>{
            await delay(5000);
            let t = document.getElementById('caption1');
            if (!t) return;

            t.style.overflow = ''
            t.style.whiteSpace = ''
        };
        f();
    }, [])

    return (
        <div className=" relative flex flex-col justify-start items-center w-full h-fit text-white">

            <div className=" fixed w-full h-screen -z-50">
                <CanvasBlock id="intro-gl" canvasW={1000} canvasH={1000} />
            </div>

            <motion.div className=" w-full p-5 lg:w-4/5 mt-10 h-fit flex flex-col justify-center items-start"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1}}>
                <p>社會/財經 — 樓市新聞</p>
                <motion.div id="topic" className=" text-2xl lg:text-5xl mt-5"
                    style={{
                        overflow: "hidden",
                        whiteSpace: 'nowrap'
                    }}
                    initial={{width: 0}}
                    animate={{width: '100%'}}
                    transition={{duration: 2, delay: 2, ease: "easeInOut"}}>
                    <p>樓市解密：樓價放緩是否最佳入市時機？</p>
                </motion.div>

                <div className="relative w-fit h-fit flex flex-row justify-center items-center pr-24 mt-10">

                    <p className="">撰文：張智芬，朱樂怡，胡朗霆，Vincent</p>

                    <div className=" absolute w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center  right-[0px]">
                        <p>F</p>
                    </div>

                    <div className=" absolute w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center  right-[-25px]">
                        <p>J</p>
                    </div>

                    <div className=" absolute w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center right-[-50px]">
                        <p>J</p>
                    </div>

                    <div className=" absolute w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center  right-[-75px]">
                        <p>V</p>
                    </div>

                </div>

                <p>出版：2023-009-29</p>

                <div className=" mt-5 w-full h-[50vh]">
                    <img src="./images/black-wave-bg.jpg" className=" cover" />
                </div>

                <div className=" w-full h-fit flex justify-center items-center mt-10">
                    <div className=" w-fit h-fit flex flex-col justify-center items-center hover:text-[#f2e8d0] hover:cursor-pointer"
                        onClick={() =>{
                            goToCaption('caption1')
                        }}>
                        <p className=" font-bold">開始閱讀</p>
                        <AiFillCaretDown className=" text-5xl font-bold" />
                    </div>
                </div>

            </motion.div>

            <motion.div className="w-full p-5 lg:w-4/5 mt-32 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: 1}}>

                <motion.div id="caption1" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, delay: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>標題1 (Lead & 1 - 2 paragraph)</p>
                </motion.div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit. Quis eleifend quam adipiscing vitae proin sagittis nisl. Suspendisse interdum consectetur libero id. Diam vulputate ut pharetra sit. Amet est placerat in egestas erat imperdiet. Id porta nibh venenatis cras sed. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. In vitae turpis massa sed elementum tempus. Netus et malesuada fames ac turpis egestas sed. Sit amet dictum sit amet justo. Sem et tortor consequat id porta nibh. Aliquam faucibus purus in massa. Cursus mattis molestie a iaculis at. Urna condimentum mattis pellentesque id nibh. Potenti nullam ac tortor vitae purus faucibus.</p>
                <p>Placerat vestibulum lectus mauris ultrices eros in. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Arcu ac tortor dignissim convallis aenean et tortor. Rhoncus est pellentesque elit ullamcorper dignissim. Pharetra diam sit amet nisl suscipit adipiscing. Posuere lorem ipsum dolor sit amet consectetur. Ultrices neque ornare aenean euismod elementum. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Mauris cursus mattis molestie a iaculis at erat.</p>
                <p>Vel turpis nunc eget lorem dolor. At urna condimentum mattis pellentesque id nibh. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Tempor commodo ullamcorper a lacus. Magna eget est lorem ipsum dolor. Neque vitae tempus quam pellentesque. Diam donec adipiscing tristique risus. Diam sollicitudin tempor id eu nisl. Tellus rutrum tellus pellentesque eu tincidunt tortor. Faucibus in ornare quam viverra. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Mattis nunc sed blandit libero volutpat sed. Montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh ipsum consequat nisl vel pretium lectus. Diam maecenas ultricies mi eget mauris pharetra et. Ac placerat vestibulum lectus mauris ultrices eros in. Aliquam vestibulum morbi blandit cursus risus at ultrices.</p>
                <p>Consectetur libero id faucibus nisl tincidunt eget nullam. Posuere morbi leo urna molestie at elementum. Commodo nulla facilisi nullam vehicula ipsum a. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Vel pretium lectus quam id leo. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Fermentum et sollicitudin ac orci phasellus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Diam quis enim lobortis scelerisque fermentum dui faucibus. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Aliquam malesuada bibendum arcu vitae. Mi quis hendrerit dolor magna. Sed adipiscing diam donec adipiscing. Sed risus ultricies tristique nulla aliquet enim tortor. Tristique et egestas quis ipsum. Amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel elit scelerisque.</p>
            </motion.div>

            <HouseSellingBarChart />

            <motion.div className="w-full p-5 lg:w-4/5 mt-10 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: 1}}>

                <motion.div id="caption2" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, delay: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                        
                    <p>標題2 (Content: The average price by district)</p>
                </motion.div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit. Quis eleifend quam adipiscing vitae proin sagittis nisl. Suspendisse interdum consectetur libero id. Diam vulputate ut pharetra sit. Amet est placerat in egestas erat imperdiet. Id porta nibh venenatis cras sed. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. In vitae turpis massa sed elementum tempus. Netus et malesuada fames ac turpis egestas sed. Sit amet dictum sit amet justo. Sem et tortor consequat id porta nibh. Aliquam faucibus purus in massa. Cursus mattis molestie a iaculis at. Urna condimentum mattis pellentesque id nibh. Potenti nullam ac tortor vitae purus faucibus.</p>
                <p>Placerat vestibulum lectus mauris ultrices eros in. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Arcu ac tortor dignissim convallis aenean et tortor. Rhoncus est pellentesque elit ullamcorper dignissim. Pharetra diam sit amet nisl suscipit adipiscing. Posuere lorem ipsum dolor sit amet consectetur. Ultrices neque ornare aenean euismod elementum. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Mauris cursus mattis molestie a iaculis at erat.</p>
                <p>Vel turpis nunc eget lorem dolor. At urna condimentum mattis pellentesque id nibh. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Tempor commodo ullamcorper a lacus. Magna eget est lorem ipsum dolor. Neque vitae tempus quam pellentesque. Diam donec adipiscing tristique risus. Diam sollicitudin tempor id eu nisl. Tellus rutrum tellus pellentesque eu tincidunt tortor. Faucibus in ornare quam viverra. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Mattis nunc sed blandit libero volutpat sed. Montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh ipsum consequat nisl vel pretium lectus. Diam maecenas ultricies mi eget mauris pharetra et. Ac placerat vestibulum lectus mauris ultrices eros in. Aliquam vestibulum morbi blandit cursus risus at ultrices.</p>
                <p>Consectetur libero id faucibus nisl tincidunt eget nullam. Posuere morbi leo urna molestie at elementum. Commodo nulla facilisi nullam vehicula ipsum a. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Vel pretium lectus quam id leo. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Fermentum et sollicitudin ac orci phasellus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Diam quis enim lobortis scelerisque fermentum dui faucibus. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Aliquam malesuada bibendum arcu vitae. Mi quis hendrerit dolor magna. Sed adipiscing diam donec adipiscing. Sed risus ultricies tristique nulla aliquet enim tortor. Tristique et egestas quis ipsum. Amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel elit scelerisque.</p>
            </motion.div>

            <div className=" w-full p-5 lg:w-4/5 mt-10 h-[50vh] flex flex-col justify-center items-start text-justify text-xl gap-5">
                <img src="./images/black-wave-bg.jpg" className=" cover" />
            </div>

            <motion.div className="w-full p-5 lg:w-4/5 mt-10 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: 1}}>

                <motion.div id="caption3" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, delay: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>標題3 (Content: The price level of different types of house)</p>
                </motion.div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit. Quis eleifend quam adipiscing vitae proin sagittis nisl. Suspendisse interdum consectetur libero id. Diam vulputate ut pharetra sit. Amet est placerat in egestas erat imperdiet. Id porta nibh venenatis cras sed. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. In vitae turpis massa sed elementum tempus. Netus et malesuada fames ac turpis egestas sed. Sit amet dictum sit amet justo. Sem et tortor consequat id porta nibh. Aliquam faucibus purus in massa. Cursus mattis molestie a iaculis at. Urna condimentum mattis pellentesque id nibh. Potenti nullam ac tortor vitae purus faucibus.</p>
                <p>Placerat vestibulum lectus mauris ultrices eros in. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Arcu ac tortor dignissim convallis aenean et tortor. Rhoncus est pellentesque elit ullamcorper dignissim. Pharetra diam sit amet nisl suscipit adipiscing. Posuere lorem ipsum dolor sit amet consectetur. Ultrices neque ornare aenean euismod elementum. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Mauris cursus mattis molestie a iaculis at erat.</p>
                <p>Vel turpis nunc eget lorem dolor. At urna condimentum mattis pellentesque id nibh. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Tempor commodo ullamcorper a lacus. Magna eget est lorem ipsum dolor. Neque vitae tempus quam pellentesque. Diam donec adipiscing tristique risus. Diam sollicitudin tempor id eu nisl. Tellus rutrum tellus pellentesque eu tincidunt tortor. Faucibus in ornare quam viverra. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Mattis nunc sed blandit libero volutpat sed. Montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh ipsum consequat nisl vel pretium lectus. Diam maecenas ultricies mi eget mauris pharetra et. Ac placerat vestibulum lectus mauris ultrices eros in. Aliquam vestibulum morbi blandit cursus risus at ultrices.</p>
                <p>Consectetur libero id faucibus nisl tincidunt eget nullam. Posuere morbi leo urna molestie at elementum. Commodo nulla facilisi nullam vehicula ipsum a. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Vel pretium lectus quam id leo. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Fermentum et sollicitudin ac orci phasellus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Diam quis enim lobortis scelerisque fermentum dui faucibus. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Aliquam malesuada bibendum arcu vitae. Mi quis hendrerit dolor magna. Sed adipiscing diam donec adipiscing. Sed risus ultricies tristique nulla aliquet enim tortor. Tristique et egestas quis ipsum. Amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel elit scelerisque.</p>
            </motion.div>

            <HousePricePreSquareChart />

            <motion.div className="w-full p-5 lg:w-4/5 mt-10 mb-32 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay: 1}}>

                <motion.div id="caption4" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, delay: 2, ease: "easeInOut"}}>
                    <p>標題4 (Content: Interview & Gov. Policy on property market & Ending )</p>
                </motion.div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit. Quis eleifend quam adipiscing vitae proin sagittis nisl. Suspendisse interdum consectetur libero id. Diam vulputate ut pharetra sit. Amet est placerat in egestas erat imperdiet. Id porta nibh venenatis cras sed. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. In vitae turpis massa sed elementum tempus. Netus et malesuada fames ac turpis egestas sed. Sit amet dictum sit amet justo. Sem et tortor consequat id porta nibh. Aliquam faucibus purus in massa. Cursus mattis molestie a iaculis at. Urna condimentum mattis pellentesque id nibh. Potenti nullam ac tortor vitae purus faucibus.</p>
                <p>Placerat vestibulum lectus mauris ultrices eros in. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Arcu ac tortor dignissim convallis aenean et tortor. Rhoncus est pellentesque elit ullamcorper dignissim. Pharetra diam sit amet nisl suscipit adipiscing. Posuere lorem ipsum dolor sit amet consectetur. Ultrices neque ornare aenean euismod elementum. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Mauris cursus mattis molestie a iaculis at erat.</p>
                <p>Vel turpis nunc eget lorem dolor. At urna condimentum mattis pellentesque id nibh. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Tempor commodo ullamcorper a lacus. Magna eget est lorem ipsum dolor. Neque vitae tempus quam pellentesque. Diam donec adipiscing tristique risus. Diam sollicitudin tempor id eu nisl. Tellus rutrum tellus pellentesque eu tincidunt tortor. Faucibus in ornare quam viverra. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Mattis nunc sed blandit libero volutpat sed. Montes nascetur ridiculus mus mauris vitae ultricies leo. Nibh ipsum consequat nisl vel pretium lectus. Diam maecenas ultricies mi eget mauris pharetra et. Ac placerat vestibulum lectus mauris ultrices eros in. Aliquam vestibulum morbi blandit cursus risus at ultrices.</p>
                <p>Consectetur libero id faucibus nisl tincidunt eget nullam. Posuere morbi leo urna molestie at elementum. Commodo nulla facilisi nullam vehicula ipsum a. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Vel pretium lectus quam id leo. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Fermentum et sollicitudin ac orci phasellus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Diam quis enim lobortis scelerisque fermentum dui faucibus. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Aliquam malesuada bibendum arcu vitae. Mi quis hendrerit dolor magna. Sed adipiscing diam donec adipiscing. Sed risus ultricies tristique nulla aliquet enim tortor. Tristique et egestas quis ipsum. Amet facilisis magna etiam tempor orci. Congue mauris rhoncus aenean vel elit scelerisque.</p>
            </motion.div>

        </div>
    )
}