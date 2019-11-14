<template>
  <div class="cl-date-picker" ref="wrapper">
    <cl-popover ref="popover" position="bottom" :container="popoverContainer">
      <cl-input
        slot="reference"
        type="text"
        clearable
        :value="formattedValue"
        @input="onInput"
        ref="input"
      />
      <template slot="content">
        <div class="cl-date-picker-pop" @selectstart.prevent>
          <div class="cl-date-picker-nav">
            <span :class="cx('prevYear', 'navItem')" @click="onClickPrevYear">
              <cl-icon name="d-arrow-left"/>
            </span>
            <span :class="cx('prevMonth', 'navItem')" @click="onClickPrevMonth">
              <cl-icon name="arrow-left"/>
            </span>
            <span :class="cx('yearAndMonth')" @click="onClickMonth">
              <span>{{display.year}}年</span>
              <span>{{display.month+1}}月</span>
            </span>
            <span :class="cx('nextMonth', 'navItem')" @click="onClickNextMonth">
              <cl-icon name="arrow-right"/>
            </span>
            <span :class="cx('nextYear', 'navItem')" @click="onClickNextYear">
              <cl-icon name="d-arrow-right"/>
            </span>
          </div>
          <div class="cl-date-picker-panels">
            <div class="cl-date-picker-content">
              <template v-if="mode==='month'">
                <div :class="cx('selectMonth')">
                  <div :class="cx('selects')">
                    <select @change="onSelectYear" :value="display.year">
                      <option v-for="year in years" :value="year" :key="year">{{year}}</option>
                    </select><span style="margin:0 6px">年</span> 
                    <select @change="onSelectMonth" :value="display.month">
                      <option
                        v-for="month in helper.range(0,12)"
                        :value="month"
                        :key="month"
                      >{{month+1}}</option>
                    </select><span style="margin:0 6px">月</span> 
                  </div>
                  <div :class="cx('returnToDayMode')">
                    <cl-button @click.stop="mode='day'">确定</cl-button>
                  </div>
                </div>
              </template>
              <template v-else>
                <div :class="cx('weekdays')">
                  <span :class="cx('weekday')" v-for="i in [1,2,3,4,5,6,0]" :key="i">{{weekdays[i]}}</span>
                </div>
                <div :class="cx('row')" v-for="i in helper.range(1, 7)" :key="i">
                  <span
                    :class="[cx('cell'), {
                      currentMonth: isCurrentMonth(getVisibleDay(i,j)), 
                      selected: isSelected(getVisibleDay(i,j)),
                      today: isToday(getVisibleDay(i,j))
                      }]"
                    v-for="j in helper.range(1,8)"
                    :key="j"
                    @click="onClickCell(getVisibleDay(i,j))"
                  >{{getVisibleDay(i,j).getDate()}}</span>
                </div>
              </template>
            </div>
          </div>
          <div class="cl-date-picker-actions">
            <cl-button @click="onClickToday">今天</cl-button>
            <cl-button @click="onClickClear">清除</cl-button>
          </div>
        </div>
      </template>
    </cl-popover>
  </div>
</template>

<script>
import ClInput from "../input/input";
import ClButton from "../button/button";
import ClIcon from "../icon/icon";
import ClPopover from "../popover/popover";
import ClickOutside from "../../utils/click-outside";
import helper from "./helper";
export default {
  components: { ClInput, ClIcon, ClPopover, ClButton },
  directives: { ClickOutside },
  name: "cl-datepicker",
  props: {
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    value: {
      type: [String,Array]
    },
    scope: {
      type: Array,
      default: () => [new Date(1900, 0, 1), helper.addYear(new Date(), 100)]
    }
  },
  data() {
    let [year, month] = helper.getYearMonthDate(this.value || new Date());
    return {
      mode: "days",
      helper: helper,
      popoverContainer: null,
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      display: { year, month }
    };
  },
  mounted() {
    this.popoverContainer = this.$refs.wrapper;
  },
  methods: {
    cx(...classNames) {
      return classNames.map(className => `cl-date-picker-${className}`);
    },
    onInput(value) {
      var regex = /^\d{4}-\d{2}-\d{2}$/g;
      if (value.match(regex)) {
        let [year, month, day] = value.split("-");
        month = month - 1;
        year = year - 0;
        this.display = { year, month };
        this.$emit("input", new Date(year, month, day));
      } else {
        this.$emit("input", value);
      }
    },

    onClickMonth() {
      if (this.mode !== "month") {
        this.mode = "month";
      } else {
        this.mode = "day";
      }
    },
    onClickCell(date) {
      if (this.isCurrentMonth(date)) {
        let [year, month, day] = helper.getYearMonthDate(date);
        this.display = { year, month };
        month = month + 1;
        let showDate = `${year}-${month}-${day}`;
        this.$emit("input", showDate);
        // this.$refs.popover.handleHide();
      }
    },
    getVisibleDay(row, col) {
      return this.visibleDays[(row - 1) * 7 + col - 1];
    },
    isCurrentMonth(date) {
      let [year1, month1] = helper.getYearMonthDate(date);
      return year1 === this.display.year && month1 === this.display.month;
    },
    isSelected(date) {
      if (!this.value) {
        return false;
      }
      let [y, m, d] = helper.getYearMonthDate(date);
      let [y2, m2, d2] = this.value.split("-");
      return y === Number(y2) && m === Number(m2) && d === Number(d2);
    },
    isToday(date) {
      let [y, m, d] = helper.getYearMonthDate(date);
      let [y2, m2, d2] = helper.getYearMonthDate(new Date());
      return y === y2 && m === m2 && d === d2;
    },
    onClickPrevYear() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addYear(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickPrevMonth() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addMonth(oldDate, -1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickNextMonth() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addMonth(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickNextYear() {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addYear(oldDate, 1);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onSelectYear(e) {
      const year = e.target.value - 0;
      const d = new Date(year, this.display.month);
      if (d >= this.scope[0] && d <= this.scope[1]) {
        this.display.year = year;
      } else {
        alert("no");
        e.target.value = this.display.year;
      }
    },
    onSelectMonth(e) {
      const month = e.target.value - 0;
      const d = new Date(this.display.year, month);
      if (d >= this.scope[0] && d <= this.scope[1]) {
        this.display.month = month;
      } else {
        alert("no");
        e.target.value = this.display.month;
      }
    },
    onClickToday() {
      const now = new Date();
      const [year, month, day] = helper.getYearMonthDate(now);
      this.display = { year, month };
      let new_month = month + 1;
      let showDate = `${year}-${new_month}-${day}`;
      this.$emit("input", showDate);
      this.$refs.popover.handleHide();
    },
    onClickClear() {
      this.$emit("input", "");
      this.$refs.popover.handleHide();
    }
  },
  computed: {
    visibleDays() {
      let date = new Date(this.display.year, this.display.month, 1);
      let first = helper.firstDayOfMonth(date);
      let last = helper.lastDayOfMonth(date);
      let [year, month, day] = helper.getYearMonthDate(date);
      let n = first.getDay();
      let array = [];
      let x = first - (n === 0 ? 6 : n - 1) * 3600 * 24 * 1000;
      for (let i = 0; i < 42; i++) {
        array.push(new Date(x + i * 3600 * 24 * 1000));
      }
      return array;
    },
    formattedValue() {
      if (!this.value) {
        return "";
      }
      let value = this.value.split("-");
      const [year, month, day] = value;
      return `${Number(year)}-${Number(month)}-${Number(day)}`;
    },
    years() {
      return helper.range(
        this.scope[0].getFullYear(),
        this.scope[1].getFullYear() + 1
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/common/base.scss";
.cl-date-picker {
  &-popWrapper {
    padding: 0;
  }
  &-navItem,
  &-cell,
  &-weekday {
    width: 32px;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &-cell {
    color: #ddd;
    cursor: not-allowed;
    border-radius: 4px;
    &.currentMonth {
      color: black;
      &:hover {
        background: $brand;
        cursor: pointer;
        color: white;
      }
    }
    &.today {
      background: $brand;
      color: #fff;
    }
    &.selected {
      border: 1px solid $brand;
    }
  }
  &-nav {
    display: flex;
  }
  &-yearAndMonth {
    margin: auto;
    cursor: pointer;
    &:hover{
      color:$brand;
    }
  }
  &-selectMonth {
    width: 224px;
    height: 224px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &-returnToDayMode {
    margin-top: 20px;
  }

  &-actions {
    padding: 8px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
