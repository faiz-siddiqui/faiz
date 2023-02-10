//6127266420:AAEBgY7LJ7lQdbdvhZsLdlxhsSk9_yx_4JE
const TelegramBot = require('node-telegram-bot-api');
const { saveData, retrieveData } = require('./dataHandler'); // A separate module to handle data storage and retrieval

// Bot token obtained from BotFather
const token = '6127266420:AAEBgY7LJ7lQdbdvhZsLdlxhsSk9_yx_4JE';
const bot = new TelegramBot(token, { polling: true });

// Array to store equipment data
const equipmentData = [];

// Array to store customer data
const customerData = [];

// Array to store payment data
const paymentData = [];

// Array to store delivery and pickup schedules
const deliveryData = [];

// Function to handle adding equipment data
const handleAddEquipment = (msg) => {
  const equipment = {
    id: msg.text.split(' ')[1],
    name: msg.text.split(' ')[2],
    available: msg.text.split(' ')[3],
    rentedOut: msg.text.split(' ')[4],
    lastServiceDate: msg.text.split(' ')[5],
    nextServiceDate: msg.text.split(' ')[6],
  };
  equipmentData.push(equipment);
  bot.sendMessage(msg.chat.id, 'Equipment data added successfully!');
  saveData(equipmentData, 'equipmentData.json'); // Save the equipment data to a file
};

// Function to handle adding customer data
const handleAddCustomer = (msg) => {
  const customer = {
    id: msg.text.split(' ')[1],
    name: msg.text.split(' ')[2],
    contact: msg.text.split(' ')[3],
    rentalDates: msg.text.split(' ')[4],
    specialRequirements: msg.text.split(' ')[5],
  };
  customerData.push(customer);
  bot.sendMessage(msg.chat.id, 'Customer data added successfully!');
  saveData(customerData, 'customerData.json'); // Save the customer data
  };

// Function to handle adding payment data
const handleAddPayment = (msg) => {
  const payment = {
    id: msg.text.split(' ')[1],
    customerId: msg.text.split(' ')[2],
    equipmentId: msg.text.split(' ')[3],
    amount: msg.text.split(' ')[4],
    paymentDate: msg.text.split(' ')[5],
  };
  paymentData.push(payment);
  bot.sendMessage(msg.chat.id, 'Payment data added successfully!');
  saveData(paymentData, 'paymentData.json'); // Save the payment data to a file
};

// Function to handle adding delivery data
const handleAddDelivery = (msg) => {
  const delivery = {
    id: msg.text.split(' ')[1],
    customerId: msg.text.split(' ')[2],
    equipmentId: msg.text.split(' ')[3],
    deliveryDate: msg.text.split(' ')[4],
    pickupDate: msg.text.split(' ')[5],
  };
  deliveryData.push(delivery);
  bot.sendMessage(msg.chat.id, 'Delivery data added successfully!');
  saveData(deliveryData, 'deliveryData.json'); // Save the delivery data to a file
};

// Function to handle retrieving equipment data
const handleRetrieveEquipment = (msg) => {
  const retrievedData = retrieveData('equipmentData.json');
  let response = 'Equipment Data:\n';
  retrievedData.forEach((data) => {
    response += `ID: ${data.id}\nName: ${data.name}\nAvailable: ${data.available}\nRented Out: ${data.rentedOut}\nLast Service Date: ${data.lastServiceDate}\nNext Service Date: ${data.nextServiceDate}\n\n`;
  });
  bot.sendMessage(msg.chat.id, response);
};

// Function to handle retrieving customer data
const handleRetrieveCustomer = (msg) => {
  const retrievedData = retrieveData('customerData.json');
  let response = 'Customer Data:\n';
  retrievedData.forEach((data) => {
    response += `ID: ${data.id}\nName: ${data.name}\nContact: ${data.contact}\nRental Dates: ${data.rentalDates}\nSpecial Requirements: ${data.specialRequirements}\n\n`;
  });
  bot.sendMessage(msg.chat.id, response);
};

// Function to handle retrieving payment data
const handleRetrievePayment = (msg) => {
  const retrievedData = retrieveData('paymentData.json');
  let response = 'Payment Data:\n';
  retrievedData.forEach((data) => {
    response += `ID: ${data.id}\nCustomer ID: ${data.customerId}\nEquipment ID: ${data.equipmentId}\nAmount: ${data.amount}\nPayment Date: ${data.paymentDate}\n\n`;
  });
  bot.sendMessage(msg.chat.id, response);
};

// Function to handle retrieving delivery data
// Function to handle retrieving delivery data
const handleRetrieveDelivery = (msg) => {
  const retrievedData = retrieveData('deliveryData.json');
  let response = 'Delivery Data:\n';
  retrievedData.forEach((data) => {
    response += `ID: ${data.id}\nCustomer ID: ${data.customerId}\nEquipment ID: ${data.equipmentId}\nDelivery Date: ${data.deliveryDate}\nPickup Date: ${data.pickupDate}\n\n`;
  });
  bot.sendMessage(msg.chat.id, response);
};

// Function to handle updating equipment data
const handleUpdateEquipment = (msg) => {
  const equipmentId = msg.text.split(' ')[1];
  const updatedData = {
    id: msg.text.split(' ')[2],
    name: msg.text.split(' ')[3],
    available: msg.text.split(' ')[4],
    rentedOut: msg.text.split(' ')[5],
    lastServiceDate: msg.text.split(' ')[6],
    nextServiceDate: msg.text.split(' ')[7],
  };

  equipmentData = equipmentData.map((data) => {
    if (data.id === equipmentId) {
      return updatedData;
    }
    return data;
  });
  bot.sendMessage(msg.chat.id, 'Equipment data updated successfully!');
  saveData(equipmentData, 'equipmentData.json'); // Save the updated equipment data to a file
};

// Function to handle updating customer data
const handleUpdateCustomer = (msg) => {
  const customerId = msg.text.split(' ')[1];
  const updatedData = {
    id: msg.text.split(' ')[2],
    name: msg.text.split(' ')[3],
    contact: msg.text.split(' ')[4],
    rentalDates: msg.text.split(' ')[5],
    specialRequirements: msg.text.split(' ')[6],
  };

  customerData = customerData.map((data) => {
    if (data.id === customerId) {
      return updatedData;
    }
    return data;
  });
  bot.sendMessage(msg.chat.id, 'Customer data updated successfully!');
  saveData(customerData, 'customerData.json'); // Save the updated customer data to a file
};

// Function to handle updating payment data
const handleUpdatePayment = (msg) => {
  const paymentId = msg.text.split(' ')[1];
  const updatedData = {
    id: msg.text.split(' ')[2],
    customerId: msg.text.split(' ')[3],
    equipmentId: msg.text.split(' ')[4],
    amount: msg.text.split(' ')[5],
    paymentDate: msg.text.split(' ')[6],
  };

  paymentData = paymentData.map((data) => {
    if (data.id === paymentId) {
      return updatedData;
    }
    return data;
  });
 bot.sendMessage(msg.chat.id, 'Payment data updated successfully!');
  saveData(paymentData, 'paymentData.json'); // Save the updated payment data to a file
};



