import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion, useAnimate } from "framer-motion";
import { FunctionComponent, useEffect, useRef, useState } from "react";
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
        name: "2019 Q1",
        租金指數: 213.3,
        售價指數: 409.7
    },
    {
        name: "2019 Q2",
        租金指數: 215.8,
        售價指數: 437.8
    },
    {
        name: "2019 Q3",
        租金指數: 218.4,
        售價指數: 437.0
    },
    {
        name: "2019 Q4",
        租金指數: 211.3,
        售價指數: 423.7
    },
    {
        name: "2020 Q1",
        租金指數: 202.2,
        售價指數: 418.7
    },
    {
        name: "2020 Q2",
        租金指數: 197.1,
        售價指數: 425.2
    },
    {
        name: "2020 Q3",
        租金指數: 198.7,
        售價指數: 425.5
    },
    {
        name: "2020 Q4",
        租金指數: 194.8,
        售價指數: 423.2
    },
    {
        name: "2021 Q1",
        租金指數: 191.7,
        售價指數: 429.0
    },
    {
        name: "2021 Q2",
        租金指數: 195.1,
        售價指數: 436.2
    },
    {
        name: "2021 Q3",
        租金指數: 199.2,
        售價指數: 441.8
    },
    {
        name: "2021 Q4",
        租金指數: 200.7,
        售價指數: 437.6
    },
    {
        name: "2022 Q1",
        租金指數: 196.1,
        售價指數: 425.7
    },
    {
        name: "2022 Q2",
        租金指數: 194.0,
        售價指數: 423.7
    },
    {
        name: "2022 Q3",
        租金指數: 196.9,
        售價指數: 405.3
    },
    {
        name: "2022 Q4",
        租金指數: 195.8,
        售價指數: 375.5
    },
    {
        name: "2023 Q1",
        租金指數: 194.1,
        售價指數: 378.6
    },
    {
        name: "2023 Q2",
        租金指數: 199.3,
        售價指數: 383.1
    },
    {
        name: "截至8月",
        租金指數: 203.5,
        售價指數: 371.1
    }
  ];

  export const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value } = props;
  
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };
  
  export const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
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

  export const CustomTooltip: FunctionComponent<any> = (props: any) => {

    const { active, payload, label, prefix, postfix } = props;

    if (active && payload && payload.length) {
      return (
        <div className=" min-w-[200px] flex flex-col justify-start items-center rounded-md bg-[#3232354d] p-1">

            <p className=" font-bold">{label}</p>

            {
                payload.map((pld: any) => (
                    <div className=" flex justify-start items-center gap-5">
                        <div className=" font-semibold bg-[#3232357c]" style={{
                            color: pld.color
                        }}>
                            {pld.dataKey}
                        </div>
                        <div>{`${prefix ? prefix : ''} ${pld.value} ${postfix ? postfix : ''}`}</div>
                    </div>
                ))
            }
        </div>
      );
    }
  
    return null;
  };

export function HousePricePreSquareChart(){

    const [width, setWidth] = useState<number>(0);

    const perPage = useRef<number>(2);

    useEffect(() =>{
        const onresize = () =>{
            setWidth(window.innerWidth);

            perPage.current = 1;

            // if (window.innerWidth > 1080){
            //     perPage.current = 2;
            // }
            // if (window.innerWidth > 1400){
            //     perPage.current = 3;
            // }
        }
        onresize()

        window.addEventListener('resize', onresize);

        return () =>{
            window.removeEventListener('resize', onresize);
        }
    }, [])

    return (
    <div className=" w-full h-fit bg-[#00000078] flex">

        <div className=" w-full overflow-x-scroll whitespace-nowrap flex flex-row justify-start items-center gap-5">

            <div className=" flex flex-col justify-center items-center text-lg">
                <p> 2019 - 2023年8月樓宇租金及售價指數</p>
                <p>A類樓宇 (40平方米/ 430呎以下)</p>

                <LineChart
                    width={width / perPage.current}
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
                    <YAxis type="number" domain={[0, 500]}/>
                    <Tooltip content={<CustomTooltip prefix={'$'} postfix={'萬'} />} />
                    <Legend />
                    <Line type="monotone" dataKey="租金指數" stroke="#F1D371">
                    <LabelList content={<CustomizedLabel />} />
                    </Line>
                    <Line type="monotone" dataKey="售價指數" stroke="#71A3F1" />
                </LineChart>
            </div>

        </div>

    </div>
    )

}