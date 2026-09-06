

const user = document.querySelector('.user')


const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    photo: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    photo: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    photo: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    photo: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    photo: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 6,
    name: "Sophia Martinez",
    email: "sophia@example.com",
    photo: "https://i.pravatar.cc/150?img=6"
  },
  {
    id: 7,
    name: "James Anderson",
    email: "james@example.com",
    photo: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 8,
    name: "Olivia Taylor",
    email: "olivia@example.com",
    photo: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: 9,
    name: "Daniel Thomas",
    email: "daniel@example.com",
    photo: "https://i.pravatar.cc/150?img=9"
  }
];


users.forEach(function(e){
    user.innerHTML += ` <div class="user-card">
      <div>
        <img
          src="${e.photo} "
          alt="User image"
        >
      </div>

      <div class="text">
        <div>${e.name} </div>
        <div>${e.email}</div>
      </div>
    </div>`
})