import { useEffect, useRef, useState } from "react"
import { CanvasBlock } from "./utils/glsl/CanvasBlock";
import { motion, useAnimate } from "framer-motion";
import { createCityscapeShader } from "./utils/glsl/cityscapeShader";
import {AiFillCaretDown, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { delay } from "./utils/delay";
import { HouseSellingBarChart, houseSellingData } from "./HouseSellingBarChart";
import { HousePricePreSquareChart } from "./HousePricePreSquareChart";
import { HongKongMap } from "./HongKongMap";
import AnimatedNumbers from "react-animated-numbers";
import {BsCash, BsCashCoin, BsFillHouseCheckFill} from 'react-icons/bs'
import { HouseRantingBarChart } from "./HousingRantingBarChart";
import { BottomDeco, BottomRightDeco, LeftDeco, RightDeco, TopLeftDeco } from "./utils/LineDeco";

const topics: string[] = [
    'caption1',
    'caption2',
    'caption3',
    'caption4',
]

export function Introduction(){

    const [salary, setSalary] = useState<number>(0);
    const [salaryPercentage, setSalaryPercentage] = useState<number>(0);

    const districtInputField = useRef<HTMLSelectElement | null>(null);

    const [yearNeeded, setYearNeeded] = useState<number | null>(null);

    const [salaryScope, salaryAnimate] = useAnimate();
    const [salaryPercentageScope, salayPercentageAnimate] = useAnimate();

    const goToCaption = (name: string) =>{
        let t = document.getElementById(name);
        if (!t) return;

        let y = t.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({top: y, left: 0, behavior: "smooth"})
    }

    async function updateSalaryAnimation(){
        await salaryAnimate(salaryScope.current, {y: -10, opacity: 0.6});
        await salaryAnimate(salaryScope.current, {y: 0, opacity: 1.0});
    }

    async function updateSalaryPercentageAnimation(){
        await salayPercentageAnimate(salaryPercentageScope.current, {y: -10, opacity: 0.6});
        await salayPercentageAnimate(salaryPercentageScope.current, {y: 0, opacity: 1.0});
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

    useEffect(() =>{
        updateSalaryAnimation();
    }, [salary])

    useEffect(() =>{
        updateSalaryPercentageAnimation();
    }, [salaryPercentage])

    return (
        <div className=" overflow-hidden relative flex flex-col justify-start items-center w-full h-fit text-white tracking-tight">

            <div className=" fixed w-full h-screen -z-50">
                <CanvasBlock id="intro-gl" canvasW={3000} canvasH={3000} />
            </div>

            <div className=" fixed hidden md:flex w-full h-screen z-50 flex-col justify-start items-end mr-5 mt-5 pointer-events-none">

                {
                    topics.map((item, index) =>{
                        return (
                            <div key={`topic-item-${index}`} className="w-fit h-fit flex flex-col justify-center items-center"
                            style={{
                                opacity:  1.2 - (index / (topics.length - 1))
                            }}>

                                <motion.div className=" h-5 rounded-full border-2 border-[#d9c58f] m-2 pointer-events-auto hover:cursor-pointer hover:bg-[#d9c58f]" 
                                    style={{
                                        width: 20 * (2 - (index / (topics.length - 1)))
                                    }}
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

            <motion.div className=" w-full p-5 lg:w-4/5 mt-10 h-fit flex flex-col justify-center items-start bg-gradient-to-b from-[#00000098] to-transparent"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1}}>
                <p className=" text-gray-500">社會/財經 — 樓市新聞</p>
                <motion.div id="topic" className=" text-2xl lg:text-5xl mt-5 font-bold"
                    style={{
                        overflow: "hidden",
                        whiteSpace: 'nowrap'
                    }}
                    initial={{width: 0}}
                    animate={{width: '100%'}}
                    transition={{duration: 2, delay: 2, ease: "easeInOut"}}>
                    <p>租金樓價仍然高企 青年「上車」遙遙無期</p>
                </motion.div>

                <div className="relative w-full h-fit flex flex-row justify-start items-center pr-24 mt-10 mb-5 gap-5">

                    <p className=" hover:cursor-pointer text-gray-500">撰文：<span className="text-[#d9c58f] hover:underline">張智芬</span>，<span className="text-[#d9c58f] hover:underline">朱樂怡</span>，<span className="text-[#d9c58f] hover:underline">胡朗霆</span>，<span className="text-[#d9c58f] hover:underline">陳培威</span></p>

                    <div className=" w-fit h-fit flex flex-row justify-center items-center">
                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-700 rounded-full flex justify-center items-center absolute right-[75px]">
                            <p>F</p>
                        </div>

                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-700 rounded-full flex justify-center items-center absolute right-[50px]">
                            <p>J</p>
                        </div>

                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-700 rounded-full flex justify-center items-center absolute right-[25px]">
                            <p>J</p>
                        </div>

                        <div className=" w-10 h-10 border-[2px] border-white bg-gray-700 rounded-full flex justify-center items-center absolute right-[0px]">
                            <p>V</p>
                        </div>
                    </div>

                </div>

                <p className=" text-gray-500">出版：2023-09-29</p>

                <div className=" mt-5 w-full h-fit">
                    <img src="./images/headline.png" className=" contain" />
                </div>

                <p className="text-justify text-xl mt-10 bg-[#29262b7d]">受疫情和環球經濟不景氣影響，香港樓市從高峰回落，隨著美國持續加息亦令潛在買家卻步，私人住宅售價從疫情前的高位下跌近一成。但即使有不少新盤「劈價」出售，帶動二手樓價下跌，香港人依然面對買樓難、租樓貴的處境。</p>

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

            <motion.div className="relative w-full p-5 lg:w-4/5 mt-20 mb-32 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <TopLeftDeco top={-80} left={-40}/>

                <motion.div id="caption1" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                            
                    <p className=" font-semibold text-[#e5d19b]">樓價從高峰滑落 加息未完難回升</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>香港樓價冠絕全球，多次成為全球樓價最難負擔城市。而根據差餉物業估價署（差估署）公佈的樓價指數，香港樓價至2003年沙士後不斷飆升，由2003年的61.6到2019年的383.0的高位，於17年間升逾4.2倍。</p>
                    <p>但疫情爆發、利率上升加上環球經濟增長放緩，令香港樓價開始下跌。根據瑞銀公佈的全球房地產泡沫指數，今年是香港自2015年報告發表以來首次跌出「泡沫風險」的區間；而疫情爆發對房地產市場帶來的影響，在中港通關後亦未能完全抵消，匯豐更「轉軚」，看淡香港樓市，預料明年樓市會下跌5%。</p>
                </div>

                <RightDeco right={-40} bottom={-80} />

            </motion.div>

            <motion.div className="relative w-full p-5 lg:w-4/5 mt-20 mb-32 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption2" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                            
                    <p className=" font-semibold text-[#e5d19b]">「上車盤」雖劈價出售 惟買樓仍遙不可及</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>儘管香港樓價有下跌的跡象，但對比其他城市依然高昂。 以單位面積小於430呎的「上車盤」為例，據差估署資料顯示，此類型單位於疫情期間依然價格高企，2021年全年樓價指數更是歷年最高位。雖然現在從高位回落近一成七，但對於年輕人而言仍是頗大的負擔。</p>
                    <p>在聯繫匯率的制度下，香港跟隨美聯儲加息步伐，按揭利息上升，令買家入市意欲下降。市道淡靜下，不少新盤「劈價」出售，吸引買家入市。其中8月開售、由長實發展的油塘親海駅II，最平的「上車盤」折實後僅售賣290萬元，並於一周內收逾3.8萬票，為紀錄新高。</p>
                </div>

                <RightDeco right={-40} bottom={-80} />

            </motion.div>

            <HousePricePreSquareChart />

            <motion.div className="w-full p-5 lg:w-4/5 mt-20 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>新盤「劈價」固然吸引不少買家入市，但樓價仍然處於高位。中原地產資料顯示，截至今年九月底，有22個新盤開價發售，而其上車盤的價格落在約354至1431萬不等；按港島、九龍、新界東、新界西劃分，四區樓價中位數亦可差近一倍。而按照政府最新公佈香港25至34歲青年月入息中位數22200元計算，即使是購買最低價的單位，亦需要不吃不喝逾13年才能夠全款買入。</p>
                </div>
            </motion.div>

            <HongKongMap />

            <motion.div className=" w-full p-5 lg:w-4/5 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <div className=" w-fit h-fit flex flex-col justify-center items-center bg-[#29262b7d] gap-10">
                    <p>新盤價格戰亦帶動二手樓樓價下跌，業主紛紛蝕讓希望可以搶佔市場。儘管如此，二手樓樓價仍不比新盤低。按照香港十八區劃分、據中原地產近一個月的成交整合，各區二手樓價格中位數落在約353至577萬不等，僅有四區二手樓售價中位數貼近新盤最低售價，即使是指月入約2.22萬元的人仍需要不吃不喝逾13年才能夠全款買入，可見即使數據顯示「上車盤」的價格回落近一成七，但在港買樓對於年青人而言仍是高不可攀。</p>
                </div>
            </motion.div>

            <HouseSellingBarChart />

            <motion.div className="w-full p-5 lg:w-4/5 mt-80 h-fit flex flex-col justify-center items-start text-justify text-xl gap-5"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption3" className=" w-full pb-2 text-2xl lg:text-5xl flex flex-col justify-center items-center gap-5 font-semibold overflow-hidden whitespace-nowrap text-[#e5d19b]"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p>根據你的月收入何時才能全款買樓？</p>
                    <p className=" font-light text-3xl">(以18區二手樓宇售價中位數計算)</p>
                </motion.div>

                <div className="w-full flex flex-col justify-center items-start bg-[#00000078] p-2">
                    <table className=" table-auto w-full">
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
                                    <div className=" flex justify-start items-center">
                                        <div className=" relative w-[50vw] h-40 flex justify-center items-center">
                                            <input type="text" className=" w-full h-full p-2 bg-transparent outline-none cursor-pointer text-center text-6xl text-transparent hover:border-2 border-dashed border-orange-300 rounded-md mt-5"
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

                                            <motion.div ref={salaryScope} className=" w-full h-full flex justify-center items-center pointer-events-none absolute overflow-hidden gap-2">
                                                
                                                <BsCashCoin />
                                                <AnimatedNumbers
                                                    includeComma
                                                    animateToNumber={salary}
                                                    fontStyle={{ fontSize: 35 }}
                                                    locale="en-US"
                                                    configs={[{"mass":1,"tension":1017,"friction":59},{"mass":1,"tension":1013,"friction":84},{"mass":1,"tension":515,"friction":60},{"mass":1,"tension":513,"friction":49}]}
                                                ></AnimatedNumbers>
                                                <p>HKD</p>
                                            </motion.div>
                                        </div>

                                        <div className=" w-fit h-fit flex flex-col justify-center items-center gap-5 ml-5 select-none">
                                            <motion.div className=" w-10 h-10 flex justify-center items-center text-black text-3xl bg-[#e5d19b] rounded-full hover:cursor-pointer"
                                                onClick={() =>{
                                                    if (salary + 1000 <= 9999999)
                                                    setSalary(salary + 1000);
                                                }}
                                                initial={{scale: 1}}
                                                whileHover={{scale: 1.5, boxShadow: "0px 10px 20px rgba(241, 165, 244 ,0.8)"}}
                                                whileTap={{scale: 1.2, boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.6)"}}>
                                                <AiOutlinePlus />
                                            </motion.div>
                                            <motion.div className=" w-10 h-10 flex justify-center items-center text-black text-3xl bg-[#e5d19b] rounded-full hover:cursor-pointer"
                                                onClick={() =>{
                                                    if (salary - 1000 >= 0)
                                                    setSalary(salary - 1000);
                                                }}
                                                initial={{scale: 1}}
                                                whileHover={{scale: 1.5, boxShadow: "0px 10px 20px rgba(241, 165, 244 ,0.8)"}}
                                                whileTap={{scale: 1.2, boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.6)"}}>
                                                <AiOutlineMinus />
                                            </motion.div>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>選擇你每月存款比例：</p>
                                </td>
                                <td>
                                <div className=" flex justify-start items-center">
                                        <div className=" relative w-[50vw] h-40 flex justify-center items-center">
                                            <input type="text" className=" w-full h-full p-2 bg-transparent outline-none cursor-pointer text-center text-6xl text-transparent hover:border-2 border-dashed border-orange-300 rounded-md mt-5"
                                                onChange={((e) =>{
                                                    if (e.target.value.match(/[^$,.\d]/)){
                                                        e.target.value = '0';
                                                        setSalaryPercentage(0)
                                                        return;
                                                    }
                                                    let val = parseFloat(e.target.value);
                                                    if (isNaN(val)){
                                                        e.target.value = '0';
                                                        val = 0;
                                                    }
                                                    if (val < 0)
                                                        val = 0
                                                    if (val > 100)
                                                        val = 100;
                                                    setSalaryPercentage(val);
                                                })}
                                            />

                                            <motion.div ref={salaryPercentageScope} className=" w-full h-full flex justify-center items-center pointer-events-none absolute overflow-hidden gap-2">
                                                
                                                <BsCash />
                                                <AnimatedNumbers
                                                    includeComma
                                                    animateToNumber={salaryPercentage}
                                                    fontStyle={{ fontSize: 35 }}
                                                    locale="en-US"
                                                    configs={[{"mass":1,"tension":817,"friction":59},{"mass":1,"tension":813,"friction":84},{"mass":1,"tension":815,"friction":60},{"mass":1,"tension":813,"friction":49}]}
                                                ></AnimatedNumbers>
                                                <p>%</p>
                                            </motion.div>
                                        </div>

                                        <div className=" w-fit h-fit flex flex-col justify-center items-center gap-5 ml-5 select-none">
                                            <motion.div className=" w-10 h-10 flex justify-center items-center text-black text-3xl bg-[#e5d19b] rounded-full hover:cursor-pointer"
                                                onClick={() =>{
                                                    if (salaryPercentage + 5 <= 100)
                                                        setSalaryPercentage(salaryPercentage + 5);
                                                }}
                                                initial={{scale: 1}}
                                                whileHover={{scale: 1.5, boxShadow: "0px 10px 20px rgba(241, 165, 244 ,0.8)"}}
                                                whileTap={{scale: 1.2, boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.6)"}}>
                                                <AiOutlinePlus />
                                            </motion.div>
                                            <motion.div className=" w-10 h-10 flex justify-center items-center text-black text-3xl bg-[#e5d19b] rounded-full hover:cursor-pointer"
                                                onClick={() =>{
                                                    if (salaryPercentage - 5 >= 0){
                                                        setSalaryPercentage(salaryPercentage - 5);
                                                    }
                                                }}
                                                initial={{scale: 1}}
                                                whileHover={{scale: 1.5, boxShadow: "0px 10px 20px rgba(241, 165, 244 ,0.8)"}}
                                                whileTap={{scale: 1.2, boxShadow: "0px 5px 20px rgba(255, 255, 255, 0.6)"}}>
                                                <AiOutlineMinus />
                                            </motion.div>
                                        </div>

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className=" w-full flex justify-center items-center text-3xl">
                    <motion.div className=" bg-[#e5d19b] p-5 text-black font-semibold hover:cursor-pointer"
                        initial={{scale: 1, background: '#e5d19b'}}
                        whileHover={{scale: 1.2, y: 10, background: '#FBE683'}}
                        onClick={() =>{
                            let index = houseSellingData.findIndex((e) => e.name === districtInputField.current!.value);
                            if (index === -1)
                                return;

                            let result = (houseSellingData[index].二手樓宇售價 * 1000) / (salary * salaryPercentage / 100);

                            let year = Math.round(result);

                            if (!isNaN(year) && isFinite(year)){
                                setYearNeeded(year)
                                goToCaption('yearNeeded')
                            }
                        }}
                        >
                        查閱結果
                    </motion.div>
                </div>

                <div id="yearNeeded" className="relative mt-60">
                    <TopLeftDeco top={0} left={-40}  />
                </div>

                <div className="flex justify-center items-center w-full h-fit mt-[25vh]">

                {
                    yearNeeded === null ? <></> :
                    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                        
                        
                        <div className=" w-full flex justify-center items-center gap-5 font-bold">
                                <p className="text-9xl">~ {yearNeeded}</p>
                                <p>年</p>
                        </div>

                        <BsFillHouseCheckFill />
                        <p className=" text-justify text-5xl">你才能全款購買房屋</p>
                    </div>
                }

                </div>
            </motion.div>

            <div className=" relative w-full h-[50vh] flex justify-center items-center mt-5">
                <LeftDeco top={0} />
            </div>

            <motion.div className="relative w-full p-5 lg:w-4/5 mt-60 mb-32 h-fit flex flex-col justify-center items-center text-justify text-xl gap-5 bg-gradient-to-t from-[#40404078] to-transparent"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}>

                <motion.div id="caption4" className=" pb-2 text-2xl lg:text-5xl overflow-hidden whitespace-nowrap"
                    initial={{width: 0}}
                    whileInView={{width: '100%'}}
                    transition={{duration: 2, ease: "easeInOut"}}
                    viewport={{once: true}}>
                    <p className=" font-semibold text-[#e5d19b]">租金重回疫前水平 港島地段直逼兩萬</p>
                </motion.div>

                <div className=" w-fit h-fit flex flex-col justify-center items-center gap-10">
                    <p>息口向上令樓宇買賣市場轉趨淡靜，租賃市場卻受益。據差估署公佈最新私宅租金指數報185.4點，按月升1.42%，創逾3年半新高，今年首8個月累計升幅達5.64%。430呎或以下的單位租金指數更重上200點，回到2019年的水平。</p>
                    <p>市場上越來越多人「轉買為租」，而在沒有能力買樓的情況下，當租金水平持續上升，令港人居住問題越趨嚴竣。香港大學中國商業學院客席講師關啟正指，租金應該是薪金約3成才可以稱為可負擔的，即是指月收入為2.22萬，租金應該要低於6600元才是合理的。但按中原物業9月的租務成交統計，香港十八區的租金中位數約是1.05至1.88萬不等，即使是租住位於新界最便宜的單位，亦要價月收入的逾四成，而港島區的「黃金地段」便需要月收入逾5.3萬才能夠負擔得起。</p>
                </div>

                <BottomRightDeco bottom={-40} right={-80} />

            </motion.div>

            <HouseRantingBarChart />

        </div>
    )
}