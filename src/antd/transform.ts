import moment, { Moment } from 'moment'
import { isNone } from '../base'

/**
 * @class
 * 修复ant design日期范围组件时间范围
 * @description 
 * 
 * 由于 `ant design` 日期范围组件取得的 时间戳范围是包含时间的，
 * 而一般用于查询数据的时间应该是从开始时间当天的 `00:00:00` ~ 结束时间当天的 `23:59:59`，
 * 故有了以下一系列的工具方法，用于修复在 `FormItem` 中使用时的时间范围问题
 * 
 * @example
 * ```jsx
 * <Form.Item {...AntdTransform.fixDateRange}>
 *    <DatePicker.RangePicker />
 * </Form.Item>
 * ```
 */
export class AntdTransform {
  /**
   * 只转化范围，格式不做处理
   */
  static get fixDateRange() {
    return {
      getValueFromEvent: (values: [Moment, Moment]) => {
        if (isNone(values)) return values
        return values.map(value => value.endOf('d'))
      },
      getValueProps: (values: [Moment, Moment]) => {
        if (isNone(values)) return values
        return {
          value: values.map(value => value.endOf('d'))
        }
      }
    }
  }
  /**
   * 转化范围，格式换为 13 位时间戳
   */
  static get fixDateRangeMs() {
    return {
      getValueFromEvent: (values: [Moment, Moment]) => {
        if (isNone(values)) return values
        return values.map(value => value.endOf('d').valueOf())
      },
      getValueProps: (values: [number | string, number | string]) => {
        if (isNone(values)) return values
        return {
          value: values.map(value => moment(value).endOf('d'))
        }
      }
    }
  }

  /**
   * 转化范围，格式换为 10 位时间戳
   */
  static get fixDateRangeUnix() {
    return {
      getValueFromEvent: (values: [Moment, Moment]) => {
        if (isNone(values)) return values
        return values.map(value => value.endOf('d').unix())
      },
      getValueProps: (values: [number | string, number | string]) => {
        if (isNone(values)) return values
        return {
          value: values.map(value => moment.unix(value as number).endOf('d'))
        }
      }
    }
  }
}