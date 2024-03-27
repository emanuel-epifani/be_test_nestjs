const { parentPort } = require('worker_threads');
const Jimp = require('jimp');

parentPort.on('message', async ({ filePath, outputPath }) => {
  try {
    const image = await Jimp.read(filePath);
    await image.flip(false, true).rotate(90).writeAsync(outputPath);
    parentPort.postMessage({ success: true, filePath, outputPath });
  } catch (error) {
    parentPort.postMessage({ success: false, error: error.message, filePath });
  }
});
