import * as dotenv from 'dotenv';

dotenv.config();
import * as fastcsv from 'fast-csv';
import server from '../App/Infrastructure/Config/server';
import * as fs from 'fs';
import ClientRepository from '../App/Infrastructure/MySQLRepository/ClientRepository';



(async () => {
  try {
    const clientCsvData: any = await readClientDataFromCsv();
    for (let clientRow of clientCsvData.dataRows) {
      console.log("**********",clientRow);
      // const client = await ClientRepository.fetchById(clientRow.clientId)
      // client.clientType = clientRow.clientType;
      // client.creditorClass = clientRow.creditorClass;
      // console.log("****************", client);
      // await ClientRepository.update(client);
    }

    process.exit(0);
  } catch (e) {
    console.log(`Error in ImportDebtorFromCsvSnap job ${e.message}.`);
    process.exit(0);
  }
})();

async function readClientDataFromCsv() {
  return new Promise((resolve, reject) => {
    const dataRows = [];
    const file = `${server.WORK_DIRECTORY}/static/ClientsWithOriginalClientType.csv`;
    const csvStream = fs.createReadStream(file);
    fastcsv
      .parseStream(csvStream, { headers: true })
      .on('data', async (data) => {
        dataRows.push(data);
      })
      .on('error', function (e) {
        resolve({ status: 'error', message: e });
      })
      .on('end', function () {
        resolve({ status: 'success', dataRows: dataRows });
      });
  });
}