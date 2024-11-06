function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
  }

  function submitFortune() {

    const numChildren = document.getElementById("numChildren").value;
    const partnerName = document.getElementById("partnerName").value;
    const geoLocation = document.getElementById("geoLocation").value;
    const jobTitle = document.getElementById("jobTitle").value;


    const fortune = tellFortune(numChildren, partnerName, geoLocation, jobTitle);
    document.getElementById("fortuneResult").innerText = fortune;
  }


  function calculateDogAge(puppyAge) {
    return puppyAge * 7;
  }


  function submitDogAge() {

    const puppyAge = document.getElementById("puppyAge").value;


    const dogAge = calculateDogAge(Number(puppyAge));
    document.getElementById("dogAgeResult").innerText = `Your doggie is ${dogAge} years old in dog years!`;
  }