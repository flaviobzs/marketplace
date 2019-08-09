import kue from 'kue';
import redisConfig from '../../config/redis';
import jobs from '../jobs';

const Queue = kue.createQueue({ redis: redisConfig });

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle);

export default Queue;
