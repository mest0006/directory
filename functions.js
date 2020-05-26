
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
      return -1
    } else if (a[client] < b[client]) {
      return 1
    } else {
      return 0
    }

  })

}
function total (clients) {
  return clients.reduce((total, client) => {
    return total += client.balance;
  }, 0)
}
function info (index) {

  return clients.find(clients => clients.index)





}



function search (query) {

  return clients.filter(query => clients.query === query)

}




