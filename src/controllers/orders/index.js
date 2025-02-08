const order = {"success":false,"message":"You should be authorised"}
const getOrder = (req, res) => {
    res.json(order); 
};

module.exports = getOrder;