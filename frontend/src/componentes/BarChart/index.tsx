import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import { SaleSuccess } from 'types/sale';
import round from 'util/format';

type SeriesData = {
    name: string;
    data: number[];
}

type CharData = {
    labels : {
        categories: string[];
    };
    series : SeriesData[];
}

const BarChart = () => {

const [chartData, setChartData] = useState<CharData>();

useEffect(() =>{
    axios.get(`${BASE_URL}/sales/success-by-seller`)
    .then(response => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => round(100 * x.deals / x.visited, 1));

        setChartData({
            labels: {
                categories: myLabels
            },
            series: [
                {
                    name: "% Success",
                    data: mySeries                   
                }
            ]
        })
    })
}, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart 
            options={{ ...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;