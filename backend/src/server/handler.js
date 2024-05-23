const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');
const getData = require('../services/getData');

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { label, suggestion } = await predictClassification(model, image);
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const data = {
    id: id,
    result: label,
    suggestion: suggestion,
    createdAt: createdAt
  };

  await storeData(id, data);

  const response = h.response({
    status: 'success',
    message: 'Model is predicted successfully',
    data
  });
  response.code(201);
  return response;
}

async function getPredictHistoriesHandler(request, h) {
  const histories = await getData();

  const formattedHistories = histories.map(history => ({
    id: history.id,
    history: {
      result: history.result,
      createdAt: history.createdAt,
      suggestion: history.suggestion,
      id: history.id
    }
  }));

  return h.response({
    status: 'success',
    data: formattedHistories
  }).code(200);
};

module.exports = {
  postPredictHandler,
  getPredictHistoriesHandler
};
