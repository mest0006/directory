
function list (clients) {
  return clients.map(client => `

<li class="list-group-item d-flex justify-content-between" data-index=" ${client.index}">
  ${client.name}
  <strong>${client.balance}</strong>
</li>

`).join('')
}

function order (clients, client) {
  return clients.sort((a, b) => {
    if (a[client] > b[client]) {
      return 0
    } else if (a[client] < b[client]) {
      return -1
    } else {
      return 1
    }

  })

}
function total (clients) {
  return clients.reduce((total, client) => {
    return total += client.balance;
  }, 0)
}
function info (index) {
  return clients[index]
  return clients.find(index => index)





}





const search = (query) => {

  return clients.filter(b => b.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}










