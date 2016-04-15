/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getKettleData(id) {
    var requestData = {"data":{ 
                "workboard-id":id,
                "params":{
                    
                }
                }}; 
$.ajax({
    url: 'http://10.90.21.43:8888/kettle-service/kettle',
    type: 'POST',
    beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem('accessToken'));},
    data: JSON.stringify(requestData),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    timeout:300000,
    async: true,
    success: function(object) 
    {
       kettleData=object;                       
    }
});
  return kettleData;
}