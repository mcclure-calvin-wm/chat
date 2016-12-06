module.exports = {
  attributes: {
    messages : {
      type: 'array',
      required: true,
      default: 'Hello and welcome to the chat!'
    },
    roomNum: {
      type: 'integer',
      autoIncrement: true
    },
    RoomName: {
      type: 'string',
      required: false
    }
  }
};
