const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  // mongoURL: process.env.MONGO_URL || 'mongodb://andrzej:admin1234@ds145194.mlab.com:45194/kanban',
  port: process.env.PORT || 8000,
};

export default config;
