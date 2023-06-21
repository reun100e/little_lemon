
export const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = async function (date) {
  try {
    // Simulate an asynchronous API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    let result = [];
    let random = seededRandom(new Date(date).getDate()); // Convert date to a Date object

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }

    return result;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};


export const submitAPI = async function (formData) {
  try {
    // Simulate an asynchronous API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Perform any necessary validation or data processing here
    // ...

    // Simulate a random success/failure
    const isSuccess = Math.random() < 0.8; // 80% success rate

    // Return true if the data was successfully submitted, otherwise false
    return isSuccess;
  } catch (error) {
    console.error('Error submitting API:', error);
    throw error;
  }
};
