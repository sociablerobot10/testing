import { test, expect, type Page } from '@playwright/test';
import { apiSite } from '../../testData/apiData'
import { configure, setObjectID, getObjectID } from  '../../testData/config';

test.describe('restful-api-testthree', () => {
  test('should be able to delete object', async ({ request }) => {
  //   {
  //     "name": "{{nameField}}",
  //     "data": {
  //        "stuff": {{yearField}},
  //        "OK": {{costField}},
  //        "CPU model": "{{cpuField}}",
  //        "Hard disk size": "1 TB"
  //     }
  //  }
 

  const response = await request.delete(apiSite + '/objects/' + getObjectID());
  const status = await response.status();
  const jsonBody = await response.json();
    
  expect(status).toEqual(200)

  // jsonBody.forEach(device => {
  //   expect(device.name).toBeTruthy();
  //   expect(device.id).toBeTruthy();
  
  //   try{
  //     expect(device.data).toBeTruthy();
  //   }
  //   catch {
  //     console.log(device.id)
  //   }
  // });
}); 
}); 


