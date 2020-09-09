class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const orders = [new Order({priority: "normal"}), new Order({priority: "high"}), new Order({priority: "rush"})];

const highPriorityCount = orders.filter(o => o.priority === 'high' || o.priority === 'rush').length;

module.exports = {highPriorityCount};