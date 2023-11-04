import { test, expect, type Page } from '@playwright/test';
import { apiSite } from '../../testData/apiData'

let objectID;

test.describe('restful-api-test', () => {
  test('should be able to hit api with playright', async ({ request }) => {

  const nameField = "Thing";
  const costField = 1849.99;
  const yearField = 2020;
  const cpuField = "Intel Core i9";
  const body = 
      {
      "name": nameField,
      "data": {
         "stuff": yearField,
         "OK": costField,
         "CPU model": cpuField,
         "Hard disk size": "1 TB"
      }
   }
   console.log(body)
  const response = await request.put(apiSite + '/objects', {
   data:{
      body
   }}
   );
   
  const status = await response.status();
  const jsonBody = await response.json();
 objectID = jsonBody.id;
  console.log(objectID);
  expect(status).toEqual(200);

}); 
}); 

test.describe('restful-api-delete', () => {
   test('should be able see if deleted object was deleted', async ({ request }) => {
 
     const response = await request.get(apiSite + '/objects/'+ objectID );
     const status = await response.status();
     const jsonBody = await response.json();
     
     expect(status).toEqual(404);
 
   });
 }); 

 

