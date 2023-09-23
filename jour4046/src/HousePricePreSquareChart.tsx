import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion, useAnimate } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import {TfiHandPointUp} from 'react-icons/tfi';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList
  } from "recharts";

const categoryA = [
    {
        name: "2021 S1",
        港島: 17448,
        九龍: 15272,
        新界: 14107,
    },
    {
        name: "2021 S2",
        港島: 17733,
        九龍: 15411,
        新界: 14341
    },
    {
        name: "2021 S3",
        港島: 18006,
        九龍: 15916,
        新界: 14123
    },
    {
        name: "2021 S4",
        港島: 17183,
        九龍: 14942,
        新界: 14189
    },
    {
        name: "2022 S1",
        港島: 17001,
        九龍: 14770,
        新界: 13968
    },
    {
        name: "2022 S2",
        港島: 16748,
        九龍: 14544,
        新界: 13767
    },
    {
        name: "2022 S3",
        港島: 15478,
        九龍: 13885,
        新界: 13204
    },
    {
        name: "2022 S4",
        港島: 14138,
        九龍: 12817,
        新界: 12245
    },
    {
        name: "2023 S1",
        港島: 14496,
        九龍: 13151,
        新界: 12509
    },
    {
        name: "2023 S2",
        港島: 14768,
        九龍: 12777,
        新界: 12555
    },
    {
        name: "2023 截至7月",
        港島: 13977,
        九龍: 12354,
        新界: 11854
    }
  ];

  const categoryB = [
    {
        name: "2021 S1",
        港島: 16930,
        九龍: 15061,
        新界: 12574,
    },
    {
        name: "2021 S2",
        港島: 17325,
        九龍: 15169,
        新界: 12766
    },
    {
        name: "2021 S3",
        港島: 17264,
        九龍: 15050,
        新界: 12768
    },
    {
        name: "2021 S4",
        港島: 17135,
        九龍: 14235,
        新界: 12501
    },
    {
        name: "2022 S1",
        港島: 16955,
        九龍: 14717,
        新界: 12584
    },
    {
        name: "2022 S2",
        港島: 16889,
        九龍: 14755,
        新界: 12599
    },
    {
        name: "2022 S3",
        港島: 15702,
        九龍: 13886,
        新界: 11865
    },
    {
        name: "2022 S4",
        港島: 14561,
        九龍: 12922,
        新界: 11296
    },
    {
        name: "2023 S1",
        港島: 15182,
        九龍: 13620,
        新界: 11556
    },
    {
        name: "2023 S2",
        港島: 15317,
        九龍: 13765,
        新界: 11605
    },
    {
        name: "2023 截至7月",
        港島: 14118,
        九龍: 12836,
        新界: 11369
    }
  ];

  const categoryC = [
    {
        name: "2021 S1",
        港島: 19388,
        九龍: 17853,
        新界: 12673,
    },
    {
        name: "2021 S2",
        港島: 19936,
        九龍: 17119,
        新界: 12823
    },
    {
        name: "2021 S3",
        港島: 20408,
        九龍: 17762,
        新界: 12895
    },
    {
        name: "2021 S4",
        港島: 20226,
        九龍: 17225,
        新界: 12661
    },
    {
        name: "2022 S1",
        港島: 19461,
        九龍: 16503,
        新界: 12536
    },
    {
        name: "2022 S2",
        港島: 19125,
        九龍: 16352,
        新界: 12963
    },
    {
        name: "2022 S3",
        港島: 19304,
        九龍: 15838,
        新界: 12575
    },
    {
        name: "2022 S4",
        港島: 17461,
        九龍: 14649,
        新界: 11794
    },
    {
        name: "2023 S1",
        港島: 18193,
        九龍: 15485,
        新界: 12265
    },
    {
        name: "2023 S2",
        港島: 17921,
        九龍: 14626,
        新界: 12538
    },
    {
        name: "2023 截至7月",
        港島: 16794,
        九龍: 14538,
        新界: 11975
    }
  ];

  const categoryD = [
    {
        name: "2021 S1",
        港島: 21661,
        九龍: 19440,
        新界: 11417,
    },
    {
        name: "2021 S2",
        港島: 23244,
        九龍: 18766,
        新界: 11875
    },
    {
        name: "2021 S3",
        港島: 23638,
        九龍: 20388,
        新界: 11893
    },
    {
        name: "2021 S4",
        港島: 22989,
        九龍: 20265,
        新界: 11597
    },
    {
        name: "2022 S1",
        港島: 21032,
        九龍: 19036,
        新界: 11447
    },
    {
        name: "2022 S2",
        港島: 21853,
        九龍: 16089,
        新界: 11320
    },
    {
        name: "2022 S3",
        港島: 21297,
        九龍: 17315,
        新界: 10986
    },
    {
        name: "2022 S4",
        港島: 20350,
        九龍: 18116,
        新界: 10031
    },
    {
        name: "2023 S1",
        港島: 20959,
        九龍: 16097,
        新界: 11365
    },
    {
        name: "2023 S2",
        港島: 21825,
        九龍: 18008,
        新界: 11772
    },
    {
        name: "2023 截至7月",
        港島: 19253,
        九龍: 17309,
        新界: 10526
    }
  ];

  const categoryE = [
    {
        name: "2021 S1",
        港島: 25891,
        九龍: 17928,
        新界: 10859,
    },
    {
        name: "2021 S2",
        港島: 25269,
        九龍: 20567,
        新界: 10772
    },
    {
        name: "2021 S3",
        港島: 28062,
        九龍: 29760,
        新界: 10639
    },
    {
        name: "2021 S4",
        港島: 28543,
        九龍: 25506,
        新界: 10302
    },
    {
        name: "2022 S1",
        港島: 25891,
        九龍: 28806,
        新界: 9540
    },
    {
        name: "2022 S2",
        港島: 25269,
        九龍: 22147,
        新界: 10944
    },
    {
        name: "2022 S3",
        港島: 28062,
        九龍: 12260,
        新界: 10993
    },
    {
        name: "2022 S4",
        港島: 28543,
        九龍: 18174,
        新界: 8236
    },
    {
        name: "2023 S1",
        港島: 26541,
        九龍: 18358,
        新界: 10675
    },
    {
        name: "2023 S2",
        港島: 23602,
        九龍: 17556,
        新界: 9481
    },
    {
        name: "2023 截至7月",
        港島: 26163,
        九龍: 17556,
        新界: 10730
    }
  ];

  const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value } = props;
  
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };
  
  const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;
  
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

export function HousePricePreSquareChart(){

    const [width, setWidth] = useState<number>(0);

    useEffect(() =>{
        const onresize = () =>{
            setWidth(window.innerWidth);
        }
        onresize()

        window.addEventListener('resize', onresize);

        return () =>{
            window.removeEventListener('resize', onresize);
        }
    }, [])

    const [panelScope, panelAnimate] = useAnimate();

    async function panelFadeOut(){
        panelAnimate(panelScope.current, {opacity: 0}, {duration: 0.2});
    }

    return (
    <div className=" relative w-full mt-10 h-fit bg-[#00000078] flex">


        <motion.div ref={panelScope} className=" overflow-hidden absolute w-full h-full bg-black z-10 flex justify-center items-center pointer-events-none"
            initial={{opacity: 0.6}}
        >

            <div className=" text-8xl animate-bounce-x">
                <TfiHandPointUp />
            </div>

        </motion.div>

        <div className=" w-full overflow-x-scroll whitespace-nowrap flex flex-row justify-start items-center gap-5"
            onClick={() =>{
                panelFadeOut();
            }}
            onScroll={() =>{
                panelFadeOut();
            }}
        >

            <div className=" flex flex-col justify-center items-center">
                <p>香港分區A類樓宇平均呎價</p>

                <LineChart
                    width={width / 2}
                    height={500}
                    data={categoryA}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="港島" stroke="#F1D371">
                        <LabelList content={<CustomizedLabel />} />
                    </Line>
                    <Line type="monotone" dataKey="九龍" stroke="#71A3F1" />
                    <Line type="monotone" dataKey="新界" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className=" flex flex-col justify-center items-center">
                <p>香港分區B類樓宇平均呎價</p>

                <LineChart
                    width={width / 2}
                    height={500}
                    data={categoryB}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="港島" stroke="#F1D371">
                        <LabelList content={<CustomizedLabel />} />
                    </Line>
                    <Line type="monotone" dataKey="九龍" stroke="#71A3F1" />
                    <Line type="monotone" dataKey="新界" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className=" flex flex-col justify-center items-center">
                <p>香港分區C類樓宇平均呎價</p>

                <LineChart
                    width={width / 2}
                    height={500}
                    data={categoryC}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="港島" stroke="#F1D371">
                        <LabelList content={<CustomizedLabel />} />
                    </Line>
                    <Line type="monotone" dataKey="九龍" stroke="#71A3F1" />
                    <Line type="monotone" dataKey="新界" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className=" flex flex-col justify-center items-center">
                <p>香港分區D類樓宇平均呎價</p>

                <LineChart
                    width={width / 2}
                    height={500}
                    data={categoryD}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="港島" stroke="#F1D371">
                        <LabelList content={<CustomizedLabel />} />
                    </Line>
                    <Line type="monotone" dataKey="九龍" stroke="#71A3F1" />
                    <Line type="monotone" dataKey="新界" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className=" flex flex-col justify-center items-center">
                <p>香港分區E類樓宇平均呎價</p>

                <LineChart
                    width={width / 2}
                    height={500}
                    data={categoryE}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="港島" stroke="#F1D371">
                        <LabelList content={<CustomizedLabel />} />
                    </Line>
                    <Line type="monotone" dataKey="九龍" stroke="#71A3F1" />
                    <Line type="monotone" dataKey="新界" stroke="#82ca9d" />
                </LineChart>
            </div>

        </div>

    </div>
    )

}