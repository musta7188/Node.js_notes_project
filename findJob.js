const me = {
  experience: false,
  job: false,
};

const jobSearch = (employee, keepLooking) => {
  if (!employee.experience && employee.job) {
    return console.log("experience gained");
  }
  if (employee.experience && !employee.job) {
    return console.log("job found ");
  }
  if (!employee.experience && !employee.job) {
    employee.rejected = true;
    keepLooking(null, employee);
  }
};

const dontGiveUp = (employee) => {
  if (employee.rejected) {
    console.log("don't give up it will get better :)");
  }
};

jobSearch(me, (error, data) => {
  dontGiveUp(data);
});
