// Register Total Table Component
Vue.component('total-table', {
    props: ['data'],
    template: `
        <table class="table">
            <thead>
                <tr class="top-row">
                    <th class="label-column">Full Price</th>
                    <th colspan="3">Day</th>
                    <th colspan="3" class="month">Month</th>
                    <th colspan="3">YTD</th>
                </tr>
                <tr class="sub-row">
                    <th class="label-column"></th>
                    <th>Today</th>
                    <th>LY</th>
                    <th>Change</th>
                    <th class="month">This Month</th>
                    <th class="month">LY</th>
                    <th class="month">Change</th>
                    <th>This Year</th>
                    <th>LY</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data" :key="index">
                    <td class="label-column">{{ row.label }}</td>
                    <td>{{ row.day.today }}</td>
                    <td>{{ row.day.ly }}</td>
                    <td :class="row.day.change > 0 ? 'positive' : 'negative'">{{ row.day.change }}%</td>
                    <td>{{ row.month.thisMonth }}</td>
                    <td>{{ row.month.ly }}</td>
                    <td :class="row.month.change > 0 ? 'positive' : 'negative'">{{ row.month.change }}%</td>
                    <td>{{ row.ytd.thisYear }}</td>
                    <td>{{ row.ytd.ly }}</td>
                    <td :class="row.ytd.change > 0 ? 'positive' : 'negative'">{{ row.ytd.change }}%</td>
                </tr>
            </tbody>
        </table>
        
    `
});

// Register Web Full Price Table Component
Vue.component('webfullprice-table', {
    props: ['data'],
    template: `
        <table class="table">
            <thead>
                <tr class="top-row">
                    <th class="label-column">Web Full Price</th>
                    <th colspan="3">Day</th>
                    <th colspan="3" class="month">Month</th>
                    <th colspan="3">YTD</th>
                </tr>
                <tr class="sub-row">
                    <th class="label-column"></th>
                    <th>Today</th>
                    <th>LY</th>
                    <th>Change</th>
                    <th class="month">This Month</th>
                    <th class="month">LY</th>
                    <th class="month">Change</th>
                    <th>This Year</th>
                    <th>LY</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data" :key="index">
                    <td class="label-column">{{ row.label }}</td>
                    <td>{{ row.day.today }}</td>
                    <td>{{ row.day.ly }}</td>
                    <td :class="row.day.change > 0 ? 'positive' : 'negative'">{{ row.day.change }}%</td>
                    <td>{{ row.month.thisMonth }}</td>
                    <td>{{ row.month.ly }}</td>
                    <td :class="row.month.change > 0 ? 'positive' : 'negative'">{{ row.month.change }}%</td>
                    <td>{{ row.ytd.thisYear }}</td>
                    <td>{{ row.ytd.ly }}</td>
                    <td :class="row.ytd.change > 0 ? 'positive' : 'negative'">{{ row.ytd.change }}%</td>
                </tr>
            </tbody>
        </table>
    `
});

Vue.component('fullprice-table', {
    props: ['data'],
    template: `
        <table class="table">
            <thead>
                <tr class="top-row">
                    <th class="label-column">Full Price</th>
                    <th colspan="3">Day</th>
                    <th colspan="3" class="month">Month</th>
                    <th colspan="3">YTD</th>
                </tr>
                <tr class="sub-row">
                    <th class="label-column"></th>
                    <th>Today</th>
                    <th>LY</th>
                    <th>Change</th>
                    <th class="month">This Month</th>
                    <th class="month">LY</th>
                    <th class="month">Change</th>
                    <th>This Year</th>
                    <th>LY</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in data" :key="index">
                    <td class="label-column">{{ row.label }}</td>
                    <td>{{ row.day.today }}</td>
                    <td>{{ row.day.ly }}</td>
                    <td :class="row.day.change > 0 ? 'positive' : 'negative'">{{ row.day.change }}%</td>
                    <td>{{ row.month.thisMonth }}</td>
                    <td>{{ row.month.ly }}</td>
                    <td :class="row.month.change > 0 ? 'positive' : 'negative'">{{ row.month.change }}%</td>
                    <td>{{ row.ytd.thisYear }}</td>
                    <td>{{ row.ytd.ly }}</td>
                    <td :class="row.ytd.change > 0 ? 'positive' : 'negative'">{{ row.ytd.change }}%</td>
                </tr>
            </tbody>
        </table>
    `
});

// Create Vue
new Vue({
    el: '#app',
    data: {
        totalTableData: [
            {
                label: 'Total Sales',
                day: { today: 400000, ly: 360000, change: 11 },
                month: { thisMonth: 4000000, ly: 4400000, change: -9 },
                ytd: { thisYear: 40000000, ly: 36000000, change: 11 }
            },
            {
                label: 'Retail',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'Web',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'Whiteout',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'Re Order B2B',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            }
        ],
        webFullPriceData: [
            {
                label: 'Total',
                day: { today: 400000, ly: 360000, change: 11 },
                month: { thisMonth: 4000000, ly: 4400000, change: -9 },
                ytd: { thisYear: 40000000, ly: 36000000, change: 11 }
            },
            {
                label: 'NOK',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'SEK',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'DKK',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'EUR',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'USD',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'CHF',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'GBP',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            },
            {
                label: 'JPY',
                day: { today: 100000, ly: 90000, change: 11 },
                month: { thisMonth: 1000000, ly: 1100000, change: -9 },
                ytd: { thisYear: 10000000, ly: 9000000, change: 11 }
            }
        ],
        fullPriceData: [
            {
                label: 'Total Norway',
                day: { today: 2000000, ly: 1800000, change: 11 },
                month: { thisMonth: 20000000, ly: 22000000, change: -9 },
                ytd: { thisYear: 200000000, ly: 180000000, change: 11 }
            },
            { label: 'Alta', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Bergen', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Bodø', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Bogstadveien', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Gulskogen', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Haugesund', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Norrøna House', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Jessheim', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Kristiansand', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Kvadrat', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Lagunen', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Lillehammer', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Moa', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Oslo', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Sandvika', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Stavanger', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Storo', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Strømmen', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Tromsø', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } },
            { label: 'Trondheim', day: { today: 100000, ly: 90000, change: 11 }, month: { thisMonth: 1000000, ly: 1100000, change: -9 }, ytd: { thisYear: 10000000, ly: 9000000, change: 11 } }
        ]

    }
});

