import { useEffect, useRef, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { CustomTooltip } from "./HousePricePreSquareChart";

export const houseSellingData = [
    {
      name: '中西區',
      二手樓宇售價: 521.0,
    },
    {
        name: '灣仔',
        二手樓宇售價: 532.5,
    },
    {
        name: '東區',
        二手樓宇售價: 404.0,
    },
    {
        name: '南區',
        二手樓宇售價: 410.0,
    },
    {
        name: '油尖旺',
        二手樓宇售價: 356.0,
    },
    {
        name: '深水埗',
        二手樓宇售價: 353.0,
    },
    {
        name: '九龍城',
        二手樓宇售價: 379.9,
    },
    {
        name: '黃大仙',
        二手樓宇售價: 400.0,
    },
    {
        name: '觀塘',
        二手樓宇售價: 408.0,
    },
    {
        name: '葵青',
        二手樓宇售價: 450.0,
    },
    {
        name: '荃灣',
        二手樓宇售價: 475.0,
    },
    {
        name: '屯門',
        二手樓宇售價: 491.0,
    },
    {
        name: '元朗',
        二手樓宇售價: 494.0,
    },
    {
        name: '北區',
        二手樓宇售價: 470.0,
    },
    {
        name: '大埔',
        二手樓宇售價: 400.0,
    },
    {
        name: '沙田',
        二手樓宇售價: 500.0,
    },
    {
        name: '西貢',
        二手樓宇售價: 576.9,
    },
    {
        name: '離島',
        二手樓宇售價: 447.5,
    },
];

export function HouseSellingBarChart(){

    const [width, setWidth] = useState<number>(0);
    const perPage = useRef<number>(2);
    
    useEffect(() =>{
        const onresize = () =>{
            setWidth(window.innerWidth);

            perPage.current = 1;

            // if (window.innerWidth < 1080){
            //     perPage.current = 1;
            // } else {
            //     perPage.current = 2;
            // }
        }
        onresize()

        window.addEventListener('resize', onresize);

        return () =>{
            window.removeEventListener('resize', onresize);
        }
    }, [])

    return (
        <div className=" mt-10 w-full h-fit flex flex-col lg:flex-row justify-center items-center bg-[#00000078]">

        <div className=" flex flex-col justify-center items-center text-lg">
            <p> 全港18區二手樓宇售價中位數 (萬)</p>
            <p>A類樓宇 (40平方米/ 430呎以下)</p>

            <BarChart
                width={width / perPage.current}
                height={300}
                data={houseSellingData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 800]} />
                <Tooltip content={<CustomTooltip prefix={'$'} postfix={'萬'} />} />
                <Legend />
                <Bar dataKey="二手樓宇售價" fill="#A56BDA" />
            </BarChart>
        </div>

    </div>
    )
}