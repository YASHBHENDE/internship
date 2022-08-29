import React from 'react';
import { Bar } from  "react-chartjs-2";

function BarChart(){
    return <div>
        <Bar
        data={{
            labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
            datasets:[
                {
                    label: 'CHART REPRESENTING MY HEIGHT PROGRESS',
                    data: [5.6, 5.7, 5.9,5.11 , 5.11, 6.12],
                    backgroundColor:['red','red','red','red','blue'],
                },

            ]
        }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false,
            }}
        />
    </div>
}
export default BarChart;