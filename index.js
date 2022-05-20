/* Your Code Here */

/*
 We're giving you employeeData function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for employeeData function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),0); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

const createEmployeeRecord = function (employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = function (array) {
  const employeeRecords = array.map((array) => createEmployeeRecord(array));
  return employeeRecords;
};

function createTimeInEvent(dateStamp) {
  const timeInEvent = {
    type: "TimeIn",
    hour: parseFloat(dateStamp.slice(11)),
    date: dateStamp.slice(0, 10),
  };

  this.timeInEvents.push(timeInEvent);
  return this;
}

function createTimeOutEvent(dateStamp) {
  const timeOutEvent = {
    type: "TimeOut",
    hour: parseFloat(dateStamp.slice(11)),
    date: dateStamp.slice(0, 10),
  };

  this.timeOutEvents.push(timeOutEvent);
  return this;
}

function hoursWorkedOnDate(dateStamp) {
  const punchIn = this.timeInEvents.find(
    (element) => element.date === dateStamp
  );
  const punchOut = this.timeOutEvents.find(
    (element) => element.date === dateStamp
  );

  return (punchOut.hour - punchIn.hour) * 0.01;
}

function wagesEarnedOnDate(dateStamp) {
  return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, name) {
    return srcArray.find((employee) => employee.firstName === name);
}

function calculatePayroll(employeeRecordsArray) {
    const totalIndividualPayArray = employeeRecordsArray.map(employee => allWagesFor.call(employee))
    const totalPayroll = totalIndividualPayArray.reduce((total, num) => total + num);
    return totalPayroll;
  }
