import { test, expect, type Page } from '@playwright/test';
import { apiSite } from '../../testData/apiData'



test.describe('restful-api-testtwo', () => {
  test('should be able to update name', async ({ request }) => {
  //   {
  //     "name": "{{nameField}}",
  //     "data": {
  //        "stuff": {{yearField}},
  //        "OK": {{costField}},
  //        "CPU model": "{{cpuField}}",
  //        "Hard disk size": "1 TB"
  //     }
  //  }
  const device = "Apple MacBook Pro 999";
  const body = 
      {
      "name": device
     
   };
   console.log(body)
   const response = await request.patch(apiSite + '/objects/ff8081818ad150c5018b0b9715d43a10', {
    data:
       body
    }
    );
  const status = await response.status();
  const jsonBody = await response.json();
    
  expect(status).toEqual(200);

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


