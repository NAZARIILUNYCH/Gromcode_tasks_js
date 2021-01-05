const shmoment = initValue => {
  const newDate = new Date(initValue);

  const dateObj = {
    add(dateEquivalent, value) {
      switch (dateEquivalent) {
        case 'years':
          newDate.setFullYear(newDate.getFullYear() + value);
          return this;

        case 'months':
          newDate.setMonth(newDate.getMonth() + value);
          return this;

        case 'days':
          newDate.setDate(newDate.getDate() + value);
          return this;

        case 'hours':
          newDate.setHours(newDate.getHours() + value);
          return this;

        case 'minutes':
          newDate.setMinutes(newDate.getMinutes() + value);
          return this;

        case 'seconds':
          newDate.setSeconds(newDate.getSeconds() + value);
          return this;

        case 'milliseconds':
          newDate.setMilliseconds(newDate.getMilliseconds() + value);
          return this;

        default:
          return this;
      }
    },
    subtract(dateEquivalent, value) {
      switch (dateEquivalent) {
        case 'years':
          newDate.setFullYear(newDate.getFullYear() - value);
          return this;

        case 'months':
          newDate.setMonth(newDate.getMonth() - value);
          return this;

        case 'days':
          newDate.setDate(newDate.getDate() - value);
          return this;

        case 'hours':
          newDate.setHours(newDate.getHours() - value);
          return this;

        case 'minutes':
          newDate.setMinutes(newDate.getMinutes() - value);
          return this;

        case 'seconds':
          newDate.setSeconds(newDate.getSeconds() - value);
          return this;

        case 'milliseconds':
          newDate.setMilliseconds(newDate.getMilliseconds() - value);
          return this;

        default:
          return this;
      }
    },
    result() {
      return new Date(newDate);
    },
  };

  return dateObj;
};

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('minutes', 2)
    .add('days', 8)
    .subtract('years', 1)
    .result(),
);
