const customers = [
  { id: 101, name: "Rahul", email: "rahul@gmail.com" },
  { id: 102, name: "Aman", email: "aman@gmail.com" },
  { id: 101, name: "Rahul", email: "rahul@gmail.com" },
  { id: 103, name: "Priya", email: "priya@gmail.com" },
  { id: 102, name: "Aman", email: "aman@gmail.com" },
  { id: 104, name: "Vikas", email: "vikas@gmail.com" }
];

// Duplicate customers remove karo based on id.

function duplicate(customers) {
    const seen = new Set();

    return customers.filter((item) => {
        if (seen.has(item.id)) {
            return false;
        }

        seen.add(item.id);
        return true;
    });
}

console.log(duplicate(customers));