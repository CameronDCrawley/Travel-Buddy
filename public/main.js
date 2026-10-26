
let booked = document.querySelectorAll(".bookBtn")
let itinerary = document.querySelectorAll(".itiBtn")
const images = [
  
  "https://yucatanmagazine.com/wp-content/uploads/2021/07/ChichenItza030-1024x747.jpg"
]

Array.from(itinerary).forEach(function (element) {
  element.addEventListener("click", function (btn) {
    const card = btn.target.closest('.card-container')
  const id = element.getAttribute('data-id')

    const input = card.querySelector('.itiInput')
    const activity = input.value
    console.log(id);
    console.log(activity)

    fetch("/addActivity", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "id":id,
        "activity":activity,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(data);
        window.location.reload(true);
      });
  });
});

Array.from(booked).forEach(function (element) {
  element.addEventListener("click", function () {
    const id = element.getAttribute('data-id')
    console.log(id)

    fetch("/booked", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "id": id,
      //   "image":image,
      //  "destination":destination,
      //   "date": date,
      //   "budget":budget,
      //   "group":group,
      //   "itinerary":itinerary,
        
      }),
    }).then(function (response) {
      window.location.reload();
    });
  });
});

