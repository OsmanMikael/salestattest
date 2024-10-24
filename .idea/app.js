// Define a mixin object
var calculateChangeMixin = {
  methods: {
    calculateChange(today, ly) {
      return Number((((today - ly) / ly) * 100).toFixed(2));
    },
    calculateMonthChange(thisMonth, ly) {
      return Number((((thisMonth - ly) / ly) * 100).toFixed(2));
    },
    calculateYearChange(thisYear, ly) {
      return Number((((thisYear - ly) / ly) * 100).toFixed(2));
    },
  },
};

// Register Total Table Component
const TotalTable = {
  props: ["data"],
  mixins: [calculateChangeMixin],
  template: `
          <table class="table">
              <thead>
                  <tr class="top-row">
                      <th class="label-column">Total</th>
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
                      <td :class="calculateChange(row.day.today, row.day.ly) > 0 ? 'positive' : 'negative'">{{ calculateChange(row.day.today, row.day.ly) }}%</td>
                      <td>{{ row.month.thisMonth }}</td>
                      <td>{{ row.month.ly }}</td>
                      <td :class="calculateMonthChange(row.month.thisMonth, row.month.ly) > 0 ? 'positive' : 'negative'">{{ calculateMonthChange(row.month.thisMonth, row.month.ly) }}%</td>
                      <td>{{ row.ytd.thisYear }}</td>
                      <td>{{ row.ytd.ly }}</td>
                      <td :class="calculateYearChange(row.ytd.thisYear, row.ytd.ly) > 0 ? 'positive' : 'negative'">{{ calculateYearChange(row.ytd.thisYear, row.ytd.ly) }}%</td>
                      </tr>
              </tbody>
          </table>
          
      `,
};
// Register Web Full Price Table Component
const WebfullpriceTable = {
  props: ["data"],
  mixins: [calculateChangeMixin],
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
                      <td :class="calculateChange(row.day.today, row.day.ly) > 0 ? 'positive' : 'negative'">{{ calculateChange(row.day.today, row.day.ly) }}%</td>
                      <td>{{ row.month.thisMonth }}</td>
                      <td>{{ row.month.ly }}</td>
                      <td :class="calculateMonthChange(row.month.thisMonth, row.month.ly) > 0 ? 'positive' : 'negative'">{{ calculateMonthChange(row.month.thisMonth, row.month.ly) }}%</td>
                      <td>{{ row.ytd.thisYear }}</td>
                      <td>{{ row.ytd.ly }}</td>
                      <td :class="calculateYearChange(row.ytd.thisYear, row.ytd.ly) > 0 ? 'positive' : 'negative'">{{ calculateYearChange(row.ytd.thisYear, row.ytd.ly) }}%</td>
                      </tr>
              </tbody>
          </table>
      `,
};
// Register Norway Full Price Table Component
const FullpriceTable = {
  props: ["data"],
  mixins: [calculateChangeMixin],
  template: `
          <table class="table">
              <thead>
                  <tr class="top-row">
                      <th class="label-column">Norway</th>
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
                      <td :class="calculateChange(row.day.today, row.day.ly) > 0 ? 'positive' : 'negative'">{{ calculateChange(row.day.today, row.day.ly) }}%</td>
                      <td>{{ row.month.thisMonth }}</td>
                      <td>{{ row.month.ly }}</td>
                      <td :class="calculateMonthChange(row.month.thisMonth, row.month.ly) > 0 ? 'positive' : 'negative'">{{ calculateMonthChange(row.month.thisMonth, row.month.ly) }}%</td>
                      <td>{{ row.ytd.thisYear }}</td>
                      <td>{{ row.ytd.ly }}</td>
                      <td :class="calculateYearChange(row.ytd.thisYear, row.ytd.ly) > 0 ? 'positive' : 'negative'">{{ calculateYearChange(row.ytd.thisYear, row.ytd.ly) }}%</td>
                      </tr>
              </tbody>
          </table>
      `,
};
// Register Export Full Price Table Component
const ExportTable = {
  props: ["data"],
  mixins: [calculateChangeMixin],
  template: `
          <table class="table">
              <thead>
                  <tr class="top-row">
                      <th class="label-column">Export</th>
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
                      <td :class="calculateChange(row.day.today, row.day.ly) > 0 ? 'positive' : 'negative'">{{ calculateChange(row.day.today, row.day.ly) }}%</td>
                      <td>{{ row.month.thisMonth }}</td>
                      <td>{{ row.month.ly }}</td>
                      <td :class="calculateMonthChange(row.month.thisMonth, row.month.ly) > 0 ? 'positive' : 'negative'">{{ calculateMonthChange(row.month.thisMonth, row.month.ly) }}%</td>
                      <td>{{ row.ytd.thisYear }}</td>
                      <td>{{ row.ytd.ly }}</td>
                      <td :class="calculateYearChange(row.ytd.thisYear, row.ytd.ly) > 0 ? 'positive' : 'negative'">{{ calculateYearChange(row.ytd.thisYear, row.ytd.ly) }}%</td>
                      </tr>
              </tbody>
          </table>
      `,
};
// Register Partner Full Price Table Component
const PartnerTable = {
  props: ["data"],
  mixins: [calculateChangeMixin],
  template: `
          <table class="table">
              <thead>
                  <tr class="top-row">
                      <th class="label-column">Partner</th>
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
                      <td :class="calculateChange(row.day.today, row.day.ly) > 0 ? 'positive' : 'negative'">{{ calculateChange(row.day.today, row.day.ly) }}%</td>
                      <td>{{ row.month.thisMonth }}</td>
                      <td>{{ row.month.ly }}</td>
                      <td :class="calculateMonthChange(row.month.thisMonth, row.month.ly) > 0 ? 'positive' : 'negative'">{{ calculateMonthChange(row.month.thisMonth, row.month.ly) }}%</td>
                      <td>{{ row.ytd.thisYear }}</td>
                      <td>{{ row.ytd.ly }}</td>
                      <td :class="calculateYearChange(row.ytd.thisYear, row.ytd.ly) > 0 ? 'positive' : 'negative'">{{ calculateYearChange(row.ytd.thisYear, row.ytd.ly) }}%</td>
                      </tr>
              </tbody>
          </table>
      `,
};
// Register Outlet Full Price Table Component
const OutletTable = {
  props: ["data"],
  mixins: [calculateChangeMixin],
  template: `
          <table class="table">
              <thead>
                  <tr class="top-row">
                      <th class="label-column">Outlet</th>
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
                      <td :class="calculateChange(row.day.today, row.day.ly) > 0 ? 'positive' : 'negative'">{{ calculateChange(row.day.today, row.day.ly) }}%</td>
                      <td>{{ row.month.thisMonth }}</td>
                      <td>{{ row.month.ly }}</td>
                      <td :class="calculateMonthChange(row.month.thisMonth, row.month.ly) > 0 ? 'positive' : 'negative'">{{ calculateMonthChange(row.month.thisMonth, row.month.ly) }}%</td>
                      <td>{{ row.ytd.thisYear }}</td>
                      <td>{{ row.ytd.ly }}</td>
                      <td :class="calculateYearChange(row.ytd.thisYear, row.ytd.ly) > 0 ? 'positive' : 'negative'">{{ calculateYearChange(row.ytd.thisYear, row.ytd.ly) }}%</td>
                      </tr>
              </tbody>
          </table>
      `,
};
// Register WebOutlet Full Price Table Component
const WebOutletTable = {
  props: ["data"],
  mixins: [calculateChangeMixin],
  template: `
          <table class="table">
              <thead>
                  <tr class="top-row">
                      <th class="label-column">WebOutlet</th>
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
                      <td :class="calculateChange(row.day.today, row.day.ly) > 0 ? 'positive' : 'negative'">{{ calculateChange(row.day.today, row.day.ly) }}%</td>
                      <td>{{ row.month.thisMonth }}</td>
                      <td>{{ row.month.ly }}</td>
                      <td :class="calculateMonthChange(row.month.thisMonth, row.month.ly) > 0 ? 'positive' : 'negative'">{{ calculateMonthChange(row.month.thisMonth, row.month.ly) }}%</td>
                      <td>{{ row.ytd.thisYear }}</td>
                      <td>{{ row.ytd.ly }}</td>
                      <td :class="calculateYearChange(row.ytd.thisYear, row.ytd.ly) > 0 ? 'positive' : 'negative'">{{ calculateYearChange(row.ytd.thisYear, row.ytd.ly) }}%</td>
                      </tr>
              </tbody>
          </table>
      `,
};

// Create Vue
const app = Vue.createApp({
  data() {
    return {
      totalTableData: [
        {
          label: "Total Sales",
          day: { today: 400000, ly: 360000 },
          month: { thisMonth: 4000000, ly: 4400000 },
          ytd: { thisYear: 40000000, ly: 36000000 },
        },
        {
          label: "Retail",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Web",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Whiteout",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Re Order B2B",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
      ],
      webFullPriceData: [
        {
          label: "Total",
          day: { today: 400000, ly: 360000 },
          month: { thisMonth: 4000000, ly: 4400000 },
          ytd: { thisYear: 40000000, ly: 36000000 },
        },
        {
          label: "NOK",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "SEK",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "DKK",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "EUR",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "USD",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "CHF",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "GBP",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "JPY",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
      ],
      fullPriceData: [
        {
          label: "Total Price",
          day: { today: 2000000, ly: 1800000 },
          month: { thisMonth: 20000000, ly: 22000000 },
          ytd: { thisYear: 200000000, ly: 180000000 },
        },
        {
          label: "Alta",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Bergen",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Bodø",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Bogstadveien",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Gulskogen",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Haugesund",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Norrøna House",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Jessheim",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Kristiansand",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Kvadrat",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Lagunen",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Lillehammer",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Moa",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Oslo",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Sandvika",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Stavanger",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Storo",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Strømmen",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Tromsø",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Trondheim",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
      ],
      exportData: [
        {
          label: "Total Export",
          day: { today: 400000, ly: 360000 },
          month: { thisMonth: 4000000, ly: 4400000 },
          ytd: { thisYear: 40000000, ly: 36000000 },
        },
        {
          label: "Boston",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Boulder",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Gøteborg",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Munich",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "New York",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Stockholm",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Åre",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
      ],
      partnerData: [
        {
          label: "Total Partner stores",
          day: { today: 400000, ly: 360000 },
          month: { thisMonth: 4000000, ly: 4400000 },
          ytd: { thisYear: 40000000, ly: 36000000 },
        },
        {
          label: "Beitostølen",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Chamonix",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Cortina",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Hemsedal",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "St. Moritz",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Verbier",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
      ],
      outletData: [
        {
          label: "Total Outlet",
          day: { today: 400000, ly: 360000 },
          month: { thisMonth: 4000000, ly: 4400000 },
          ytd: { thisYear: 40000000, ly: 36000000 },
        },
        {
          label: "Castle Rock",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Hede",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Helsinki",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Landquart",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "Ålgård",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
      ],
      webOutletData: [
        {
          label: "Total",
          day: { today: 400000, ly: 360000 },
          month: { thisMonth: 4000000, ly: 4400000 },
          ytd: { thisYear: 40000000, ly: 36000000 },
        },
        {
          label: "NOK",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "SEK",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "DKK",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "EUR",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "USD",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "CHF",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "GBP",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
        {
          label: "JPY",
          day: { today: 100000, ly: 90000 },
          month: { thisMonth: 1000000, ly: 1100000 },
          ytd: { thisYear: 10000000, ly: 9000000 },
        },
      ],
    };
  },
  components: {
    TotalTable,
    WebfullpriceTable,
    FullpriceTable,
    ExportTable,
    PartnerTable,
    OutletTable,
    WebOutletTable,
  },
});

app.mount("#app");
