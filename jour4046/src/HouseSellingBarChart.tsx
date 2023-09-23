import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const houseSellingData = [
    {
      name: '一手樓宇買賣合約總數',
      2021: 17650,
      2022: 10315,
      2023: 7184
    },
    {
        name: '二手樓宇買賣合約總數',
        2021: 56647,
        2022: 34375,
        2023: 22103
    }
];

export function HouseSellingBarChart(){

    return (
        <div className=" w-full p-5 lg:w-4/5 mt-10 h-fit flex flex-col lg:flex-row justify-center items-center bg-[#00000078]">

        <div className=" flex flex-col justify-center items-center">
            <p>2021年 - 2023年本港樓宇買賣合約數量</p>

            <BarChart
                width={500}
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2021" fill="#6685B3" />
                <Bar dataKey="2022" fill="#9CB8D7" />
                <Bar dataKey="2023" fill="#0E2B61" />
            </BarChart>
        </div>

        <div className=" flex flex-col justify-center items-center">
            <p>2021年 - 2023年本港樓宇買賣合約數量</p>
            <BarChart
                width={500}
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2021" fill="#6685B3" />
                <Bar dataKey="2022" fill="#9CB8D7" />
                <Bar dataKey="2023" fill="#163775" />
            </BarChart>
        </div>

    </div>
    )
}