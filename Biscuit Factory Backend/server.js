const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const inventoryRoutes = require('./routes/inventory');
const employeeRouter = require('./routes/employees.js');
const postRouter = require('./routes/EmpLeaves.js');
const salesRouter = require('./routes/Sales');
const DItemRouter = require('./routes/Ditems');
const PayEmpRouter = require ("./routes/Payemployees.js");
const AgentsRouter = require ('./routes/Agents.js');
const onlinePaymentRouter = require ('./routes/onlinePay.js');

//app middleware
app.use(bodyParser.json());
app.use(cors());



//route middleware
app.use(inventoryRoutes);
app.use(employeeRouter);
app.use(postRouter);
app.use(salesRouter);
app.use('/items', DItemRouter);
app.use("/payment" , PayEmpRouter);
app.use(AgentsRouter);
app.use(onlinePaymentRouter);

const PORT = 8000;
const ATLAS_URL= 'mongodb+srv://gishan2000:itpmproject@itpm.5l6gw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(ATLAS_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() =>{
    console.log('MongoDB database connection established successfully.!');
})
.catch((err) => console.log('MongoDB database connection error',err));


app.listen(PORT, () => {
    console.log(`Server is up and running on port no: ${PORT}`);
});



