const express = require('express');
const bodyParser = require('body-parser');

const loanRoutes = require('./routes/loans');
const customerRoutes = require('./routes/customers');

const app = express();
app.use(bodyParser.json());

app.use('/api/v1', loanRoutes);
app.use('/api/v1', customerRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/', (req, res) => {
  res.send('Bank Lending API is running');
});

const cors = require('cors');
app.use(cors());
