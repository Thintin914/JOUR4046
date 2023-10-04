import { useEffect, useRef, useState } from "react"
import { CanvasBlock } from "./utils/glsl/CanvasBlock";
import { motion } from "framer-motion";
import { createCityscapeShader } from "./utils/glsl/cityscapeShader";
import {AiFillCaretDown} from 'react-icons/ai';
import { delay } from "./utils/delay";
import { HouseSellingBarChart, houseSellingData } from "./HouseSellingBarChart";
import { HousePricePreSquareChart } from "./HousePricePreSquareChart";
import { HongKongMap } from "./HongKongMap";
import AnimatedNumbers from "react-animated-numbers";
import {BsFillHouseCheckFill} from 'react-icons/bs'

const topics: string[] = [
    'caption1',
    'caption2',
    'caption3',
    'caption4'
]

export function Introduction(){

    const [salary, setSalary] = useState<number>(0);

    const districtInputField = useRef<HTMLSelectElement | null>(null);
    const percentageInputField = useRef<HTMLInputElement | null>(null);

    const [yearNeeded, setYearNeeded] = useState<number | null>(null);

    const goToCaption = (name: string) =>{
        let t = document.getElementById(name);
        if (!t) return;

        let y = t.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({top: y, left: 0, behavior: "smooth"})
    }

    useEffect(() =>{
        createCityscapeShader('intro-gl', ['./images/cityscape.jpg'], 0.0005, 0.05, 0.1, 3);

        const f = async() =>{
            await delay(5000);
            let t = document.getElementById('topic');
            if (!t) return;

            t.style.overflow = ''
            t.style.whiteSpace = ''
        };
        f();
    }, [])

    return (
        <div className=" relative flex flex-col justify-start items-center w-full h-fit text-white">

            <div className=" fixed w-full h-screen -z-50">
                <CanvasBlock id="intro-gl" canvasW={3000} canvasH={3000} />
            </div>

            <div className=" fixed w-full h-screen z-50 flex flex-col justify-center items-end mr-5 pointer-events-none">

                {
                    topics.map((item, index) =>{
                        return (
                            <div key={`topic-item-${index}`} className="w-fit h-fit flex flex-col justify-center items-center">

                                <motion.div className=" w-5 h-5 rounded-full border-2 border-[#d9c58f] m-2 pointer-events-auto hover:cursor-pointer hover:bg-[#d9c58f]" 
                                    onClick={() => {
                                        goToCaption(item)
                                    }}
                                    initial={{scale: 1}}
                                    whileHover={{scale: 1.3}}
                                    transition={{ease: 'easeInOut'}}
                                />
            
                                {index === topics.length - 1 ? <></> : <div className=" bg-[#d9c58f] h-5 w-[2px]" />}
                            </div>
                        )
                    })
                }

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

                <div className="relative w-full h-fit flex flex-row justify-start items-center pr-24 mt-10 mb-5 gap-5">

                    <p>撰文：張智芬，朱樂怡，胡朗霆，Vincent</p>

                    <div className=" w-fit h-fit flex flex-row justify-center items-center">
                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center absolute right-[75px]">
                            <p>F</p>
                        </div>

                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center absolute right-[50px]">
                            <p>J</p>
                        </div>

                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center absolute right-[25px]">
                            <p>J</p>
                        </div>

                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-400 rounded-full flex justify-center items-center absolute right-[0px]">
                            <p>V</p>
                        </div>
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

            <motion.div className="w-full p-5 lg:w-4/5 h-fit mt-80 flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <div id="caption1" className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>受疫情和環球經濟不景氣影響，香港樓市從高峰回落，隨著美國持續加息亦令潛在買家卻步，私人住宅售價從疫情前的高位下跌近一成；而政府一再放寬按揭成數和住宅樓花按揭，加上近期不少新盤「劈價」出售，希望吸引買家入市。</p>

                    <div className="w-full h-fit flex flex-col justify-center items-start text-justify text-xl gap-5">
                        <motion.div className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                            initial={{width: 0}}
                            whileInView={{width: '100%'}}
                            transition={{duration: 2, ease: "easeInOut"}}
                            viewport={{once: true}}>
                                    
                            <p>Content: The average price by district</p>
                        </motion.div>
                    </div>

                    <p>香港樓價冠絕全球，多次成為全球樓價最難負擔城市。而根據差餉物業估價署（差估署）公佈的樓價指數，香港樓價至2003年沙士後不斷飆升，由2003年的61.6到2019年的383.0的高位，於17年間升逾4.2倍。</p>
                    <p>但疫情爆發、利率上升加上環球經濟增長放緩，令香港樓價開始下跌。根據瑞銀公佈的全球房地產泡沫指數，今年是香港自2015年報告發表以來首次跌出「泡沫風險」的區間；而疫情爆發對房地產市場帶來的影響，在中港通關後亦未能完全抵消，匯豐更「轉軚」，看淡香港樓市，預料明年樓市會下跌5%。</p>
                </div>
            </motion.div>

            <motion.div className="w-full p-5 lg:w-4/5 mt-20 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption2" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                            
                    <p>Content: The average price by district</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>儘管香港樓價有下跌的跡象，但對比其他城市依然高昂。 以單位面積小於430呎的「上車盤」為例，據差估署資料顯示，此類型單位於疫情期間依然價格高企，2021年全年樓價指數更是歷年最高位。雖然現在從高位回落近一成七，但對於年輕人而言仍是頗大的負擔。</p>
                </div>
            </motion.div>

            <HousePricePreSquareChart />

            <motion.div className="w-full p-5 lg:w-4/5 mt-20 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption3" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>Content: The price level of different types of house</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>在聯繫匯率的制度下，香港跟隨美聯儲加息步伐，按揭利息上升，令買家入市意欲下降。市道淡靜下，不少新盤「劈價」出售，吸引買家入市。其中8月開售、由長實發展的油塘親海駅II，最平的「上車盤」折實後僅售賣290萬元，並於一周內收逾3.8萬票，為紀錄新高。</p>
                    <p>新盤「劈價」固然吸引不少買家入市，但樓價仍然處於高位。中原地產資料顯示，截至今年九月底，有22個新盤開價發售，而其上車盤的價格落在約354至1431萬不等；按港島、九龍、新界東、新界西劃分，四區樓價中位數亦可差近一倍。而按照政府最新公佈香港25至34歲青年月入息中位數22200元計算，即使是購買最低價的單位，亦需要不吃不喝逾13年才能夠全款買入。</p>
                </div>
            </motion.div>

            <HongKongMap />

            <motion.div className="w-full p-5 lg:w-4/5 mt-20 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption4" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>Content: Interview & Gov. Policy on property market & Ending</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>新盤價格戰亦帶動二手樓樓價下跌，業主紛紛蝕讓希望可以搶佔市場。儘管如此，二手樓樓價仍不比新盤低。按照香港十八區劃分、據中原地產近一個月的成交整合，各區二手樓價格中位數落在約353至577萬不等，僅有四區二手樓售價中位數貼近新盤最低售價，即使是指月入約2.22萬元的人仍需要不吃不喝逾13年才能夠全款買入，可見即使數據顯示「上車盤」的價格回落近一成七，但在港買樓對於年青人而言仍是高不可攀。</p>
                </div>
            </motion.div>

            <HouseSellingBarChart />

            <motion.div className="w-full p-5 lg:w-4/5 mt-20 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption5" className=" w-full pb-2 text-2xl lg:text-5xl flex flex-col justify-center items-center gap-5 font-semibold overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>你的月收入何時才能全款買樓？</p>
                    <p className=" font-light text-3xl">(以18區二手樓宇售價中位數計算)</p>
                </motion.div>

                <div className="w-full flex flex-col justify-center items-start">
                    <table className=" table-auto">
                        <tbody>
                            <tr>
                                <td>
                                    <p>選擇置業地區：</p>
                                </td>
                                <td>
                                    <select ref={districtInputField} className=" w-[50vw] p-2 bg-[#414141]">
                                        {
                                            houseSellingData.map((item, index) =>{
                                                return (
                                                    <option key={`district-item-${index}`}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>輸入你的每月收入：</p>
                                </td>
                                <td>
                                    <div className=" relative w-[50vw] h-40 flex justify-center items-center">
                                        <input type="text" className=" w-full h-full p-2 bg-transparent text-[1px] border-white opacity-70 outline-none text-transparent border-2 rounded-md mt-5"
                                            onChange={((e) =>{
                                                if (e.target.value.match(/[^$,.\d]/)){
                                                    e.target.value = '0';
                                                    setSalary(0)
                                                    return;
                                                }
                                                let val = parseFloat(e.target.value);
                                                if (isNaN(val)){
                                                    e.target.value = '0';
                                                    val = 0;
                                                }
                                                if (val < 0)
                                                    val = 0
                                                if (val > 9999999)
                                                    val = 9999999;
                                                setSalary(val);
                                            })}
                                        />

                                        <div className=" w-full h-full flex justify-center items-center pointer-events-none absolute overflow-hidden gap-2">
                                            
                                            <p>$</p>
                                            <AnimatedNumbers
                                                includeComma
                                                animateToNumber={salary}
                                                fontStyle={{ fontSize: 40, fontStyle: 'italic' }}
                                                locale="en-US"
                                                configs={[
                                                { mass: 1, tension: 220, friction: 100 },
                                                { mass: 1, tension: 180, friction: 130 },
                                                { mass: 1, tension: 280, friction: 90 },
                                                { mass: 1, tension: 180, friction: 135 },
                                                { mass: 1, tension: 260, friction: 100 },
                                                { mass: 1, tension: 210, friction: 180 },
                                                ]}
                                            ></AnimatedNumbers>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>選擇你每月存款比例：</p>
                                </td>
                                <td>
                                    <input ref={percentageInputField} type="number" step={0.5} className=" w-[50vw] p-2 bg-[#414141] mt-5" 
                                        onChange={(e) =>{
                                            let val = parseFloat(e.target.value);
                                            if (val < 0)
                                                e.target.value = '0';
                                            if (val > 100)
                                                e.target.value = '100';
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className=" w-full flex justify-center items-center text-3xl">
                    <motion.div className=" bg-[#f3b45c] p-5 text-black font-semibold hover:cursor-pointer"
                        initial={{scale: 1}}
                        whileHover={{scale: 1.3}}
                        transition={{ease: "easeInOut"}}
                        onClick={() =>{
                            let index = houseSellingData.findIndex((e) => e.name === districtInputField.current!.value);
                            if (index === -1)
                                return;

                            let result = (houseSellingData[index].二手樓宇售價 * 1000) / (salary * parseFloat(percentageInputField.current!.value) / 100);

                            setYearNeeded(Math.round(result))

                            goToCaption('caption6')
                        }}
                        >
                        查閱結果
                    </motion.div>
                </div>

                <div id="caption6" className="mt-60"></div>
                {
                    yearNeeded === null || isNaN(yearNeeded) ? <></> :
                    <div className="w-full flex flex-col justify-center items-center gap-5">
                        <div className=" w-full flex justify-center items-center gap-5 font-bold">
                                <p className="text-9xl">~ {yearNeeded}</p>
                                <p>Yrs</p>
                        </div>

                        <BsFillHouseCheckFill />
                        <p className=" text-justify">To Purchase an Apartment</p>
                    </div>
                }

            </motion.div>

            <motion.div className="w-full p-5 lg:w-4/5 mt-20 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption7" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>Content: Interview & Gov. Policy on property market & Ending</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>息口向上令樓宇買賣市場轉趨淡靜，租賃市場卻受益。據差估署公佈最新私宅租金指數報185.4點，按月升1.42%，創逾3年半新高，今年首8個月累計升幅達5.64%。430呎或以下的單位租金指數更重上200點，回到2019年的水平。</p>
                </div>
            </motion.div>

            <motion.div className="w-full p-5 lg:w-4/5 mt-20 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption7" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>Content: Interview & Gov. Policy on property market & Ending</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>市場上越來越多人「轉買為租」，而在沒有能力買樓的情況下，當租金水平持續上升，令港人居住問題越趨嚴竣。香港浸會大學工商管理學院副院長文國樑指，租金應該是薪金約X成才可以稱為可負擔的，即是指月收入為2.22萬，租金應該要低放X元是合理的。而按中原物業9月的租務成交統計，香港十八區的租金中位數約是1.05至1.88萬不等，</p>
                </div>
            </motion.div>

        </div>
    )
}