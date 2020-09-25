<template>
  <div class="clock">
    <p class="clock-date">{{now_date}}</p>
    <p class="clock-now-time">{{now_time}}</p>
    <p class="clock-period">現在 {{now_period}} です</p>
    <p class="clock-remain">{{remain_time}}</p>
    <p class="clock-next-period">▶ {{next_period}}</p>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

const period_list = [
  '時間外',
  '1時限目',
  '1→2休憩時間',
  '2時限目',
  '昼休み',
  '3時限目',
  '3→4休憩時間',
  '4時限目',
  '4→5休憩時間',
  '5時限目',
  '時間外',
];

const date_list = [
  [
    [0, 0, 0],
    [9, 30, 0],
  ],
  [
    [9, 30, 0],
    [11, 0, 0],
  ],
  [
    [11, 0, 0],
    [11, 10, 0],
  ],
  [
    [11, 10, 0],
    [12, 40, 0],
  ],
  [
    [12, 40, 0],
    [13, 30, 0],
  ],
  [
    [13, 30, 0],
    [15, 0, 0],
  ],
  [
    [15, 0, 0],
    [15, 10, 0],
  ],
  [
    [15, 10, 0],
    [16, 40, 0],
  ],
  [
    [16, 40, 0],
    [16, 50, 0],
  ],
  [
    [16, 50, 0],
    [18, 20, 0],
  ],
  [
    [18, 20, 0],
    [24, 0, 0],
  ],
];

function detectPeriod(now_date, today_date_list) {
  for (let i in today_date_list) {
    if (today_date_list[i][0] <= now_date && now_date < today_date_list[i][1]) {
      return period_list[i];
    }
  }
}

function calcRemainTime(now_date, today_date_list) {
  for (let i in today_date_list) {
    if (today_date_list[i][0] <= now_date && now_date < today_date_list[i][1]) {
      return today_date_list[i][1] - now_date;
    }
  }
}

function convertTime(seconds) {
  const h = (seconds / 3600) | 0;
  const m = ((seconds - h * 3600) / 60) | 0;
  const s = seconds - h * 3600 - m * 60;
  return `${h}時間${m}分${s}秒`;
}

function getNextPeriod(now_period) {
  if (now_period === '5時限目' || now_period === '時間外') {
    return '1時限目は9時30分からです';
  } else if (now_period === '1時限目' || now_period === '1→2休憩時間') {
    return '2時限目は11時10分からです';
  } else if (now_period === '2時限目' || now_period === '昼休み') {
    return '3時限目は13時30分からです';
  } else if (now_period === '3時限目' || now_period === '3→4休憩時間') {
    return '4時限目は15時10分からです';
  } else if (now_period === '4時限目' || now_period === '4→5休憩時間') {
    return '5時限目は16時50分からです';
  } else {
    return '不明なエラーです';
  }
}

export default {
  data() {
    return {
      now_date: '',
      now_time: '',
      now_period: '',
      remain_time: '',
      next_period: '',
      tomorrow_date: dayjs()
        .add(1, 'day')
        .startOf('date')
        .unix(),
    };
  },
  mounted() {
    this.refleshTime();
  },
  methods: {
    refleshTime: function() {
      const today_date_list = [];

      date_list.forEach(elem => {
        const start_time = new Date();
        start_time.setHours(elem[0][0]);
        start_time.setMinutes(elem[0][1]);
        start_time.setSeconds(elem[0][2]);
        start_time.setMilliseconds(0);

        const end_time = new Date();
        end_time.setHours(elem[1][0]);
        end_time.setMinutes(elem[1][1]);
        end_time.setSeconds(elem[1][2]);
        start_time.setMilliseconds(0);

        today_date_list.push([dayjs(start_time).unix(), dayjs(end_time).unix()]);
      });

      setInterval(() => {
        const nd = dayjs().unix();
        const pr = detectPeriod(nd, today_date_list);
        this.now_date = dayjs().format('YYYY年MM月DD日(ddd)');
        this.now_time = dayjs().format('HH:mm:ss');
        this.now_period = pr;
        if (pr !== '時間外') {
          this.remain_time = `終了まであと: ${convertTime(calcRemainTime(nd, today_date_list))}`;
        } else {
          this.remain_time = '';
        }
        this.next_period = getNextPeriod(pr);
        if (nd > this.tomorrow_date) {
          location.reload();
        }
      }, 1000);
    },
  },
};
</script>

<style>
.clock {
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  line-height: 2;
}

.clock-now-time {
  font-size: 6rem;
}

@media screen and (max-width: 415px) {
  .clock-now-time {
    font-size: 3.5rem;
  }
  .clock {
    font-size: 0.8rem;
    padding: 1.6rem 0;
    line-height: 1.7;
  }
  .clock-next-period {
    font-size: 0.5rem;
  }
}

.clock-next-period {
  font-size: 0.9rem;
}
</style>