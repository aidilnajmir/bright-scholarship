import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import applicationRoutes from './routes/applicationRoutes';
import scholarshipProcessRoutes from './routes/scholarshipProcessRoutes';
import votingRoutes from './routes/votingRoutes';
import awardedRoutes from './routes/awardedRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', applicationRoutes);
app.use('/api', scholarshipProcessRoutes);
app.use('/api', votingRoutes);
app.use('/api', awardedRoutes);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
