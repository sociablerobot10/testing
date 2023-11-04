import { test, expect, type Page } from '@playwright/test';
import { apiSite } from '../../testData/apiData'


test.describe('restful-api-test', () => {
  test('should be able to hit api with playright', async ({ request }) => {

    const response = await request.get(apiSite + '/objects');
    const status = await response.status();
    const jsonBody = await response.json();
    
    expect(status).toEqual(200);

  jsonBody.forEach(device => {
    expect(device.name).toBeTruthy();
    expect(device.id).toBeTruthy();
  
    try{
      expect(device.data).toBeTruthy();
    }
    catch {
      console.log(device.id)
    }
  });
}); 
}); 

