import { useEffect, useRef, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const houseRantingData = [
    {
      name: '中西區',
      租金: 18750,
    },
    {
        name: '灣仔',
        租金: 16250,
    },
    {
        name: '東區',
        租金: 16000,
    },
    {
        name: '南區',
        租金: 16150,
    },
    {
        name: '油尖旺',
        租金: 16450,
    },
    {
        name: '深水埗',
        租金: 15000,
    },
    {
        name: '九龍城',
        租金: 15600,
    },
    {
        name: '黃大仙',
        租金: 15000,
    },
    {
        name: '觀塘',
        租金: 14300,
    },
    {
        name: '葵青',
        租金: 13500,
    },
    {
        name: '荃灣',
        租金: 13500,
    },
    {
        name: '屯門',
        租金: 10500,
    },
    {
        name: '元朗',
        租金: 10600,
    },
    {
        name: '北區',
        租金: 11000,
    },
    {
        name: '大埔',
        租金: 13000,
    },
    {
        name: '沙田',
        租金: 13800,
    },
    {
        name: '西貢',
        租金: 16500,
    },
    {
        name: '離島',
        租金: 13500,
    },
];

export function HouseRantingBarChart(){

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

        <div className=" flex flex-col justify-center items-center">
            <p> 全港18區樓宇租金中位數 (元)</p>
            <p>A類樓宇 (40平方米/ 430呎以下)</p>

            <BarChart
                width={width / perPage.current}
                height={300}
                data={houseRantingData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 20000]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="租金" fill="#6685B3" />
            </BarChart>
        </div>

    </div>
    )
}